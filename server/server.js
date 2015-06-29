"use strict";

var express = require("express");

// require mongoose to interact with mongodb
var mongoose = require("mongoose");
var cors = require("cors");
// var testStubs = require("./testposts.js");
// var createDummies = require("./dummyData.js");

// instance of express
var app = express();

// use CORS module to resolve cross-origin requests
app.use(cors());

// connect to mongolab db
mongoose.connect("mongodb://user:wemakeawesomeshit@ds051110.mongolab.com:51110/page100");

// configure our server with all the middleware and routing
require("./config/middleware.js")(app, express);

//port 80 is normal for digital ocean servers
var port = 3000;


app.listen(port, function() {
   console.log("Listening on " + port);
 });

// testStubs();
// createDummies();

module.exports = app;
