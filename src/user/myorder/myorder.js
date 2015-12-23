app.controller('myorderController',['$scope','$rootScope','$location','api', function ($scope,$rootScope,$location,api) {
  if ($rootScope.nowId){
    $scope.params={
      status:'-1',
      pageNow:'1'
    };
    $scope.myOrder();
  }else {
    alert('请登陆');
    $location.path('/login');
  }
  $scope.myOrder= function () {
    api.order.find.get($scope.params).then(function (res) {
      $scope.data=res.data;
    });
  };

}]);
