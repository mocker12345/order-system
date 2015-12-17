/**
 * Created by rancongjie on 15/12/15.
 */
app.config(
  ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/menu', {controller: 'menuController', templateUrl: './dist/user/menu/menu.html'});
    $routeProvider.when('/', {controller: 'menuController', templateUrl: './dist/user/menu/menu.html'});
    $routeProvider.when('/detail/:id', {controller: 'detailController', templateUrl: './dist/user/detail/detail.html'});
    $routeProvider.when('/firm', {controller: 'firmController', templateUrl: './dist/user/mylist/mylist.html'});
    $routeProvider.when('/myinfo', {
      controller: 'infoController',
      templateUrl: './dist/user/information/information.html'
    });
    $routeProvider.when('/myorder', {controller: 'myorderController', templateUrl: './dist/user/myorder/myorder.html'});
    $routeProvider.when('/login', {controller: 'loginController', templateUrl: './dist/user/login/login.html'});
    $routeProvider.when('/sign',{controller:'signController',templateUrl:'./dist/user/sign/sign.html'});
    $routeProvider.when('/busmain',{controller:'busmainController',templateUrl:'./dist/business/mainpage/mainpage.html'});
    $routeProvider.when('/bus/edit/:id',{controller:'editController',templateUrl:'./dist/business/edit/edit.html'});
  }]
);