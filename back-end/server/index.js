const express = require("express");
const db = require('../db/config.js'); // Adjust the path
const createData = require('../db/createData.js'); // Adjust the path
const blogroutes = require('../db/routes/blogRoutes.js');
const userroutes = require('../db/routes/userRoutes');

const app = express();

db.once('open', () => {
  console.log('Connected to the database');

  // Create a new user and blog post
  createData()
    .then(() => {
      console.log('Data creation complete');
      db.close(); // Close the connection when done
    })
    .catch(error => {
      console.error('Error:', error);
      db.close();
    });
});

app.use(express.json());

app.use('/blogs', blogroutes);
app.use('/users', userroutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
