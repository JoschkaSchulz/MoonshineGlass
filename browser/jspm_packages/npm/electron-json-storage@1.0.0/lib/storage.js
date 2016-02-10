/* */ 
'use strict';
const Bluebird = require('bluebird');
const fs = Bluebird.promisifyAll(require('fs'));
const rimraf = Bluebird.promisify(require('rimraf'));
const path = require('path');
const utils = require('./utils');
exports.get = function(key, callback) {
  return Bluebird.try(function() {
    const fileName = utils.getFileName(key);
    return fs.readFileAsync(fileName, {encoding: 'utf8'});
  }).catch(function(error) {
    if (error.code === 'ENOENT') {
      return JSON.stringify({});
    }
    throw error;
  }).then(function(object) {
    try {
      return JSON.parse(object);
    } catch (error) {
      throw new Error('Invalid data');
    }
  }).nodeify(callback);
};
exports.set = function(key, json, callback) {
  return Bluebird.try(function() {
    const fileName = utils.getFileName(key);
    const data = JSON.stringify(json);
    if (!data) {
      throw new Error('Invalid JSON data');
    }
    return fs.writeFileAsync(fileName, data);
  }).nodeify(callback);
};
exports.has = function(key, callback) {
  return Bluebird.try(function() {
    const fileName = utils.getFileName(key);
    return fs.statAsync(fileName).return(true);
  }).catch(function(error) {
    if (error.code === 'ENOENT') {
      return false;
    }
    throw error;
  }).nodeify(callback);
};
exports.remove = function(key, callback) {
  return Bluebird.try(function() {
    const fileName = utils.getFileName(key);
    return rimraf(fileName);
  }).nodeify(callback);
};
exports.clear = function(callback) {
  const userData = utils.getUserDataPath();
  const jsonFiles = path.join(userData, '*.json');
  return rimraf(jsonFiles).nodeify(callback);
};
