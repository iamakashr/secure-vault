import { useState } from "react";
import { login as loginUser } from "../../../services/authService";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (userData) => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await loginUser(userData);

      return data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Login failed. Please try again.";

      setError(message);

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
    error,
  };
};

export default useLogin;
