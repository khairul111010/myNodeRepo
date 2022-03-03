const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Title</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>SEND</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    // res.writeHead(302, {});
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<htmlhtml>");
  res.write("<head><title>Head</title></head>");
  res.write("<body><h1>slash</h1></body>");
  res.write("</htmlhtml>");
  res.end();
  //   process.exit();  Hard exits the event loop closes the program
}); //this function will run for every incoming request

server.listen(3000);
