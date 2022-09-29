const http = require("http");

const server = http.createServer((req, res) => {
  res.write("First webpage on server");
  res.end();
});

server.listen(3000);
