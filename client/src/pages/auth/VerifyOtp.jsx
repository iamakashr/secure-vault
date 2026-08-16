import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ShieldCheck, Mail, LockKeyhole, RefreshCw } from "lucide-react";

import SecureVaultlogoHorizontalDark from "../../assets/logos/securevault-logo-horizontal-dark.png";

import AuthCard from "../../components/auth/AuthCard";
import AuthFeature from "../../components/auth/AuthFeature";
import DarkModeBtn from "../../components/ui/DarkModeBtn";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [countdown, setCountdown] = useState(60);

  const inputRefs = useRef([]);

  /*  COUNTDOWN  */

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  /*  OTP CHANGE  */

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];

    // Put the digit in the current box
    newOtp[index] = value.slice(-1);

    setOtp(newOtp);
    setError("");

    // Move to next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  /*  BACKSPACE  */

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  /*  PASTE  */

  const handlePaste = (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pastedData) return;

    const newOtp = [...otp];

    pastedData.split("").forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);
    setError("");

    const nextIndex = Math.min(pastedData.length, 5);

    inputRefs.current[nextIndex]?.focus();
  };

  /*  VERIFY OTP  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter the complete 6-digit verification code.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      /*
        Backend OTP verification will go here.

        Example:

        const response = await verifyOtp({
          email,
          otp: enteredOtp,
        });

        if (!response.success) {
          throw new Error(response.message);
        }
      */

      // Temporary simulation
      await new Promise((resolve) => setTimeout(resolve, 500));

      navigate("/reset-password");
    } catch (error) {
      setError(
        error.message ||
          "Invalid or expired verification code. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  /*  RESEND OTP  */

  const handleResend = async () => {
    if (countdown > 0 || resending) return;

    setError("");
    setResending(true);

    try {
      /*
        Backend resend OTP request will go here.

        Example:

        await resendOtp(email);
      */

      // Temporary simulation
      await new Promise((resolve) => setTimeout(resolve, 500));

      setOtp(["", "", "", "", "", ""]);
      setCountdown(60);

      inputRefs.current[0]?.focus();
    } catch (error) {
      setError(error.message || "Unable to resend the verification code.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-background font-sans text-text-primary antialiased">
      {/*  HEADER  */}
      <header className="relative z-10 flex items-center justify-between px-8 py-7 lg:px-16">
        {/* LOGO */}
        <img
          src={SecureVaultlogoHorizontalDark}
          alt="SecureVault"
          className="w-48 object-contain"
        />

        {/* THEME */}
        <DarkModeBtn />
      </header>

      {/*  MAIN  */}
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-112px)] max-w-7xl items-center justify-between gap-20 overflow-hidden px-8 pb-10 lg:px-16">
        {/*  LEFT SECTION  */}
        <section className="w-125 shrink-0">
          <div>
            {/* HEADING */}
            <h1 className="text-[52px] font-extrabold leading-[1.06] tracking-[-0.045em] text-text-primary">
              Verify your
              <br />
              <span className="text-primary">identity.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-125 text-[17px] leading-7 text-text-secondary">
              We've sent a verification code to your email. Enter the code below
              to continue recovering your SecureVault account.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-6">
              <AuthFeature
                icon={<Mail size={24} strokeWidth={1.8} />}
                title="Check your email"
                description="Your verification code has been sent securely"
              />

              <AuthFeature
                icon={<ShieldCheck size={24} strokeWidth={1.8} />}
                title="Secure verification"
                description="Your code can only be used once"
              />

              <AuthFeature
                icon={<LockKeyhole size={24} strokeWidth={1.8} />}
                title="Protected recovery"
                description="Verify your identity before resetting your password"
              />
            </div>
          </div>
        </section>

        {/*  OTP CARD  */}
        <section className="w-125 shrink-0">
          <AuthCard>
            {/* AUTH ICON */}
            <div className="flex justify-center">
              <div className="flex h-17 w-17 items-center justify-center rounded-2xl border border-primary/50 bg-primary/10 text-primary">
                <Mail size={32} strokeWidth={1.8} />
              </div>
            </div>

            {/* HEADING */}
            <div className="mt-4 text-center">
              <h2 className="text-[28px] font-bold tracking-tight text-text-primary">
                Verify your email
              </h2>

              <p className="mt-1.5 text-[14px] leading-6 text-text-secondary">
                Enter the 6-digit code sent to{" "}
                {email && (
                  <span className="font-medium text-text-primary">{email}</span>
                )}
              </p>
            </div>

            {/*  FORM  */}
            <form onSubmit={handleSubmit} className="mt-7">
              {/* OTP INPUTS */}
              <div className="flex justify-center gap-3" onPaste={handlePaste}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(element) => {
                      inputRefs.current[index] = element;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`h-13 w-13 rounded-lg border ${
                      error ? "border-danger/70" : "border-border-subtle"
                    } bg-background/60 text-center text-xl font-semibold text-text-primary outline-none transition-colors duration-200 focus:border-primary/70`}
                    aria-label={`Verification code digit ${index + 1}`}
                  />
                ))}
              </div>

              {/* ERROR */}
              {error && (
                <p className="mt-3 text-center text-sm text-danger">{error}</p>
              )}

              {/* VERIFY BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="mt-6 h-12 w-full rounded-lg bg-primary text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]">
                {loading ? "Verifying..." : "Verify code"}
              </button>
            </form>

            {/*  RESEND  */}
            <div className="mt-6 flex flex-col items-center gap-2 text-sm">
              <span className="text-text-secondary">
                Didn't receive the code?
              </span>

              <button
                type="button"
                onClick={handleResend}
                disabled={countdown > 0 || resending}
                className="flex items-center gap-2 font-medium text-primary transition-colors duration-200 hover:text-primary-hover disabled:cursor-not-allowed disabled:text-text-muted">
                <RefreshCw size={15} strokeWidth={1.8} />

                {resending
                  ? "Sending..."
                  : countdown > 0
                    ? `Resend code in ${countdown}s`
                    : "Resend code"}
              </button>
            </div>

            {/*  CANCEL  */}
            <div className="mt-3 flex justify-center">
              <Link
                to="/forgot-password"
                className="text-lg font-semibold text-text-secondary transition-colors duration-200 hover:text-primary">
                Cancel
              </Link>
            </div>
          </AuthCard>
        </section>
      </main>

      {/*  FOOTER  */}
      <footer className="absolute bottom-6 left-8 text-sm text-text-muted lg:left-16">
        © 2026 SecureVault. All rights reserved.
      </footer>
    </div>
  );
};

export default VerifyOtp;
