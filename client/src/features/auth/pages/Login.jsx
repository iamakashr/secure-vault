import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { PATHS } from "../../../config/paths.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthBrandPanel from "../components/AuthBrandPanel";
import OAuthButton from "../components/OAuthButton";
import AuthInput from "../components/AuthInput";
import PasswordInput from "../components/PasswordInput";
import AuthButton from "../components/AuthButton";

import { loginSchema } from "../schemas/authSchema.js";
import useLogin from "../hooks/useLogin";

import logo from "../../../assets/logos/securevault-logo.svg";
import googleLogo from "../../../assets/logos/google-icon-logo.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { login: loginUser, isLoading, error: loginError } = useLogin();

  const {
    register,
    handleSubmit,
    clearErrors,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const emailField = register("email");
  const passwordField = register("password");

  const handleEmailBlur = async (event) => {
    const value = event.target.value.trim();

    emailField.onBlur(event);

    if (!value) {
      clearErrors("email");
      return;
    }

    await trigger("email");
  };

  const handlePasswordBlur = async (event) => {
    const value = event.target.value;

    passwordField.onBlur(event);

    if (!value) {
      clearErrors("password");
      return;
    }

    await trigger("password");
  };

  const onSubmit = async (data) => {
    try {
      await loginUser(data);

      navigate(PATHS.DASHBOARD.HOME);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="grid min-h-screen w-full grid-cols-2 bg-bg text-text">
      <AuthBrandPanel
        logo={logo}
        title={
          <>
            Welcome back to your
            <br /> vault.
          </>
        }
        description="Sign in to pick up right where you left off — every password, note, and card kept encrypted and in sync."
        features={[
          "End-to-end encryption on every item you store",
          "Zero-knowledge design — we never see your master password",
          "Synced securely across every device you own",
        ]}
        securityBadges={["AES-256", "SOC 2 Type II", "Zero-knowledge"]}
      />

      <main className="flex items-center justify-center bg-bg px-10 py-12">
        <div className="w-full max-w-95">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-text">
              Sign in
            </h2>

            <p className="mt-2 text-sm text-text-dim">
              New to SecureVault?{" "}
              <Link
                to={PATHS.AUTH.REGISTER}
                className="font-medium text-accent hover:underline">
                Create an account
              </Link>
            </p>
          </div>

          <OAuthButton icon={googleLogo}>Continue with Google</OAuthButton>

          <div className="my-6 flex items-center gap-3.5">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-text-faint">or</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AuthInput
              id="email"
              type="email"
              label="Email"
              placeholder="you@company.com"
              autoComplete="email"
              icon={Mail}
              error={errors.email?.message}
              required
              {...emailField}
              onBlur={handleEmailBlur}
            />

            <PasswordInput
              id="password"
              label="Master Password"
              showPassword={showPassword}
              onToggleVisibility={() => setShowPassword((prev) => !prev)}
              error={errors.password?.message}
              required
              {...passwordField}
              onBlur={handlePasswordBlur}
            />

            {loginError && (
              <p className="mb-4 text-sm text-danger" role="alert">
                {loginError}
              </p>
            )}

            <div className="mb-6 mt-4 flex items-center justify-between text-sm select-none">
              <label
                htmlFor="remember-me"
                className="flex items-center gap-2 cursor-pointer text-text-dim">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="appearance-none h-4 w-4 rounded border border-border bg-bg-dark checked:bg-accent checked:border-accent relative cursor-pointer after:content-[''] after:absolute after:hidden checked:after:block after:left-1.5 after:top-0.5 after:w-1 after:h-2 after:border-bg after:border-b-2 after:border-r-2 after:rotate-45 transition-all"
                />
                <span>Remember me</span>
              </label>

              <Link
                to={PATHS.AUTH.FORGOT_PASSWORD}
                className="text-accent font-medium hover:underline transition-colors">
                Forgot password?
              </Link>
            </div>

            <AuthButton type="submit" loading={isLoading}>
              Login
            </AuthButton>
          </form>

          <p className="mt-8 text-center text-sm text-text-dim">
            Don't have an account?{" "}
            <Link
              to={PATHS.AUTH.REGISTER}
              className="font-medium text-accent hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
