angular
	.module("components", [])
	.factory("ButtonDisplay", function(){
		return {
			PRIMARY:"primary",
			SECONDARY:"secondary"
		};
	})
	.component("appButton", {
		bindings:{
			display:"<"
		},
		transclude:true,
		template:"<button data-ng-class='[\"btn\", \"btn-\" + display]' data-ng-transclude></button>",
		controller:function($scope, ButtonDisplay){
			this.$onInit = function(){
				$scope.display = this.display || ButtonDisplay.PRIMARY;
			}
		}
	});