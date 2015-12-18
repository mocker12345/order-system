/**
 * Created by rancongjie on 15/12/14.
 */
app.controller('loginController', ['$scope', '$location', 'api','$rootScope', function ($scope, $location, api) {
  $scope.params = {};
  $scope.params.username = $scope.user;
  $scope.params.password = $scope.pass;
  $scope.login = function () {
    console.log(history);
    api.user.login.get($scope.params).then(function (res) {
      if (res.success) {
        $rootScope.nowId = res.id;
        $location.path('/');
      } else {
        alert(res.errorMsg);
      }
    }, function (err) {
      console.err(err);
    });
  };
}]);