'use strict';

class GlassEvent {
  constructor(name, id, date, description) {
    this.name = name;
    this.id = id;
    var date = new Date(Date.parse(date));
    this.setDate(date.getFullYear(), date.getMonth(), date.getDay(), date.getHours(), date.getMinutes());
    this.date = date.toDateString();
    this.description = description;
    this.users = [];
    this.demoToken = "9699a81f31ee36f59990e4a229c90208";
  }

  setDate(year, month, day, hours, minutes) {
    this.day      = ('0' + day).slice(-2);
    this.month    = ('0' + month).slice(-2);
    this.year     = ('20' + year).slice(-4);
    this.hours    = ('0' + hours).slice(-2);
    this.minutes  = ('0' + minutes).slice(-2);
    this.dateString = this.year+"-"+this.month+"-"+this.day+"T"+this.hours+":"+this.minutes+":00Z";
  }

  save($scope, $http) {
    var that = this;
    $http({
      method: 'GET',
      url: "http://127.0.0.1:4000/api/events/create?token="+this.demoToken+"&name="+this.name+"&date="+this.dateString+"&description="+this.description
    }).then(function success(response) {
      var savedEvent = response.data.event;
      that.id = savedEvent.id;
      that.join($scope, $http);
    }, function error() {});
  }

  join($scope, $http) {
    $http({
      method: 'GET',
      url: "http://127.0.0.1:4000/api/events/join?token="+this.demoToken+"&event_id="+this.id
    }).then(function success(response) {
    }, function error() {});
  }

  leave($scope, $http) {
    $http({
      method: 'GET',
      url: "http://127.0.0.1:4000/api/events/leave?token="+this.demoToken+"&event_id="+this.id
    }).then(function success(response) {
    }, function error() {});
  }

  show($scope, $http, id) {
    var that = this;
    $http({
      method: 'GET',
      url: "http://127.0.0.1:4000/api/events/show?token="+this.demoToken+"&event_id="+id
    }).then(function success(response) {
      var plainEvent = response.data.event;
      that.name = plainEvent.name;
      that.id = plainEvent.id;
      var date = new Date(Date.parse(plainEvent.date));
      that.setDate(date.getFullYear(), date.getMonth(), date.getDay(), date.getHours(), date.getMinutes());
      that.date = date.toDateString();
      that.description = plainEvent.description;
      that.users = [];
      for(var key in plainEvent.users) {
        that.users.push(new GlassUser(plainEvent.users[key].name, plainEvent.users[key].id));
      }
    }, function error() {});
  }
}
