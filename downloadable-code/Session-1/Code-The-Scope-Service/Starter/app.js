var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    console.log($scope)
    $scope.firstName = 'Jane'
    $scope.lastName = 'Doe'
    
});