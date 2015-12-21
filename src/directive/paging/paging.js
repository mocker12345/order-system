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
    '<li><a class="withripple" ng-click="prev()">上一页</a></li>' +
    '<li><a class="withripple" ng-click="next()">下一页</a></li>' +
    '</ul>',
    link: function (scope, element, attr) {
      var oA = element.find('a');

      function prev() {
        if (scope.list.length < scope.params.limit) {
          alert('已经是第一页了');
        } else {
          scope.params.current--;
          scope.callback();
        }
      }

      function next() {
        if (scope.list.length < scope.params.limit) {
          alert('已经是最后一页了');
        } else {
          scope.params.current++;
          scope.callback();
        }
      }

      oA[0].on('click', prev());
      oA[1].on('click', next());
    }

  };
});