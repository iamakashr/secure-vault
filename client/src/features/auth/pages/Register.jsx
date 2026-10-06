import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRound, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthBrandPanel from "../components/AuthBrandPanel";
import AuthInput from "../components/AuthInput";
import PasswordInput from "../components/PasswordInput";
import OAuthButton from "../components/OAuthButton";
import AuthButton from "../components/AuthButton";
import PasswordStrength from "../components/PasswordStrength";

import { registerSchema } from "../schemas/authSchema";
import useRegister from "../hooks/useRegister";

import logo from "../../../assets/logos/securevault-logo.svg";
import googleLogo from "../../../assets/logos/google-icon-logo.svg";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const {
    register: registerUser,
    isLoading,
    error: registerError,
  } = useRegister();

  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const password = watch("password");

  const nameField = register("name");
  const emailField = register("email");
  const passwordField = register("password");

  const handleNameBlur = async (event) => {
    const value = event.target.value.trim();

    nameField.onBlur(event);

    if (!value) {
      clearErrors("name");
      return;
    }

    await trigger("name");
  };

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
      await registerUser(data);

      navigate("/verify-email-otp", {
        state: {
          email: data.email,
        },
      });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="grid min-h-screen w-full grid-cols-2 bg-bg text-text">
      <AuthBrandPanel
        logo={logo}
        title={
          <>
            Your passwords,
            <br /> secured beyond reach.
          </>
        }
        description="One encrypted vault for every login, protected by architecture designed so that only you can ever unlock it."
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
              Create your account
            </h2>

            <p className="mt-2 text-sm text-text-dim">
              Already protecting your passwords?{" "}
              <Link
                to="/login"
                className="font-medium text-accent hover:underline">
                Sign in
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
              id="name"
              label="Name"
              placeholder="Jordan Blake"
              autoComplete="name"
              icon={UserRound}
              error={errors.name?.message}
              required
              {...nameField}
              onBlur={handleNameBlur}
            />

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

            <div
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsPasswordFocused(false);
                }
              }}>
              <PasswordInput
                id="password"
                label="Password"
                error={errors.password?.message}
                showPassword={showPassword}
                onToggleVisibility={() => setShowPassword((prev) => !prev)}
                {...passwordField}
                onBlur={handlePasswordBlur}
              />

              {isPasswordFocused && <PasswordStrength password={password} />}
            </div>

            {registerError && (
              <p className="mb-4 text-sm text-weak">{registerError}</p>
            )}

            <AuthButton type="submit" loading={isLoading}>
              Create account
            </AuthButton>

            <p className="mt-4 text-[0.76rem] leading-6 text-text-faint">
              By creating an account, you agree to SecureVault&apos;s{" "}
              <a
                href="#"
                className="text-text-dim underline underline-offset-2">
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-text-dim underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>
          </form>

          <p className="mt-8 text-center text-sm text-text-dim">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-accent hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
