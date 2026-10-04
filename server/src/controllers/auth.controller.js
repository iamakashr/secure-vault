import { User } from "../models/user.model.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { generateVerificationEmail, sendEmail } from "../utils/send-email.js";
import { registerSchema } from "../validators/auth.validator.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh token",
    );
  }
};

const register = asyncHandler(async (req, res) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    const zodError = result.error;

    const allErrors = zodError.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
      code: issue.code,
    }));

    const firstErrorMessage = allErrors[0]?.message || "Validation failed";

    throw new ApiError(400, firstErrorMessage, allErrors);
  }

  const { name, email, password } = result.data;

  const emailExists = await User.findOne({ email });

  if (emailExists) {
    throw new ApiError(409, "Email already exists", []);
  }

  const user = await User.create({
    name,
    email,
    password,
    isEmailVerified: false,
  });

  const { unHashedToken, hashedToken, tokenExpiry } =
    user.generateTemporaryToken();

  user.emailVerificationToken = hashedToken;
  user.emailVerificationExpiry = tokenExpiry;

  await user.save({ validateBeforeSave: false });

  await sendEmail({
    email: user?.email,
    subject: "Please verify your email",
    mailgenContent: generateVerificationEmail(
      user.name,
      `${req.protocol}://${req.get("host")}/api/auth/verify-email/${unHashedToken}`,
    ),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        { user: createdUser },
        "User registered successfully and verification link as been sent on your email",
      ),
    );
});

export { register };
