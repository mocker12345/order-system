'use strict';
app.factory('api', ($q, $http) => new Apisdk([
  'GET /user/register',
  'GET /user/login',
  'GET /user/logout',
  'GET /user/load/:id',
  'GET /user/update/:id',
  'GET /product/load/:id',
  'GET /product/find',
  'GET /product/tocart/:id',
  'GET /product/showcart',
  'GET /order/add',
  'GET /order/find',
  'GET /order/load/:id',
  'POST /order/:id'
], {
  host: '/ordersystem',
  promise: $q,
  http: request => {
    if (request.method === 'GET' && request.data) {
      let queryString = [];
      for (let i in request.data) {
        let value = request.data[i];
        if (value === null) value = '';
        if (value === void 0) continue;
        queryString.push(encodeURIComponent(i) + '=' + encodeURIComponent(value));

      }
      if (queryString.length) {
        if (!~request.url.indexOf('?')) request.url += '?';
        if (!/[?&]$/.test(request.url)) request.url += '&';
        request.url += queryString.join('&');

      }
      delete request.data;
    }
    if (request.data instanceof FormData) {
      request.headers = {
        'Content-Type': undefined
      };
    }
    return $http(request).then(response=>response);
  }
}));