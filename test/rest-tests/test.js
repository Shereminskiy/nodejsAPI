'use strict';

var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;

var request = require('request');

describe.only('blog app', function (done) {
    var port = process.env.PORT || 3000,
        baseUrl = 'http://127.0.0.1:' + port,
        server;

    before(function(done){
        var app = null;
        server = require('http').createServer(app)
        server.listen(port, function(dene) {
            done();
        })
    })

    after(function () {
        server.close();
    });

    it('should login', function(){
        request({
            method: 'POST',
            url: baseUrl + '/login',
            form: {
                username: "ALEX",
                password: '123'
            }
       }, function (error, response) {
            assert(error == null, 'Error connecting to host');
            expect(response.statusCode).to.equal(200);
            done();
       });
    })
});
