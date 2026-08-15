import { Link } from "react-router-dom";

import SecureVaultlogoHorizontalDark from "../../assets/logos/securevault-logo-horizontal-dark.png";

const Welcome = () => {
  return (
    <div className="h-screen overflow-hidden bg-background font-sans text-text-primary antialiased">
      {/* NAVBAR */}
      <header className="relative z-50 h-20 w-full border-b border-border-subtle bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-8">
          {/* LOGO */}
          <Link to="/welcome" className="flex items-center">
            <img
              src={SecureVaultlogoHorizontalDark}
              alt="SecureVault"
              className="w-44 object-contain"
            />
          </Link>

          {/* NAVIGATION */}
          <div className="flex items-center gap-11">
            <Link
              to="/features"
              className="text-[14px] font-medium uppercase tracking-wide text-text-secondary transition-colors duration-200 hover:text-text-primary">
              Features
            </Link>

            <Link
              to="/security"
              className="text-[14px] font-medium uppercase tracking-wide text-text-secondary transition-colors duration-200 hover:text-text-primary">
              Security
            </Link>

            <Link
              to="/protection"
              className="text-[14px] font-medium uppercase tracking-wide text-text-secondary transition-colors duration-200 hover:text-text-primary">
              Protection
            </Link>
          </div>

          {/* NAV ACTIONS */}
          <div className="flex items-center gap-4">
            {/* SIGN IN */}
            <Link
              to="/login"
              className="flex h-12 w-[115px] items-center justify-center rounded-full border border-border-subtle bg-transparent text-[16px] font-medium text-text-secondary transition-all duration-300 ease-out hover:scale-[1.04] hover:border-primary hover:text-text-primary">
              Sign In
            </Link>

            {/* GET STARTED */}
            <Link
              to="/register"
              className="flex h-12 w-[145px] items-center justify-center rounded-full bg-primary px-6 text-[16px] font-semibold text-white transition-all duration-300 ease-out hover:scale-[1.04] hover:bg-primary ">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main className="mx-auto grid h-[calc(100vh-80px)] max-w-7xl grid-cols-2 items-center gap-12 overflow-hidden px-8">
        {/*  LEFT SIDE */}
        <section className="z-10 flex max-w-[570px] flex-col justify-center">
          {/* CATEGORY */}
          <div className="group mb-12 inline-flex w-fit items-center gap-2.5 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 shadow-[0_0_20px_rgba(139,92,246,0.08)] transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_24px_rgba(139,92,246,0.16)]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(139,92,246,0.9)] transition-shadow duration-300 group-hover:shadow-[0_0_12px_rgba(139,92,246,1)]" />

            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-primary/90 transition-colors duration-300 group-hover:text-primary">
              Password Security
            </span>
          </div>

          {/* HEADING */}
          <h1 className="font-sans text-[clamp(3.2rem,5.8vw,6.2rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-text-primary">
            Your
            <br />
            digital life,
            <br />
            <span className="relative inline-block text-primary">
              secured
              {/* CURVED UNDERLINE */}
              <svg
                className="absolute -bottom-[10px] left-0 h-[11px] w-full overflow-visible"
                viewBox="0 0 400 11"
                preserveAspectRatio="none">
                <path
                  d="M2 7 C105 1, 265 2, 398 7"
                  fill="none"
                  stroke="var(--color-secondary)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            in
            <br />
            one vault.
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-10 max-w-[550px] text-[17px] font-normal leading-[1.65] text-text-secondary">
            SecureVault lets you securely store, manage, and protect every
            password in one encrypted place — with real-time security monitoring
            and breach alerts.
          </p>

          {/* CTA */}
          <div className="mt-8 flex items-center gap-5">
            {/* GET STARTED */}
            <Link
              to="/register"
              className="group flex h-[58px] items-center gap-3 rounded-full bg-primary px-8 text-[16px] font-semibold text-white transition-all duration-300 ease-out hover:scale-[1.04] hover:bg-primary hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]">
              Get Started
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* I HAVE AN ACCOUNT */}
            <Link
              to="/login"
              className="flex h-[58px] items-center justify-center rounded-full border border-border-subtle bg-transparent px-8 text-[16px] font-medium text-text-secondary transition-all duration-300 ease-out hover:scale-[1.04] hover:border-primary hover:text-text-primary">
              I have an account
            </Link>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="z-10 flex min-h-0 flex-col items-center justify-center">
          {/* VAULT */}
          <div className="relative flex h-[390px] w-[390px] items-center justify-center">
            {/* OUTER RINGS */}
            <div className="absolute inset-0 rounded-full border border-primary/20" />

            <div className="absolute inset-5 rounded-full border border-primary/15" />

            <div className="absolute inset-12 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.16),transparent_68%)] blur-2xl" />

            {/* VAULT BODY */}
            <div className="relative h-[250px] w-[250px] rounded-[22px] border-2 border-text-primary bg-sidebar shadow-[0_0_50px_rgba(139,92,246,0.18)]">
              {/* INNER PANEL */}
              <div className="absolute inset-[18px] rounded-[15px] border border-primary/40 bg-surface">
                {/* LOCK */}
                <div className="absolute left-5 top-4 text-primary">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8">
                    <rect x="5" y="10" width="14" height="10" rx="2" />
                    <path d="M8 10V7a4 4 0 018 0v3" />
                  </svg>
                </div>

                {/* DIAL */}
                <div className="absolute left-1/2 top-1/2 flex h-[125px] w-[125px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary">
                  <div className="absolute inset-3 rounded-full border border-secondary/70" />

                  <div className="absolute h-full w-px bg-primary/30" />

                  <div className="absolute h-px w-full bg-primary/30" />

                  <div className="relative h-8 w-8 rounded-full bg-primary shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                    <div className="absolute left-1/2 top-[-24px] h-7 w-0.5 -translate-x-1/2 bg-primary" />
                  </div>
                </div>

                {/* RIGHT HANDLE */}
                <div className="absolute right-[-10px] top-1/2 h-7 w-6 -translate-y-1/2 rounded-r-full bg-primary" />
              </div>

              {/* LEFT HINGES */}
              <div className="absolute -left-1 top-[60px] h-7 w-5 rounded-l-md bg-secondary" />

              <div className="absolute -left-1 bottom-[60px] h-7 w-5 rounded-l-md bg-secondary" />

              {/* BOTTOM KEY */}
              <div className="absolute bottom-3 right-[-15px] text-primary">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.7">
                  <circle cx="7" cy="17" r="3" />
                  <path d="M9.5 14.5L20 4M16 4h4v4" />
                </svg>
              </div>
            </div>

            {/* TOP CLOUD */}
            <div className="absolute left-[65px] top-[70px] text-primary/50">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.6">
                <path d="M7 18h10a4 4 0 100-8 5 5 0 00-9.7-1A4 4 0 007 18z" />
              </svg>
            </div>

            {/* TOP SHIELD */}
            <div className="absolute right-[62px] top-[63px] text-primary/50">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.6">
                <path d="M12 3l7 3v5c0 4.8-3 8-7 10-4-2-7.2-5.2-7-10V6l7-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>

            {/* SPARKLES */}
            <span className="absolute right-[35px] top-[125px] text-primary">
              ✦
            </span>

            <span className="absolute left-[52px] top-[165px] text-primary/70">
              ✦
            </span>
          </div>

          {/* STATS */}
          <div className="mt-[-5px] grid w-full max-w-[770px] grid-cols-3 gap-4">
            {/* SECURITY SCORE */}
            <div className="rounded-xl border border-border-subtle bg-surface/80 p-5 transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(139,92,246,0.1)]">
              <div className="mb-5 text-primary">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8">
                  <path d="M12 3l7 3v5c0 4.8-3 8-7 10-4-2-7.2-5.2-7-10V6l7-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>

              <div className="text-3xl font-bold text-text-primary">
                94
                <span className="text-base font-normal text-text-muted">
                  /100
                </span>
              </div>

              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                Security Score
              </div>

              <div className="mt-2 text-[12px] text-text-primary">
                +12 this week
              </div>
            </div>

            {/* STORED PASSWORDS */}
            <div className="rounded-xl border border-border-subtle bg-surface/80 p-5 transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(139,92,246,0.1)]">
              <div className="mb-5 text-info">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8">
                  <circle cx="7" cy="17" r="3" />
                  <path d="M9.5 14.5L20 4M16 4h4v4" />
                </svg>
              </div>

              <div className="text-3xl font-bold text-text-primary">147</div>

              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                Stored Passwords
              </div>

              <div className="mt-2 text-[12px] text-text-primary">
                Encrypted
              </div>
            </div>

            {/* WEAK PASSWORDS */}
            <div className="rounded-xl border border-border-subtle bg-surface/80 p-5 transition-all duration-300 hover:border-warning hover:shadow-[0_0_25px_rgba(245,158,11,0.08)]">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-warning/10 text-warning">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8">
                  <path d="M12 3L2.5 20h19L12 3z" />
                  <path d="M12 9v5M12 17v.5" />
                </svg>
              </div>

              <div className="text-3xl font-bold text-text-primary">
                3
                <span className="ml-1 text-base font-normal text-text-muted">
                  found
                </span>
              </div>

              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                Weak Passwords
              </div>

              <div className="mt-2 text-[12px] text-text-primary">
                Needs attention
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Welcome;
