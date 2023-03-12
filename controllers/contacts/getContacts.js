const { Contact } = require('../../models/contact');
const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

module.exports = getContacts;
