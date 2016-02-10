'use strict';

//const storage = require('electron-json-storage');

class LoginCtrl {
  constructor($scope, $http, $location, $rootScope) {
    this._scope = $scope;
    this._location = $location;
    this._http = $http;
    this._rootScope = $rootScope;

    $scope.events = [];
  }

  login(user) {
    this.loginUser(user);
  }

  loginUser(user) {
    var that = this;
    this._http({
      method: 'GET',
      //url: "http://127.0.0.1:4000/api/users/login?email="+user.email+"&password="+user.password
      url: "http://127.0.0.1:4000/api/users/login?email=Horstyschulz@gmail.com&password=123456"
    }).then(function success(response) {
      var responseUser = response.data.user;
      that._rootScope.user = new GlassUser(responseUser.username, responseUser.id);
      that._rootScope.user.setToken(responseUser.token);
      that._location.path('/events/index');
    }, function error() {
    });
  }
}
export { LoginCtrl };
