import test from 'node:test';
import assert from 'node:assert/strict';
import { createAppComponent } from '../src/app.component.ts';

test('angular demo has accessible heading structure', () => {
  const markup = createAppComponent({
    title: 'Angular accessibility demo',
    fieldLabel: 'Name',
    fieldName: 'name',
  });
  assert.match(markup, /<h1>/);
  assert.match(markup, /<label/);
});
