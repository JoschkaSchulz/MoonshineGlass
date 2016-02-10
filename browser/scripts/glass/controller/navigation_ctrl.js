'use strict';

class NavigationCtrl {
  constructor($state, $location, $rootScope) {
    this.state = $state;
    this._rootScope = $rootScope;

    if(!this.isLoggedIn()) {
      $location.path('/login');
    }
  }

  listEvents() {
    this.state.go('events.index');
  }

  showEvent(eventId) {
    this.state.go('events.show', {'id': eventId});
  }

  newEvent() {
    this.state.go('events.new');
  }

  isLoggedIn() {
    return !!this._rootScope.user;
  }

  currentUser() {
    return this._rootScope.user.name;
  }
}
export { NavigationCtrl };
