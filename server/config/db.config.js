const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: "postgres",
	port: process.env.DB_PORT,
});
//checking if connection is done
sequelize
	.authenticate()
	.then(() => {
		console.log(`Database connected to discover`);
	})
	.catch((err) => {
		console.log(err);
	});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//connecting to model
db.users = require("../model/userModel")(sequelize, DataTypes);

//exporting the module
module.exports = db;
