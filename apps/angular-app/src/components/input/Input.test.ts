import test from 'node:test';
import assert from 'node:assert/strict';
import { createInputComponent } from './Input';

test('input example creates a labelled input component', () => {
  const markup = createInputComponent({ id: 'email', label: 'Email', name: 'email' });
  assert.match(markup, /<label/);
  assert.match(markup, /<input/);
});
