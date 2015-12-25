/**
 * Created by rancongjie on 15/12/15.
 */
app.config(
  ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/menu', {templateUrl: './dist/user/menu/menu.html'});
    $routeProvider.when('/', {templateUrl: './dist/user/menu/menu.html'});
    $routeProvider.when('/detail/:id', {templateUrl: './dist/user/detail/detail.html'});
    $routeProvider.when('/firm', {templateUrl: './dist/user/mylist/mylist.html'});
    $routeProvider.when('/myinfo', {
      templateUrl: './dist/user/information/information.html'
    });
    $routeProvider.when('/myorder', {templateUrl: './dist/user/myorder/myorder.html'});
    $routeProvider.when('/login', {templateUrl: './dist/user/login/login.html'});
    $routeProvider.when('/sign', {templateUrl: './dist/user/sign/sign.html'});
    $routeProvider.when('/myorder/:id', {
      templateUrl: './dist/user/orderdetail/orderdetail.html'
    });
    $routeProvider.when('/message', {templateUrl: './dist/business/message/message.html'});

    $routeProvider.when('/busmain', {
      templateUrl: './dist/business/mainpage/mainpage.html'
    });
    $routeProvider.when('/bus/edit/:id', {templateUrl: './dist/business/edit/edit.html'});
    $routeProvider.when('/bus/detail/:id', {templateUrl: './dist/business/detail/detail.html'});
    $routeProvider.when('/bus/add', {templateUrl: './dist/business/add/add.html'});
    $routeProvider.when('/bus/orderdetail/:id', {templateUrl: './dist/business/orderdetail/orderdetail.html'});
    $routeProvider.when('/bus/listcheck',{templateUrl:'./dist/business/listcheck/listcheck.html'});
  }]
);