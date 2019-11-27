/**
 * Two Way Data Binding 
 */
var myapp = angular.module("MyModule",[])
				   .controller("MyController",function($scope){
					  var cricketer  = {
							   name: "Vijay S",
							   bat: "R/H",
							   Bowl: "R/M"					   
					   };
					   $scope.message = cricketer; 
				   });
