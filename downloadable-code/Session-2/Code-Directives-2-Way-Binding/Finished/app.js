var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$log', function($scope, $filter, $log) {
    $log.debug('Controller started.')
    var countries = [
        {country: 'India', code: 'IN'},
        {country: 'United States of America', code: 'US'},
        {country: 'Canada', code: 'CA'}
    ];
    
    $scope.country = '';
    $scope.countryFound = false;
    
    $scope.countryCode = function() {
        
        var countryCode = $filter('filter')(countries, $scope.country, true); //Returns a new array with filtered item. The parameter 'true' enforces a strict match

        if (countryCode.length > 0) {
            
            $scope.countryFound = true; // true when strict match is found
            $log.info('CountryCode', countryCode[0].code);

        } else {
            $scope.countryFound = false; //Set to false when no strict match
            $log.log('Country does not match any list item.')
            
        }

        return (countryCode.length > 0) ? countryCode[0].code : ''; //Return the first array element or empty string
    };
    
    $scope.$watch('country', function(newVal, oldVal){
        $log.info('Old: ',oldVal)
        $log.info('New: ',newVal)
    })
    /*
        Outside the Angular Context
    */
//    setTimeout(function(){ //setTimeout runs asynchronously from the other code and in its own thread
//        $scope.country = 'Australia';
//        $log.info('Scope changed')
//    }, 3000)

    /*
        Included in the Angular Context and managed in the digest cycle.
    */
//    setTimeout(function(){
//        $scope.$apply(function(){
//            $scope.country = 'Australia';
//            $log.info('Scope Changed')
//        })
//    }, 3000)
    
    //So when to use $apply?
    //Angular wraps most things under $apply automatically
    //Remember to check when you use an external library like jQuery or a setTimeout whether you need to manually wrap it inside a $apply
    //Angular provides services to overcome some of these issue e.g. $timeout service instead of setTimeout
    
    
    
    
}]);
