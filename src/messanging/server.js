/**
 * Created by alex on 13.12.14.
 */
"use strict"
var http = require('http'),
    browserify = require('browserify'),
    path = require('path'),
    es = require("engine.io-stream"),
    levelup = require("levelup"),
    port = 3000;

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.end('<script src="bundle.js"></script>');
    } else if (req.url == '/bundle.js') {
        browserify([path.join(__dirname, 'client.js')]).bundle().pipe(res);
    }
});

var engine = es(function (stream) {
    var n = 0;
    setInterval(function () {
        stream.write(n++);
    }, 50);
});

engine.attach(server, "/messages");

server.listen(3000);

