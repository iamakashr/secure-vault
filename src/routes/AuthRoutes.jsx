import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import VerificationSuccess from "../features/auth/pages/VerificationSuccess";
import VerifyEmail from "../features/auth/pages/VerifyEmail";
import ForgotPassword from "../features/auth/pages/ForgotPassword";
import VerifyOtp from "../features/auth/pages/VerifyOtp";
import ResetPassword from "../features/auth/pages/ResetPassword";
import PasswordChanged from "../features/auth/pages/PasswordChanged";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification-success" element={<VerificationSuccess />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-changed" element={<PasswordChanged />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
