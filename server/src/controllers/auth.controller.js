import { User } from "../models/user.model.js";
import { Otp } from "../models/otp.model.js";

import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { sendEmail } from "../utils/send-email.js";
import { generateOtp, hashOtp } from "../utils/otp.js";

import {
  registerSchema,
  resendEmailOtpSchema,
  loginSchema,
} from "../validators/auth.validator.js";
import { getVerificationOtpEmail } from "../templates/verificationOtp.template.js";
import { OTP_CONFIG } from "../constants/auth.constants.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({
      validateBeforeSave: false,
    });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh token",
    );
  }
};

const register = asyncHandler(async (req, res) => {
  // 1. Validate request body
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    const allErrors = result.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
      code: issue.code,
    }));

    const firstErrorMessage = allErrors[0]?.message || "Validation failed";

    throw new ApiError(400, firstErrorMessage, allErrors);
  }

  const { name, email, password } = result.data;

  // 2. Check whether email already exists
  const emailExists = await User.findOne({ email });

  if (emailExists) {
    throw new ApiError(409, "Email already exists", []);
  }

  // 3. Create user
  const user = await User.create({
    name,
    email,
    password,
    isEmailVerified: false,
  });

  // 4. Generate 6-digit OTP
  const otp = generateOtp();

  // 5. Hash OTP before storing it
  const otpHash = hashOtp(otp);

  // 6. Store hashed OTP with 10-minute expiry
  await Otp.create({
    email: user.email,
    user: user._id,
    otpHash,
    expiresAt: new Date(Date.now() + OTP_CONFIG.EXPIRY_MINUTES * 60 * 1000),
  });

  // 7. Send OTP to user's email
  await sendEmail({
    to: user.email,
    subject: "Verify your SecureVault account",
    text: `Your SecureVault verification code is ${otp}. It expires in ${OTP_CONFIG.EXPIRY_MINUTES} minutes.`,
    html: getVerificationOtpEmail(otp, OTP_CONFIG.EXPIRY_MINUTES),
  });

  // 8. Return safe user data
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  // 9. Send response
  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { user: createdUser },
        "User registered successfully. A verification code has been sent to your email.",
      ),
    );
});

const verifyEmail = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    throw new ApiError(400, "Email and OTP are required");
  }

  const otpRecord = await Otp.findOne({
    email,
  });

  if (!otpRecord) {
    throw new ApiError(400, "OTP is invalid or has expired");
  }

  if (otpRecord.expiresAt < new Date()) {
    await Otp.deleteOne({ _id: otpRecord._id });

    throw new ApiError(400, "OTP has expired");
  }

  const hashedOtp = hashOtp(otp);

  if (hashedOtp !== otpRecord.otpHash) {
    throw new ApiError(400, "Invalid verification code");
  }

  const user = await User.findById(otpRecord.user);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  user.isEmailVerified = true;

  await user.save({
    validateBeforeSave: false,
  });

  await Otp.deleteOne({
    _id: otpRecord._id,
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        isEmailVerified: true,
      },
      "Email verified successfully",
    ),
  );
});

const resendEmailOtp = asyncHandler(async (req, res) => {
  const result = resendEmailOtpSchema.safeParse(req.body);

  if (!result.success) {
    throw new ApiError(400, "Please enter a valid email address");
  }

  const { email } = result.data;

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (user.isEmailVerified) {
    throw new ApiError(400, "Email is already verified");
  }

  const existingOtp = await Otp.findOne({ email });

  if (existingOtp) {
    const elapsedTime = Date.now() - existingOtp.updatedAt.getTime();

    if (elapsedTime < OTP_CONFIG.RESEND_COOLDOWN_SECONDS * 1000) {
      throw new ApiError(429, "Please wait before requesting another OTP");
    }
  }

  const otp = generateOtp();
  const otpHash = hashOtp(otp);

  const expiresAt = new Date(
    Date.now() + OTP_CONFIG.EXPIRY_MINUTES * 60 * 1000,
  );

  if (existingOtp) {
    existingOtp.otpHash = otpHash;
    existingOtp.expiresAt = expiresAt;

    await existingOtp.save();
  } else {
    await Otp.create({
      email,
      user: user._id,
      otpHash,
      expiresAt,
    });
  }

  await sendEmail({
    to: email,
    subject: "Verify your email",
    html: getVerificationOtpEmail(otp, OTP_CONFIG.EXPIRY_MINUTES),
    text: `Your verification code is ${otp}. It expires in ${OTP_CONFIG.EXPIRY_MINUTES} minutes.`,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "A new verification OTP has been sent"));
});

const login = asyncHandler(async (req, res) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    throw new ApiError(400, "Validation failed");
  }

  const { email, password } = result.data;

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(401, "Invalid email Id");
  }
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid password");
  }

  if (!user.isEmailVerified) {
    throw new ApiError(403, "Please verify your email before logging in");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id,
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
        },
        "User logged in Successfully",
      ),
    );
});

export { register, verifyEmail, resendEmailOtp, login };
