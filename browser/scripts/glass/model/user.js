'use strict';

class GlassUser {
  constructor(name, id) {
    this.id = id;
    this.name = name;
  }

  setToken(token) {
    this.token = token;
  }
}
