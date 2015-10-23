'use strict';

class EventShowCtrl {
  constructor($scope, $http, $state) {
    this._scope = $scope;
    this.state = $state;

    $scope.events = [];
    this.parseUrl($scope, $http, $state.params['id']);
  }

  parseUrl($scope, $http, id) {
    console.log("Pull Event with ID: ", id);
    $http({
      method: 'GET',
      url: 'http://127.0.0.1:4000/api/events/show?token=0a1f5bbab3ae3020ac42b96cf23f6e20&event_id=' + id
    }).then(function success(response) {
      var plainEvent = response.data.event;
      $scope.event = new GlassEvent(plainEvent.name, plainEvent.id, plainEvent.date, plainEvent.description);
      for(var key in plainEvent.users) {
        $scope.event.users.push(new GlassUser("Chuck Testa", plainEvent.users[key].id));
      }
    }, function error() {});
  }
}
export { EventShowCtrl };
