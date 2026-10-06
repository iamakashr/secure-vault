import { useState } from "react";
import { register as registerUser } from "../../../services/authService";

const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (userData) => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await registerUser(userData);

      return data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Registration failed. Please try again.";

      setError(message);

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    isLoading,
    error,
  };
};

export default useRegister;
