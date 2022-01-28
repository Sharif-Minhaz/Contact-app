const contactRoute = require("express").Router();
const { showContact, postContact, getContact, putContact, patchContact } = require("../controllers/contact.controller");

contactRoute.get("/contacts", showContact);
contactRoute.post("/contacts", postContact);
contactRoute.get("/contacts/:id", getContact);
contactRoute.put("/contacts/:id", putContact);
contactRoute.patch("/contacts/:id", patchContact);

module.exports = contactRoute;
