//importing http module
const http = require("http");

//importing express
const express = require('express');

//create an app using express()
const app = express();




//add the app to the createServer() without the parenthesys.
const server = http.createServer(app);

server.listen(3000);
