var mainApp = angular.module('mainApp', []);
mainApp.controller('mainController', mainController);

function mainController($scope) {
    $scope.hello = 'Hello world';
}