import { api } from "../../../services/axiosInstance";

const authService = {
	async login(user) {
		try {
			const response = await api.post("/users/login", user);
			return response.data;
		} catch (error) {
			console.error("Login error:", error);
			throw error;
		}
	},

	async signup(user) {
		try {
			const response = await api.post("/users/signup", user);
			return response.data;
		} catch (error) {
			console.error("Login error:", error);
			throw error;
		}
	},

	async check() {
		try {
			await api.get("/api/auth/check", {
				withCredentials: true,
			});
			return true;
		} catch (error) {
			console.error("Authentication check failed:", error);
			return false;
		}
	},
};

export default authService;
