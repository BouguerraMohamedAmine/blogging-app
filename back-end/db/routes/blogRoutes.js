
// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogControllers.js');

router.post('/', blogController.createBlog);

module.exports = router;
