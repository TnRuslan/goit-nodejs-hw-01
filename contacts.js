const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.basename(
  "B:/goit/node/goit-nodejs-hw-01/db/contacts.json"
);

function listContacts() {
  fs.readFile("./db/contacts.json")
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err));
}

function getContactById(contactId) {
  fs.readFile("./db/contacts.json")
    .then((data) => {
      const contacts = JSON.parse(data.toString());
      console.log(contacts.find((c) => c.id === contactId.toString()));
    })
    .catch((err) => console.log(err));
}

function removeContact(contactId) {
  fs.readFile("./db/contacts.json")
    .then((data) => {
      const contacts = JSON.parse(data.toString());

      const index = contacts.findIndex((c) => c.id === contactId.toString());

      if (index !== -1) {
        contacts.splice(index, 1);
        fs.writeFile("./db/contacts.json", JSON.stringify(contacts, null, 2));
      }
    })
    .catch((err) => console.log(err));
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
};
