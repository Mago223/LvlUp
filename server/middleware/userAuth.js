const db = require("../../../model");
const User = db.users;

const saveUser = async (req, res, next) => {
	try {
		const username = await User.findOne({
			where: {
				username: req.body.username,
			},
		});
		if (username) {
			return res.status(409).send("Username already taken");
		}

		const email = await User.findOne({
			where: {
				email: req.body.email,
			},
		});
		if (email) {
			return res.status(409).send("Email already taken");
		}
		next();
	} catch (error) {
		console.log(error);
		res.status(500).send("Internal Server Error");
	}
};

module.exports = {
	saveUser,
};
