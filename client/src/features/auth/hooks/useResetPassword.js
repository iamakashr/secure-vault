import { useState } from "react";
import { resetPassword as requestPasswordReset } from "../../../services/authService";

const useResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetPassword = async (passwordData) => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await requestPasswordReset(passwordData);
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Password reset failed. Please try again.";

      setError(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    resetPassword,
    isLoading,
    error,
  };
};

export default useResetPassword;
