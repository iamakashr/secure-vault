const OAuthButton = ({ icon, children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-[#2a3340] hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">
      {icon && <img src={icon} alt="" className="h-4 w-4" />}

      {children}
    </button>
  );
};

export default OAuthButton;
