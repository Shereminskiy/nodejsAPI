"use strict"
var http = require("http"),
    port = process.env.PORT || 3000;

var server = http.createServer(function(request, responce) {
    responce.end("Hi Alex")
})

server.listen(port, function(){
    console.log("Server as started on port: " + port)
})

