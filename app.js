// app.js
const http = require('http');
const port = 8080;
const server = http.createServer((req, res) => {
  res.end("Hello from Jenkins CI/CD App!");
});
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
