/* */ 
'use strict';
const m = require('mochainon');
const path = require('path');
const utils = require('../lib/utils');
describe('Utils', function() {
  describe('.getUserDataPath()', function() {
    it('should return an absolute path', function() {
      m.chai.expect(path.isAbsolute(utils.getUserDataPath())).to.be.true;
    });
    it('should equal the dirname of the path returned by getFileName()', function() {
      const fileName = utils.getFileName('foo');
      const userDataPath = utils.getUserDataPath();
      m.chai.expect(path.dirname(fileName)).to.equal(userDataPath);
    });
  });
  describe('.getFileName()', function() {
    it('should throw if no key', function() {
      m.chai.expect(function() {
        utils.getFileName(null);
      }).to.throw('Missing key');
    });
    it('should throw if key is not a string', function() {
      m.chai.expect(function() {
        utils.getFileName(123);
      }).to.throw('Invalid key');
    });
    it('should throw if key is a blank string', function() {
      m.chai.expect(function() {
        utils.getFileName('    ');
      }).to.throw('Invalid key');
    });
    it('should append the .json extension automatically', function() {
      const fileName = utils.getFileName('foo');
      m.chai.expect(path.basename(fileName)).to.equal('foo.json');
    });
    it('should not add .json twice', function() {
      const fileName = utils.getFileName('foo.json');
      m.chai.expect(path.basename(fileName)).to.equal('foo.json');
    });
    it('should preserve an extension other than .json', function() {
      const fileName = utils.getFileName('foo.data');
      m.chai.expect(path.basename(fileName)).to.equal('foo.data.json');
    });
    it('should return an absolute path', function() {
      const fileName = utils.getFileName('foo.data');
      m.chai.expect(path.isAbsolute(fileName)).to.be.true;
    });
  });
});
