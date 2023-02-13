const contacts = require("./contacts");
const argv = require("yargs").argv;

// console.log("sdasd");
// console.log(contacts.contactsPath);
// contacts.listContacts();
// console.log(contacts.getContactById(0));
// console.log(contacts.removeContact(0));
// console.log(contacts.addContact("name", "email.com", "35434534"));

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const list = await contacts.listContacts();
      console.table(list);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deletedContact = await contacts.removeContact(id);
      console.log(deletedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
