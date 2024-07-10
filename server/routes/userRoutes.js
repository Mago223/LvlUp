/**
 * User Routes Configuration
 *
 * This file defines the routes for user authentication operations including signup and login.
 * It uses Express Router to organize these routes and associates them with the appropriate
 * controller functions and middleware.
 */

const express = require("express");
const userController = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/delete", auth.authenticateToken, userController.deleteUserAccount);

router.get("/me", auth.authenticateToken, userController.getMe);

module.exports = router;
