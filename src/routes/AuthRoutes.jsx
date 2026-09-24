import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import VerificationSuccess from "../features/auth/pages/VerificationSuccess";
import VerifyEmail from "../features/auth/pages/VerifyEmail";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification-success" element={<VerificationSuccess />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
