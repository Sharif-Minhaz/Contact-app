class Contacts {
	constructor() {
		this.contact = [];
	}

	getAllContact() {
		return this.contact;
	}

	postContact(newContact) {
		const { name, phone, email } = newContact;
		this.contact.push({
			name,
			phone,
			email,
			id: this.contact.length,
		});
		return this.contact;
	}

	getSingleContact(id) {
		return this.contact[id];
	}

	updateContact(id, updatedData) {
		this.contact[id].name = updatedData.name || this.contact[id].name;
		this.contact[id].phone = updatedData.phone || this.contact[id].phone;
		this.contact[id].email = updatedData.email || this.contact[id].email;
		return this.contact;
	}

	deleteContact(id) {
		this.contact.splice(id, 1);
		return this.contact;
	}
}

module.exports = new Contacts();
