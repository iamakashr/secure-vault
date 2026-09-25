import { LockKeyhole, Eye, EyeOff } from "lucide-react";

const PasswordInput = ({
  id = "password",
  name = "password",
  label = "Password",
  placeholder = "Create a strong master password",
  autoComplete = "new-password",
  value,
  onChange,
  showPassword = false,
  onToggleVisibility,
}) => {
  return (
    <div className="mb-[1.15rem]">
      <label
        htmlFor={id}
        className="mb-2 block text-[0.82rem] font-medium text-text-dim">
        {label}
      </label>

      <div className="relative flex items-center">
        <LockKeyhole
          size={15}
          strokeWidth={1.8}
          className="pointer-events-none absolute left-3.5 text-text-faint"
        />

        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className="w-full rounded-lg border border-border bg-surface py-[0.68rem] pl-10 pr-11 text-sm text-text outline-none placeholder:text-text-faint transition-colors hover:border-[#29303c] focus:border-accent-dim focus:bg-surface-raised focus:ring-4 focus:ring-accent-glow"
        />

        <button
          type="button"
          onClick={onToggleVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute right-3 flex items-center justify-center p-1 text-text-faint hover:text-text-dim focus-visible:outline-2 focus-visible:outline-accent">
          {showPassword ? (
            <EyeOff size={16} strokeWidth={1.8} />
          ) : (
            <Eye size={16} strokeWidth={1.8} />
          )}
        </button>
      </div>

      <p className="mt-2 text-[0.76rem] leading-6 text-text-faint">
        Use at least 12 characters. This unlocks your entire vault, so make it
        one only you know.
      </p>
    </div>
  );
};

export default PasswordInput;
