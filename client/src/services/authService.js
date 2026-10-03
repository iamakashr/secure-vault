import apiClient from "./api/client.js";
import { API_ENDPOINT } from "./api/endpoints.js";

export const register = async (userData) => {
  const response = await apiClient.post(API_ENDPOINT.AUTH.REGISTER, userData);

  return response.data;
};



