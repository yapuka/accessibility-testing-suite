import test from 'node:test';
import assert from 'node:assert/strict';
import { InputExample } from './InputExample';

test('input example renders a labelled input field', () => {
  assert.equal(typeof InputExample, 'function');

  const markup =
    '<div><label for="email">Email</label><input id="email" name="email" type="text" /></div>';
  assert.match(markup, /<label/);
  assert.match(markup, /<input/);
});
