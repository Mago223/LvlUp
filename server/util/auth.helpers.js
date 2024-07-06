const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/**
 * Generates a JWT token for a given user ID
 * @param {string} userId - The user's ID
 * @returns {string} The generated JWT token
 */
const generateToken = (userId) => {
	return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
		expiresIn: "24h",
	});
};

/**
 * Sets a JWT cookie in the response
 * @param {Object} res - Express response object
 * @param {string} token - JWT token to be set in the cookie
 */
const setJwtCookie = (res, token) => {
	res.cookie("jwt", token, {
		maxAge: 24 * 60 * 60 * 1000, // 24 hours
		httpOnly: true,
		secure: process.env.NODE_ENV === "production", // Use secure cookies in production
		sameSite: "strict", // Protect against CSRF
	});
};

/**
 * Hashes a password
 * @param {string} password - The password to hash
 * @returns {Promise<string>} The hashed password
 */
const hashPassword = async (password) => {
	return await bcrypt.hash(password, 12);
};

/**
 * Compares a password with a hash
 * @param {string} password - The password to check
 * @param {string} hash - The hash to compare against
 * @returns {Promise<boolean>} Whether the password matches the hash
 */
const comparePasswords = async (password, hash) => {
	return await bcrypt.compare(password, hash);
};

module.exports = {
	generateToken,
	setJwtCookie,
	hashPassword,
	comparePasswords,
};
