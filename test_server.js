var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect().use(serveStatic('./dist/'));
require('http').createServer(app).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');