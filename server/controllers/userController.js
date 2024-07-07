/**
 * User Authentication Controller
 *
 * This file contains controller functions for user authentication operations,
 * specifically signup and login. It handles user creation, password hashing,
 * JWT token generation, and user verification.
 */

const db = require("../config/db.config");
const { validationResult } = require("express-validator");
const {
	generateToken,
	setJwtCookie,
	hashPassword,
	comparePasswords,
} = require("../util/auth.helpers");
const User = db.users;

/**
 * User Signup Controller
 *
 * Handles the creation of a new user account.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const signup = async (req, res) => {
	try {
		const { username, fullName, email, password } = req.body;

		// Hash password
		const hashedPassword = await hashPassword(password);

		// Create new user
		const newUser = await User.create({
			username,
			fullName,
			email,
			password: hashedPassword,
		});

		// Generate token and set cookie
		const token = generateToken(newUser.id);
		setJwtCookie(res, token);

		// Send response
		res.status(201).json({
			message: "User created successfully",
			user: {
				id: newUser.id,
				username: newUser.username,
				email: newUser.email,
			},
		});
	} catch (error) {
		console.error("Signup error:", error);
		res.status(500).json({ error: "An error occurred during signup" });
	}
};

/**
 * User Login Controller
 *
 * Handles user authentication for login.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Find user by email
		const user = await User.findOne({ where: { email } });
		if (!user) {
			return res
				.status(401)
				.json({ error: "Authentication failed", message: "User not found by email" });
		}

		// Compare passwords
		const isPasswordValid = await comparePasswords(password, user.password);
		if (!isPasswordValid) {
			return res
				.status(401)
				.json({ error: "Authentication failed", message: "Password not valid" });
		}

		// Generate token and set cookie
		const token = generateToken(user.id);
		setJwtCookie(res, token);

		// Send response
		res.status(200).json({
			message: "Login successful",
			user: {
				id: user.id,
				username: user.username,
				email: user.email,
			},
		});
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ error: "An error occurred during login", message: error });
	}
};

const deleteUserAccount = async (req, res) => {
	try {
		const userId = req.user.id; // comes from the user authorization
		const deletedUser = await User.destroy({
			where: { id: userId },
		});
		if (deletedUser) {
			res.clearCookie("jwt");
			return res.status(200).json({ message: "Account successfully deleted" });
		} else {
			return res.status(404).json({ error: "User not found" });
		}
	} catch (error) {
		console.error("'Delete' account error:", error);
		res.status(500).json({ error: "An error occurred while deleting the account" });
	}
};

module.exports = {
	signup,
	login,
	deleteUserAccount,
};

/**
 * Security Considerations:
 * 1. Password Hashing: Ensure bcrypt salt rounds are sufficient (currently 10).
 * 2. JWT Secret: Use a strong, unique secret key stored securely in environment variables.
 * 3. Error Handling: Implement more robust error handling and avoid exposing sensitive information.
 * 4. Input Validation: Add thorough input validation for all user inputs.
 * 5. Rate Limiting: Implement rate limiting to prevent brute-force attacks.
 * 6. Logging: Use a secure logging mechanism, avoiding logging sensitive data.
 */
