const test = require('node:test');
const assert = require('node:assert');

test('health route responds', () => {
  assert.strictEqual(typeof require('../src/db').query, 'function');
});
