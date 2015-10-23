'use strict';

class EventCtrl {
  constructor($scope) {
    this._scope = $scope;
    this.loadEvents();
  }

  loadEvents() {
    this._scope.events = [new GlassEvent("Event 1"), new GlassEvent("Event 2")];
  }
}
export { EventCtrl };
