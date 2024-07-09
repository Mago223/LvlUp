import { createContext, useState, useEffect } from "react";
import axios from "axios";

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
export const AuthContext = createContext();
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
      // Send GET request to check auth status
      const response = await axios.get("/api/auth/check", {
        withCredentials: true, // Ensures cookies are sent with the request
      });
      // If response is successful, set authenticated to true
      if (response.status === 200) {
        setIsAuthenticated(true);
        // If response is not 200, set authenticated to false
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      // If there's an error (e.g., network error, server error), set authenticated to false
      setIsAuthenticated(false);
    }
  };

  /**
   * Effect hook to validate token on component mount
   * This ensures the authentication state is checked when the app loads
   */
  useEffect(() => {
    validateToken();
  }, []);

  /**
   * Renders the AuthContext.Provider component
   *
   * @returns {React.Element} AuthContext.Provider wrapping the children
   * The Provider makes the following values available to its descendants:
   * - isAuthenticated: Boolean indicating whether the user is authenticated
   * - setIsAuthenticated: Function to update the authentication state
   */
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
