const AuthButton = ({ children, loading = false, type = "submit" }) => {
  return (
    <button
      type={type}
      disabled={loading}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-semibold text-bg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-85">
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-bg/30 border-t-bg" />
      )}

      <span>{children}</span>
    </button>
  );
};

export default AuthButton;
