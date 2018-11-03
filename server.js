const http = require('http');
const app = require('./app');

// Escuchando en el puerto 3000
http.createServer(app).listen(3000);

console.log('Im running');