const fs = require('fs/promises');
const path = require('path');
const shortId = require('shortid');

const contactsPath = path.resolve(__dirname, 'contacts.json');

const listContacts = async () => {
  return JSON.parse(await fs.readFile(contactsPath, 'utf-8'));
};

const getContactById = async contactId => {
  const contacts = await listContacts();

  const result = contacts.find(item => item.id === contactId);

  if (!result) {
    return null;
  }
  return result;
};

const removeContact = async contactId => {
  const contacts = await listContacts();
  const currentId = contacts.findIndex(item => item.id === contactId);

  if (currentId === -1) {
    return null;
  }
  const removeContact = contacts.splice(currentId, 1);

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return removeContact;
};

const addContact = async body => {
  const { name, email, phone } = body;

  const contacts = await listContacts();
  const newContact = {
    id: shortId(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const currentId = contacts.findIndex(item => item.id === contactId);

  if (currentId === -1) {
    return null;
  }
  if (!body) {
    return null;
  }

  contacts[currentId] = { id: contactId, ...body };

  await fs.writeFile(contactsPath, JSON.stringify(contacts));

  return contacts[currentId];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
