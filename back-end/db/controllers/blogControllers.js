const { Blog } = require('../model/Blog');

async function createBlog(req, res) {
    try {
      const newBlog = await Blog.create(req.body);
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  module.exports = {createBlog}