/**
 * Created by rancongjie on 15/12/14.
 */
app.controller('menuController', ['$scope', '$rootScope','api', function ($scope,$rootScope, api) {

  $scope.cart = {
    number:1
  };
  $scope.menuList = function () {
    $scope.params = {
      pageNow: '1',
      cid: $rootScope.cid
    };
    api.product.find.get($scope.params).then(function (res) {
      $scope.data = res.data;
    });
  };
  $scope.menuList();
  $rootScope.$watch('cid', function () {
    $scope.menuList();
  });
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