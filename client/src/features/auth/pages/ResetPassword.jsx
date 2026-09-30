import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";

import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import AuthButton from "../components/AuthButton";
import PasswordInput from "../components/PasswordInput";
import PasswordStrength from "../components/PasswordStrength";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/password-changed");
  };

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
        <div className="w-full max-w-md">
          {/* Icon */}
          <div className="mx-auto flex h-17 w-17 items-center justify-center rounded-2xl border border-accent/20 bg-surface">
            <LockKeyhole className="h-8 w-8 text-accent" strokeWidth={1.8} />
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-center text-3xl font-semibold tracking-tight text-text">
            Reset password
          </h1>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-sm text-center text-base leading-6 text-text-dim">
            Please set a new password to secure your vault.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-9">
            {/* New password */}
            <div
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setIsPasswordFocused(false);
                }
              }}>
              <PasswordInput
                id="password"
                name="password"
                label="New password"
                placeholder="Enter a new password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                showPassword={showPassword}
                onToggleVisibility={() => setShowPassword(!showPassword)}
              />

              {isPasswordFocused && <PasswordStrength password={password} />}
            </div>

            {/* Confirm password */}
            <div className="mt-3">
              <PasswordInput
                id="confirmPassword"
                name="confirmPassword"
                label="Re-enter password"
                placeholder="Re-enter your new password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                showPassword={showConfirmPassword}
                onToggleVisibility={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              />
            </div>

            {/* Reset button */}
            <div className="mt-7">
              <AuthButton type="submit">Reset password</AuthButton>
            </div>
          </form>

          {/* Return to login */}
          <div className="mt-7 text-center">
            <Link
              to="/login"
              className="text-sm text-text-dim transition hover:text-text">
              ← Return to login
            </Link>
          </div>
        </div>
      </main>

      <AuthFooter />
    </div>
  );
};

export default ResetPassword;
