const AuthFooter = ({ text, linkText, onLinkClick }) => {
  return (
    <p className="mt-6 text-center text-sm text-slate-300">
      {text}{" "}
      <button
        type="button"
        onClick={onLinkClick}
        className="ml-1 font-medium text-purple-400 transition hover:text-purple-300">
        {linkText}
      </button>
    </p>
  );
};

export default AuthFooter;
