'use strict';

var test = require('tape');
var encodeSafe = require('../')

var input = 'here is some test input';
var MAX_ROTATIONS = 200;

var _rotate = (function() {
  var map = {};
  return function _rotateMemoized(str, n) {
    if(map[n]) {
      return map[n];
    }
    for(var i = 0; i < n; i++) {
      str = encodeURIComponent(str);
    }
    map[i] = str;
    return str;
  };
})();

test('encodeURISafe', function(assert) {
  assert.ok(encodeSafe, 'Module was loaded');
  assert.ok(encodeSafe.encodeURIComponent, 'encodeURIComponent exported from module');
  assert.ok(encodeSafe.decodeURIComponent, 'decodeURIComponent exported from module');
  assert.equal(typeof encodeSafe.encodeURIComponent, 'function', 'encodeURIComponent is a function');
  assert.equal(typeof encodeSafe.decodeURIComponent, 'function', 'decodeURIComponent is a function');
  assert.end();
});

test('encodeURISafe.encodeURIComponent', function(assert) {
  var expected = encodeURIComponent(input);
  for (var i = 0; i < MAX_ROTATIONS; i++) {
    var newInput = _rotate(input, i);
    var actual = encodeSafe.encodeURIComponent(newInput);
    assert.equal(actual, expected, 'Properly encodes a value that was previously encoded ' + i + ' times');
  }

  assert.end();
});

test('encodeURISafe.decodeURIComponent', function(assert) {
  var actual = encodeSafe.decodeURIComponent(input);
  for (var i = 0; i < MAX_ROTATIONS; i++) {
    var newInput = _rotate(input, i);
    var actual = encodeSafe.decodeURIComponent(newInput);
    assert.equal(actual, input, 'Properly decodes a value that was previously encoded ' + i + ' times');
  }

  assert.end();
});
