import { Routes, Route } from "react-router-dom";
import Splash from "../pages/auth/Splash";
import Welcome from "../pages/auth/Welcome";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import VerifyOtp from "../pages/auth/VerifyOtp";
import ResetPassword from "../pages/auth/ResetPassword";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. Initial 3-second loader entryway */}
      <Route path="/" element={<Splash />} />

      {/* 2. Onboarding welcome landing page */}
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};
export default AppRoutes;
