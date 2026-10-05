import { forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = forwardRef(
  (
    {
      id,
      name,
      label,
      placeholder = "••••••••",
      autoComplete = "new-password",
      error,
      showPassword,
      onToggleVisibility,
      required = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="mb-5">
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-text">
          {label}
        </label>

        <div className="relative">
          <input
            {...props}
            ref={ref}
            id={id}
            name={name}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={required}
            className={`w-full rounded-lg border bg-surface py-3 pl-4 pr-11 text-sm text-text outline-none transition placeholder:text-text-faint ${
              error
                ? "border-danger! focus:border-danger!"
                : "border-border focus:border-accent"
            }`}
          />

          <button
            type="button"
            onClick={onToggleVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-faint transition hover:text-text"
            aria-label={showPassword ? "Hide password" : "Show password"}>
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>

        {error && <p className="mt-1.5 text-xs text-danger">{error}</p>}
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
