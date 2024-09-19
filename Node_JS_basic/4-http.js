var http = require('http');

let app = http.createServer((req, res) => {
  res.write('Hello Holberton School!'); //write a response to the client
  res.end(); //end the response
}).listen(1245);

module.exports = app;
