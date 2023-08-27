
// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogControllers.js');


router.post('/blog', blogController.createBlog);
router.get('/blog' , blogController.getBlogs)
router.get('/blog/:id',blogController.getBlogById )
router.get('/blog/user/:userId', blogController.getBlogsByUser);
router.put('/blog/:id', blogController.updateBlog)
router.delete('/blog/:id',blogController.deleteBlog)
router.get('/blog/:title', blogController.getBlogByTitle);


module.exports = router;
