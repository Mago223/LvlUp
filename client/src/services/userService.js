import api from "./axiosInstance";

const userService = {
	delete: async () => {
		await api.post("/users/delete");
		// to be implemented
	},
	me: async () => {
		try {
			const response = await api.get("/users/me");
			return response;
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
};

export default userService;
