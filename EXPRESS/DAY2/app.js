const express = require('express');
const app = express();

const PORT = 4000;
//simple sutom logger middleware

const requestLogger = (req, res, next) => {

  console.log(`[${new Date().toISOString()}] recieved ${req.method} request for ${req.url}`);
  next(); // Call the next middleware function in the stack
};

// use the middleware for all requests
 
app.use(requestLogger);//this will apply to all routes defined after this line

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page</h1>');

});
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1>');
});
app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1>');
});
app.get('/products', (req, res) => {
  res.send('<h1>Our Products</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});