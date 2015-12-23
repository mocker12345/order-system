/**
 * Created by rancongjie on 15/12/14.
 */
app.controller('loginController', ['$scope', '$location', 'api','$rootScope', function ($scope, $location, api) {
  $scope.params = {
  };
  $scope.login = function () {
    api.user.login.get($scope.params).then(function (res) {
      if (res.success) {
        $rootScope.nowId = res.id;
        $location.path('/');
      } else {
        alert(res.errorMsg);
      }
    }, function (err) {
      console.error(err);
    });
  };
}]);