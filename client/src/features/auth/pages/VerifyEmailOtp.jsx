import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { PATHS } from "../../../config/paths.js";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import AuthButton from "../components/AuthButton";
import Toast from "../../../components/ui/Toast";

import { verifyEmail, resendEmailOtp } from "../../../services/authService.js";

const VerifyEmailOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [timeLeft, setTimeLeft] = useState(30);
  const [showToast, setShowToast] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isResending, setIsResending] = useState(false);
  const [resendError, setResendError] = useState("");
  const [verifyError, setVerifyError] = useState("");

  const inputRefs = useRef([]);

  // Resend cooldown timer
  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Handle OTP typing
  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Clear the old verification error when the user edits the code
    setVerifyError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle OTP paste
  const handleOtpPaste = (e, index) => {
    e.preventDefault();

    const pastedValue = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pastedValue) return;

    const newOtp = [...otp];

    pastedValue.split("").forEach((digit, offset) => {
      const targetIndex = index + offset;

      if (targetIndex < 6) {
        newOtp[targetIndex] = digit;
      }
    });

    setOtp(newOtp);

    // Clear the old verification error when a new code is pasted
    setVerifyError("");

    const lastIndex = Math.min(index + pastedValue.length - 1, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Verify OTP
  const handleVerify = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    if (!email) {
      setVerifyError(
        "We couldn't find your email address. Please register again.",
      );
      return;
    }

    if (enteredOtp.length !== 6) {
      setVerifyError("Please enter the complete 6-digit verification code.");
      return;
    }

    // Clear any previous verification error before retrying
    setVerifyError("");

    try {
      await verifyEmail({
        email,
        otp: enteredOtp,
      });

      navigate(PATHS.AUTH.VERIFICATION_SUCCESS);
    } catch (error) {
      console.error("Email verification failed:", error);

      const message =
        error.response?.data?.message ||
        "Unable to verify the code. Please try again.";

      setVerifyError(message);
    }
  };

  // Resend OTP
  const handleResend = async () => {
    if (timeLeft > 0 || isResending) return;

    if (!email) {
      setResendError(
        "We couldn't find your email address. Please register again.",
      );
      return;
    }

    setIsResending(true);
    setResendError("");
    setShowToast(false);

    try {
      await resendEmailOtp(email);

      // Restart cooldown after a successful response
      setTimeLeft(30);

      // Clear the previous OTP and verification error
      setOtp(["", "", "", "", "", ""]);
      setVerifyError("");

      // Focus the first OTP input
      inputRefs.current[0]?.focus();

      // Show success feedback
      setShowToast(true);
    } catch (error) {
      console.error("Failed to resend OTP:", error);

      const message =
        error.response?.data?.message ||
        "Couldn't resend the verification code. Please try again.";

      setResendError(message);
    } finally {
      setIsResending(false);
    }
  };

  // Automatically hide the success toast
  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [showToast]);

  // Disable resend during cooldown or while sending
  const isResendDisabled = timeLeft > 0 || isResending;

  return (
    <div className="flex min-h-screen flex-col bg-bg text-text">
      <AuthHeader
        rightContent={
          <p className="text-sm text-text-dim">
            Already verified?{" "}
            <Link
              to={PATHS.AUTH.LOGIN}
              className="font-medium text-accent hover:underline">
              Sign in
            </Link>
          </p>
        }
      />

      <main className="flex min-h-0 flex-1 items-center justify-center px-6 py-4">
        <div className="-translate-y-4 w-full max-w-sm text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface">
            <Mail className="h-8 w-8 text-accent" strokeWidth={1.8} />
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-text">
            Check your email
          </h1>

          <div className="mx-auto mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
            <Mail className="h-3.5 w-3.5 shrink-0 text-text-dim" />
            <span className="max-w-65 truncate font-mono text-sm text-text">
              {email}
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-sm text-base leading-6 text-text-dim">
            We've sent a 6-digit verification code to this address. Enter it
            below to activate your vault and finish setting up your account.
          </p>

          <form onSubmit={handleVerify}>
            <div className="mt-7 flex justify-center gap-2.5">
              {otp.map((value, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  maxLength={1}
                  inputMode="numeric"
                  pattern="[0-9]"
                  aria-label={`Verification digit ${index + 1}`}
                  value={value}
                  onChange={(e) => handleOtpChange(e, index)}
                  onPaste={(e) => handleOtpPaste(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`h-14 w-12 rounded-lg border bg-surface text-center font-mono text-xl text-text outline-none transition focus:ring-3 ${
                    verifyError
                      ? "border-danger focus:border-danger focus:ring-danger/20"
                      : "border-border focus:border-accent focus:ring-accent/20"
                  }`}
                />
              ))}
            </div>

            {verifyError && (
              <p role="alert" className="mt-3 text-sm text-danger">
                {verifyError}
              </p>
            )}

            <div className="mt-3">
              <AuthButton type="submit">Verify code</AuthButton>
            </div>
          </form>

          <p className="mt-5 text-sm text-text-dim">
            Didn't get a code?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={isResendDisabled}
              className={`font-medium ${
                isResendDisabled
                  ? "cursor-not-allowed text-text-dim"
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

          {resendError && (
            <p role="alert" className="mt-2 text-sm text-danger">
              {resendError}
            </p>
          )}

          <div className="mt-6 border-t border-border pt-5">
            <Link
              to={PATHS.AUTH.REGISTER}
              className="text-sm text-text-dim transition hover:text-text">
              ← Back to registration
            </Link>
          </div>
        </div>
      </main>

      <AuthFooter />

      {showToast && <Toast message="New verification code sent successfully" />}
    </div>
  );
};

export default VerifyEmailOtp;
