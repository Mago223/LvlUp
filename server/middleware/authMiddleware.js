const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
	// retrieve token
	const token = req.cookies.jwt;

	// check token existence
	if (!token) {
		return res.status(401).json({ error: "Access denied. No token provided." });
	}

	// verify the token
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
		req.user = decoded;
		next();
	} catch (error) {
		return res.status(403).json({ error: "Invalid token." });
	}
};
