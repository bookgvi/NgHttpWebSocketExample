import * as http from 'http';

const server = http.createServer((req, resp) => {
  resp.writeHead(200, { 'Content-type': 'text/plain' });
  resp.end('Hello from NodeJS');
});

const port = 8080;
server.listen(port);
console.log('Server started on port', port);
