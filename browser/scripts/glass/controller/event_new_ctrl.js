'use strict';

class EventNewCtrl {
  constructor($scope, $http, $state) {
    this._scope = $scope;
    this.state = $state;
    this._http = $http

    $scope.events = [];
  }

  saveEvent(event) {
    var glassEvent = new GlassEvent(event.name, 0, new Date(), event.description);
    glassEvent.setDate(event.year, event.month, event.day, event.hours, event.minutes);
    glassEvent.save(this._scope, this._http);
  }
}
export { EventNewCtrl };
