/**
 * Created by rancongjie on 15/12/17.
 */
app.directive('paging', function () {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      list: '=',
      callback: '=',
      params: '='
    },
    template: '<ul class="pager">' +
    '<li><a class="withripple" id="prev">上一页</a></li>' +
    '<li><a class="withripple" id="next">下一页</a></li>' +
    '</ul>',
    link: function (scope, element, attr) {
      var oA = document.getElementById('prev');
      var oB = document.getElementById('next');
      oA.addEventListener('click', prev);
      oB.addEventListener('click',next);
      console.log(scope.list);
      function prev() {
        if (scope.list.length < scope.params.limit) {
          alert('已经是第一页了');
        } else {
          scope.params.pageNow--;
          scope.callback();
        }
      }

      function next() {
        if (scope.list.length < scope.params.limit) {
          alert('已经是最后一页了');
        } else {
          scope.params.pageNow++;
          scope.callback();
        }
      }

    }

  };
});