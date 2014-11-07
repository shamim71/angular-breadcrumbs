(function () {

   var module =  angular.module('mtech.cmp.breadcrumbs', []);
   module.constant("cmpConfig", {
		"Separator" : "/"
	});

   module.directive('mtBreadCrumbs', function($log,cmpConfig) {
	   return {
	        restrict: 'A',
	        template: '<ol class="breadcrumb">'+
	        	'<li ng-repeat=\'bc in datasource\' ng-class="{\'active\':datasource.length-1 == $index}"><a ng-hide="datasource.length-1 == $index" ng-click="unregisterBreadCrumb($index)" ng-href="{{bc.href}}">{{bc.label}}</a><span ng-show="datasource.length-1 == $index">{{bc.label}}</span> </li>'+
	        	'</ol>',
	        replace: true,
	        scope: {
	        	  datasource: '=',
	        	  onNodeSelected: '&'
	        },
	        compile: function(tElement, tAttrs) {
	            return function($scope, $elem, $attr) {
		            buildPath = function() {
	                        var p = "";
	                		angular.forEach($scope.datasource, function(v) {
	                           p = p + cmpConfig.Separator + v.label;
	                        });
	                		return p;
		                };

	                $scope.unregisterBreadCrumb = function(index) {
	                	var newDs = $scope.datasource.slice();
	                	$scope.datasource= [];
	                	for(var i=0;i<index+1; i++){
	                		  $scope.datasource.push(newDs[i]);
	                	}
		       			 var path = buildPath();
		    			 $scope.onNodeSelected()(path,index);
	                };
	               
	            };//end of return
	        }//end of compile	        
	   };
   });


}());