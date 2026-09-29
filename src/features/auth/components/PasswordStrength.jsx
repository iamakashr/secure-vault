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

  const strengthColor =
    password.length === 0
      ? "var(--color-border)"
      : score <= 2
        ? "var(--color-danger)"
        : "var(--color-good)";

  return (
    <div className="mt-3 mb-2">
      {/* Strength bars */}
      <div className="flex gap-1">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="h-1 flex-1 rounded-full"
            style={{
              backgroundColor:
                index < score ? strengthColor : "var(--color-border)",
            }}
          />
        ))}
      </div>

      {/* Strength information */}
      <div className="mt-1.5 flex justify-between">
        <span
          className="text-[0.72rem]"
          style={{
            color:
              password.length > 0 ? strengthColor : "var(--color-text-faint)",
          }}>
          {password.length > 0 ? labels[score] : "—"}
        </span>

        <span className="text-[0.72rem] text-text-faint">{score}/5</span>
      </div>
    </div>
  );
};

export default PasswordStrength;
