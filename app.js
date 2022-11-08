//the require function is exposed globally by Node.js to import stuff
//it can import modules or files in your system.
//to import a module, just put the name. if importing file, use ./ or / to reach file
//the http module comes with Node.js, but not exposed globally

//importing http module
const http = require('http');

//import the file manager module
const fs = require('fs');

// function rqListener(req, res) {
// // this function is created to be dealed with request and response, in this order.

// }

//the create Server function requires a function nomination as argument. 
//everytime is gets a request, it will call the function in the argument to deal with those requests
const server = http.createServer((req, res) => {
//you can use anonimous function or arrow function in the createServer();
 //this creates a event listener that keep the server in the Event loop

const url = req.url;
const method = req.method;
if (url === '/') {
    //check if the url from the http req is the root '/'
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write("<body><form action='/message' method='POST'><input name='message' type='text'><button type='submit'>Send</button></form></body>");
    res.write("</html>");
    return res.end();
}

if (url === '/message' && method === 'POST') {
    //check is the url from the http req is the '/message' and the method is POST

    //creating a file upon http request in which is written DUMMY
    fs.writeFileSync('message.txt', 'DUMMY');
    //setting the status Code to 302 that means redirected
    res.statusCode = 302;

    //redirecting to localhost:3000/
    res.setHeader('Location', '/');
    return res.end();
    
}

 res.setHeader('Content-Type', 'text/html');
 res.write("<html>");
 res.write("<head><title>My first server response</title></head>");
 res.write("<body><h1>Hello from my Node.js server</h1></body>");
 res.write("</html>");
 res.end();
});

server.listen(3000);

//put the createServer in a constant and use the method listen to keep a loop listening to any requests.