import { Link } from "react-router-dom";
import { Check, Shield } from "lucide-react";

import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import AuthButton from "../components/AuthButton";

const PasswordChanged = () => {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-text">
      <AuthHeader
        rightContent={
          <p className="text-sm text-text-dim">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-accent hover:underline">
              Sign up
            </Link>
          </p>
        }
      />

      <main className="flex flex-1 items-center justify-center px-10 py-12">
        <div className="w-full max-w-md text-center">
          {/* Success Icon */}
          <div className="mx-auto flex h-17 w-17 items-center justify-center rounded-2xl border border-good/20 bg-surface">
            <Check className="h-8 w-8 text-good" strokeWidth={1.8} />
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-3xl font-semibold tracking-tight text-text">
            Password changed
            <br />
            successfully
          </h1>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-sm text-base leading-6 text-text-dim">
            Your master password has been updated.
            <br />
            Use it to sign in and unlock your vault.
          </p>

          {/* Login Button */}
          <div className="mt-9">
            <Link to="/login" className="block">
              <AuthButton type="button">Continue to login</AuthButton>
            </Link>
          </div>

          {/* Security Message */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-text-faint">
            <Shield className="h-3.5 w-3.5" strokeWidth={1.7} />
            <span>
              All other sessions have been signed out for your security
            </span>
          </div>
        </div>
      </main>

      <AuthFooter />
    </div>
  );
};

export default PasswordChanged;
