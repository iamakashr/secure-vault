const SocialLogin = () => {
  return (
    <>
      {/* Divider */}
      <div className="my-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-border-subtle" />

        <span className="whitespace-nowrap text-xs text-text-muted">
          or continue with
        </span>

        <div className="h-px flex-1 bg-border-subtle" />
      </div>

      {/* Google */}
      <button
        type="button"
        className="flex h-12 w-full items-center justify-center gap-4 rounded-lg border border-border-subtle bg-background/50 text-[15px] font-medium text-text-primary transition-all duration-200 hover:border-primary/40 active:scale-[0.99]">
        <span className="text-lg font-bold text-text-primary">G</span>

        <span>Continue with Google</span>
      </button>
    </>
  );
};

export default SocialLogin;
