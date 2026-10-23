import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import apiClient from "../services/api/client.js";
import { API_ENDPOINT } from "../services/api/endpoints.js";

const ProtectedRoute = () => {
  const location = useLocation();
  const [status, setStatus] = useState("checking");
  const [user, setUser] = useState(null);

  useEffect(() => {
    let active = true;

    const checkAuthentication = async () => {
      try {
        const response = await apiClient.get(API_ENDPOINT.AUTH.ME);

        if (active) {
          setUser(response.data.user);
          setStatus("authenticated");
        }
      } catch {
        if (active) {
          setStatus("unauthenticated");
        }
      }
    };

    checkAuthentication();

    return () => {
      active = false;
    };
  }, []);

  if (status === "checking") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#090b10] text-[#8b93a3]">
        Checking your session...
      </div>
    );
  }

  if (status === "unauthenticated") {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet context={{ user }} />;
};

export default ProtectedRoute;
