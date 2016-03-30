var myApp = angular.module('myApp', ['ngMessages']);

myApp.service('myService', function(){
    this.time = new Date();
})
              
//myApp.controller('mainController', ['$scope','$log','$filter', 'myService', function($scope, $log, $filter, myService) {
//    
//                                    
//    var thisList = [1, 
//                    '2', 
//                    function(){ console.log('Hello World')}]
//    
//    $scope.timeNow = myService.time
//    $log.info(myService.time);
//    
//
//}]);
myApp.controller("mainController",["$scope","$log","$filter","myService",function(e,o,i,t){e.timeNow=t.time,o.info(t.time)}]);
//    var searchPeople = function(firstName, $scope, height, age, occupation) {
//        return 'Jane Doe';
//    }
//    
//    var name = searchPeople()
//    $log.log(name)
//    $scope.filteredName = $filter('uppercase')(name)

//console.log(angular.injector().annotate(searchPeople));