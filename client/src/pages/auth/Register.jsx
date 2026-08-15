import { useState } from "react";
import {
  ShieldCheck,
  RefreshCw,
  LockKeyhole,
  Mail,
  UserRound,
  Eye,
} from "lucide-react";

import SecureVaultlogoHorizontalDark from "../../assets/logos/securevault-logo-horizontal-dark.png";

import AuthCard from "../../components/auth/AuthCard";
import AuthFeature from "../../components/auth/AuthFeature";
import SocialLogin from "../../components/auth/SocialLogin";
import AuthFooter from "../../components/auth/AuthFooter";
import DarkModeBtn from "../../components/ui/DarkModeBtn";
import PasswordStrength from "../../components/auth/PasswordStrength";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="relative h-screen overflow-hidden bg-background font-sans text-text-primary antialiased">
      {/*  HEADER  */}
      <header className="relative z-10 flex items-center justify-between px-8 py-7 lg:px-16">
        {/* LOGO */}
        <img
          src={SecureVaultlogoHorizontalDark}
          alt="SecureVault"
          className="w-48 object-contain"
        />

        {/* THEME */}
        <DarkModeBtn />
      </header>

      {/*  MAIN  */}
      <main className="relative z-10 mx-auto flex h-[calc(100vh-112px)] max-w-7xl items-center justify-between gap-20 overflow-hidden px-8  lg:px-16">
        {/*  LEFT SECTION  */}
        <section className="w-125 shrink-0 ">
          <div>
            {/* HEADING */}
            <h1 className="text-[52px] font-extrabold leading-[1.06] tracking-[-0.045em] text-text-primary">
              Create your
              <br />
              account.
              <br />
              Secure <span className="text-primary">everything.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-125 text-[17px] leading-7 text-text-secondary">
              Join SecureVault and experience a safer way to store and manage
              your passwords.
            </p>

            {/* FEATURES */}
            <div className="mt-9 space-y-5">
              <AuthFeature
                icon={<LockKeyhole size={24} strokeWidth={1.8} />}
                title="Bank-level security"
                description="256-bit encryption keeps your data safe"
              />

              <AuthFeature
                icon={<RefreshCw size={24} strokeWidth={1.8} />}
                title="Access anywhere"
                description="Sync your vault across all your devices"
              />

              <AuthFeature
                icon={<ShieldCheck size={24} strokeWidth={1.8} />}
                title="Privacy first"
                description="Only you can access your vault"
              />
            </div>
          </div>
        </section>

        {/*  REGISTER CARD  */}
        <section className="w-125 shrink-0 -translate-y-1">
          <AuthCard>
            {/* AUTH ICON */}
            <div className="flex justify-center">
              <div className="flex h-17 w-17 items-center justify-center rounded-2xl border border-primary/50 bg-primary/10 text-primary">
                <UserRound size={32} strokeWidth={1.8} />
              </div>
            </div>

            {/* HEADING */}
            <div className="mt-2.5 text-center">
              <h2 className="text-[27px] font-bold tracking-tight text-text-primary">
                Create your account
              </h2>

              <p className="mt-1 text-[14px] text-text-secondary">
                Start securing your passwords today
              </p>
            </div>

            {/*  FORM  */}
            <form onSubmit={handleSubmit} className="mt-1 space-y-1">
              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-text-secondary">
                  Full name
                </label>

                <div className="relative">
                  <UserRound
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                  />

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="h-12 w-full rounded-lg border border-border-subtle bg-background/60 pl-12 pr-4 text-[15px] text-text-primary outline-none placeholder:text-text-muted transition-colors duration-200 focus:border-primary/70"
                  />
                </div>
              </div>

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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    placeholder="Create your master password"
                    className="h-12 w-full rounded-lg border border-border-subtle bg-background/60 pl-12 pr-12 text-[15px] text-text-primary outline-none placeholder:text-text-muted transition-colors duration-200 focus:border-primary/70"
                  />

                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted transition-colors duration-200 hover:text-text-secondary">
                    <Eye size={18} strokeWidth={1.8} />
                  </button>
                </div>

                {/* PASSWORD STRENGTH */}
                <PasswordStrength password={formData.password} />
              </div>

              {/* CREATE ACCOUNT */}
              <button
                type="submit"
                className="mt-1 h-11 w-full rounded-lg bg-primary text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary active:scale-[0.99]">
                Create account
              </button>
            </form>

            {/* SOCIAL LOGIN */}
            <SocialLogin />

            {/* FOOTER */}
            <AuthFooter
              text="Already have an account?"
              linkText="Sign in"
              linkTo="/login"
            />
          </AuthCard>
        </section>
      </main>

      {/* FOOTER  */}
      <footer className="absolute bottom-6 left-8 text-sm text-text-muted lg:left-16">
        © 2026 SecureVault. All rights reserved.
      </footer>
    </div>
  );
};

export default Register;
