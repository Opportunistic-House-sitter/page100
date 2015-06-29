"use strict";

angular.module("starter.stack", [])

.controller("StackCtrl", function($scope, BookChoices, $rootScope) {
  $scope.userId = $rootScope.currentUser.id;
  $scope.stack = [];
  // get list of saved books aka 'stack' using getStack method from BookChoices factory
  $scope.getStack = function( id ) {
    BookChoices.getStack(id)
      .then(function(data){
        console.log(data);
        $scope.stack = data.stack;
      });
  };

  // remove book at index from stack
  $scope.removeFromStack = function( index ){
    console.log($scope.stack[index]);
    BookChoices.removeFromStack($scope.userId, $scope.stack[index])
      .then(function(){
        $scope.getStack($scope.userId);
      });
  };

  $scope.getStack($scope.userId);
});
