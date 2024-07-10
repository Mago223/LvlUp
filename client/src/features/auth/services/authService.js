import { api } from "../../../services/axiosInstance";

const authService = {
	login: async (user) => {
		try {
			const response = await api.post("/auth/login", user);
			return response.data;
		} catch (error) {
			console.error("Login error:", error);
			throw error;
		}
	},

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

	logout: async () => {
		const response = await api.post("auth/logout");
		return response.data;
	},
};

export default authService;
