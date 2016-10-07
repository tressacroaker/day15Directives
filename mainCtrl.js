angular.module("dirApp")
.controller("mainCtrl", function($scope, mainServ){

$scope.test = "lance is...";
// create a new variable that went ou tot our service an got that data
$scope.attrs = mainServ.lanceattr;




});
