/**
 * Main Server File for Express Application
 *
 * This file sets up and configures an Express server with Sequelize ORM for database operations.
 * It includes user routes, database synchronization, and basic error handling.
 */

const express = require("express");
const sequelize = require("sequelize");
const dotenv = require("dotenv").config(); // Load environment variables
const cookieParser = require("cookie-parser");
const db = require("./config/db.config"); // Database configuration
const userRoutes = require("./routes/userRoutes"); // User-related routes
const app = express();
const cors = require("cors");

// CORS Configuration
const corsOptions = {
	origin: process.env.CLIENT_URL || "http://localhost:5173", // Allow your frontend URL
	credentials: true, // Allow cookies to be sent
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware setup
app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse Cookie header and populate req.cookies

// Database synchronization
// Warning: { force: true } will drop the table if it already exists
// synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: true }).then(() => {
	console.log("db has been re sync");
});

// Routes for the user API
app.use("/api/users", userRoutes);

// Root route (used to make sure db is connected - tester)
app.get("/", (req, res) => {
	res.json({ message: "Welcome to the application Fitness!" });
});

const PORT = process.env.PORT || 3000; // server runs on port 3000 by default

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

/**
 * Notes:
 * 1. Error Handling: Consider adding global error handling middleware.
 * 2. Security: Implement necessary security measures (e.g., helmet, cors).
 * 3. Logging: Add a logging mechanism for better debugging and monitoring.
 * 4. Environment: Ensure all sensitive information is stored in environment variables.
 * 5. Database Sync: { force: true } in db.sync() will reset the database on every server restart.
 *    Use with caution in production.
 */
