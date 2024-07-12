import axios from "axios";
const DB_HOST = import.meta.env.VITE_DB_HOST;
const signupEndPoint = "/users/signup";

export const signup = async (userObject) => {
	if (typeof userObject === "object" && userObject !== null) {
		try {
			const response = await axios.post(`${DB_HOST}${signupEndPoint}`, userObject);
			return response;
		} catch (error) {
			if (error.response) {
                console.error("Signup error response:", error.response.data);
                throw new Error(error.response.data.error);
            } else if (error.request) {
                console.error("Signup error request:", error.request);
                throw new Error("No response from server");
            } else {
                console.error("Signup error message:", error.message);
                throw new Error(error.message);
            }
		}
	} else {
		throw new Error("Invalid user object provided");
	}
};
