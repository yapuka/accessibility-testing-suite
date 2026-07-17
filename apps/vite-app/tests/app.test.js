import test from 'node:test';
import assert from 'node:assert/strict';
import { createAppMarkup } from '../src/main.ts';

test('vite demo exposes accessible navigation markup', () => {
  const markup = createAppMarkup();
  assert.match(markup, /<form/);
  assert.match(markup, /<label/);
});
