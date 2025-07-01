const express = require('express');
const lodash = require('lodash'); // Import lodash for utility functions
const app = express();

app.use(express.json()); // Built-in middleware to parse JSON bodies
let users= [{id:1,name:"satish"},{id:2,name:"suresh"},{id:3,name:"ramesh"}];
let nextUserId = 4;

app.post('/users', (req, res) => {

  console.log("recieved post request to /users");
  console.log("request body:", req.body);

  if(!req.body.name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  const newUser = {
    id: nextUserId++,
    name: req.body.name// add other properties as needed
  };

  users.push(newUser);//push is a method to add an element to the end of an array
  res.status(201).json(newUser); // Respond with the newly created user 
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});