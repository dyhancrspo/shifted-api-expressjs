// const fs = require("fs");
// const url = require("url");
const http = require("http");
const app = require("./app");
const hostname = "127.0.0.1";
const port = 6666;

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log("Server Listen on Port : " + port);
});
