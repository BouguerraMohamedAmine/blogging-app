// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers.js');

router.post('/', userController.createUser);

module.exports = router;
