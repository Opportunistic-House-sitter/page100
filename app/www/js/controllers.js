"use strict";

angular.module("starter.controllers", [])

.controller("AppCtrl", function($scope, $location){
  // redirects to path
  $scope.go = function( path ){
    $location.path( path );
  };

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
});

