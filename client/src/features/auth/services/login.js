import axios from "axios";
const DB_HOST = import.meta.env.VITE_DB_HOST;
const loginEndPoint = "/users/login";

export const login = async (userObject) => {
	if (typeof userObject === "object" && userObject !== null) {
		try {
			const response = await axios.post(`${DB_HOST}${loginEndPoint}`, userObject);
			return response;
		} catch (error) {
			console.error("Login error:", error.response?.data || error.message);
			throw error;
		}
	} else {
		throw new Error("Invalid user object provided");
	}
};
