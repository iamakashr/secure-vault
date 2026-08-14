import { Routes, Route } from "react-router-dom";
import Splash from "../pages/auth/Splash";
import Welcome from "../pages/auth/Welcome";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. Initial 3-second loader entryway */}
      <Route path="/" element={<Splash />} />

      {/* 2. Onboarding welcome landing page */}
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
export default AppRoutes;
