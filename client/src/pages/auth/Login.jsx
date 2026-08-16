import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ShieldCheck,
  Cloud,
  UserRound,
  LockKeyhole,
  Mail,
  Eye,
} from "lucide-react";

import SecureVaultlogoHorizontalDark from "../../assets/logos/securevault-logo-horizontal-dark.png";

import AuthCard from "../../components/auth/AuthCard";
import AuthFeature from "../../components/auth/AuthFeature";
import SocialLogin from "../../components/auth/SocialLogin";
import AuthFooter from "../../components/auth/AuthFooter";
import DarkModeBtn from "../../components/ui/DarkModeBtn";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-background font-sans text-text-primary antialiased">
      {/* ==================== HEADER ==================== */}
      <header className="relative z-10 flex items-center justify-between px-8 py-7 lg:px-16">
        {/* LOGO */}
        <img
          src={SecureVaultlogoHorizontalDark}
          alt="SecureVault"
          className="w-48 object-contain"
        />

        {/* DARK MODE BUTTON */}
        <DarkModeBtn />
      </header>

      {/* ==================== MAIN ==================== */}
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-112px)] max-w-7xl items-center justify-between gap-20 overflow-hidden px-8 pb-10 lg:px-16">
        {/* ==================== LEFT SECTION ==================== */}
        <section className="w-130 shrink-0">
          <div>
            {/* HEADING */}
            <h1 className="text-[52px] font-extrabold leading-[1.06] tracking-[-0.045em] text-text-primary">
              Your passwords.
              <br />
              Your data.
              <br />
              <span className="text-primary">Always secure.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-125 text-[17px] leading-7 text-text-secondary">
              SecureVault keeps your passwords and personal information safe
              with end-to-end encryption.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-6">
              <AuthFeature
                icon={<ShieldCheck size={24} strokeWidth={1.8} />}
                title="Bank-level security"
                description="256-bit encryption protects your data"
              />

              <AuthFeature
                icon={<Cloud size={24} strokeWidth={1.8} />}
                title="Access anywhere"
                description="Sync across all your devices securely"
              />

              <AuthFeature
                icon={<UserRound size={24} strokeWidth={1.8} />}
                title="You're in control"
                description="Only you can access your vault"
              />
            </div>
          </div>
        </section>

        {/* ==================== LOGIN CARD ==================== */}
        <section className="w-125 shrink-0">
          <AuthCard>
            {/* AUTH ICON */}
            <div className="flex justify-center">
              <div className="flex h-17 w-17 items-center justify-center rounded-2xl border border-primary/50 bg-primary/10 text-primary">
                <LockKeyhole size={32} strokeWidth={1.8} />
              </div>
            </div>

            {/* HEADING */}
            <div className="mt-4 text-center">
              <h2 className="text-[28px] font-bold tracking-tight text-text-primary">
                Welcome back
              </h2>

              <p className="mt-1.5 text-[14px] text-text-secondary">
                Sign in to access your secure vault
              </p>
            </div>

            {/* ==================== FORM ==================== */}
            <form onSubmit={handelSubmit} className="mt-6 space-y-4">
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-text-secondary">
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handelChange}
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-lg border border-border-subtle bg-background/60 pl-12 pr-4 text-[15px] text-text-primary outline-none placeholder:text-text-muted transition-colors duration-200 focus:border-primary/70"
                  />
                </div>
              </div>

              {/* MASTER PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-text-secondary">
                  Master password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handelChange}
                    placeholder="Enter your master password"
                    className="h-12 w-full rounded-lg border border-border-subtle bg-background/60 pl-12 pr-12 text-[15px] text-text-primary outline-none placeholder:text-text-muted transition-colors duration-200 focus:border-primary/70"
                  />

                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted transition-colors duration-200 hover:text-text-primary">
                    <Eye size={19} strokeWidth={1.8} />
                  </button>
                </div>
              </div>

              {/* REMEMBER / FORGOT */}
              <div className="flex items-center justify-between pt-0.5">
                <label className="flex cursor-pointer items-center gap-2.5 text-sm text-text-secondary">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 cursor-pointer rounded border-border bg-transparent accent-primary"
                  />

                  <span>Remember me</span>
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-primary transition-colors duration-200 hover:text-primary">
                  Forgot password?
                </Link>
              </div>

              {/* SIGN IN */}
              <button
                type="submit"
                className="h-12 w-full rounded-lg bg-primary text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-primary active:scale-[0.99]">
                Sign in
              </button>
            </form>

            {/* SOCIAL LOGIN */}
            <SocialLogin />

            {/* FOOTER */}
            <AuthFooter
              text="Don't have an account?"
              linkText="Create account"
              linkTo="/register"
            />
          </AuthCard>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="absolute bottom-6 left-8 text-sm text-text-muted lg:left-16">
        © 2026 SecureVault. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
