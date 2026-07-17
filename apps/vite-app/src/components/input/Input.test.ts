import test from 'node:test';
import assert from 'node:assert/strict';
import { createInputMarkup } from './InputExample';

test('input example creates a labelled input markup', () => {
  const markup = createInputMarkup({ id: 'email', label: 'Email', name: 'email' });
  assert.match(markup, /<label/);
  assert.match(markup, /<input/);
});
