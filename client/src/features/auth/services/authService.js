import { api } from "../../../services/axiosInstance";

const authService = {
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
