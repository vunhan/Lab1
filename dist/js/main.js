var myApp = angular.module('myApp', ['mgcrea.ngStrap', 'ngRoute']);
// header controller
myApp.controller('HeaderCtrl', ['$rootScope', '$scope', '$modal', function($rootScope, $scope, $modal) {
    function showModal(template) {
        // Pre-fetch an external template populated with a custom scope
        var modal = $modal({
            $scope: $scope,
            template: template
        });
        // Hide modal
        $rootScope.hideModal = function() {
            modal.$promise.then(modal.hide);
        };
    }

    function showModalLogin() {
        showModal('/views/include/login.html');
    }


    $scope.showModalLogin = showModalLogin;
}]);
myApp.controller('LoginCtrl', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
    var userName = 'test@abc.com';
    var password = '123';
    var options = {};
    $rootScope.isAuthenticated = false;
    options.user = {
        email: '',
        password: ''
    }; // Angular supported this function to get value of input

    function login() {
        if (options.user.email === userName && options.user.password === password) {
            $rootScope.hideModal();
            $rootScope.isAuthenticated = true;
            $location.path('/');
        } else {
            console.log(1);
        }
    }
    $scope.login = login;
    $scope.options = options;

}]);

// config angular
myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise('/')
        .when('/', {
            templateUrl: '/views/home/index.html',
        });
});
