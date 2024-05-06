import axios from "axios";
import { getToken } from "./get-token";
import { AuthService } from "@/services/auth/auth.service";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // TODO: take this api URL from env
  timeout: 30000,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});



// Change request data/error here
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ""}`,
    };
    return config;
  },
  (error) => {

    return Promise.reject(error);
  }
);



http.interceptors.response.use(
  (response) => {
    // Modify the response data or handle the response
    return response?.data;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default http;
