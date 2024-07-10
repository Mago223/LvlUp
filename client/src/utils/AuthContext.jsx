import { createContext, useState, useEffect, useContext } from "react";
import authService from "../features/auth/services/authService";
import api from "../services/axiosInstance";

/*
 * AuthContext: React Context for authentication state
 *
 * What is a Context?
 * A Context in React is like a global container for data that can be accessed
 * by many components without explicitly passing the data through props at every level.
 * It's useful for sharing data that can be considered "global" for a tree of React components,
 * such as the current authenticated user, theme, or preferred language.
 *
 * In this case, AuthContext will hold and provide authentication information
 * to any component in our app that needs it, without having to pass props
 * down through every level of the component tree.
 */

// create context
export const AuthContext = createContext(null);
/**
 * AuthProvider: Component that wraps the app to provide authentication context
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped
 */
export const AuthProvider = ({ children }) => {
	/**
	 * State to track whether the user is authenticated
	 * @type {[boolean, function]} isAuthenticated, setIsAuthenticated
	 */
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const [loading, setLoading] = useState(true);

	/**
	 * Validates the user's authentication token
	 * Sends a request to the server to check if the current token is valid
	 * Updates the isAuthenticated state based on the response
	 *
	 * @async
	 * @function validateToken
	 */

	const validateToken = async () => {
		try {
			const isAuth = await authService.checkAuth();
			setIsAuthenticated(isAuth);
		} catch (error) {
			// If there's an error (e.g., network error, server error), set authenticated to false
			setIsAuthenticated(false);
		} finally {
			setLoading(false);
		}
	};

	/**
	 * Effect hook to validate token on component mount
	 * This ensures the authentication state is checked when the app loads
	 */
	useEffect(() => {
		validateToken();
	}, []);

	// login and logout functions and etc
	const login = async (user) => {
		try {
			const response = await api.post("/auth/login", user);
			setIsAuthenticated(true);
			return response;
		} catch (error) {
			console.error("Login error:", error);
			throw error;
		}
	};

	const logout = async () => {
		const response = await api.post("auth/logout");
		setIsAuthenticated(false);
		return response;
	};

	/**
	 * Renders the AuthContext.Provider component
	 *
	 * @returns {React.Element} AuthContext.Provider wrapping the children
	 * The Provider makes the following values available to its descendants:
	 * - isAuthenticated: Boolean indicating whether the user is authenticated
	 * - setIsAuthenticated: Function to update the authentication state
	 */
	return (
		<AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
