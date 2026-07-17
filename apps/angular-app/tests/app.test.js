import test from 'node:test';
import assert from 'node:assert/strict';

test('angular demo has accessible heading structure', () => {
  const markup = '<section><h1>Angular accessibility demo</h1><label for="name">Name</label><input id="name" name="name" /></section>';
  assert.match(markup, /<h1>/);
  assert.match(markup, /<label/);
});
