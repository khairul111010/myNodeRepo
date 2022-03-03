const http = require("http");
const fs = require("fs");
const { routeHandler } = require("./route");
const server = http.createServer(routeHandler); //this function will run for every incoming request

server.listen(3000);
