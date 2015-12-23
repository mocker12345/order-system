/**
 * Created by rancongjie on 15/12/14.
 */
app.controller('menuController', ['$scope', 'api', function ($scope, api) {
  $scope.params = {
    pageNow: '1',
    cid: '-1'
  };
  $scope.cart = {
    number:1
  };
  $scope.menuList = function () {
    api.product.find($scope.params).get().then(function (res) {
      $scope.data = res.data;
    });
  };
  $scope.addCart = function (id) {
    api.product.tocart(id).get($scope.cart).then(function (res) {
      if (res.success){
        alert('添加成功');
      }else {
        alert('添加失败');
      }
    });
  }
}]);