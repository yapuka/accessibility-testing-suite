import test from 'node:test';
import assert from 'node:assert/strict';
import { createAppComponent, getButtonExamples } from '../src/app.component.ts';

test('angular demo has accessible button examples', () => {
  const buttons = getButtonExamples();
  const markup = createAppComponent({
    title: 'Angular accessibility demo',
    fieldLabel: 'Name',
    fieldName: 'name',
  });

  assert.equal(buttons.length, 3);
  assert.match(markup, /<button/);
  assert.match(markup, /aria-disabled="true"/);
});
