app.controller('listCheckController', ['$scope', '$rootScope', '$location', 'api', function ($scope, $rootScope, $location, api) {
  if ($rootScope.lead) {
    $scope.params = {
      status: '-1',
      pageNow: '1'
    };
    $scope.myOrder();
  } else {
    alert('权限不足');
    $location.path('/login');
  }
  $scope.listCheck = function () {
    api.order.find.get($scope.params).then(function (res) {
      $scope.data = res.data;
    });
  };
  $scope.listCheck();
  $scope.send = function (id,index) {
    api.order.send(id).get({status:1}).then(function (res) {
      if (res.success){
        $scope.data[index].status = 1;
        alert('操作成功');
      }else {
        alert('系统错误');
      }
    });
  }

}]);