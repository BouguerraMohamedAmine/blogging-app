const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/blog-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;