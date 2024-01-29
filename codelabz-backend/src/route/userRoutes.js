
const express = require('express');
const userController = require('../controller/userController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticate,userController.createUser);


module.exports = router;
