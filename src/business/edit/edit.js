app.controller('editController', ['$scope', '$rootScope', '$routeParams', 'api', function ($scope, $rootScope, $routeParams, api) {
  api.product.load($routeParams.id).get().then(function (res) {
    $scope.data = res.data;
  });
  $scope.params = {
    name: $scope.data.name,
    description: $scope.data.description,
    price: $scope.data.price,
    cid: $scope.data.cid
  };
  var fileBtn = document.getElementById('file-btn');
  fileBtn.addEventListener('change', function () {
    var file = fileBtn.files[0];
    if (file && file.size < 500 * 1024) {
      var fd = new FormData();
      fd.append('file', file);
      $scope.parmas.file = fd;
    } else {
      alert('图片不应大于500k');
    }

  });
  $scope.save = function () {
    api.product.update($routeParams.id).post($scope.params).then(function (res) {
      if (res.success) {
        alert(res.data);
      } else {
        alert(res.errorMsg);
      }
    });
  }


}]);