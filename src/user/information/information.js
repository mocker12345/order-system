app.controller('infoController', ['$scope', '$rootScope', '$location', 'api', function ($scope,$rootScope,$location,api) {
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
    //console.log($location);
    $location.path('/login');
    console.log(123);

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