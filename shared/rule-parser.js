const fs = require('fs');
const path = require('path');

function parseRules(dir) {
  const files = fs.readdirSync(dir).filter((file) => file.endsWith('.md'));

  return files.map((file) => {
    const fullPath = path.join(dir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);

    if (!match) {
      return { file, content };
    }

    const metadata = Object.fromEntries(
      match[1]
        .split('\n')
        .filter(Boolean)
        .map((line) => line.split(':').map((part) => part.trim())))
    .filter(Boolean);

    return { file, metadata, content };
  });
}

module.exports = { parseRules };
