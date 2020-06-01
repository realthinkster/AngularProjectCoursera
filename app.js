(function() {
    'use strict'
    const newLocal = 'myFirstcontroller';
    angular.module('myFirstAngularApp', [])

    .controller(newLocal, function($scope) {
        $scope.name = "";
        $scope.totalValue = 0;

        $scope.displayNumericValue = function() {
            var numericTextValue = calculateNoOfCharsInName($scope.name);
            $scope.totalValue = numericTextValue;
        };

        function calculateNoOfCharsInName(string) {
            var totalStringValue = 0;
            for (let index = 0; index < string.length; index++) {
                totalStringValue += string.charCodeAt(index);
            }
            return totalStringValue;
        }
    })
})();