angular
	.module("helloWorldApp", ["components"])
	.controller("HelloWorldController", function($scope, ButtonDisplay){

		$scope.count = 0;
		$scope.someData = [];
		$scope.buttonDisplay = ButtonDisplay;

		for (let i = 0; i < 100; i++){
			$scope.someData.push(`Loop ${i}`);
		}

		$scope.onButtonClick = function(){
			$scope.count++;
		};
	});