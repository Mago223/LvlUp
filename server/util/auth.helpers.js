const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//********************** EXPLAIN JWT TOKEN **********************/
/*
    Think of a token like a special bracelet you get at an amusement park. When you first enter (log in), you get this bracelet (token). Every time you want to go on a ride (access a protected part of the website), you show your bracelet instead of buying a new ticket.
Setting a cookie is like the park attendant putting that bracelet on your wrist. Your web browser (like Chrome or Firefox) keeps this bracelet (cookie) safe, and shows it to the website whenever you visit again.
When you connect this to the frontend:

The backend (server) creates the special bracelet (token) and puts it on your wrist (sets the cookie).
Your frontend (browser) automatically shows this bracelet every time it talks to the backend, so the backend knows it's really you.


Explaining generateToken(userId):
This is like a machine that makes those special bracelets (tokens) for the amusement park.
It takes your unique visitor number (userId).
It uses a super-secret code (JWT_SECRET_KEY) that only the park knows.
It makes a bracelet that will stop working after 24 hours (expiresIn: "24h"), so you can't use yesterday's bracelet today.

Explaining setJwtCookie:

This is like the park attendant putting the bracelet on your wrist.

It puts the bracelet (token) somewhere safe in your browser.
It sets it to fall off after 24 hours (maxAge: 24 * 60 * 60 * 1000).
It makes sure only the amusement park website can see it (httpOnly: true), so other websites can't steal it.
If you're on the real park website (not a fake one), it makes the bracelet extra secure (secure: true in production).
It makes sure the bracelet only works for this park, not any other parks (sameSite: "strict"), to keep it extra safe.
*/

/**
 * Generates a JWT token for a given user ID
 * @param {string} userId - The user's ID
 * @returns {string} The generated JWT token
 */
const generateToken = (userId) => {
	return jwt.sign({ id: userId }, process.env.SECRET_KEY, {
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
	/*
        Imagine you're making a secret code by mixing up the letters in a word. The number 12 here is like saying "mix it up 12 times". The higher this number, the more times it gets mixed up, which makes it harder for people to figure out.
    */
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
