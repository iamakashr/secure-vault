import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/splash-bg.png";
import logo from "../../assets/logos/securevault-logo-vertical-dark.png";
import { Lock, ShieldCheck, Cloud } from "lucide-react";

const Splash = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            navigate("/welcome", { replace: true });
          }, 200);

          return 100;
        }

        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-overlay" />

      {/* Top-right security badge */}
      <div className="absolute right-6 top-6 z-20 flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/60 px-5 py-3 backdrop-blur-md sm:right-10 sm:top-10 lg:right-12 lg:top-12">
        <ShieldCheck className="h-7 w-7 shrink-0 text-primary" />

        <div>
          <p className="text-sm font-semibold text-text-primary">
            256-bit Encryption
          </p>

          <p className="mt-0.5 text-sm text-text-secondary">
            Bank-level Security
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-16">
        {/* Logo */}
        <img
          src={logo}
          alt="SecureVault"
          className="h-auto w-[350px] max-w-[85vw] object-contain sm:w-[400px] lg:w-[450px]"
        />

        {/* Tagline */}
        <p className="mt-4 text-center text-base text-text-secondary sm:text-xl">
          Your passwords. Your data. Always secure.
        </p>

        {/* Loading */}
        <div className="mt-10">
          <div className="h-2 w-64 overflow-hidden rounded-full bg-border/40 sm:w-72">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-6 text-center text-sm text-text-secondary">
            Loading your secure vault... {Math.round(progress)}%
          </p>
        </div>
      </main>

      {/* Features */}
      <section className="relative z-10 mx-auto mb-10 w-full max-w-6xl px-6 sm:mb-12">
        <div className="flex flex-col items-center justify-center divide-y divide-border/50 md:flex-row md:divide-x md:divide-y-0">
          {/* Secure */}
          <div className="flex w-full items-center justify-center gap-4 px-6 py-5 md:w-1/3 md:justify-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary-subtle">
              <Lock className="h-6 w-6 text-primary" />
            </div>

            <div>
              <p className="font-semibold text-text-primary">Secure</p>

              <p className="mt-1 whitespace-nowrap text-sm text-text-secondary">
                End-to-end encryption
              </p>
            </div>
          </div>

          {/* Private */}
          <div className="flex w-full items-center justify-center gap-4 px-6 py-5 md:w-1/3 md:justify-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary-subtle">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>

            <div>
              <p className="font-semibold text-text-primary">Private</p>

              <p className="mt-1 whitespace-nowrap text-sm text-text-secondary">
                Zero-knowledge architecture
              </p>
            </div>
          </div>

          {/* Accessible */}
          <div className="flex w-full items-center justify-center gap-4 px-6 py-5 md:w-1/3 md:justify-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary-subtle">
              <Cloud className="h-6 w-6 text-primary" />
            </div>

            <div>
              <p className="font-semibold text-text-primary">Accessible</p>

              <p className="mt-1 whitespace-nowrap text-sm text-text-secondary">
                Anywhere, anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pb-8 text-center sm:pb-10">
        <p className="text-sm text-text-muted">
          © 2025 SecureVault. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Splash;
