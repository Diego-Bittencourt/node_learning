//import fs module
const fs = require('fs');


const requestHandler = (req, res) => {
    //grab the url
    const url = req.url;

    //grab the http request method
    const method = req.method;

    if (url === "/") {
        //check if the url from the http req is the root '/'
        res.write("<html>");
        res.write("<head><title>Enter message</title></head>");
        res.write(
          "<body><form action='/message' method='POST'><input name='message' type='text'><button type='submit'>Send</button></form></body>"
        );
        res.write("</html>");
        return res.end();
      }
    
      if (url === "/message" && method === "POST") {
        //check is the url from the http req is the '/message' and the method is POST
    
        const body = [];
    
        //creating an event listener to everytime there is data available to read on the buffer
        req.on("data", (chunk) => {
          console.log(chunk);
          body.push(chunk);
        });
    
        //creating an event listener to the end of the data stream
        return req.on("end", () => {
          //using the buffer global object available by Node.js
          const parsedBody = Buffer.concat(body).toString();
    
          //output: message=Hello+Server
          console.log(parsedBody);
    
          //storing the message data in a const
          const message = parsedBody.split("=")[1];
    
          //creating the file with the message send by the user
          fs.writeFile("message.txt", message, (error) => {
    
            //setting the status Code to 302 that means redirected
            res.statusCode = 302;
    
            //redirecting to localhost:3000/
            res.setHeader("Location", "/");
            return res.end();
          });
    
          
        });
      }
    
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>My first server response</title></head>");
      res.write("<body><h1>Hello from my Node.js server</h1></body>");
      res.write("</html>");
      res.end();

};

//the module object is globally available by Node.js
//there are three different ways to export:


//module.exports = requestHandler;
//this way, the function is accessed with require(requestHandler);

/*
module.exports = {
    handler: requestHandler,
    someText: "something can go here"
};
this can be accessed as require(routes.handler)
*/

exports.handler = requestHandler;
exports.someText = "Something goes here";

//the module word is optional.

