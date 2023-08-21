const express = require("express");
const db = require('../db/config.js'); // Adjust the path
const blogroutes = require('../db/routes/blogRoutes.js');
const userroutes = require('../db/routes/userRoutes');

const app = express();

app.use(express.json());
db.once('open', async () => {
 
 try { console.log('Connected to the database');}


  // Create a new user and blog post
  
    catch(error) {
      console.error('Error:', error);
      db.close();
    }
})


app.use('/', blogroutes);
app.use('/', userroutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
