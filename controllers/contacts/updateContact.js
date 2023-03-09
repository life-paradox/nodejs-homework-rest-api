const contactsModule = require('../../models/contacts');
const createError = require('http-errors');

const { contactSchema } = require('../../schemes/validationSchema');

const updateContact = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }

    const { contactId } = req.params;
    const result = await contactsModule.updateContact(contactId, req.body);
    if (!result) {
      throw createError.NotFound(`Contact with id=${contactId} not found`);
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = updateContact;
