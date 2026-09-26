import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRound, Mail } from "lucide-react";

import AuthBrandPanel from "../components/AuthBrandPanel";
import AuthInput from "../components/AuthInput";
import PasswordInput from "../components/PasswordInput";
import OAuthButton from "../components/OAuthButton";
import AuthButton from "../components/AuthButton";

import logo from "../../../assets/logos/securevault-logo.svg";
import googleLogo from "../../../assets/logos/google-icon-logo.svg";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    // Temporary simulation of account creation
    setTimeout(() => {
      setIsLoading(false);
      navigate("/verify-email");
    }, 1500);
  };

  return (
    <div className="grid min-h-screen w-full grid-cols-2 bg-bg text-text">
      {/* Left: Brand / Security panel */}
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

      {/* Right: Register form */}
      <main className="flex items-center justify-center bg-bg px-10 py-12">
        <div className="w-full max-w-95">
          {/* Form header */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-text">
              Create your account
            </h2>

            <p className="mt-2 text-sm text-text-dim">
              Already protecting your passwords?{" "}
              <Link
                to="/login"
                className="font-medium text-accent hover:underline">
                Login
              </Link>
            </p>
          </div>

          {/* Google */}
          <OAuthButton icon={googleLogo}>Continue with Google</OAuthButton>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3.5">
            <div className="h-px flex-1 bg-border" />

            <span className="text-xs text-text-faint">or</span>

            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Register form */}
          <form onSubmit={handleSubmit}>
            {/* Full name */}
            <AuthInput
              id="fullname"
              name="fullname"
              label="Full name"
              placeholder="Jordan Blake"
              autoComplete="name"
              icon={UserRound}
              required
            />

            {/* Email */}
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

            {/* Password */}
            <PasswordInput
              id="password"
              name="password"
              label="Master Password"
              // value={password}
              onChange={(e) => setPasswordValue(e.target.value)}
              showPassword={showPassword}
              onToggleVisibility={() => setShowPassword((prev) => !prev)}
              required
            />

            {/* Password strength */}
            {/* Add PasswordStrength here once password state is connected */}
            {/* <PasswordStrength password={password} /> */}

            {/* Submit */}
            <AuthButton loading={isLoading}>Create account</AuthButton>

            {/* Legal */}
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

          {/* Sign in */}
          <p className="mt-8 text-center text-sm text-text-dim">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-accent hover:underline">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
