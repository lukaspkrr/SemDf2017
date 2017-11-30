var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/semDF');

http.createServer(app).listen(3003, function(){
    console.log("Run!");
});