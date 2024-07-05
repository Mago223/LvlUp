const express = require("express");
const sequelize = require("sequelize");
const cookieParser = require("cookie-parser");
const app = express();
const db = require("./db");

// require cors allowing the frontend to make calls to the backend
const cors = require("cors");
var corsOptions = {
	origin: "http://localhost:8081", // allow request from this origin
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// additonal non db route
app.get("/", (req, res) => {
	res.json({ message: "Welcome to the application Fitness!" });
});

//Setting up the db
app.get("/some-route", async (req, res) => {
	try {
		const result = await db.query("SELECT * FROM your_table");
		console.log("Query result:", result.rows);
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: "Database query failed",
		});
	}
	//res.send('Test')
});

const PORT = process.env.PORT || 3000; // server runs on port 3000 by default

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
