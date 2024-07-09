import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

/**
 * PrivateRoutes: A component to protect routes that require authentication
 *
 * This component checks if a user is authenticated. If they are, it allows
 * access to the protected routes. If not, it redirects them to the login page.
 *
 * @returns {React.Element} Either the protected content or a redirect to login
 */

const PrivateRoutes = () => {
  // Use the AuthContext to get the current authentication status
  const { isAuthenticated } = useContext(AuthContext);

  // If authenticated, render the protected routes, otherwise redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
