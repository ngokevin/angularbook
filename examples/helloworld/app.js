var app = angular.module('helloWorldApp', []);

app.controller('HelloWorldCtrl', function($scope) {
    $scope.targetOfSalutation = 'World';
});
