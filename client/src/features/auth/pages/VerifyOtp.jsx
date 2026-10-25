import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";

import { PATHS } from "../../../config/paths.js";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import AuthButton from "../components/AuthButton";
import Toast from "../../../components/ui/Toast";

import {
  verifyResetOtp,
  resendResetOtp,
} from "../../../services/authService.js";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [timeLeft, setTimeLeft] = useState(30);
  const [showToast, setShowToast] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [verifyError, setVerifyError] = useState("");
  const [resendError, setResendError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const inputRefs = useRef([]);

  // Redirect if the email is missing.
  useEffect(() => {
    if (!email) {
      navigate(PATHS.AUTH.FORGOT_PASSWORD, {
        replace: true,
        state: {
          message:
            "Please enter your email and request a new verification code.",
        },
      });
    }
  }, [email, navigate]);

  // Countdown timer.
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((previous) => Math.max(previous - 1, 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Handle typing into an OTP input.
  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    setVerifyError("");
    setResendError("");

    if (value.length > 1) {
      handleOtpPaste({ clipboardData: { getData: () => value } }, index);
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle pasting an OTP across the input boxes.
  const handleOtpPaste = (e, startIndex = 0) => {
    e.preventDefault();

    const pastedValue = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6 - startIndex);

    if (!pastedValue) return;

    const newOtp = [...otp];

    pastedValue.split("").forEach((digit, offset) => {
      newOtp[startIndex + offset] = digit;
    });

    setOtp(newOtp);
    setVerifyError("");
    setResendError("");

    const nextIndex = Math.min(startIndex + pastedValue.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  // Handle keyboard navigation.
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Verify the password-reset OTP.
  const handleVerify = async (e) => {
    e.preventDefault();

    setVerifyError("");
    setResendError("");

    const enteredOtp = otp.join("");

    if (!email) {
      setVerifyError(
        "Your email is missing. Please restart the password reset process.",
      );
      return;
    }

    if (enteredOtp.length !== 6) {
      setVerifyError("Please enter all 6 digits of the verification code.");
      inputRefs.current[otp.findIndex((digit) => !digit)]?.focus();
      return;
    }

    try {
      setIsVerifying(true);

      const response = await verifyResetOtp({
        email,
        otp: enteredOtp,
      });

      const resetToken = response.data?.resetToken;

      if (!resetToken) {
        setVerifyError(
          "Verification succeeded, but the reset token was not returned. Please request a new code.",
        );
        return;
      }

      navigate(PATHS.AUTH.RESET_PASSWORD, {
        state: { email, resetToken },
      });
    } catch (error) {
      setVerifyError(
        error.response?.data?.message ||
          "OTP verification failed. Please check the code and try again.",
      );
    } finally {
      setIsVerifying(false);
    }
  };

  // Request another OTP.
  const handleResend = async () => {
    if (!email || timeLeft > 0 || isResending) return;

    setResendError("");
    setVerifyError("");

    try {
      setIsResending(true);

      await resendResetOtp(email);

      setOtp(["", "", "", "", "", ""]);
      setTimeLeft(30);
      setShowToast(true);
      inputRefs.current[0]?.focus();
    } catch (error) {
      setResendError(
        error.response?.data?.message ||
          "Failed to resend the verification code. Please try again.",
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg text-text">
      <AuthHeader
        rightContent={
          <p className="text-sm text-text-dim">
            Already have an account?{" "}
            <Link
              to={PATHS.AUTH.LOGIN}
              className="font-medium text-accent hover:underline">
              Sign in
            </Link>
          </p>
        }
      />

      <main className="flex flex-1 items-center justify-center px-10 py-12">
        <div className="w-full max-w-sm text-center">
          {/* Icon */}
          <div className="mx-auto flex h-17 w-17 items-center justify-center rounded-2xl border border-accent/20 bg-surface">
            <Mail className="h-8 w-8 text-accent" strokeWidth={1.8} />
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-3xl font-semibold tracking-tight text-text">
            Enter verification code
          </h1>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-sm text-base leading-6 text-text-dim">
            We sent a 6-digit code to{" "}
            <span className="font-medium text-text">
              {email || "your email address"}
            </span>
            . Enter it below to continue.
          </p>

          {/* OTP form */}
          <form onSubmit={handleVerify} noValidate>
            <div className="mt-9 flex justify-center gap-2.5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                  maxLength={1}
                  pattern="[0-9]"
                  aria-label={`Verification code digit ${index + 1}`}
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onPaste={(e) => handleOtpPaste(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="h-14 w-12 rounded-lg border border-border bg-surface text-center font-mono text-xl text-text outline-none transition focus:border-accent focus:ring-3 focus:ring-accent/20"
                />
              ))}
            </div>

            {/* Verification error */}
            {verifyError && (
              <p className="mt-3 text-sm text-weak" role="alert">
                {verifyError}
              </p>
            )}

            {/* Verify button */}
            <div className="mt-7">
              <AuthButton type="submit" disabled={isVerifying || isResending}>
                {isVerifying ? "Verifying..." : "Verify code"}
              </AuthButton>
            </div>
          </form>

          {/* Resend */}
          <p className="mt-5 text-sm text-text-dim">
            Didn't get a code?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={timeLeft > 0 || isResending || isVerifying}
              className={`font-medium ${
                timeLeft > 0 || isResending || isVerifying
                  ? "text-text-dim"
                  : "text-accent hover:underline"
              }`}>
              {isResending ? "Sending..." : "Resend code"}
            </button>
          </p>

          {timeLeft > 0 && (
            <p className="mt-2 text-sm text-text-faint">
              You can request a new code in {timeLeft}s
            </p>
          )}

          {/* Resend error */}
          {resendError && (
            <p className="mt-2 text-sm text-weak" role="alert">
              {resendError}
            </p>
          )}

          {/* Back to forgot password */}
          <div className="mt-7">
            <Link
              to={PATHS.AUTH.FORGOT_PASSWORD}
              className="text-sm text-text-dim transition hover:text-text">
              ← Change email address
            </Link>
          </div>
        </div>
      </main>

      <AuthFooter />

      {showToast && <Toast message="New verification code sent successfully" />}
    </div>
  );
};

export default VerifyOtp;
