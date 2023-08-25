const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://mongo:iheb1234@cluster0.fowqa3m.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
