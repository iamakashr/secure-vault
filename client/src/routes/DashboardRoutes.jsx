import { Routes, Route, useOutletContext } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const DashboardPlaceholder = () => {
  const { user } = useOutletContext();

  return (
    <div className="min-h-screen bg-[#090b10] p-8 text-[#e8eaf0]">
      <h1 className="text-2xl font-semibold">
        Welcome back, {user?.name || "User"} 👋
      </h1>

      <p className="mt-2 text-[#8b93a3]">
        Your vault is ready. Let's keep your digital life secure.
      </p>
    </div>
  );
};

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPlaceholder />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
