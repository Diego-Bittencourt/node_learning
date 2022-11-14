//importing http module
const http = require("http");

//importing express
const express = require('express');


//import body-parser
const bodyParser = require('body-parser');

//import the path module
const path = require('path');

//create an app using express()
const app = express();


//installed three template engines: ejs, pug and express-handlebars
//those are template engines that would help to write html with dynamic data
app.set('view engine', 'ejs'); //tell express to use pug as template engine
app.set('views', 'views'); //tell express where is the folder to use those template. views folder is the default




//import routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


//add the bodyParser and using it as middleware BEFORE all other middlewares to have access to the body
app.use(bodyParser.urlencoded({extended: false}));

//import the error controller
const errorController = require('./controllers/error');

//use the middleware to have access to all system files
//with the syntax below, the user have access to files statically
app.use(express.static(path.join(__dirname, 'public')));
//the middleware above redirects the request to the public folder.

//use the admin routes in another file
//still, the order matters
app.use('/admin', adminRoutes);
app.use(shopRoutes);


//catch all requests with invalid url
app.use(errorController.get404);

//add the app to the createServer() without the parenthesys.
// const server = http.createServer(app);
// server.listen(3000);

//creating the server and listening to the port 3000
app.listen(3000);