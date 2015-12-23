/**
 * Created by rancongjie on 15/12/23.
 */
app.controller('orderDetailCtr',['$scope','$rootScope','$routeParams','$location','api', function ($scope,$rootScope,$routeParams,$location,api) {
  if ($rootScope.nowId){
    $scope.orderId = $routeParams.id;
    api.order.load($scope.orderId).get().then(function (res) {
      $scope.data = res.data;
    });
  }else {
    $location.path('/login');
    alert('请登录');
  }
}]);