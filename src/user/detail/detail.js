/**
 * Created by rancongjie on 15/12/15.
 */
app.controller('detailController', ['$scope','api','$routeParams', function ($scope,api,$rootParams) {
  api.product.load($rootParams.id).get().then(function (res) {
    $scope.data = res.data;
  });
  $scope.cart = {
    number :1
  };
  $scope.addCart = function () {
    api.product.tocart($rootParams.id).get($scope.cart).then(function (res) {
      if (res.success){
        alert('成功加入购物车');
      }
    });
  }
}]);