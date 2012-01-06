var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server
//
var port = process.env.PORT || 3000;

httpProxy.createServer(5000, 'localhost').listen(port);



