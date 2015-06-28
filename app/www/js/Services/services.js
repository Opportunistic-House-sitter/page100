"use strict";
angular.module("starter.services", [])

  .factory("Auth", function($http, SERVER){
    // post potential user to server which will determine if legit
    var signin = function (user) {
        return $http({
          method: "POST",
          url: SERVER.url + "/user/signin",
          data: user
        })
        .then(function (resp) {
          return resp.data;
        });
      };
    // post new user to server which will set up new account
    var signup = function (user) {
      return $http({
        method: "POST",
        url: SERVER.url + "/user/signup",
        data: user
      })
      .then(function (resp) {
        return resp.data;
      });
    };

    // var refreshUser = function (){
    //   return $http({
    //     method: "GET",
    //     url: SERVER.url + "user/refresh"
    //   })
    // }

    return {
      signin: signin,
      signup: signup
      // refreshUser: refreshUser
    };
  })

  .factory("Account", function(){
    var getUsername = function(){
      return $http({
        method: "GET",
        url: "/users"
      })
      .then(function(resp){
        console.log(resp);
        return resp.data;
      });
    };

    var changeUsername = function(user){
      return $http({
        method: "PUT",
        url: "/users",
        data: user
      }).then(function(resp){
        return resp.data;
      });
    };

    // var changePassword = function(user){
    // };

    // var changeEmail = function(user){
    // };

    return {
      getUsername: getUsername,
      changeUsername: changeUsername,
      changePassword: changePassword,
      changeEmail: changeEmail
    };
  })

  .factory("BookChoices", function($http, SERVER){
    // get books that have not been seen already
    var getBooks = function(userId, count) {
      return $http({
        method: "GET",
        url: SERVER.url + "/book/getBooks?count=" + count + "&user=" + userId
      })
      .then(function (resp){
        return resp.data;
      });
    };

<<<<<<< HEAD
    var addToStack = function (id, book) {
=======
    // post book to a user's stack
    var addToStack = function (id, bookId) {
>>>>>>> a4830c21c8d495719a47a24f0ade7b7679b9b10f
      return $http({
        method: "POST",
        url: SERVER.url + "/user/" + id + "/addbook",
        data: book
      });
    };

    // return a user's stack of saved books
    var getStack = function (id) {
      return $http({
        method: "GET",
        url: SERVER.url + "/user/" + id + "/stack"
      })
      .then(function (resp){
        return resp.data;
      });
    };

    var removeFromStack = function (id, book) {
    // delete a book from a user's stack of saved books
      return $http({
        method: "POST",
        url: SERVER.url + "/user/" + id + "/removebook",
        data: book
      });
    };

    return {
      getBooks: getBooks,
      addToStack: addToStack,
      getStack: getStack,
      removeFromStack: removeFromStack
    };
  })

  //
  .factory("filterChoices", function($http){
    var changeFilter = function(id, genre){
      return $http({
        method: "POST",
        url: "http://localhost:3000/user/" + id + "/filterpreferences",
        data: genre
      });
    };
    return {
      changeFilter: changeFilter
    };
  });
