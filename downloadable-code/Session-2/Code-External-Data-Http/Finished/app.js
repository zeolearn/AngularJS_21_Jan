var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', '$rootScope', function ($scope, $filter, $http, $rootScope) {

    $scope.handle = '';
        
    $scope.controllerId = $rootScope.controller;
    console.log('')
    
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $http.get('http://127.0.0.1:3000/api')
        .success(function (result) {

            $scope.rules = result;

        })
        .error(function (data, status) {

            console.log(data);

        });

    $scope.newRule = '';
    $scope.addRule = function () {
        $http.post('http://127.0.0.1:3000/api', { newRule: $scope.newRule })
            .success(function (result) {

                console.log(result);
                $scope.rules = result;
                $scope.newRule = '';

            })
            .error(function (data, status) {

                console.log(data);

            });
    };
}]);

myApp.controller('secondController', ['$scope', '$rootScope', function($scope, $rootScope){
    
    $scope.dayOfWeek = 'Wednesday';
    $rootScope.controller = 'second';
}])