import { api } from "../../../services/axiosInstance";

const authService = {
	signup: async (user) => {
		try {
			const response = await api.post("/auth/signup", user);
			return response.data;
		} catch (error) {
			console.error("Login error:", error);
			throw error;
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
