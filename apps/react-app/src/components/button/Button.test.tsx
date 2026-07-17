import test from 'node:test';
import assert from 'node:assert/strict';

test('button example exposes disabled and label metadata', () => {
  const button = {
    label: 'Save changes',
    disabled: true,
  };

  assert.equal(button.label, 'Save changes');
  assert.equal(button.disabled, true);
});
