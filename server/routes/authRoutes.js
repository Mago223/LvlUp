const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

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

router.get("/check", auth.authenticateToken, (req, res) => {
  res.status(200).send("Token is valid");
});

module.exports = router;
