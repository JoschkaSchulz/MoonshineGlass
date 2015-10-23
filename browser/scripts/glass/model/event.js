'use strict';

class GlassEvent {
  constructor(name, id, date, description) {
    this.name = name;
    this.id = id;
    var date = new Date(Date.parse(date));
    this.date = date.toDateString();
    this.description = description;
    this.users = [];
  }
}
