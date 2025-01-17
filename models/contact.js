const Joi = require('joi');

const { Schema, model } = require('mongoose');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      required: [true, 'Email must be exist'],
    },
    phone: {
      type: String,
      required: [true, 'Phone must be exist'],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const addJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.boolean(),
});

const Contact = model('contact', contactSchema);

module.exports = { Contact, addJoiSchema, favoriteJoiSchema };
