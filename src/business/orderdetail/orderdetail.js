/**
 * Created by rancongjie on 15/12/25.
 */
app.controller('busOrderDetailCtr',['$scope','$rootScope','$routeParams','$location','api', function ($scope,$rootScope,$routeParams,$location,api) {
    $scope.orderId = $routeParams.id;
    api.order.load($scope.orderId).get().then(function (res) {
      $scope.data = res.data;
    });
}]);