//var chai = require('chai'),
//    request = require('request'),
//    jsdom = require("jsdom"),
////    jsdom = require("jsdom"),
//    assert = chai.assert
//    expect = chai.expect;
//
//
//describe.skip("Simple Node test", function(){
//
//    it("Should pass", function(){
//      expect(2).to.equal(2)
//    });
//
//    it("should load a page", function(done){
//
//        request("http://google.com", function(error, responce, body){
//            assert(error == null, 'Error connect to host')
//            expect(responce.statusCode).to.equal(200)
//            done()
//        })
//    });
//})
//
//describe("Http test", function(){
////    it("It should load # of packages ", function(done){
////        request('https://www.npmjs.com/', function(error, responce){
////            assert(error == null, 'Error connect to host')
////            expect(responce.statusCode).to.equal(200)
////            jsdom.env(
////                responce.body,
////                ["http://code.jquery.com/jquery.js"],
////                function (errors, window) {
////                    console.log("total npm packages are :", window.$('.pretty-number').first().text());
////                    done()
////                }
////            );
////        })
////    })
//
//
//    var promisify = require('bluebird').promisify,
//    get = promisify(function (options, cb){
//        request(options, function(error, responce, body){
//            cb(error, responce);
//        });
//    }),
//    dom = promisify(jsdom.env);
//
//    it('Should load # of packajes with Promises', function(done){
//        get('http://nodejs.org/dist/').then(function pNpmjsCheck(err,res){
//            assert(err == null, 'Error connecting to host');
//            expect(res.statusCode).to.equal(200);
//            return dom(res.body);
//        }).then(function pDom(window) {
//            var _count = window.document.querySelectorAll("a").length;
//            expect(_count).to.be.greaterThan(200);
//            done();
//        });
//    });
//
//})
////var promisify = require('bluebird').promisify,
////    get = promisify(function(options, cb){
////        request(options, function(error, responce, body){
////            cb(error, responce)
////        })
////    }),
////    dom = promisify(jsdom.env)
////
////
////describe.skip("Http test with Promices!", function(){
////    it("It should load # of packages ", function(done){
////        get('http://google.com').then(function(error, responce, body){
////            assert(error == null, 'Error connect to host')
////            expect(responce.statusCode).to.equal(200)
////            return dom(responce.body)
////        }).then(function(window){
////            done()
////        })
////    })
////})
//
////var co = require('co')
////describe("Http test with text wrapper CO", function(){
////    it("It should load # of packages ", co.wrap(function (done){
////        request('https://www.npmjs.com/dist/', function(error, responce){
////            assert(error == null, 'Error connect to host')
////            expect(responce.statusCode).to.equal(200)
////        })
////    }))
////})


/* jshint node:true, mocha:true, eqnull:true, esnext:true */
'use strict';

var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;

var request = require('request');
var jsdom = require("jsdom");

describe('Simple Node tests', function () {

    it('should pass', function () {
        assert(1 == '1', 'WHA?');
        expect(1).to.equal(1);
    });

    it('Should load a page', function (done) {
        request('https://www.npmjs.org/', function (error, response, body) {
            assert(error == null, 'Error connecting to host');
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe('Http tests', function () {

    it('Should load # of releases', function (done) {
        request('http://nodejs.org/dist/', function (error, response, body) {
            assert(error == null, 'Error connecting to host');
            expect(response.statusCode).to.equal(200);
            jsdom.env(response.body, function (error, window) {
                var releaseCount = window.document.querySelectorAll("a").length;
                expect(releaseCount).to.be.greaterThan(200);
                done();
            });
        });
    });

    var promisify = require('bluebird').promisify,
        http = promisify(function (options, cb) {
            request(options, function (error, response, body) {
                cb(error, response);
            })
        }),
        dom = promisify(jsdom.env);

    it('Should load # of releases with Promises', function (done) {
        http('http://nodejs.org/dist/').then(function (response) {
            expect(response.statusCode).to.equal(200);
            return dom(response.body);
        }).then(function (window) {
            var releaseCount = window.document.querySelectorAll("a").length;
            expect(releaseCount).to.be.greaterThan(200);
            done();
        });
    });

});