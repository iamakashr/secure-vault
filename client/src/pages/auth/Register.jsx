import { useState } from "react";
import {
  ShieldCheck,
  RefreshCw,
  LockKeyhole,
  Mail,
  UserRound,
  Eye,
  Moon,
  ChevronDown,
} from "lucide-react";

import SecureVaultlogoHorizontalDark from "../../assets/logos/securevault-logo-horizontal-dark.png";
import authBg from "../../assets/images/auth-bg.png";

import AuthCard from "../../components/auth/AuthCard";
import SocialLogin from "../../components/auth/SocialLogin";
import AuthFooter from "../../components/auth/AuthFooter";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url(${authBg})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col px-16 py-8">
        {/* Header */}
        <header className="flex items-start justify-between">
          <img
            src={SecureVaultlogoHorizontalDark}
            alt="SecureVault"
            className="w-52 object-contain"
          />
        </header>

        {/* Main */}
        <main className="mx-auto flex w-full max-w-[1400px] flex-1 items-center justify-around gap-24">
          {/* Left Section */}
          <section className="w-[560px] shrink-0 pb-16">
            <div className="max-w-[520px]">
              <h1 className="text-5xl font-bold leading-[1.12] tracking-tight">
                Create your account.
                <br />
                Secure <span className="text-purple-500">everything.</span>
              </h1>

              <p className="mt-6 max-w-[450px] text-lg leading-7 text-slate-300">
                Join SecureVault and experience the safest way to store and
                manage your passwords.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-7">
                {/* Feature 1 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-500/40 bg-[#10162a]/70">
                    <LockKeyhole
                      size={27}
                      strokeWidth={1.8}
                      className="text-purple-500"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Bank-level security
                    </h3>

                    <p className="mt-1 text-sm text-slate-300">
                      256-bit encryption keeps your data safe
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-500/40 bg-[#10162a]/70">
                    <RefreshCw
                      size={27}
                      strokeWidth={1.8}
                      className="text-purple-500"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Access anywhere
                    </h3>

                    <p className="mt-1 text-sm text-slate-300">
                      Sync your vault across all your devices
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-500/40 bg-[#10162a]/70">
                    <ShieldCheck
                      size={27}
                      strokeWidth={1.8}
                      className="text-purple-500"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Privacy first
                    </h3>

                    <p className="mt-1 text-sm text-slate-300">
                      We never see or store your data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Register Card */}
          <section className="w-[500px] shrink-0 -translate-y-4">
            <AuthCard>
              {/* Auth Icon */}
              <div className="flex justify-center">
                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-2xl border border-purple-500/80 bg-purple-950/20">
                  <UserRound
                    size={31}
                    strokeWidth={1.8}
                    className="text-purple-500"
                  />
                </div>
              </div>

              {/* Heading */}
              <div className="mt-3 text-center">
                <h2 className="text-[27px] font-bold tracking-tight">
                  Create your account
                </h2>

                <p className="mt-1 text-[14px] text-slate-300">
                  Start securing your passwords today
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handelSubmit} className="mt-5 space-y-3">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1.5 block text-sm font-medium text-slate-200">
                    Full name
                  </label>

                  <div className="relative">
                    <UserRound
                      size={19}
                      strokeWidth={1.8}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handelChange}
                      placeholder="Enter your full name"
                      className="h-11 w-full rounded-lg border border-slate-700/80 bg-[#10162a]/80 pl-12 pr-4 text-[15px] text-white outline-none placeholder:text-slate-400 transition focus:border-purple-500/70"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-200">
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
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
                      className="h-11 w-full rounded-lg border border-slate-700/80 bg-[#10162a]/80 pl-12 pr-4 text-[15px] text-white outline-none placeholder:text-slate-400 transition focus:border-purple-500/70"
                    />
                  </div>
                </div>

                {/* Master Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1.5 block text-sm font-medium text-slate-200">
                    Master password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={19}
                      strokeWidth={1.8}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handelChange}
                      placeholder="Create your master password"
                      className="h-11 w-full rounded-lg border border-slate-700/80 bg-[#10162a]/80 pl-12 pr-12 text-[15px] text-white outline-none placeholder:text-slate-400 transition focus:border-purple-500/70"
                    />

                    <button
                      type="button"
                      aria-label="Show password"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-200">
                      <Eye size={19} strokeWidth={1.8} />
                    </button>
                  </div>
                </div>

                {/* Confirm Master Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-1.5 block text-sm font-medium text-slate-200">
                    Confirm master password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={19}
                      strokeWidth={1.8}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handelChange}
                      placeholder="Confirm your master password"
                      className="h-11 w-full rounded-lg border border-slate-700/80 bg-[#10162a]/80 pl-12 pr-12 text-[15px] text-white outline-none placeholder:text-slate-400 transition focus:border-purple-500/70"
                    />

                    <button
                      type="button"
                      aria-label="Show password"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-200">
                      <Eye size={19} strokeWidth={1.8} />
                    </button>
                  </div>
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  className="mt-1 h-11 w-full rounded-lg bg-purple-600 text-[15px] font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:bg-purple-500 active:scale-[0.99]">
                  Create account
                </button>
              </form>

              {/* Social Login */}
              <SocialLogin />

              {/* Footer */}
              <AuthFooter
                text="Already have an account?"
                linkText="Sign in"
                linkTo="/login"
              />
            </AuthCard>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-sm text-slate-400">
          © 2026 SecureVault. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Register;
