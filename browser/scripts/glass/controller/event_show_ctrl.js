'use strict';

class EventShowCtrl {
  constructor($scope, $http, $state) {
    this._scope = $scope;
    this._http = $http;

    this._scope.event = new GlassEvent();
    this._scope.event.show($scope, $http, $state.params['id']);
  }

  join() {
    this._scope.event.join(this._scope, this._http);
    this._scope.event.show(this._scope, this._http, this._scope.event.id);
  }

  leave() {
    this._scope.event.leave(this._scope, this._http);
    this._scope.event.show(this._scope, this._http, this._scope.event.id);
  }

  hasJoined(name) {
    for(var i = 0; i < this._scope.event.users.length; i++) {
      if(this._scope.event.users[i].name == name) {
        return true;
      }
    }
    return false;
  }
}
export { EventShowCtrl };
