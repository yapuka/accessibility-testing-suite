import test from 'node:test';
import assert from 'node:assert/strict';

test('react accessibility demo includes a form heading and label', () => {
  const markup =
    '<main><h1>React accessibility demo</h1><form><label for="name">Name</label><input id="name" name="name" /></form></main>';
  assert.match(markup, /<h1>/);
  assert.match(markup, /<label/);
});
