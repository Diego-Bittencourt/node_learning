const http = require('http');

const inicio = require('./theroutes');
const server = http.createServer(inicio);


server.listen(4000);