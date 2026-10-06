import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import AuthButton from "../components/AuthButton";
import Toast from "../../../components/ui/Toast";

import { verifyEmail } from "../../../services/authService.js";

const VerifyEmailOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get email passed from registration page
  const email = location.state?.email;

  const [timeLeft, setTimeLeft] = useState(30);
  const [showToast, setShowToast] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const inputRefs = useRef([]);

  // Resend cooldown timer
  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Handle OTP typing
  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
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

    if (!pastedValue) {
      return;
    }

    const newOtp = [...otp];

    pastedValue.split("").forEach((digit, offset) => {
      const targetIndex = index + offset;

      if (targetIndex < 6) {
        newOtp[targetIndex] = digit;
      }
    });

    setOtp(newOtp);

    // Focus the last filled input
    const lastIndex = Math.min(index + pastedValue.length - 1, 5);

    inputRefs.current[lastIndex]?.focus();
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    // Move back when pressing backspace on an empty input
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Verify OTP
  const handleVerify = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    // Don't send incomplete OTP
    if (enteredOtp.length !== 6) {
      return;
    }

    // Email is required for verification
    if (!email) {
      return;
    }

    try {
      await verifyEmail({
        email,
        otp: enteredOtp,
      });

      navigate("/verification-success");
    } catch (error) {
      console.error("Email verification failed:", error);
    }
  };

  // Resend OTP
  const handleResend = () => {
    // Prevent resend while cooldown is active
    if (timeLeft > 0) {
      return;
    }

    // Restart cooldown
    setTimeLeft(30);

    // Clear existing OTP
    setOtp(["", "", "", "", "", ""]);

    // Focus first OTP input
    inputRefs.current[0]?.focus();

    // Show success toast
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg text-text">
      {/* Header */}
      <AuthHeader
        rightContent={
          <p className="text-sm text-text-dim">
            Already verified?{" "}
            <Link
              to="/login"
              className="font-medium text-accent hover:underline">
              Sign in
            </Link>
          </p>
        }
      />

      {/* Main */}
      <main className="flex min-h-0 flex-1 items-center justify-center px-6 py-4">
        <div className="-translate-y-4 w-full max-w-sm text-center">
          {/* Email icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface">
            <Mail className="h-8 w-8 text-accent" strokeWidth={1.8} />
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-text">
            Check your email
          </h1>

          {/* Email */}
          <div className="mx-auto mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
            <Mail className="h-3.5 w-3.5 shrink-0 text-text-dim" />

            <span className="max-w-65 truncate font-mono text-sm text-text">
              {email}
            </span>
          </div>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-sm text-base leading-6 text-text-dim">
            We've sent a 6-digit verification code to this address. Enter it
            below to activate your vault and finish setting up your account.
          </p>

          <form onSubmit={handleVerify}>
            {/* OTP inputs */}
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
                  value={value}
                  onChange={(e) => handleOtpChange(e, index)}
                  onPaste={(e) => handleOtpPaste(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="h-14 w-12 rounded-lg border border-border bg-surface text-center font-mono text-xl text-text outline-none transition focus:border-accent focus:ring-3 focus:ring-accent/20"
                />
              ))}
            </div>

            {/* Verify button */}
            <div className="mt-7">
              <AuthButton type="submit">Verify code</AuthButton>
            </div>
          </form>

          {/* Resend */}
          <p className="mt-5 text-sm text-text-dim">
            Didn't get a code?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={timeLeft > 0}
              className={`font-medium ${
                timeLeft > 0 ? "text-text-dim" : "text-accent hover:underline"
              }`}>
              Resend code
            </button>
          </p>

          {timeLeft > 0 && (
            <p className="mt-2 text-sm text-text-faint">
              You can request a new code in {timeLeft}s
            </p>
          )}

          {/* Back to registration */}
          <div className="mt-6 border-t border-border pt-5">
            <Link
              to="/register"
              className="text-sm text-text-dim transition hover:text-text">
              ← Back to registration
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <AuthFooter />

      {showToast && <Toast message="New verification code sent successfully" />}
    </div>
  );
};

export default VerifyEmailOtp;
