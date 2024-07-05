const bcrypt = require("bcrypt");
const db = require("../../../model");
const jwt = require("jsonwebtoken");

const User = db.users;
const signup = async (req, res) => {
	try {
		const { username, fullName, email, password } = req.body;
		const data = {
			username,
			email,
			fullName,
			password: await bcrypt.hash(password, 10),
		};
		const user = await User.create(data);
		if (user) {
			let token = jwt.sign({ id: user.id }, process.env.secretKey, {
				expiresIn: 1 * 24 * 60 * 60 * 1000,
			});
			res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
			console.log("user", JSON.stringify(user, null, 2));
			console.log(token);
			return res.status(201).send(user);
		} else {
			return res.status(409).send("Details are not correct");
		}
	} catch (error) {
		console.log(error);
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		//find a user by their email
		const user = await User.findOne({
			where: {
				email: email,
			},
		});

		//if user email is found, compare password with bcrypt
		if (user) {
			const isSame = await bcrypt.compare(password, user.password);

			//if password is the same
			//generate token with the user's id and the secretKey in the env file

			if (isSame) {
				let token = jwt.sign({ id: user.id }, process.env.secretKey, {
					expiresIn: 1 * 24 * 60 * 60 * 1000,
				});

				//if password matches wit the one in the database
				//go ahead and generate a cookie for the user
				res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
				console.log("user", JSON.stringify(user, null, 2));
				console.log(token);
				//send user data
				return res.status(201).send(user);
			} else {
				return res.status(401).send("Authentication failed");
			}
		} else {
			return res.status(401).send("Authentication failed");
		}
	} catch (error) {
		console.log(error);
	}
};
module.exports = {
	signup,
	login,
};
