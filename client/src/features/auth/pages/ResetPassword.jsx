import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LockKeyhole } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import AuthButton from "../components/AuthButton";
import PasswordInput from "../components/PasswordInput";
import PasswordStrength from "../components/PasswordStrength";

import { resetPasswordSchema } from "../schemas/authSchema.js";
import useResetPassword from "../hooks/useResetPassword.js";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { email, resetToken } = location.state || {};

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const { resetPassword, isLoading, error } = useResetPassword();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const onSubmit = async (formData) => {
    console.log("Reset password form submitted");

    if (!email || !resetToken) {
      console.error("Email or reset token is missing", {
        emailExists: Boolean(email),
        resetTokenExists: Boolean(resetToken),
      });
      return;
    }

    try {
      const response = await resetPassword({
        email,
        newPassword: formData.password,
        resetToken,
      });

      console.log("Password reset response:", response);
      navigate("/password-changed");
    } catch (error) {
      console.error(
        "Password reset failed:",
        error.response?.data || error.message,
      );
    }
  };

  const onInvalid = (formErrors) => {
    console.log("Form validation errors:", formErrors);
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
        <div className="w-full max-w-sm">
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
          <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="mt-9">
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
                label="New password"
                placeholder="Enter a new password"
                autoComplete="new-password"
                required
                showPassword={showPassword}
                onToggleVisibility={() =>
                  setShowPassword((previous) => !previous)
                }
                {...register("password")}
                error={errors.password?.message}
              />

              {isPasswordFocused && <PasswordStrength password={password} />}
            </div>

            {/* Confirm password */}
            <div className="mt-3">
              <PasswordInput
                id="confirmPassword"
                label="Re-enter password"
                placeholder="Re-enter your new password"
                autoComplete="new-password"
                required
                showPassword={showConfirmPassword}
                onToggleVisibility={() =>
                  setShowConfirmPassword((previous) => !previous)
                }
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
              />
            </div>

            {/* Backend error */}
            {error && (
              <p className="mt-3 text-sm text-weak" role="alert">
                {error}
              </p>
            )}

            {/* Reset button */}
            <div className="mt-7">
              <AuthButton type="submit" disabled={isLoading}>
                {isLoading ? "Resetting..." : "Reset password"}
              </AuthButton>
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
