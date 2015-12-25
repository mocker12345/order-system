app.controller('addController',['$scope','$rootScope','$location','api',function ($scope,$rootScope,$location,api) {
  if ($rootScope.nowId){
    $scope.parmas = {};
    var fileBtn = document.getElementById('file-btn');
    api.category.find.get().then(function (res) {
      if(res.success){
        $scope.cate = res.data;
      }
      else {
        console.error('读取类别错误');
      }
    });
    fileBtn.addEventListener('change', function () {
      var file = fileBtn.files[0];
      if (file && file.size<500*1024){
        var fd = new FormData();
        fd.append('file',file);
        $scope.parmas.file = fd;
      }else {
        alert('图片不应大于500k');
      }

    });

    $scope.save = function () {
      api.product.add.post($scope.params).then(function (res) {
        if (res.success){
          alert(res.data);
        }else {
          alert(res.errorMsg);
        }
      });
    };

  }else {
    alert('请先登陆');
    $location.path('/login');
  }

}]);