import test from 'node:test';
import assert from 'node:assert/strict';
import { createButtonMarkup } from './ButtonExample';

test('button example creates accessible button markup', () => {
  const markup = createButtonMarkup({ label: 'Save', icon: '✓', action: 'save', disabled: true });
  assert.match(markup, /<button/);
  assert.match(markup, /aria-disabled="true"/);
});
