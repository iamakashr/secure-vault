import { Link } from "react-router-dom";

const AuthFooter = ({ text, linkText, linkTo }) => {
  return (
    <p className="mt-6 text-center text-sm text-text-secondary">
      {text}{" "}
      <Link
        to={linkTo}
        className="ml-1 font-medium text-primary transition hover:text-primary-hover">
        {linkText}
      </Link>
    </p>
  );
};

export default AuthFooter;
