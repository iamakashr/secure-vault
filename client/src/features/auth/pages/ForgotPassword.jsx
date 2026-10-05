import { Link } from "react-router-dom";
import { Mail, MessageSquareCode, Shield } from "lucide-react";

import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import AuthButton from "../components/AuthButton";
import AuthInput from "../components/AuthInput";

const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen flex-col  bg-bg text-text">
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

      <main className=" flex flex-1 items-center justify-center px-10 py-12">
        <div className=" w-full max-w-sm">
          {/* OTP icon */}
          <div className="mx-auto flex h-17 w-17 items-center justify-center rounded-2xl border border-accent/20 bg-surface">
            <MessageSquareCode
              className="h-8 w-8 text-accent"
              strokeWidth={1.8}
            />
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-center text-3xl font-semibold tracking-tight text-text">
            Forgot your password?
          </h1>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-sm text-center text-base leading-6 text-text-dim">
            Enter the email linked to your account and we'll send a one-time
            code to reset it.
          </p>

          {/* Email */}
          <div className="mt-9">
            <AuthInput
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="you@company.com"
              autoComplete="email"
              icon={Mail}
              required
            />
          </div>

          {/* Send OTP */}
          <div className="mt-5">
            <Link to="/verify-otp" className="block">
              <AuthButton type="button">Send OTP</AuthButton>
            </Link>
          </div>

          {/* Back to login */}
          <div className="mt-7 text-center">
            <Link
              to="/login"
              className="text-sm text-text-dim transition hover:text-text">
              ← Back to login
            </Link>
          </div>
        </div>
      </main>

      <AuthFooter />
    </div>
  );
};

export default ForgotPassword;
