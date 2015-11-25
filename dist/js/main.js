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
myApp.controller('LoginCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

}]);

// config angular
myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise('/')
        .when('/', {
            templateUrl: '/views/home/index.html',
        });
});
