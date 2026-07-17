const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { parseRules } = require('./rule-parser');

test('parseRules extracts front matter metadata from markdown rules', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'a11y-rules-'));
  const filePath = path.join(tempDir, 'example.md');
  fs.writeFileSync(filePath, `---\nnorm: WCAG 2.2\nid: wcag-1.1.1\n---\n\n# Example\n`);

  const result = parseRules(tempDir);

  assert.equal(result.length, 1);
  assert.equal(result[0].metadata.norm, 'WCAG 2.2');
  assert.equal(result[0].metadata.id, 'wcag-1.1.1');
});
