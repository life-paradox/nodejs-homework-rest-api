const getContacts = require('./getContacts');
const addContact = require('./addContact');
const getContactById = require('./getContactById');
const deleteById = require('./deleteContact');
const updateContact = require('./updateContact');
const updateFavStatus = require('./updateFavStatus');

module.exports = {
  getContacts,
  addContact,
  getContactById,
  deleteById,
  updateContact,
  updateFavStatus,
};
