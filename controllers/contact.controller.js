const Contact = require("../models/contacts");

exports.showContact = (req, res) => {
	Contact.find()
		.then((contacts) => {
			res.render("index", { contacts, error: {} });
		})
		.catch((err) => {
			res.json(err);
		});
};

exports.postContact = (req, res) => {
	let { name, phone, email, id } = req.body;
	let error = {};
	if (!name) {
		error.name = "Please provide your Name";
	}
	if (!phone) {
		error.phone = "Please provide your Phone";
	}
	if (!email) {
		error.email = "Please provide your Email";
	}
	let isError = Object.keys(error).length > 0;

	if (isError) {
		console.log("what error");
		Contact.find()
			.then((contacts) => {
				res.render("index", { contacts, error });
			})
			.catch((err) => {
				res.json(err);
			});
	} else {
		if (id) {
			Contact.findOneAndUpdate(
				{ _id: id.trim() },
				{
					$set: {
						name,
						phone,
						email,
					},
				},
				{ new: true } // important feature
			)
				.then(() => {
					res.redirect("/contacts");
				})
				.catch((err) => {
					console.log(err);
					res.json(`Main error: ${err}`);
				});
		} else {
			let contact = new Contact({
				name,
				phone,
				email,
			});
			contact
				.save()
				.then(() => {
					Contact.find()
						.then((contacts) => {
							res.render("index", { contacts, error: {} });
						})
						.catch((err) => {
							res.json(err);
						});
				})
				.catch((err) => {
					res.json(err);
				});
		}
	}
};

exports.deleteContact = (req, res) => {
	let { id } = req.params;
	Contact.findByIdAndDelete(id)
		.then(() => {
			res.redirect("/contacts");
		})
		.catch((err) => {
			res.json(err);
		});
};
