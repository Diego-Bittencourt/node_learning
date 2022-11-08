//importing http module
const http = require("http");

//importing express
const express = require('express');

//create an app using express()
const app = express();

//express creates a set of middleware function that deal with the request/response logic
//after declaring the app and before passing to the server, you can use express to add more
//middleware functions


app.use('/add-product', (req, res, next) => {
    console.log("in the second middleware");

    //sending a response
    res.send('<h1>Hello from the store</h1>');
});


app.use('/', (req, res, next) => {
    console.log("in the second middleware");

    //sending a response
    res.send('<h1>Hello from express.js</h1>');
});


//add the app to the createServer() without the parenthesys.
// const server = http.createServer(app);
// server.listen(3000);

//creating the server and listening to the port 3000
app.listen(3000);