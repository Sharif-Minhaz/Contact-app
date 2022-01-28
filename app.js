const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/contact.route");
require("dotenv").config();
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoute);
const { PORT, URI_CONNECTION_STRING } = process.env;

// home route
app.get("/", (req, res) => {
	res.send("<h1>Welcome, You'r in HOME page!</h1>");
});

// not found page
app.use((req, res, err) => {
	res.json({
		msg: "Page is not found!",
		errMsg: err,
	});
});

// listening port
mongoose
	.connect(URI_CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT || 3000, () => {
			console.log(`Server running at http://localhost:${PORT}`);
		});
	})
	.catch((err) => console.log("Main Error: " + err));
