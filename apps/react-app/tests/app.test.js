import test from 'node:test';
import assert from 'node:assert/strict';
import { getButtonExamples } from '../src/App.tsx';

test('react accessibility demo includes accessible button examples', () => {
  const buttons = getButtonExamples();

  assert.equal(buttons.length, 3);
  assert.deepEqual(
    buttons.map((button) => ({ label: button.label, disabled: button.disabled })),
    [
      { label: 'Save changes', disabled: false },
      { label: 'Open settings', disabled: false },
      { label: 'Delete item', disabled: true },
    ]
  );
});
