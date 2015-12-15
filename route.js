/**
 * Created by rancongjie on 15/12/15.
 */
app.config(
  ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/menu', {controller: 'menuController', templateUrl: './dist/user/menu/menu.html'});
    $routeProvider.when('/', {controller: 'menuController', templateUrl: './dist/user/menu/menu.html'});
    $routeProvider.when('/detail/:id', {controller: 'detailController', templateUrl: './dist/user/detail/detail.html'});
  }]
);