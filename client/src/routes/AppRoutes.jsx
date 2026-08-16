import { Routes, Route } from "react-router-dom";
import Splash from "../pages/auth/Splash";
import Welcome from "../pages/auth/Welcome";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

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
    </Routes>
  );
};
export default AppRoutes;
