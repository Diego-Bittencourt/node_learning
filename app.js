//the require function is exposed globally by Node.js to import stuff
//it can import modules or files in your system.
//to import a module, just put the name. if importing file, use ./ or / to reach file
//the http module comes with Node.js, but not exposed globally

//importing http module
const http = require('http');

function rqListener(req, res) {
// this function is created to be dealed with request and response, in this order.

}

//the create Server function requires a function nomination as argument. 
//everytime is gets a request, it will call the function in the argument to deal with those requests
http.createServer(rqListener);