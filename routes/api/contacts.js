const express = require('express');

const router = express.Router();

const getContacts = require('../../controllers/contacts/getContacts');
const addContact = require('../../controllers/contacts/addContact');
const getContactById = require('../../controllers/contacts/getContactById');
const deleteById = require('../../controllers/contacts/deleteContact');
const updateContact = require('../../controllers/contacts/updateContact');

router.get('/', getContacts);

router.get('/:contactId', getContactById);

router.post('/', addContact);

router.delete('/:contactId', deleteById);

router.put('/:contactId', updateContact);

module.exports = router;
