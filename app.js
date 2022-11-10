//importing http module
const http = require("http");

//importing express
const express = require('express');

//import body-parser
const bodyParser = require('body-parser');

//create an app using express()
const app = express();





//import routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


//add the bodyParser and using it as middleware BEFORE all other middlewares to have access to the body
app.use(bodyParser.urlencoded({extended: false}));

//use the admin routes in another file
//still, the order matters
app.use(adminRoutes);
app.use(shopRoutes);




//add the app to the createServer() without the parenthesys.
// const server = http.createServer(app);
// server.listen(3000);

//creating the server and listening to the port 3000
app.listen(3000);