import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import AuthButton from "../components/AuthButton";
import Toast from "../../../components/ui/Toast";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(30);
  const [showToast, setShowToast] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    // Allow only numbers
    if (!/^\d*$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input after entering a number
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous input when backspacing an empty input
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    // For frontend development:
    // accept ANY 6-digit OTP
    if (enteredOtp.length === 6) {
      navigate("/reset-password");
    }
  };

  const handleResend = () => {
    setTimeLeft(30);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg text-text">
      <AuthHeader
        rightContent={
          <p className="text-sm text-text-dim">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-accent hover:underline">
              Sign in
            </Link>
          </p>
        }
      />

      <main className="flex flex-1 items-center justify-center px-10 py-12">
        <div className="w-full max-w-md text-center">
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
            <span className="font-medium text-text">jo****@company.com</span>.
            Enter it below to continue.
          </p>

          {/* OTP inputs */}
          <form onSubmit={handleVerify}>
            <div className="mt-9 flex justify-center gap-2.5">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  pattern="[0-9]"
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="h-15 w-13 rounded-lg border border-border bg-surface text-center font-mono text-xl text-text outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/30"
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

          {/* Back to login */}
          <div className="mt-7">
            <Link
              to="/forgot-password"
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
