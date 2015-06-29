"use strict";
var User = require("./userModel.js");
// promise library
var Q = require("q");
// JSON web tokens
var jwt = require("jwt-simple");


module.exports = {

  getUserById: function (req, res, next, id) {
    var findUser = Q.nbind(User.findOne, User);
    findUser({_id: id})
      .then(function (user) {
        if (user) {
          req.user = user;
          next();
        } else {
          next(new Error("User not added yet"));
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  // add book to user's list of saved books aka 'stack'
  addToStack: function(req, res) {
    req.user.stack.push(req.body._id);
    req.user.save(function(err, user) {
      if (err) {
        console.log("error saving user stack / adding book");
      } else {
        res.json(user);
      }
    });
  },

  // remove a book from user's stack of saved books
  removeFromStack: function(req, res) {
    req.user.stack.splice(req.user.stack.indexOf(req.body._id), 1);
    req.user.save(function(err, user) {
      if (err) {
        console.log("error saving user stack / removing book");
      } else {
        res.json(user);
      }
    });
  },


  getStack: function(req, res) {
    //.populate() makes stack populate array of book objects based on IDs in the user's stack array.
    //it does this by accessing the book document store and matching IDs.
    //this is possible because we reference books in the user schema.
    var populate = Q.nbind(req.user.populate, req.user);

    populate("stack")
      .then(function(books) {
        if (books) {
          res.json(books);
        } else {
          console.log("cannot find stack");
        }
      }).fail(function(err) {
        console.log(err);
      });
  },

  // compare user from ajax call to determine whether or not they should be allowed in
  signin: function(req, res, next){
    // res.send("reached signin in userController");
    var username = req.body.username;
    var password = req.body.password;

    var findUser = Q.nbind(User.findOne, User);

    findUser({username: username})
      .then(function(user){
        if(!user){
          next(new Error("User does not exist"));
        } else{
          return user.comparePasswords(password)
            .then(function(foundUser){
              if (foundUser){
                var token = jwt.encode(user, "secret");
                res.json({token: token, userInfo: user});
              } else{
                return next(new Error("No user"));
              }
            });
        }
      })
      .fail(function(error){
        next(error);
      });
  },

  signup: function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;
    var create;
    var newUser;

    var findOne = Q.nbind(User.findOne, User);

    findOne({username: username})
      .then(function(user) {
        if (user) {
          next(new Error("User already exists!"));
        } else {
          // make a new user if not one
          create = Q.nbind(User.create, User);
          newUser = {
            username: username,
            password: password
          };
          create(newUser)
            .then(function (madeUser) {
              // create token to send back for auth
              var token = jwt.encode(madeUser, "secret");
              res.json({token: token, userInfo: madeUser});
            });
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

// test
  getUsers: function(req, res){
    res.send("reached getUser in userController");
  },

  checkAuth: function (req, res, next) {
    // checking to see if the user is authenticated
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    var token = req.headers["x-access-token"];
    if (!token) {
      next(new Error("No token"));
    } else {
      var user = jwt.decode(token, "secret");
      var findUser = Q.nbind(User.findOne, User);
      findUser({username: user.username})
        .then(function (foundUser) {
          if (foundUser) {
            res.send(200);
          } else {
            res.send(401);
          }
        })
        .fail(function (error) {
          next(error);
        });
    }
  },

  changeFilterPreferences: function(req, res){
    req.user.filterPreferences = [req.body.title];
    //reset user's place in book collection
    req.user.bookPosition = 0;
    req.user.save(function(err, user) {
          if (err) {
            console.log("error saving new filterpreferences");
          } else {
            res.json(user);
          }
        });
  },

  getUser: function(req, res){
    res.json(req.user);
  },

  changeEmail: function(req, res){
    req.user.email = req.body;
    req.user.save(function(err, user) {
          if (err) {
            console.log("error saving user email");
          } else {
            res.json(user);
          }
        });
  },

  changeUsername: function(req, res){
    req.user.username = req.body;
    req.user.save(function(err, user) {
          if (err) {
            console.log("error saving user name");
          } else {
            res.json(user);
          }
        });
  }


};
