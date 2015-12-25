/**
 * Created by rancongjie on 15/12/24.
 */
app.controller('busDetailController',['$scope','$rootScope','$routeParams','api', function ($scope, $rootScope,$routeParams,api){
  $scope.productId = $routeParams.id;
  api.product.load($scope.productId).get().then(function (res) {
    if(res.success){
      $scope.data = res.data;
    }else {
      console.error(res);
    }
  });
}]);
