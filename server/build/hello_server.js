"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, resp) {
    resp.writeHead(200, { 'Content-type': 'text/plain' });
    resp.end('Hello from NodeJS');
});
var port = 8080;
server.listen(port);
console.log('Server started on port', port);
//# sourceMappingURL=hello_server.js.map