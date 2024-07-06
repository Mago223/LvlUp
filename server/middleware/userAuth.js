/**
 * User Registration Middleware
 *
 * This module provides middleware for validating user registration data.
 * It checks if the username or email already exists in the database before
 * allowing the registration process to continue.
 */

const { validationResult } = require("express-validator");
const db = require("../config/db.config");
const User = db.users;

/**
 * Middleware to check if username or email already exists
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {void}
 */
const validateUser = async (req, res, next) => {
	try {
		// Check input validation results
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// Check if username already exists
		const existingUsername = await User.findOne({
			where: { username: req.body.username },
		});
		if (existingUsername) {
			return res.status(409).json({ error: "Username already taken" });
		}

		// Check if email already exists
		const existingEmail = await User.findOne({
			where: { email: req.body.email },
		});
		if (existingEmail) {
			return res.status(409).json({ error: "Email already taken" });
		}

		next();
	} catch (error) {
		console.error("User validation error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

module.exports = {
	validateUser,
};
