const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
}); //this function will run for every incoming request

server.listen(3000);
