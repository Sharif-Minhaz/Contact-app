const contactRoute = require("express").Router();
const { showContact, postContact, deleteContact } = require("../controllers/contact.controller");

contactRoute.get("/contacts", showContact);
contactRoute.post("/contacts", postContact);
contactRoute.get("/contacts/delete/:id", deleteContact);

module.exports = contactRoute;
