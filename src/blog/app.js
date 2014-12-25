/**
 * Created by alex on 13.12.14.
 */
'use strict';

var express = require('express');

var app = express();
module.exports = app;

app.post('/login', function (req, res) {
    res.send(200);

});
