'use strict';

class EventsIndexCtrl {
  constructor($scope, $http, $state) {
    this._scope = $scope;
    this.state = $state;

    $scope.events = [];
    this.parseUrl($scope, $http);
  }

  parseUrl($scope, $http) {
    console.log("Pull Events!");
    $http({
      method: 'GET',
      url: 'http://127.0.0.1:4000/api/events/list?token=0a1f5bbab3ae3020ac42b96cf23f6e20'
    }).then(function success(response) {
      var plainEvents = response.data.events;
      console.log(plainEvents);
      for (var key in plainEvents) {
        $scope.events.push(new GlassEvent(plainEvents[key].name, plainEvents[key].id, plainEvents[key].date));
      }
    }, function error() {
      plainEvents;
    });
  }

  showEvent(eventId) {
    this.state.go('events_show', {'id': eventId});
  }
}
export { EventsIndexCtrl };
