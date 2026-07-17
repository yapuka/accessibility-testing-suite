import test from 'node:test';
import assert from 'node:assert/strict';
import { createAppMarkup, getButtonExamples } from '../src/main.ts';

test('vite demo exposes accessible button examples', () => {
  const buttons = getButtonExamples();
  const markup = createAppMarkup();

  assert.equal(buttons.length, 3);
  assert.match(markup, /<button/);
  assert.match(markup, /aria-disabled="true"/);
});
