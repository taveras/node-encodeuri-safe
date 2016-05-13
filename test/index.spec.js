'use strict';

var test = require('tape');
var encodeSafe = require('../')

var input = 'here is some test input';

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
  var actual = encodeSafe.encodeURIComponent(input);

  assert.equal(actual, expected, 'Properly encodes a value');
  assert.end();
});

test('encodeURISafe.decodeURIComponent', function(assert) {
  var expected = input;
  var actual = encodeSafe.decodeURIComponent(input);

  assert.equal(actual, expected, 'Properly decodes a value');
  assert.end();
});
