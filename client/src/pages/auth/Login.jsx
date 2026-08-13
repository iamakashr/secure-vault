import { useState } from "react";
import {
  ShieldCheck,
  Cloud,
  UserRound,
  LockKeyhole,
  Mail,
  Eye,
  Moon,
  ChevronDown,
} from "lucide-react";

import SecureVaultlogoHorizontalDark from "../../assets/logos/securevault-logo-horizontal-dark.png";
import authBg from "../../assets/images/auth-bg.png";

import AuthCard from "../../components/auth/AuthCard";
import AuthFeature from "../../components/auth/AuthFeature";
import SocialLogin from "../../components/auth/SocialLogin";
import AuthFooter from "../../components/auth/AuthFooter";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="relative h-screen overflow-hidden bg-[#060a1a] text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url(${authBg})`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-16 py-8">
        {/* Header */}
        <header className="flex items-start justify-between">
          {/* Logo */}
          <img
            src={SecureVaultlogoHorizontalDark}
            alt="SecureVault"
            className="w-52 object-contain"
          />

          {/* Theme Selector */}
          <button
            type="button"
            aria-label="Theme selector"
            className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-[#0b1022]/70 px-5 py-3 text-sm text-slate-200 backdrop-blur-md transition hover:border-slate-600">
            <Moon size={20} strokeWidth={1.8} />

            <span>Dark</span>

            <ChevronDown size={17} className="text-slate-400" />
          </button>
        </header>

        {/* Main */}
        <main className="mx-auto flex min-h-[calc(100vh-112px)] max-w-[1400px] items-center justify-around gap-24">
          {/* Left Section */}
          <section className="w-[560px] shrink-0 pb-16">
            <div className="max-w-[520px]">
              {/* Heading */}
              <h1 className="text-5xl font-bold leading-[1.12] tracking-tight">
                Your passwords.
                <br />
                Your data.
                <br />
                <span className="text-purple-500">Always secure.</span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[450px] text-lg leading-7 text-slate-300">
                SecureVault keeps your passwords and personal information safe
                with end-to-end encryption.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-5">
                <AuthFeature
                  icon={<ShieldCheck size={25} />}
                  title="Bank-level security"
                  description="256-bit encryption protects your data"
                />

                <AuthFeature
                  icon={<Cloud size={25} />}
                  title="Access anywhere"
                  description="Sync across all your devices securely"
                />

                <AuthFeature
                  icon={<UserRound size={25} />}
                  title="You're in control"
                  description="Only you can access your vault"
                />
              </div>
            </div>
          </section>

          {/* Login Container */}
          <section className="w-[540px] shrink-0">
            <AuthCard>
              {/* Auth Icon */}
              <div className="flex justify-center">
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-2xl border border-purple-500/80 bg-purple-950/20">
                  <LockKeyhole
                    size={34}
                    strokeWidth={1.8}
                    className="text-purple-500"
                  />
                </div>
              </div>

              {/* Heading */}
              <div className="mt-4 text-center">
                <h2 className="text-[30px] font-bold tracking-tight">
                  Welcome back
                </h2>

                <p className="mt-1.5 text-[15px] text-slate-300">
                  Sign in to access your secure vault
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handelSubmit} className="mt-6 space-y-4">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200">
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      size={20}
                      strokeWidth={1.8}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handelChange}
                      placeholder="Enter your email"
                      className="h-12 w-full rounded-lg border border-slate-700/80 bg-[#10162a]/80 pl-12 pr-4 text-[15px] text-white outline-none placeholder:text-slate-400 transition focus:border-purple-500/70"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-200">
                    Master password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={20}
                      strokeWidth={1.8}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handelChange}
                      placeholder="Enter your master password"
                      className="h-12 w-full rounded-lg border border-slate-700/80 bg-[#10162a]/80 pl-12 pr-12 text-[15px] text-white outline-none placeholder:text-slate-400 transition focus:border-purple-500/70"
                    />

                    <button
                      type="button"
                      aria-label="Show password"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-200">
                      <Eye size={20} strokeWidth={1.8} />
                    </button>
                  </div>
                </div>

                {/* Remember Me / Forgot Password */}
                <div className="flex items-center justify-between pt-0.5">
                  <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-300">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-[19px] w-[19px] cursor-pointer rounded border-slate-600 bg-transparent accent-purple-600"
                    />

                    <span>Remember me</span>
                  </label>

                  <button
                    type="button"
                    className="text-sm font-medium text-purple-400 transition hover:text-purple-300">
                    Forgot password?
                  </button>
                </div>

                {/* Sign In */}
                <button
                  type="submit"
                  className="h-12 w-full rounded-lg bg-purple-600 text-[15px] font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:bg-purple-500 active:scale-[0.99]">
                  Sign in
                </button>
              </form>

              {/* Social Login */}
              <SocialLogin />

              {/* Footer */}
              <AuthFooter
                text="Don't have an account?"
                linkText="Create account"
                linkTo="/register"
              />
            </AuthCard>
          </section>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-6 left-16 text-sm text-slate-400">
          © 2026 SecureVault. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Login;
