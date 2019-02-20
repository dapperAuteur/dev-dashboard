const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const couchesController = require("./couchesController");
const userController = require("./userController");
const authController = require("./authController");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	})
);

massive(process.env.CONNECTION_STRING)
	.then(database => {
		app.set("db", database);
	})
	.catch(error => {
		console.log("Error with massive", error);
	});

app.get("/api/me", userController.getUser);

app.post("/api/logout", authController.logout);
app.get("/auth/callback", authController.handleCallback);

app.get("/api/couches", couchesController.getCouches);
app.post("/api/couches", couchesController.postCouch);

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT} 🦍`);
});
