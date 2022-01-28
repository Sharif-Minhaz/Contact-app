const userContact = require("../models/Contacts");

exports.showContact = (req, res) => {
	res.json(userContact.getAllContact());
};

exports.postContact = (req, res) => {
	res.json(userContact.postContact(req.body));
};

exports.getContact = (req, res) => {
	let Id = Number(req.params.id);
	res.json(userContact.getSingleContact(Id));
};

exports.putContact = (req, res) => {
	let Id = Number(req.params.id);
	res.json(userContact.updateContact(Id, req.body));
};

exports.patchContact = (req, res) => {
	let Id = Number(req.params.id);
	res.json(userContact.deleteContact(Id))
};
