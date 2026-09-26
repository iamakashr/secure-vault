import { Shield, Clock3, MonitorSmartphone } from "lucide-react";
import { Link } from "react-router-dom";

const featureIcons = [Shield, Clock3, MonitorSmartphone];

const AuthBrandPanel = ({
  logo,
  title,
  description,
  features = [],
  securityBadges = [],
}) => {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden border-r border-border-soft bg-panel px-18 py-18">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                var(--color-border-soft) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                var(--color-border-soft) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 30% 20%, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 30% 20%, black 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="SecureVault" className="h-9 w-auto" />
      </Link>

      {/* Main brand content */}
      <div className="relative z-10 mt-12 max-w-116">
        <h1 className="text-[2.35rem] font-semibold leading-[1.28] tracking-normal text-text">
          {title}
        </h1>

        <p className="mt-[1.1rem] max-w-[38ch] text-[0.98rem] leading-[1.65] text-text-dim">
          {description}
        </p>

        {/* Features */}
        <div className="mt-10 flex flex-col gap-[1.1rem]">
          {features.map((feature, index) => {
            const Icon = featureIcons[index] || Shield;

            return (
              <div key={feature} className="flex items-start gap-3">
                <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center">
                  <Icon size={16} strokeWidth={1.8} className="text-accent" />
                </span>

                <span className="text-[0.9rem] leading-6 text-text-dim">
                  {feature}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Security badges */}
      <div className="relative z-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border-soft pt-8">
        {securityBadges.map((badge) => (
          <span
            key={badge}
            className="flex items-center gap-1.5 font-mono text-[0.7rem] tracking-wide text-text-faint">
            <span className="h-1.25 w-1.25 rounded-full bg-accent-dim" />
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AuthBrandPanel;
