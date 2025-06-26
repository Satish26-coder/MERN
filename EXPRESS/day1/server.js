const exress = require('express');//importing express module

const app = exress(); //creating an express application instance




//define a simple route fo the homepage-http://www.flipkart.com/watches?type=digital-url

app.get('/', (request,response) => {
  response.send('<h1>Welcome to the Express server!</h1> <button>click</button>'); //sending a response to the client
});

//another simple route

app.get('/about', (request, response) => {
  response.send('<h1>About Page</h1> <p>This is the about page of our Express server.</p>'); //sending a response to the client
});


app.get('/contact', (request, response) => {
  response.send('<h1>Contact Page</h1> <p>This is the contact page of our Express server.</p>'); //sending a response to the client
});
//sending json data as a response
app.get('/api/user',(req,res)=> {
    const userData = {
        id: 1,    
        name: "harika",
        city:"tadepalligudem" };
      
        //it is an object 
        //object key:value pair var_name={
        //key1:value1,
        //key2:value2,}
        res.json(userData);
    });


    app.get('/users/:userId', (req, res) => {
        const userId = req.params.userId; //extracting the userId from the URL
        res.send(`<h1>User ID: ${userId}</h1>`); //sending a response with the userId
    });


    app.get('/products/:category/:productId', (req, res) => {
        const { category, productId } = req.params; //extracting category and productId from the URL
        res.send(`<h1>Category: ${category}, Product ID: ${productId}</h1>`); //sending a response with the category and productId
    });


    
const PORT = 3000; //defining the port number

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); //starting the server and listening on the defined port


