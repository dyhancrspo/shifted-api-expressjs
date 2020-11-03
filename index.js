const http = require("http");
const app = require("./app");

// Configure Server/Hostname/Port
const hostname = "127.0.0.1";
const port = 3333;
const server = http.createServer(app);

// Running Server on Port
server.listen(port, hostname, () =>
  console.log("Server listening on Port: " + port)
);

{
  /* 
const server = http.createServer((req, res) => {
    console.log("req: ", req)
    switch (req.url) {
        case "/admin":
            res.statusCode = 200
            res.setHeader("Content-Type", "text/plain")
            res.end("Hello Admin!!")
            break;

        case "/html":
            res.statusCode = 200
            res.setHeader("Content-Type", "text/html")
            res.end("<html><body><h1>Hello World!!!</h1></body></html>")
            break;

        case "/file":
            fs.readFile("./test.txt", (err, data) => {
                if (err) {
                    res.statusCode = 500
                    res.setHeader("Content-Type", "text/plain")
                    res.end("ERROR!!")
                } else {
                    console.log("data: ", data);
                    res.statusCode = 200
                    res.setHeader("Content-Type", "text/plain")
                    res.end(data)
                }
            })
            break;

        case "/gambar":
            fs.readFile("./images/weeee.png", (err, data) => {
                if (err) {
                    res.statusCode = 500
                    res.setHeader("Content-Type", "text/plain")
                    res.end("ERROR!!")
                } else {
                    console.log("data: ", data);
                    res.statusCode = 200
                    res.setHeader("Content-Type", "text/plain")
                    // res.setHeader("Content-Type", "image/png")
                    res.end(data)
                }
            })
            break;

        default:
            res.statusCode = 200
            res.setHeader("Content-Type", "text/plain")
            res.end("Hello World!!")
            break;
    }

})
*/
}
