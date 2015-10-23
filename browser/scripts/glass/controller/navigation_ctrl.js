'use strict';

class NavigationCtrl {
  constructor($state) {
    this.state = $state;
  }

  listEvents() {
    this.state.go('events.index');
  }

  showEvent(eventId) {
    this.state.go('events.show', {'id': eventId});
  }
}
export { NavigationCtrl };
