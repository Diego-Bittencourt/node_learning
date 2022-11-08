//importing http module
const http = require("http");

//import the routers.js file's function
const routes = require('./routes');
//it's not necessary to add the file's extension.




//add the created function to the createServer() without the parenthesys.
const server = http.createServer(routes.handler);

server.listen(3000);
