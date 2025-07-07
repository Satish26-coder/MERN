const express = require('express');
const app = express();


// Middleware to parse JSON request bodies
app.use(express.json());
// In-memory "database" - a simple array to store our data
let tasks = [
  {id: 1, title: "Learn Node.js Basics", completed: true },
  {id: 2, title: "Learn Express.js Routing", completed: true }, 
  {id: 3, title: "Build a Simple API", completed: false }
];
let nextTaskId = 4;
//-----R for READ-----
app.get('/tasks', (req, res) => {
  console.log("serving all talsks");
  res.status(200).json(tasks); // Respond with the list of tasks
});

//get a single task by ID
app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id); // Convert ID from string to number
  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found." });
  }

//C for CREATE
// POST request to create a new taskto create a new task
app.post('/tasks', (req, res) => {
  console.log("Received POST request to /tasks");
  const taskTitle=req.body.title; // Get the title from the request body
  if (!taskTitle||taskTitle.trim() === "") {
    return res.status(400).json({ error: 'Title is required' });
  } 
  const newTask = {
    id: nextTaskId++,
    title: taskTile, // add other properties as needed
    completed: false // Default to not completed
  };
  tasks.push(newTask); // push is a method to add an element to the end of an array
  console.log("New task created:", newTask);
  res.status(201).json(newTask); // Respond with the newly created task
});





  res.json(task); // Send back the found task
}); 


const PORT = 3001; // Using a different port to avoid conflicts
app.listen(PORT, () => {
  console.log(`CRUD API server running on http://localhost:${PORT}`);
}); 
