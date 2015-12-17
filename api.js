/**
 * Created by rancongjie on 15/12/17.
 */
'use strict';
app.factory('api', ($q, $http) => new Apisdk([
  'GET /user/register',
  'GET /user/login',
  'GET /user/logout',
  'GET /user/load/:id',
  'GET /user/update/:id'
], {
  host: '/',
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
    // Angular 默认给所有请求加上 application/json，对 FormData 单独处理
    if (request.data instanceof FormData) {
      request.headers = {
        'Content-Type': undefined
      };
    }
    return $http(request);
  }
}));