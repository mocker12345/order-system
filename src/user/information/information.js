app.controller('infoController', ['$scope', '$rootScope', '$location', 'api', function ($scope, $location, $rootScope, api) {
  if ($rootScope.nowId) {
    api.user.load($rootScope.nowId).get().then(function (res) {
      if (res.success) {
        $scope.data = {
          username: res.data.username,
          password: res.data.password,
          mobile: res.data.mobile,
          address: res.data.addresses.location
        };
      } else {
        alert(res.errorMsg);
      }
    }, function (err) {
      console.error(err);
    });
  } else {
    alert('请先登录');
    $location.path('/login');
  }
  $scope.update = function () {
    $scope.newData = {
      password: $scope.data.password,
      mobile: $scope.data.mobile,
      address: $scope.data.address
    };
    api.user.update($rootScope.nowId).get().then(function (res) {
      if (res.success) {
        alert('保存成功');
      } else {
        alert(res.errorMsg);
      }
    }, function (err) {
      console.error(err);
    });
  };
}]);