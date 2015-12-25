app.controller('firmController', ['$scope', '$rootScope', '$location', '$filter', 'api', function ($scope, $rootScope, $location, $filter, api) {
  if ($rootScope.nowId) {
    $scope.loadList();
  } else {
    alert('请先登陆');
    $location.path('/login');
  }
  $scope.loadList = function () {
    api.product.showcart.get().then(function (res) {
      if (res.success) {
        $scope.cart = res.products;
        $scope.tolalprice = res.totalprice;
      } else {
        console.error(res.errorMsg);
      }
    }).then(function () {
      api.user.load($rootScope.nowId).get().then(function (res) {
        if (res.success) {
          $scope.user = res.data;
        } else {
          console.error(res);
        }
      });
    });
  };
  $scope.addList = function () {
    var nowTime = new Date();
    var destime = nowTime.setMinutes(nowTime + 45);
    $scope.params = {
      destination: $scope.user.addresses[0].location,
      destime: $filter('data')(destime, 'yyyy-MM-dd HH:mm')
    };
    api.order.add.get($scope.params).then(function (res) {
      if (res.success) {
        alert('下单成功');
      } else {
        alert('下单失败');
      }
    });
  };
}]);