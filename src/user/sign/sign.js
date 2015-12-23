app.controller('signController', ['$scope', '$location', 'api', function ($scope, $location, api) {
  $scope.params = {};
  $scope.sign = function () {
    api.user.register.get(params).then(function (res) {
      if (res.success) {
        alert('注册成功');
        $location.path('/login');
      } else {
        alert(res.errorMsg);
      }
    }, function (err) {
      console.log(err);
    });
  };
}]);