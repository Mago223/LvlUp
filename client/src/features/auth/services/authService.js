import { api } from "../../../services/axiosInstance";

const authService = {
  

  signup: async (user) => {
    try {
      const response = await api.post("/auth/signup", user);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Signup error response:", error.response.data);
        throw new Error(
          error.response.data.message || error.response.data.error
        );
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  },

  checkAuth: async () => {
    try {
      const response = await api.get("/auth/isAuthenticated", {
        withCredentials: true,
      });
      return response.data.isAuthenticated;
    } catch (error) {
      console.error("Authentication check failed:", error);
      return false;
    }
  },
};

export default authService;
