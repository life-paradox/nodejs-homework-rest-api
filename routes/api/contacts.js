const express = require('express');
const { contacts: controller } = require('../../controllers');
const { ctrlWrapper } = require('../../middlewares');
const router = express.Router();
const validation = require('../../middlewares/validation.js');
const { addJoiSchema, favoriteJoiSchema } = require('../../models/contact');

router.get('/', ctrlWrapper(controller.getContacts));

router.get('/:contactId', ctrlWrapper(controller.getContactById));

router.post('/', validation(addJoiSchema), ctrlWrapper(controller.addContact));

router.delete('/:contactId', ctrlWrapper(controller.deleteById));

router.put('/:contactId', validation(addJoiSchema), ctrlWrapper(controller.updateContact));

router.patch(
  '/:contactId/favourite',
  validation(favoriteJoiSchema),
  ctrlWrapper(controller.updateFavStatus)
);

module.exports = router;
