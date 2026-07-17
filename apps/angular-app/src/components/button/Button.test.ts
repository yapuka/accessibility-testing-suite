import test from 'node:test';
import assert from 'node:assert/strict';
import { createButtonComponent } from './Button';

test('button example creates accessible button component', () => {
  const markup = createButtonComponent({
    label: 'Save',
    icon: '✓',
    action: 'save',
    disabled: true,
  });
  assert.match(markup, /<button/);
  assert.match(markup, /aria-disabled="true"/);
});
