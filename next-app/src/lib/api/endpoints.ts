export const API_ENDPOINTS: Record<string, string> = {
  HOME: "/",
  LOGIN: "/api/auth/login",
  REGISTER: "/api/auth/register",
  FORGET_PASSWORD: "/api/auth/forget-password",
  LOGOUT: "/api/auth/logout",
  CHANGE_PASSWORD: "/api/auth/change-password",
  RESET_PASSWORD: "/api/auth/reset-password",
  VERIFY_FORGET_PASSWORD: "/api/auth/verify-forget-password-token",

  TOKEN: "/sanctum/csrf-cookie"
};
