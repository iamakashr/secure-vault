import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, MessageSquareCode } from "lucide-react";
import { PATHS } from "../../../config/paths.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import AuthButton from "../components/AuthButton";
import AuthInput from "../components/AuthInput";

import { forgotPasswordSchema } from "../schemas/authSchema.js";
import useForgotPassword from "../hooks/useForgotPassword.js";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const message = location.state?.message;

  const { forgotPassword, isLoading, error } = useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (userData) => {
    try {
      await forgotPassword(userData);

      navigate(PATHS.AUTH.VERIFY_OTP, {
        state: { email: userData.email },
      });
    } catch (error) {
      console.error("Forgot password failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg text-text">
      <AuthHeader
        rightContent={
          <p className="text-sm text-text-dim">
            Already have an account?{" "}
            <Link
              to={PATHS.AUTH.LOGIN}
              className="font-medium text-accent hover:underline">
              Sign in
            </Link>
          </p>
        }
      />

      <main className="flex flex-1 items-center justify-center px-10 py-12">
        <div className="w-full max-w-sm">
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

          {/* Redirect message */}
          {message && (
            <p className="mt-4 text-sm text-text-dim" role="status">
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Email */}
            <div className="mt-9">
              <AuthInput
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="you@company.com"
                autoComplete="email"
                error={errors.email?.message}
                {...register("email")}
                icon={Mail}
                required
              />
            </div>

            {/* Backend error */}
            {error && (
              <p className="mt-3 text-sm text-weak" role="alert">
                {error}
              </p>
            )}

            {/* Send OTP */}
            <div className="mt-5">
              <AuthButton type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send OTP"}
              </AuthButton>
            </div>
          </form>

          {/* Back to login */}
          <div className="mt-7 text-center">
            <Link
              to={PATHS.AUTH.LOGIN}
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
