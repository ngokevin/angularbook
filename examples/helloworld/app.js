var app = angular.module('helloWorldApp', []);

app.controller('HelloWorldCtrl', ['$scope', function($scope) {
    $scope.targetOfSalutation = 'World';
}]);
