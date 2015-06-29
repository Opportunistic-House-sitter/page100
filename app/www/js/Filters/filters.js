"use strict";

angular.module("starter.filters", [])

.controller("FiltersCtrl", function($scope, filterChoices, userInfo, $rootScope) {
  var userId = $rootScope.currentUser.id;
  $scope.genres = [{title: "Poetry"}, {title: "Classic"}, {title: "Modernism"}, {title: "Fiction"}, {title: "Fantasy"}, {title: "Sci-fi"}, {title: "Education"}, {title: "Drama"}, {title: "Mystery"}, {title: "Horror"}, {title: "Historical Fiction"}, {title: "Non-fiction"}];
  $scope.filteredGenres = [];

  $scope.addRemoveGenre = function(genre) {
    var index = $scope.filteredGenres.indexOf(genre);
    if (index > -1) {
      $scope.filteredGenres.splice(index, 1);
    } else {
      $scope.filteredGenres.push(genre);
    }
    $scope.changeFilter();
  };

  $scope.isActive = function(genre) {
    return $scope.filteredGenres.indexOf(genre) > -1;
  };


  $scope.checkFilter = function(){
    userInfo.getUser(userId)
    .then(function(result){
      if(result.filterPreferences[0]){
        $scope.filteredGenres = result.filterPreferences;
      }
    });
  };

  $scope.checkFilter();

  $scope.changeFilter = function(){
    filterChoices.changeFilter(userId, $scope.filteredGenres);
  };

  $scope.popularLists = [{title: "BestSellers", filter: true},
    {title: "Top 10", filter: false},
    {title: "Top 25", filter: false}
  ];
});
