"use strict";

angular.module("starter.cards", [])

.controller("CardsCtrl", function($scope, BookChoices, $ionicSideMenuDelegate, $rootScope){
  //prevent side menu from dragging out with cards
  $ionicSideMenuDelegate.canDragContent(false);

  //repulls books every time the user enters the page
  $scope.$on("$ionicView.enter", function() {
    $scope.getBooks($scope.userId, 10);
  });

  // retrieves books from the database
  $scope.getBooks = function(userId, count){
    BookChoices.getBooks(userId, count)
      .then(function(books){
        $scope.cards = books;
        $scope.currentCard = $scope.cards[$scope.cards.length - 1];
      });
  };

  $scope.userId = $rootScope.currentUser.id;

  // Handles book swiping
  $scope.cardSwipedLeft = function(index) {
   console.log("Left swipe", index);
 };

 // Adds card to stack when user swipes right
  $scope.cardSwipedRight = function(index) {
    console.log("Right swipe", index);
    console.log($scope.cards[index].genre);
    BookChoices.addToStack($scope.userId, $scope.cards[index]);
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    $scope.currentCard = $scope.cards[index - 1];
    console.log("Card removed");
  };

  $scope.cardPartialSwipe = function(amt){
    console.log(amt);
  };

  $scope.showText = function() {
    $scope.clicked = $scope.clicked ? false : true;
  };

  $scope.clicked = false;


// functions for liking or disliking book via buttons
// must use currentCard because buttons are out of card scope
  $scope.like = function( card ){
    var index = $scope.cards.indexOf(card);
    $scope.cardSwipedRight(index);
    $scope.cardDestroyed(index);
  };

  $scope.dislike = function( card ){
    var index = $scope.cards.indexOf(card);
    $scope.cardSwipedLeft(index);
    $scope.cardDestroyed(index);
  };
});
