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

export const resendEmailOtp = async (email) => {
  const response = await apiClient.post(API_ENDPOINT.AUTH.RESEND_EMAIL_OTP, {
    email,
  });

  return response.data;
};

export const login = async (userData) => {
  const response = await apiClient.post(API_ENDPOINT.AUTH.LOGIN, userData);
  return response.data;
};
export const forgotPassword = async (userData) => {
  const response = await apiClient.post(
    API_ENDPOINT.AUTH.FORGOT_PASSWORD,
    userData,
  );
  return response.data;
};
