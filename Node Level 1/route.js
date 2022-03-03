const fs = require("fs");
const routeHandler = (req, res) => {
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
    const body = [];
    req.on("data", (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      // console.log(message);
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        // res.writeHead(302, {});
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<htmlhtml>");
  res.write("<head><title>Head</title></head>");
  res.write("<body><h1>slash</h1></body>");
  res.write("</htmlhtml>");
  res.end();
  //   process.exit();  Hard exits the event loop closes the program
};

module.exports = { routeHandler };
