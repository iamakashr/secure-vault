const AuthInput = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
  icon: Icon,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-[1.15rem]">
      <label
        htmlFor={id}
        className="mb-2 block text-[0.82rem] font-medium text-text-dim">
        {label}
      </label>

      <div className="relative flex items-center">
        {Icon && (
          <Icon
            size={15}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3.5 text-text-faint"
          />
        )}

        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full rounded-lg border border-border bg-surface py-[0.68rem] pl-10 pr-3.5 text-sm text-text outline-none placeholder:text-text-faint transition-colors hover:border-[#29303c] focus:border-accent-dim focus:bg-surface-raised focus:ring-4 focus:ring-accent-glow"
        />
      </div>
    </div>
  );
};

export default AuthInput;
