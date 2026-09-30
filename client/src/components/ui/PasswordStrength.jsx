const PasswordStrength = ({ password }) => {
  const getStrength = () => {
    if (!password) {
      return {
        score: 0,
        label: "",
      };
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
      return {
        score,
        label: "Weak",
      };
    }

    if (score <= 3) {
      return {
        score,
        label: "Fair",
      };
    }

    if (score === 4) {
      return {
        score,
        label: "Good",
      };
    }

    return {
      score,
      label: "Strong",
    };
  };

  const { score, label } = getStrength();

  if (!password) return null;

  return (
    <div className="mt-2.5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-muted">Password strength</span>

        <span className="text-xs font-medium text-text-secondary">{label}</span>
      </div>

      <div className="mt-1.5 flex gap-1">
        {[1, 2, 3, 4, 5].map((bar) => (
          <div
            key={bar}
            className={`h-1 flex-1 rounded-full transition-colors duration-200 ${
              bar <= score ? "bg-primary" : "bg-border-subtle"
            }`}
          />
        ))}
      </div>

      <p className="mt-1.5 text-[11px] text-text-muted">
        Use 8+ characters with uppercase, numbers, and symbols.
      </p>
    </div>
  );
};

export default PasswordStrength;
