const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		// validate: (data) => {
		// 	return data.length > 0;
		// },
	},
	phone: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 5,
		maxlength: 50,
	},
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
