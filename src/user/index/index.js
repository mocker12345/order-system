var app = angular.module('app', ['ngRoute']);
app.controller('mainController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $rootScope.cid = '-1';
  $scope.changeType = function (id) {
    $scope.type = $rootScope.cid = id;
  }
}]);