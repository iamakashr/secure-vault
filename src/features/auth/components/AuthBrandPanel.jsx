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
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden border-r border-border-soft bg-panel px-[4.5rem] py-[4.5rem] max-[940px]:min-h-0 max-[940px]:border-r-0 max-[940px]:border-b max-[940px]:px-9 max-[940px]:py-12">
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
      <div className="relative z-10 mt-12 max-w-[420px]">
        <h1 className="text-[2.35rem] font-semibold leading-[1.22] tracking-tight text-text max-[940px]:text-[1.8rem]">
          {title}
        </h1>

        <p className="mt-[1.1rem] max-w-[38ch] text-[0.98rem] leading-[1.65] text-text-dim">
          {description}
        </p>

        {/* Features */}
        <div className="mt-10 flex flex-col gap-[1.1rem] max-[940px]:mt-7">
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
      <div className="relative z-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border-soft pt-8 max-[940px]:pt-6">
        {securityBadges.map((badge) => (
          <span
            key={badge}
            className="flex items-center gap-1.5 font-mono text-[0.7rem] tracking-wide text-text-faint">
            <span className="h-[5px] w-[5px] rounded-full bg-accent-dim" />
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AuthBrandPanel;
