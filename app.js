const express = require("express");
const userRoute = require("./routes/contact.route");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoute);
const { PORT } = process.env;

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
app.listen(PORT || 3000, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
