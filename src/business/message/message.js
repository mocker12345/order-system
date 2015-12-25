/**
 * Created by rancongjie on 15/12/14.
 */
app.controller('mesController',['$scope','$rootScope', function($scope,$rootScope) {
  if ($rootScope.lead){
    $scope.lead = $rootScope.lead;

  }else {

  }
}]);