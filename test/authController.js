"use strict";
// var request = require("supertest");
// var starter = require("./../app/www/js/app.js");

describe("AuthController", function(){
	var $scope, $rootScope, $location, $window, $httpBackend, createController, Auth;

	// using angular mocks to inject the injector
	// and retrieve dependencies
	beforeEach(module("starter"));
	beforeEach(inject(function($injector) {

		$rootScope = $injector.get("$rootScope");
		$location = $injector.get("$location");
		$window = $injector.get("$window");
		$httpBackend = $injector.get("$httpBackend");
		Auth = $injector.get("Auth");
		$scope = $rootScope.$new();

		var $controller = $injector.get("$controller");

		// create AuthController for testing
		createController = function () {
			return $controller("AuthController", {
				$scope: $scope,
				$rootScope: $rootScope,
				$window: $window,
				$location: $location,
				Auth: Auth
			});
		};

		createController();
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectations();
		$httpBackend.verifyNoOutstandingRequest();
		$window.localStorage.removeItem("com.starter");
	});

	it("should have a signup method", function(){
		expect($scope.signup).to.be.a("function");
	});

	it("should store a token in localStorage after signup", function(){
		// fake token and user
		var token = "kjhasdf88037fhjksdf";
		var user = {username: fake, password: fake};

		// make a "fake request" to the server
		$httpBackend.expectPOST("user/signup").respond({token: token, user: user});
		$scope.signup(user);
		$httpBackend.flush();
		expect($window.localStorage.getItem("com.starter")).to.be(token);
	});

	it("should store the username in $rootScope after signup", function(){
		var token = "kjhasdf88037fhjksdf";
		var user = {username: fake, password: fake};

		// make a "fake request" to the server
		$httpBackend.expectPOST("user/signup").respond({token: token, user: user});
		$scope.signup(user);
		$httpBackend.flush();
		expect($rootScope.currentUser.username).to.be(user.username);
		expect($rootScope.currentUser.id).to.be("number");
	});

	it("should have a signin method", function(){
		expect($scope.signin).to.be.a("function");
	});

	it("should store a token in localStorage after signin", function(){
		// fake token and user
		var token = "kjhasdf88037fhjksdf";
		var user = {username: fake, password: fake};

		// make a "fake request" to the server
		$httpBackend.expectPOST("user/signup").respond({token: token, user: user});
		$scope.signin(user);
		$httpBackend.flush();
		expect($window.localStorage.getItem("com.starter")).to.be(token);
	});

	it("should store the username and id in $rootScope after signin", function(){
		var token = "kjhasdf88037fhjksdf";
		var user = {username: fake, password: fake};

		// make a "fake request" to the server
		$httpBackend.expectPOST("user/signup").respond({token: token, user: user});
		$scope.signup(user);
		$httpBackend.flush();
		expect($rootScope.currentUser.username).to.be(user.username);
		expect($rootScope.currentUser.id).to.be("number");
	});

	it("should have a signout method", function(){
		expect($scope.signout).to.be.a("function");
	});

	it("should remove the username and id from $rootScope after signout", function(){
		var token = "kjhasdf88037fhjksdf";
		var user = {username: fake, password: fake};

		// make a "fake request" to the server
		$httpBackend.expectPOST("user/signup").respond({token: token, user: user});
		$scope.signup(user);
		$scope.signout();
		$httpBackend.flush();
		expect($rootScope.currentUser.username).to.not.be(user.username);
		expect($rootScope.currentUser.id).to.not.be("number");
	});
});
