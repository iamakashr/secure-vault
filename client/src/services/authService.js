import apiClient from "./api/client.js";
import { API_ENDPOINT } from "./api/endpoints.js";

export const register = async (userData) => {
  const response = await apiClient.post(API_ENDPOINT.AUTH.REGISTER, userData);

  return response.data;
};

export const verifyEmail = async (verificationData) => {
  const response = await apiClient.post(
    API_ENDPOINT.AUTH.VERIFY_EMAIL,
    verificationData,
  );

  return response.data;
};

export const resendVerificationOtp = async (email) => {
  const response = await apiClient.post(
    API_ENDPOINT.AUTH.RESEND_VERIFICATION_OTP,
    { email },
  );

  return response.data;
};
