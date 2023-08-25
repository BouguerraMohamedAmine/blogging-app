
// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogControllers.js');


router.get('/blog' , blogController.getBlogs)
router.get('/blog/:id',blogController.getBlogById )
router.get('/blog/user/:userId', blogController.getBlogsByUser);
router.get('/blog/:title', blogController.getBlogByTitle);
router.post('/blog', blogController.createBlog);
router.delete('/blog/:id',blogController.deleteBlog)
router.put('/blog/:id', blogController.updateBlog)


module.exports = router;
