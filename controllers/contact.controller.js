const Contact = require("../models/contacts");

exports.showContact = (req, res) => {
	Contact.find({})
		.then((contacts) => {
			res.json(contacts);
		})
		.catch((err) => {
			res.json(err);
		});
};

exports.postContact = (req, res) => {
	let { name, phone, email } = req.body;
	let contact = new Contact({
		name,
		phone,
		email,
	});
	contact
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
};

exports.getOneContact = (req, res) => {
	let { id } = req.params;
	Contact.findById(id)
		.then((contact) => {
			res.json(contact);
		})
		.catch((err) => {
			res.json(err);
		});
};

exports.putContact = (req, res) => {
	let { id } = req.params;
	let { name, phone, email } = req.body;
	Contact.findOneAndUpdate(
		{ _id: id },
		{
			$set: {
				name,
				phone,
				email,
			},
		},
		{new: true} // important feature
	)
		.then((updatedItem) => {
			res.json(updatedItem);
		})
		.catch((err) => {
			res.json(err);
		});
};

exports.patchContact = (req, res) => {
	let { id } = req.params;
	Contact.findByIdAndDelete(id)
		.then((deletedContact) => {
			res.json(deletedContact);
		})
		.catch((err) => {
			res.json(err);
		});
};
