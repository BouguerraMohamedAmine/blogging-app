// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers.js');


router.post('/user', userController.createUser);
router.get('/user',userController.getUsers)
router.get('/user/:id',userController.getUserById)
router.put('/user/:id',userController.updateUser)
router.delete('/user/:id',userController.deleteUser)
router.get('/users/:username', userController.getUserByUsername);

module.exports = router;
