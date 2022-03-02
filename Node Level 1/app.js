const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //   process.exit();  Hard exits the event loop closes the program
}); //this function will run for every incoming request

server.listen(3000);
