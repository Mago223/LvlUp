/**
 * User Routes Configuration
 *
 * This file defines the routes for user authentication operations including signup and login.
 * It uses Express Router to organize these routes and associates them with the appropriate
 * controller functions and middleware.
 */

const express = require("express");
const userController = require("../controllers/userController");
const { signup, login, deleteUserAccount } = userController; // Destructure specific functions from the controller
const userAuth = require("../middleware/userAuth");
const tokenAuth = require("../middleware/authMiddleware");
const { body } = require("express-validator");
const router = express.Router();
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
	signup
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
	login
);

/**
 * User Deletion Route
 * POST /delete
 *
 * This route handles user deletion. It directly calls the deleteUserAccount controller function.
 */
router.post("/delete", tokenAuth, deleteUserAccount);

module.exports = router;

/**
 * Notes:
 * 1. Error Handling: Consider adding route-specific error handling.
 * 2. Validation: Implement request body validation for both routes.
 * 3. Rate Limiting: Consider adding rate limiting to prevent abuse.
 *
 *  Rate limiting is a technique used to control the amount of incoming or outgoing traffic to or from a network service. It ensures that a service can handle requests efficiently without being overwhelmed by too many requests at once, thereby maintaining performance and availability. Rate limiting is commonly used in APIs, web servers, and other network services to protect against abuse, ensure fair usage, and manage resources effectively.
 *
 * 4. Authentication: Ensure proper authentication checks are implemented in the controller functions.
 * 5. Logging: Add logging for each route for monitoring and debugging purposes.
 */
