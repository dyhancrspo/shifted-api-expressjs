const http = require("http");
const app = require("./src/app");
const hostname = "127.0.0.1";
const port = 8888;

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log("Server Listen on Port : " + port);
});
