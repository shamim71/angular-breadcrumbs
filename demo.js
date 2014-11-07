/**
 * 
 */
'use strict';

var app = angular.module('mtech.cms', ['mtech.cmp.breadcrumbs']);

app.controller('BreadCrumbsDemoCtrl', function($scope, $sce) {
	
   $scope.folders = [{ href: '#/',label: 'Home'},{ href:'#/library', label: 'Library'}];

   $scope.pushSomething = function() {
	  $scope.folders.push({href: '#/library/foo',label: 'Foo'});
   };
   
   $scope.OnItemClicked = function(path,index){
	   console.log("Current Path: "+ path);
	   console.log("Index : "+ index);
   };
   
});

