import api from "./axiosInstance";

const userService = {
	delete: async () => {
		await api.post("/users/delete");
		// to be implemented
	},

	/**
	 * This method sends a GET request to the backend to get the current user.
	 * @throws an error if the user cannot be found
	 * @returns the user
	 */
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
