const { Contact } = require('../../models/contact');
const createError = require('http-errors');

const addContact = async (req, res, next) => {
  try {
    const result = await Contact.create(req.body);
    if (!result) {
      throw createError[404]();
    }
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
