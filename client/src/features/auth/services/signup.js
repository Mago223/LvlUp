import axios from "axios";
const DB_HOST = import.meta.env.VITE_DB_HOST;
const signupEndPoint = "/users/signup";

export const signup = async (userObject) => {
	if (typeof userObject === "object" && userObject !== null) {
		try {
			const response = await axios.post(`${DB_HOST}${signupEndPoint}`, userObject);
			return response;
		} catch (error) {
			console.error("Login error:", error.response?.data || error.message);
			throw error;
		}
	} else {
		throw new Error("Invalid user object provided");
	}
};
