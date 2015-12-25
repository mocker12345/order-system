app.controller('busmainController', ['$scope', '$rootScope','$location','api', function ($scope, $rootScope,$location,api) {
  if($rootScope.lead){
    $scope.params = {
      cid: $rootScope.cid,
      pageNow: 1
    };
    api.product.find.get($scope.params).then(function (res) {
      $scope.data = res.data;
    });
    $scope.delete = function (id,index) {
      api.product.delete(id).get().then(function (res) {
        if (res.success){
          $scope.data.products.splice(index,1);
        }else {
          alert(res.errorMsg);
        }
      });
    }
  }else {
    alert('请先登陆!');
    $location.path('/login');
  }
}]);