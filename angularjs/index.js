var mainApp = angular.module('mainApp', [
    'mainApp.directives'
]);

mainApp.controller('mainController', mainController);

function mainController($scope) {
    $scope.hello = 'Hello world';
}