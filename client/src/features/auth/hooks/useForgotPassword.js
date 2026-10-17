import { useState } from "react";
import { forgotPassword as requestPasswordReset } from "../../../services/authService";

const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const forgotPassword = async (userData) => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await requestPasswordReset(userData);
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Password reset request failed. Please try again.";

      setError(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return {
    forgotPassword,
    isLoading,
    error,
  };
};



export default useForgotPassword;
