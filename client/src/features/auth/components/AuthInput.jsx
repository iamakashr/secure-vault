import { forwardRef } from "react";

const AuthInput = forwardRef(
  (
    {
      id,
      name,
      label,
      type = "text",
      placeholder,
      autoComplete,
      icon: Icon,
      error,
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
          {Icon && (
            <Icon
              size={17}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-faint"
            />
          )}

          <input
            {...props}
            ref={ref}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={required}
            className={`w-full rounded-lg border bg-surface py-3 text-sm text-text outline-none transition placeholder:text-text-faint ${
              Icon ? "pl-10 pr-4" : "px-4"
            } ${
              error
                ? "!border-danger focus:!border-danger"
                : "border-border focus:border-accent"
            }`}
          />
        </div>

        {error && <p className="mt-1.5 text-xs text-danger">{error}</p>}
      </div>
    );
  },
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
