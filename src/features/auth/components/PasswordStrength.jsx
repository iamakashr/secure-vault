const PasswordStrength = ({ password = "" }) => {
  const checks = [
    password.length >= 8,
    /[a-z]/.test(password),
    /[A-Z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];

  const score = checks.filter(Boolean).length;

  const labels = ["", "Weak", "Weak", "Fair", "Good", "Strong"];

  const strengthColors = [
    "var(--color-border)",
    "var(--color-danger)",
    "var(--color-danger)",
    "var(--color-mid)",
    "var(--color-good)",
    "var(--color-good)",
  ];

  return (
    <div className="mt-3">
      <div className="flex gap-1">
        {checks.map((passed, index) => (
          <div
            key={index}
            className="h-1 flex-1 rounded-full"
            style={{
              backgroundColor:
                passed && password.length > 0
                  ? strengthColors[score]
                  : "var(--color-border)",
            }}
          />
        ))}
      </div>

      <div className="mt-1.5 flex justify-between">
        <span
          className="text-[0.72rem]"
          style={{
            color:
              password.length > 0
                ? strengthColors[score]
                : "var(--color-text-faint)",
          }}>
          {password.length > 0 ? labels[score] : "—"}
        </span>

        <span className="text-[0.72rem] text-text-faint">{score}/5</span>
      </div>
    </div>
  );
};

export default PasswordStrength;
