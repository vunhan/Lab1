var myApp = angular.module('myApp', ['mgcrea.ngStrap', 'ngRoute']);
// header controller
myApp.controller('HeaderCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.hello = 'hello world';
}]);
myApp.controller('LoginCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

}]);

// config angular
myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise('/')	
    .when('/', {
        templateUrl: '/views/index.html',
    });
});
