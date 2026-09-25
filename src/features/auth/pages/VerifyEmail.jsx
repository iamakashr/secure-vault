import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import CenteredAuthLayout from "../components/CenteredAuthLayout";
import AuthIcon from "../components/AuthIcon";

const VerifyEmail = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);
  const handleResend = () => {
    setTimeLeft(30);
  };
  return (
    <CenteredAuthLayout
      topRight={
        <p className="text-sm text-text-dim">
          Already verified?{" "}
          <Link to="/login" className="font-medium text-accent hover:underline">
            Login
          </Link>
        </p>
      }>
      <div className="w-full max-w-[465px] text-center">
        {/* Icon */}
        <div className="mb-7 flex justify-center">
          <AuthIcon icon={Mail} />
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-text">
          Check your email
        </h1>

        <div className="mt-5 inline-flex items-center rounded-full border border-border bg-surface px-7 py-2">
          <Mail className="mr-2 h-4 w-4 text-text-dim" />

          <span className="font-mono text-sm text-text">you@company.com</span>
        </div>

        <p className="mx-auto mt-5 max-w-[420px] text-base leading-7 text-text-dim">
          We've sent a verification link to this address. <br /> Open it to
          activate your vault and finish setting up your account.
        </p>

        <p className="mt-3 text-sm text-text-dim">
          Didn't get the email?{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={timeLeft > 0}
            className={`font-medium ${
              timeLeft > 0 ? "text-text-dim" : "text-accent hover:underline"
            }`}>
            Resend verification email
          </button>
        </p>

        {timeLeft > 0 && (
          <p className="mt-2 text-sm text-text-faint">
            You can request a new link in {timeLeft}s
          </p>
        )}

        {/* Divider */}
        <div className="my-7 h-px bg-border" />

        <Link
          to="/register"
          className="text-sm text-text-dim transition hover:text-text">
          ← Back to registration
        </Link>
      </div>
    </CenteredAuthLayout>
  );
};

export default VerifyEmail;
