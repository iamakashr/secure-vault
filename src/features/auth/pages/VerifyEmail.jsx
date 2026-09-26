import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Imported useNavigate for the mock flow
import { Mail } from "lucide-react";

import CenteredAuthLayout from "../components/CenteredAuthLayout";
import AuthIcon from "../components/AuthIcon";
import Toast from "../../../components/ui/Toast";

const VerifyEmail = () => {
  const navigate = useNavigate(); // Added for handling mock redirection
  const [timeLeft, setTimeLeft] = useState(30);
  const [showToast, setShowToast] = useState(false);

  // Countdown timer logic
  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  /* START: FRONTEND MOCK SIMULATION  */
  useEffect(() => {
    const handleMockVerification = (event) => {
      // Pressing 'v' or 'V' on your keyboard simulates clicking the email link
      if (event.key === "v" || event.key === "V") {
        // setShowToast(true); // Trigger your notification toast immediately

        // Simulate a slight delay to let the user see the success toast before navigating
        setTimeout(() => {
          setShowToast(false);
          navigate("/verification-success"); // Change this to your target onboarding or dashboard route
        }, 1500);
      }
    };

    window.addEventListener("keydown", handleMockVerification);
    return () => window.removeEventListener("keydown", handleMockVerification);
  }, [navigate]);
  /* END: FRONTEND MOCK SIMULATION */

  const handleResend = () => {
    setTimeLeft(30);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
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
      <div className="w-full max-w-116 text-center">
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

        <p className="mx-auto mt-5 max-w-105 text-base leading-7 text-text-dim">
          We've sent a verification link to this address. <br />
          Open it to activate your vault and finish setting up your account.
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

      {showToast && <Toast message="New verification link sent successfully" />}
    </CenteredAuthLayout>
  );
};

export default VerifyEmail;
