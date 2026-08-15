const AuthFeature = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-surface text-primary">
        {icon}
      </div>

      <div>
        <p className="font-semibold text-text-primary">{title}</p>

        <p className="mt-1 text-sm text-text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default AuthFeature;
