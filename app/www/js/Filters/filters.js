"use strict";

angular.module("starter.filters", [])

.controller("FiltersCtrl", function($scope, filterChoices, userInfo, $rootScope) {
  var userId = $rootScope.currentUser.id;
  $scope.genres = [{title: "Poetry"}, {title: "Classic"}, {title: "Modernism"}, {title: "Fiction"}];
  console.log($scope.genres[0]);
  $scope.checkFilter = function(){
    userInfo.getUser(userId)
    .then(function(result){
      if(result.filterPreferences[0]){
        //this is bad. TODO: please fix this to less complexity.
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
