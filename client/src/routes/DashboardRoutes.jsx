import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import { PATHS } from "../config/paths.js";

import DashboardHome from "../features/dashboard/pages/DashboardHome.jsx";
import Vault from "../features/dashboard/pages/Vault.jsx";
import Generator from "../features/dashboard/pages/Generator.jsx";
import Security from "../features/dashboard/pages/Security.jsx";
import Profile from "../features/dashboard/pages/Profile.jsx";
import Settings from "../features/dashboard/pages/Settings.jsx";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={PATHS.DASHBOARD.BASE} element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="vault" element={<Vault />} />
          <Route path="generator" element={<Generator />} />
          <Route path="security" element={<Security />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
