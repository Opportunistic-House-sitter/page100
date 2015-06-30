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

    // post book to a user's stack
    var addToStack = function (id, book) {
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

    // delete a book from a user's stack of saved books
    var removeFromStack = function (id, book) {
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

  .factory("userInfo", function($http, SERVER){
    var getUser = function (id) {
      return $http({
        method: "GET",
        url: SERVER.url + "/user/" + id + "/userInfo"
      })
      .then(function(resp){
        return resp.data;
      });
    };

    return {
      getUser: getUser
    };
  })

  // updates the user's filters
  .factory("filterChoices", function($http, SERVER){
    var changeFilter = function(id, genres){
      return $http({
        method: "POST",
        url: SERVER.url + "/user/" + id + "/filterpreferences",
        data: genres
      });
    };

    var genresSelected = [{title: "Poetry"}, {title: "Classic"}, {title: "Modernism"}, {title: "Fiction"}, {title: "Fantasy"}, {title: "Sci-fi"}, {title: "Education"}, {title: "Drama"}, {title: "Mystery"}, {title: "Horror"}, {title: "Historical Fiction"}, {title: "Non-fiction"}];

    return {
      changeFilter: changeFilter,
      genresSelected: genresSelected
    };
  });
