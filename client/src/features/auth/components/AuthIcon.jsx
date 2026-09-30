const AuthIcon = ({ icon: Icon, success = false }) => {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface">
      <Icon className={`h-7 w-7 ${success ? "text-good" : "text-accent"}`} />
    </div>
  );
};

export default AuthIcon;
