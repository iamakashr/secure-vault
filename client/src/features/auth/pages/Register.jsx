import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRound, Mail } from "lucide-react";

import AuthBrandPanel from "../components/AuthBrandPanel";
import AuthInput from "../components/AuthInput";
import PasswordInput from "../components/PasswordInput";
import OAuthButton from "../components/OAuthButton";
import AuthButton from "../components/AuthButton";
import PasswordStrength from "../components/PasswordStrength";

import { registerSchema } from "../schemas/authSchema";

import logo from "../../../assets/logos/securevault-logo.svg";
import googleLogo from "../../../assets/logos/google-icon-logo.svg";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleNameBlur = () => {
    const result = registerSchema.shape.name.safeParse(formData.name);

    if (!result.success) {
      setErrors((prev) => ({
        ...prev,
        name: result.error.issues[0].message,
      }));

      return;
    }

    setErrors((prev) => ({
      ...prev,
      name: "",
    }));
  };

  const handleEmailBlur = () => {
    const result = registerSchema.shape.email.safeParse(formData.email);

    if (!result.success) {
      setErrors((prev) => ({
        ...prev,
        email: result.error.issues[0].message,
      }));

      return;
    }

    setErrors((prev) => ({
      ...prev,
      email: "",
    }));
  };

  const handlePasswordBlur = () => {
    const result = registerSchema.shape.password.safeParse(formData.password);

    if (!result.success) {
      setErrors((prev) => ({
        ...prev,
        password: result.error.issues[0].message,
      }));

      return;
    }

    setErrors((prev) => ({
      ...prev,
      password: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = registerSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0];

        if (fieldName && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/verify-email");
    }, 1500);

    console.log(result.data);
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
                Login
              </Link>
            </p>
          </div>

          <OAuthButton icon={googleLogo}>Continue with Google</OAuthButton>

          <div className="my-6 flex items-center gap-3.5">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-text-faint">or</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleSubmit}>
            <AuthInput
              id="name"
              name="name"
              label="Name"
              placeholder="Jordan Blake"
              autoComplete="name"
              icon={UserRound}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleNameBlur}
              error={errors.name}
              required
            />

            <AuthInput
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="you@company.com"
              autoComplete="email"
              icon={Mail}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleEmailBlur}
              error={errors.email}
              required
            />

            <div
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setIsPasswordFocused(false);
                  handlePasswordBlur();
                }
              }}>
              <PasswordInput
                id="password"
                name="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handlePasswordBlur}
                error={errors.password}
                showPassword={showPassword}
                onToggleVisibility={() => setShowPassword((prev) => !prev)}
                required
              />

              {isPasswordFocused && (
                <PasswordStrength password={formData.password} />
              )}
            </div>

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
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
