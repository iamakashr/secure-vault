import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  LockKeyhole,
  Eye,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

import SecureVaultlogoHorizontalDark from "../../assets/logos/securevault-logo-horizontal-dark.png";

import AuthCard from "../../components/auth/AuthCard";
import AuthFeature from "../../components/auth/AuthFeature";
import DarkModeBtn from "../../components/ui/DarkModeBtn";
import PasswordStrength from "../../components/auth/PasswordStrength";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password || !formData.confirmPassword) {
      setError("Please fill in both password fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      /*
        Connect your backend API here.

        Example:

        const response = await resetPassword({
          password: formData.password,
        });

        if (!response.success) {
          throw new Error(response.message);
        }
      */

      // Temporary simulation.
      // Remove this when connecting your backend.
      await new Promise((resolve) => setTimeout(resolve, 700));

      setReset(true);
    } catch (error) {
      setError(
        error.message || "Unable to reset your password. Please try again.",
      );
    } finally {
      setLoading(false);
    }
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

        {/* THEME */}
        <DarkModeBtn />
      </header>

      {/* ==================== MAIN ==================== */}
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-112px)] max-w-7xl items-center justify-between gap-20 overflow-hidden px-8 pb-10 lg:px-16">
        {/* ==================== LEFT SECTION ==================== */}
        <section className="w-125 shrink-0">
          <div>
            {/* HEADING */}
            <h1 className="text-[52px] font-extrabold leading-[1.06] tracking-[-0.045em] text-text-primary">
              Create a new
              <br />
              <span className="text-primary">password.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-125 text-[17px] leading-7 text-text-secondary">
              Choose a strong new master password to protect your SecureVault
              account and everything stored inside your vault.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-6">
              <AuthFeature
                icon={<ShieldCheck size={24} strokeWidth={1.8} />}
                title="Keep your vault protected"
                description="Use a strong and unique master password"
              />

              <AuthFeature
                icon={<LockKeyhole size={24} strokeWidth={1.8} />}
                title="Your password stays private"
                description="Your master password is never stored in plain text"
              />

              <AuthFeature
                icon={<CheckCircle size={24} strokeWidth={1.8} />}
                title="You're almost done"
                description="Set your new password and regain access to your vault"
              />
            </div>
          </div>
        </section>

        {/* ==================== RESET PASSWORD CARD ==================== */}
        <section className="w-125 shrink-0">
          <AuthCard>
            {!reset ? (
              <>
                {/* AUTH ICON */}
                <div className="flex justify-center">
                  <div className="flex h-17 w-17 items-center justify-center rounded-2xl border border-primary/50 bg-primary/10 text-primary">
                    <LockKeyhole size={32} strokeWidth={1.8} />
                  </div>
                </div>

                {/* HEADING */}
                <div className="mt-4 text-center">
                  <h2 className="text-[28px] font-bold tracking-tight text-text-primary">
                    Reset your password
                  </h2>

                  <p className="mt-1.5 text-[14px] text-text-secondary">
                    Create a new master password for your account
                  </p>
                </div>

                {/* ==================== FORM ==================== */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* NEW PASSWORD */}
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-text-secondary">
                      New master password
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
                        placeholder="Create your new password"
                        required
                        className={`h-12 w-full rounded-lg border ${
                          error ? "border-danger/70" : "border-border-subtle"
                        } bg-background/60 pl-12 pr-12 text-[15px] text-text-primary outline-none placeholder:text-text-muted transition-colors duration-200 focus:border-primary/70`}
                      />

                      <button
                        type="button"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted transition-colors duration-200 hover:text-text-secondary">
                        <Eye size={19} strokeWidth={1.8} />
                      </button>
                    </div>

                    {/* PASSWORD STRENGTH */}
                    <PasswordStrength password={formData.password} />
                  </div>

                  {/* CONFIRM PASSWORD */}
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-sm font-medium text-text-secondary">
                      Confirm new password
                    </label>

                    <div className="relative">
                      <LockKeyhole
                        size={19}
                        strokeWidth={1.8}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                      />

                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your new password"
                        required
                        className={`h-12 w-full rounded-lg border ${
                          error ? "border-danger/70" : "border-border-subtle"
                        } bg-background/60 pl-12 pr-12 text-[15px] text-text-primary outline-none placeholder:text-text-muted transition-colors duration-200 focus:border-primary/70`}
                      />

                      <button
                        type="button"
                        aria-label={
                          showConfirmPassword
                            ? "Hide password"
                            : "Show password"
                        }
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted transition-colors duration-200 hover:text-text-secondary">
                        <Eye size={19} strokeWidth={1.8} />
                      </button>
                    </div>
                  </div>

                  {/* ERROR */}
                  {error && <p className="text-sm text-danger">{error}</p>}

                  {/* RESET PASSWORD */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-12 w-full rounded-lg bg-primary text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]">
                    {loading ? "Resetting password..." : "Reset password"}
                  </button>
                </form>

                {/* BACK TO LOGIN */}
                <div className="mt-5 flex justify-center">
                  <Link
                    to="/login"
                    className="flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-primary">
                    <ArrowLeft size={16} strokeWidth={1.8} />
                    Back to sign in
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* ==================== SUCCESS STATE ==================== */}

                {/* SUCCESS ICON */}
                <div className="flex justify-center">
                  <div className="flex h-17 w-17 items-center justify-center rounded-2xl border border-success/40 bg-success/10 text-success">
                    <CheckCircle size={32} strokeWidth={1.8} />
                  </div>
                </div>

                {/* SUCCESS HEADING */}
                <div className="mt-4 text-center">
                  <h2 className="text-[28px] font-bold tracking-tight text-text-primary">
                    Password reset successfully
                  </h2>

                  <p className="mt-2 text-[14px] leading-6 text-text-secondary">
                    Your master password has been updated. You can now sign in
                    to your SecureVault account using your new password.
                  </p>
                </div>

                {/* SIGN IN */}
                <Link
                  to="/login"
                  className="mt-6 flex h-12 w-full items-center justify-center rounded-lg bg-primary text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary active:scale-[0.99]">
                  Sign in
                </Link>
              </>
            )}
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

export default ResetPassword;
