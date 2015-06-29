"use strict";

angular.module("starter.controllers", [])

.controller("AppCtrl", function($scope, $location){
  // redirects to path
  $scope.go = function( path ){
    $location.path( path );
  };

})

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

})

.directive("noScroll", function(){
  return {
    restrict: "A",
    link: function($scope, $element){
      $element.on("touchmove", function(e){
        e.preventDefault();
      });
    }
  };
})

// Set-up for possible redirect when user clicks on book in stack
.controller("IndvBookCtrl", function($scope, $stateParams) {
  console.log($stateParams);
  $scope.indvBook = $stateParams;
})


.controller("FiltersCtrl", function($scope, filterChoices, userInfo, $rootScope) {
  var userId = $rootScope.currentUser.id;
  $scope.genres = [{title: "Poetry"}, {title: "Classic"}, {title: "Modernism"}, {title: "Fiction"}];
  console.log($scope.genres[0]);
  $scope.checkFilter = function(){
    userInfo.getUser(userId)
    .then(function(result){
      if(result.filterPreferences[0]){
        //this is bad - TODO: reduce complexity
        $scope.genres.selected = $scope.genres[$scope.genres.map(function(genre){return genre.title; }).indexOf(result.filterPreferences[0])];
      }
    });
  };

  $scope.checkFilter();

  $scope.changeFilter = function(){
    filterChoices.changeFilter(userId, JSON.stringify($scope.genres.selected));
  };

  $scope.popularLists = [{title: "BestSellers", filter: true},
    {title: "Top 10", filter: false},
    {title: "Top 25", filter: false}
  ];
});
