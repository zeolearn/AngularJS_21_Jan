var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
});

var searchPeople = function(firstName, $scope, height, age, occupation) {
    return 'Jane Doe';
}

var searchPeopleString = searchPeople.toString();
console.log(searchPeople);
//console.log(searchPeopleString);