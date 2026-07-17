import test from 'node:test';
import assert from 'node:assert/strict';

test('angular demo has accessible heading structure', () => {
  const markup = '<main><h1>Angular accessibility demo</h1><button type="button">Open dialog</button></main>';
  assert.match(markup, /<h1>/);
  assert.match(markup, /<button/);
});
