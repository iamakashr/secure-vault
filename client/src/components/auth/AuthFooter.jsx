import { Link } from "react-router-dom";

const AuthFooter = ({ text, linkText, linkTo }) => {
  return (
    <p className="mt-6 text-center text-sm text-slate-300">
      {text}{" "}
      <Link
        to={linkTo}
        className="ml-1 font-medium text-purple-400 transition hover:text-purple-300">
        {linkText}
      </Link>
    </p>
  );
};

export default AuthFooter;
