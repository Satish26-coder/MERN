const http= require('http');
 
// to create a server there is a method called createServer
const server= http.createServer((req, res) => {
  console.log("request received");
  console.log("request url: " + req.url);
  
  res.writeHead(200, {'Content-Type': 'text/plain'});//send http status code 200 and content type text/plain
  res.write('<h1>hello from my node.js http server</h1>');
  res.write('<p>you requested:'+req.url+'</p>');
  res.end('<p>goodbye</p>');//end the response
});


const PORT = 3000;//port number on which the server will listen
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});