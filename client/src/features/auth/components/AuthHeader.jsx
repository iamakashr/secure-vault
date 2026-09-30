import { Link } from "react-router-dom";
import logo from "../../../assets/logos/securevault-logo.svg";

const AuthHeader = ({ rightContent }) => {
  return (
    <header className="flex items-center justify-between px-14 py-7">
      {/* SecureVault logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="SecureVault" className="h-9 w-auto" />
      </Link>

      {/* Right side */}
      {rightContent}
    </header>
  );
};

export default AuthHeader;
