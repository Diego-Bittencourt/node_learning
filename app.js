//importing http module
const http = require("http");

//importing express
const express = require('express');

//import body-parser
const bodyParser = require('body-parser');

//create an app using express()
const app = express();

//add the bodyParser and using it as middleware BEFORE all other middlewares to have access to the body
app.use(bodyParser.urlencoded({extended: false}));


app.use('/add-product', (req, res, next) => {
    //sending the form
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    //the req.body is a new field creted by express.js
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    //sending a response
    res.send('<h1>Hello from express.js</h1>');
});


//add the app to the createServer() without the parenthesys.
// const server = http.createServer(app);
// server.listen(3000);

//creating the server and listening to the port 3000
app.listen(3000);