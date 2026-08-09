import { Routes, Route } from "react-router-dom";
import Splash from "../pages/auth/Splash";
import Welcome from "../pages/auth/Welcome";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. Initial 3-second loader entryway */}
      <Route path="/" element={<Splash />} />

      {/* 2. Onboarding welcome landing page */}
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
};
export default AppRoutes;
