const express = require('express');
const { validateUserSignup } = require('../middlewares/validators');
const UserController = require('../api/userController');

const router = express.Router();

router.post('/register', validateUserSignup, UserController.register);

module.exports = router;

