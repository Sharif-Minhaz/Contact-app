const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRoute = require("./routes/contact.route");
require("dotenv").config();
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoute);
const { DB_ADMIN, DB_PASSWORD } = process.env;
const PORT = process.env.PORT || 8080;
// home route
app.get("/", (req, res) => {
	res.render("home",{title: "Home"})
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
	.connect(
		`mongodb+srv://${DB_ADMIN}:${DB_PASSWORD}@cluster0.h9bja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server running at http://localhost:${PORT}`);
		});
	})
	.catch((err) => console.log("Main Error: " + err));
