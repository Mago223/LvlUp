const db = require("../config/db.config");
const {
	generateToken,
	setJwtCookie,
	hashPassword,
	comparePasswords,
	clearCookie,
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

const logout = async (req, res) => {
	try {
		if (!req.cookies.jwt) {
			return res.status(400).json({ message: "No active session found" });
		}
		clearCookie(res);
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.error("Logout error:", error);
		res.status(500).json({ error: "An error occurred during logout", details: error.message });
	}
};

module.exports = {
	signup,
	login,
	logout,
};
