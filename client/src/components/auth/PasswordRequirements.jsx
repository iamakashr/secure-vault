const PasswordRequirements = ({ requirements }) => {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-slate-200">
        Password requirements
      </p>

      <div className="space-y-1.5">
        {requirements.map((requirement) => (
          <div
            key={requirement.id}
            className="flex items-center gap-2 text-sm text-slate-400">
            <span
              className={
                requirement.valid ? "text-green-400" : "text-slate-500"
              }>
              {requirement.valid ? "✓" : "○"}
            </span>

            <span>{requirement.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordRequirements;
