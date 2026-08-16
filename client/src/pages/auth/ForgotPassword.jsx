import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Mail, LockKeyhole, Send } from "lucide-react";

import SecureVaultlogoHorizontalDark from "../../assets/logos/securevault-logo-horizontal-dark.png";

import AuthCard from "../../components/auth/AuthCard";
import AuthFeature from "../../components/auth/AuthFeature";
import AuthFooter from "../../components/auth/AuthFooter";
import DarkModeBtn from "../../components/ui/DarkModeBtn";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      

      // Temporary simulation
      // Remove this when connecting your backend.
      await new Promise((resolve) => setTimeout(resolve, 500));

      /*
        If backend confirms the email and sends the OTP,
        move to OTP verification.
      */

      navigate("/verify-otp", {
        state: { email },
      });
    } catch (error) {
      setError(error.message || "No account found with this email address.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-background font-sans text-text-primary antialiased">
      {/* HEADER  */}
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
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-112px)] max-w-7xl items-center justify-between gap-20 overflow-hidden px-8 pb-10 lg:px-16">
        {/*  LEFT SECTION  */}
        <section className="w-125 shrink-0">
          <div>
            {/* HEADING */}
            <h1 className="text-[52px] font-extrabold leading-[1.06] tracking-[-0.045em] text-text-primary">
              Forgot your
              <br />
              <span className="text-primary">password?</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-125 text-[17px] leading-7 text-text-secondary">
              No worries. Enter the email address linked to your SecureVault
              account and we'll help you get back into your vault.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-6">
              <AuthFeature
                icon={<ShieldCheck size={24} strokeWidth={1.8} />}
                title="Your data stays protected"
                description="Your vault remains secure throughout the process"
              />

              <AuthFeature
                icon={<Mail size={24} strokeWidth={1.8} />}
                title="Secure verification"
                description="We'll send a verification code to your email"
              />

              <AuthFeature
                icon={<LockKeyhole size={24} strokeWidth={1.8} />}
                title="Only you can recover it"
                description="Your account can only be recovered through verification"
              />
            </div>
          </div>
        </section>

        {/*  FORGOT PASSWORD CARD  */}
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
                Reset your password
              </h2>

              <p className="mt-1.5 text-[14px] text-text-secondary">
                Enter your email to receive a verification code
              </p>
            </div>

            {/*  FORM  */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className={`h-12 w-full rounded-lg border ${
                      error ? "border-danger/70" : "border-border-subtle"
                    } bg-background/60 pl-12 pr-4 text-[15px] text-text-primary outline-none placeholder:text-text-muted transition-colors duration-200 focus:border-primary/70`}
                  />
                </div>

                {/* ERROR */}
                {error && <p className="mt-2 text-sm text-danger">{error}</p>}
              </div>

              {/* SEND OTP */}
              <button
                type="submit"
                disabled={loading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]">
                <Send size={18} strokeWidth={1.8} />

                {loading ? "Sending..." : "Send verification code"}
              </button>
            </form>

            {/* FOOTER */}
            <AuthFooter
              text="Remember your password?"
              linkText="Sign in"
              linkTo="/login"
            />
          </AuthCard>
        </section>
      </main>

      {/*  FOOTER  */}
      <footer className="absolute bottom-6 left-8 text-sm text-text-muted lg:left-16">
        © 2026 SecureVault. All rights reserved.
      </footer>
    </div>
  );
};

export default ForgotPassword;
