// Justin Lombardi
// August 8th, 2024
// Version 2.0
const express = require("express");
const User = require("../db/models/User");
const bcrypt = require("bcrypt");
const { createUserToken } = require("../db/middleware/auth");

const router = express.Router();

// SIGN UP
// POST /api/signup
// Using async/await
// Add the async keyword
// router.post('/signup', (req, res, next) => {
// 	User.create(req.body)
// 		.then((user) => res.status(201).json(user))
// 		.catch(next);
// });

router.get("/", async (req, res, next) => {
	try {
		const users = await User.find({});
		res.json(users);
	} catch (error) {
		next(error);
	}
});

router.post("/signup", async (req, res, next) => {
	// wrap it in a try/catch to handle errors
	try {
		// store the results of any asynchronous calls in variables
		// and use the await keyword before them
		const password = await bcrypt.hash(req.body.password, 10);
		const user = await User.create({
			email: req.body.email,
			password,
		});
		res.status(201).json(user);
	} catch (error) {
		// return the next callback and pass it the error from catch
		return next(error);
	}
});

// SIGN IN
// POST /api/login
router.post("/login", async (req, res, next) => {
	try {
		// Pass the user and the request to createUserToken
		const user = await User.findOne({ email: req.body.email });
		// createUserToken will either throw an error that
		// will be caught by our error handler or send back
		// a token that we'll in turn send to the client.

		res.status(200).json();
	} catch (error) {
		next(error);
	}
});

module.exports = router;
