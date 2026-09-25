const AuthFooter = () => {
  return (
    <footer className="flex items-center justify-between border-t border-border px-14 py-7 text-sm text-text-faint">
      <span>© 2026 SecureVault</span>

      <div className="flex items-center gap-8">
        <a href="#" className="transition hover:text-text">
          Privacy Policy
        </a>

        <a href="#" className="transition hover:text-text">
          Terms
        </a>
      </div>
    </footer>
  );
};

export default AuthFooter;
