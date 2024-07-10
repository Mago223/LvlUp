const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");
const userAuth = require("../middleware/userAuth");
const { body } = require("express-validator");
/**
 * Authentication API Router
 *
 * This router handles authentication-related routes, specifically
 * checking if a user's token is valid.
 */

/**
 * Route to check if a user's authentication token is valid
 *
 * @route GET /check
 * @middleware auth.authenticateToken - Validates the user's token
 * @returns {string} A message indicating the token is valid
 *
 * How it works:
 * 1. When a request comes to this route, it first goes through the authenticateToken middleware.
 * 2. If the token is valid, the middleware allows the request to proceed to the route handler.
 * 3. The route handler then sends a 200 status code with a message "Token is valid".
 * 4. If the token is invalid, the middleware will handle the error before reaching this route.
 */

router.get("/isAuthenticated", auth.authenticateToken, (req, res) => {
	res.status(200).json({ isAuthenticated: true });
});

/**
 * User Signup Route
 * POST /signup
 * This route handles user registration. It first passes through the saveUser middleware
 * for initial processing or validation, then calls the signup controller function.
 */
router.post(
	"/signup",
	[
		body("username").isLength({ min: 3 }).trim().escape(),
		body("email").isEmail().normalizeEmail(),
		body("password").isLength({ min: 6 }),
		userAuth.validateUser,
	],
	authController.signup
);

/**
 * User Login Route
 * POST /login
 *
 * This route handles user authentication. It directly calls the login controller function.
 */
router.post(
	"/login",
	[body("email").isEmail().normalizeEmail(), body("password").notEmpty()],
	authController.login
);

/**
 * User Logout Route
 * POST /logout
 *
 * This route handles user logout. It clears the JWT cookie.
 */
router.post("/logout", auth.authenticateToken, authController.logout);

module.exports = router;
