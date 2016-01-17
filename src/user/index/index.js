var app = angular.module('app', ['ngRoute']);
app.controller('mainController', ['$scope', '$rootScope','api', function ($scope, $rootScope,api) {
  $rootScope.cid = '-1';
  if($rootScope.lead){
    $scope.lead = true;
  }else {
    $scope.lead =false;
  }
  //api.user.getusermessage.get().then(function (res) {
  //  if (!res.data.success){
  //
  //  }
  //});
  $scope.changeType = function (id) {
    $scope.type = $rootScope.cid = id;
  }
}]);