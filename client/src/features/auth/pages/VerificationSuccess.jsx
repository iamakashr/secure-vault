import { Link } from "react-router-dom";
import { Check, Shield } from "lucide-react";

import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import AuthButton from "../components/AuthButton";

const VerificationSuccess = () => {
  return (
    <div className="flex min-h-screen flex-col  bg-bg text-text">
      <AuthHeader
        rightContent={
          <p className="text-sm text-text-dim">
            Need help?{" "}
            <Link
              to="/contact-support"
              className="font-medium text-accent hover:underline">
              Contact support
            </Link>
          </p>
        }
      />

      <main className="flex flex-1 items-center justify-center px-10 py-12">
        <div className="w-full max-w-md text-center">
          {/* Success icon */}
          <div className="mx-auto flex h-17 w-17 items-center justify-center rounded-2xl border border-good/20 bg-surface">
            <Check className="h-8 w-8 text-good" strokeWidth={1.8} />
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-3xl font-semibold tracking-tight text-text">
            Email verified
          </h1>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-sm text-base leading-6 text-text-dim">
            Your address has been confirmed and your account is now active.
            You're ready to sign in and set up your vault.
          </p>

          {/* Continue button */}
          <div className="mt-9">
            <Link to="/login" className="block">
              <AuthButton type="button">Continue to login</AuthButton>
            </Link>
          </div>

          {/* Security message */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-text-faint">
            <Shield className="h-3.5 w-3.5" strokeWidth={1.7} />

            <span>Your data stays encrypted end-to-end, always</span>
          </div>
        </div>
      </main>

      <AuthFooter />
    </div>
  );
};

export default VerificationSuccess;
