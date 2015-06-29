"use strict";


// var chai = require("chai");
// var assert = chai.assert;
// var expect = chai.expect;
// var should = chai.should();

//supertest module removes the need for hard-coded port numbers
var request = require("supertest");
var app = require("./../server/server.js");
var server;
//see server/testposts.js for posts with which we will test

describe("server", function() {

  before(function(){
    server = app.listen(3000);
  });

  after(function(){
    server.close();
  });

  describe("Home routes", function(){
    it("return 200 status code from '/user/0/stack' on localhost", function(done){
      request(server).get("/user/0/stack").expect(200, function(err){
        console.log("error: ", err);
      }).end(done);
    });

    it("returns 404 status code from 'elbow' on localhost", function(done){
      request(server).get("/ardvark").expect(404, function(err){
        console.log("error: ", err);
      }).end(done);
    });

    describe("Users", function(){
      it("returns 200 status code upon GET to /users/getUsers", function(){
        request(app)
          .get("/user/getUsers")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function(err){
            if (err){
              throw err;
            }
          });
      });

      it("returns 200 status code upon GET to /users/signin", function(){
        request(app)
          .get("/user/signin")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function(err){
            if (err){
              throw err;
            }
          });
      });

      it("returns 200 status code upon GET to /users/signup", function(){
        request(app)
          .get("/user/signup")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function(err){
            if (err){
              throw err;
            }
          });
      });

      it("returns 200 status code upon GET to /users/checkAuth", function(){
        request(app)
          .get("/user/checkAuth")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function(err){
            if (err){
              throw err;
            }
          });
      });
    });


  });




});






// describe("Signing up", function() {

// });

// describe("Logging in", function() {

// });

// describe("Getting User Stack", function() {

// });

// describe("Adding to stack", function() {

// });

// describe("removing from stack", function() {

// });

// describe("receiving books to rate", function(){
//   it("returns 200 status when getting books", function(done){
//     request(app).get("/books/getbooks?count=10&user=1").expect(200, function(err) {
//       console.log("error: ", err);
//       // result.should.not.be.empty;
//     }).end(done);
//   });
// });
