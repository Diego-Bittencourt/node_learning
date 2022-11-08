//importing http module
const http = require("http");

//importing express
const express = require('express');

//create an app using express()
const app = express();

//express creates a set of middleware function that deal with the request/response logic
//after declaring the app and before passing to the server, you can use express to add more
//middleware functions

app.use((req, res, next) => {
    console.log("in the middleware");

    //next() must be called to let the request to travel to the next middleware in line
    next();
});

app.use((req, res, next) => {
    console.log("in the second middleware");
});


//add the app to the createServer() without the parenthesys.
const server = http.createServer(app);

server.listen(3000);
