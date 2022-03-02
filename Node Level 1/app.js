const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit();
}); //this function will run for every incoming request

server.listen(3000);
