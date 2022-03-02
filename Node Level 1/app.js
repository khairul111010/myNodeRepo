const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Head</title></head>");
  res.write("<body><h1>BODY</h1></body>");
  res.write("<html>");
  res.end();
  //   process.exit();  Hard exits the event loop closes the program
}); //this function will run for every incoming request

server.listen(3000);
