const express = require('express');
const lodash = require('lodash'); // Import lodash for utility functions
const path = require('path'); // Import path for file path operations
const app = express();


app.use(express.json()); // Built-in middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' directory  

const userRoutes = require('./routes/userRoutes'); // Import user routes

app.use('/api/users', userRoutes); // Use user routes for '/api/users' path
/*
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

// put method
app.put('/api/users/:id', (req, res) => {
	const userId = parseInt(req.params.id); // Convert ID from string to number
	const userNameUpdate = req.body.name;
 
	if (!userNameUpdate) {
        return res.status(400).json({ error: "New name is required for update." });
	}
 
	const userIndex = users.findIndex(user => user.id === userId);
 
	if (userIndex === -1) {
        return res.status(404).json({ error: "User not found." });
	}
 
    users[userIndex].name = userNameUpdate;
    console.log("Updated user:", users[userIndex]);
    res.json(users[userIndex]); // Send back the updated user
});

// delete method 
app.delete('/api/users/:id', (req, res) => {
	const userId = parseInt(req.params.id);
	const initialLength = users.length;
	users = users.filter(user => user.id !== userId); // Create new array without the user
 
	if (users.length === initialLength) {
        return res.status(404).json({ error: "User not found to delete." });
	}
 
    console.log(`User with ID ${userId} deleted.`);
	// res.status(204).send(); // 204 No Content (common for successful delete)
    res.json({ message: `User with ID ${userId} deleted successfully.` });
});
*/
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});