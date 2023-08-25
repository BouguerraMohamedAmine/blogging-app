// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers.js');


router.get('/user/:id',userController.getUserById)
router.get('/user',userController.getUsers)
router.get('/user/:username', userController.getUserByUsername);
router.post('/user', userController.createUser);
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)

module.exports = router;
