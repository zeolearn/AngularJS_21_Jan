var myApp = angular.module('myApp', [])

myApp.controller('callFunction',['$scope', function($scope){
    $scope.returnHello = function(){
        return true;
    }
}]) 