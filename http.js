const http = require("http");
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("welcome to our home page");
  }
  if (request.url === "/about") {
    response.end("here is our about page");
  }
  response.end(`<h1>Oops!</h1>`);
});
server.listen(5000);
