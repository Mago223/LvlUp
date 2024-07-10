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
	clearCookie,
} = require("../util/auth.helpers");
const User = db.users;

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
		res.status(500).json({
			error: "An error occurred while deleting the account",
			details: error,
		});
	}
};

const getMe = async (req, res) => {
	try {
		const userId = req.user.id;
		const user = await User.findOne({ where: { id: userId } });
		if (user) {
			return res.status(200).json({ user: user });
		} else {
			return res.status(404).json({ error: "User not found" });
		}
	} catch (error) {
		console.error("'Delete' account error:", error);
		res.status(500).json({
			error: "An error occurred while getting the users account",
			details: error,
		});
	}
};

module.exports = {
	deleteUserAccount,
	getMe,
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
