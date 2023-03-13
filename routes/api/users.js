const express = require('express');
const { users: controller } = require('../../controllers');
const router = express.Router();
const { validation, auth, ctrlWrapper } = require('../../middlewares');
const { passwordJoiSchema, loginJoiSchema } = require('../../models/user');

router.get('/current', auth, ctrlWrapper(controller.getCurrentUser));

router.get('/logout', auth, ctrlWrapper(controller.logout));

router.post('/signup', validation(passwordJoiSchema), ctrlWrapper(controller.signup));

router.post('/login', validation(loginJoiSchema), ctrlWrapper(controller.login));

module.exports = router;
