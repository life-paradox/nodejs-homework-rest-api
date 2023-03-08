const contactsModule = require('../../models/contacts');

const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().email().trim().required(),
  phone: Joi.string().min(3).required(),
});

const addContact = async (req, res, next) => {
  try {
    console.log(req.body);
    const { error } = contactSchema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }
    console.log(req.body);
    const result = await contactsModule.addContact(req.body);

    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
