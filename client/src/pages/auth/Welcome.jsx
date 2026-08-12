import { Lock, ShieldCheck, Cloud, Moon } from "lucide-react";

import SecureVaultlogoHorizontalDark from "../../assets/logos/securevault-logo-horizontal-dark.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="grid h-screen grid-rows-[80px_minmax(0,1fr)_50px] overflow-hidden bg-background p-7 text-text-primary">
      <header className="flex items-center justify-between">
        {/* Logo */}
        <img
          src={SecureVaultlogoHorizontalDark}
          alt="SecureVault"
          className="w-55 object-contain"
        />

        {/* Dark mode */}
        <button className="flex items-center gap-3 rounded-xl border border-border-subtle hover:bg-surface px-5 py-3 text-sm">
          <Moon className="h-5 w-5 text-primary" />
          <span>Dark</span>
        </button>
      </header>

      <main className="flex min-h-0 items-center justify-around gap-10 overflow-hidden">
        {/* Left side */}
        <div className="h-[85%] w-[45%] border border-border">
          {/* Your vault design will go here */}
        </div>

        {/* Right side */}
        <div className="w-[40%]">
          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight text-text-primary">
            Welcome to
            <br />
            Secure<span className="text-primary">Vault</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
            The secure and simple way to store, manage, and protect your
            passwords.
          </p>

          <div className="mt-8 space-y-5">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-surface">
                <Lock className="h-6 w-6 text-primary" />
              </div>

              <div>
                <p className="font-semibold text-text-primary">
                  Keep your data safe
                </p>

                <p className="mt-1 text-sm text-text-secondary">
                  Advanced encryption keeps your information protected.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-surface">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>

              <div>
                <p className="font-semibold text-text-primary">
                  Built for privacy
                </p>

                <p className="mt-1 text-sm text-text-secondary">
                  Your passwords remain private and protected.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-surface">
                <Cloud className="h-6 w-6 text-primary" />
              </div>

              <div>
                <p className="font-semibold text-text-primary">
                  Access anywhere
                </p>

                <p className="mt-1 text-sm text-text-secondary">
                  Quickly access your passwords whenever you need them.
                </p>
              </div>
            </div>
          </div>

          {/* Get started */}
          <Link
            to="/register"
            className="mt-8 block w-full rounded-xl bg-primary py-4 text-lg font-semibold text-text-primary text-center transition hover:bg-secondary">
            Get Started →
          </Link>

          {/* Sign in */}
          <p className="mt-5 text-center text-sm text-text-secondary">
            Already have an account?
            <Link to="/login" className="ml-2 text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center text-sm text-text-muted">
        Secure • Private • Accessible
      </footer>
    </div>
  );
};

export default Welcome;
