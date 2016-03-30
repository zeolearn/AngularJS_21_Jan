var myApp = angular.module('myApp', []);

myApp.service('manageRules', ['$http', '$q', function($http, $q){
    var deferred = $q.defer();
    var self = this;
    this.rules = {}

    this.getRules = function(){
        
        $http.get('http://127.0.0.1:3000/api')
        .success(function (result) {
            console.log('Service - Success', result)
            deferred.resolve(result)
        })
        .error(function (data, status) {

            console.log(data);
            deferred.reject(status);
        });        
        return deferred.promise;
    }
    
    //Returns the $http promise to be resolved in the controller
    this.getRulesV2 = function(){
        return $http.get('http://127.0.0.1:3000/api')
            
////            .then(function(response){
////            return response.data;
//        })
    }
    
    this.setRules = function(newRule) {
            $http.post('http://127.0.0.1:3000/api', { newRule: newRule })
            .success(function (result) {
                console.log('Service - Success', result)
                deferred.resolve(result)
            })
            .error(function (data, status) {
                console.log(data);
                deferred.reject(status);
            });
            return deferred.promise;
    }
}])


myApp.controller('mainController', ['$scope', '$filter', '$http', 'manageRules', function ($scope, $filter, $http, manageRules) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    
    $scope.characters = 5;
    
    //Rules from service
    console.log('Service', manageRules)
    var rules = manageRules.getRules()
                .then(function(data){
                    console.log('Data from promise: ', data)
                    $scope.rules = data
                }, function(error){
                    console.log('Error from promise: ', error)
                    $scope.apiError = error
                })

    //Received and process $http promise
    var rules2 = manageRules.getRulesV2 ().then(function(response){console.log('V2 Response', response.data)})
    
    //Watch rules in scope for manageRules v1
    $scope.$watch('rules', function(newValue, oldValue){
        console.log('Value Changed', newValue)
        console.log('Scope.rules', $scope.rules)
    })
    
//    $scope.newRule = 'Must be unique';
//    var addRule = manageRules.setRules($scope.newRule);
//    console.log('AddRule is', addRule)
//    addRule.then(function(data){console.log('Addrules success', data)},function(error){console.log('AddRules error', error)})
}]);