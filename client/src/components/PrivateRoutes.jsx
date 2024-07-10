import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

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
	const { isAuthenticated, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return <div>Loading...</div>; // TODO provide proper loading screen
	}

	// If authenticated, render the protected routes, otherwise redirect to login
	return isAuthenticated ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default PrivateRoutes;
