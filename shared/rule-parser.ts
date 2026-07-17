import fs from 'node:fs';
import path from 'node:path';

export interface RuleMetadata {
  [key: string]: string;
}

export interface ParsedRule {
  file: string;
  metadata?: RuleMetadata;
  content: string;
}

export function parseRules(dir: string): ParsedRule[] {
  if (!fs.existsSync(dir)) {
    throw new Error(`Directory not found: ${dir}`);
  }

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
        .map((line) => {
          const [key, ...rest] = line.split(':');
          return [key.trim(), rest.join(':').trim()];
        })
    ) as RuleMetadata;

    return { file, metadata, content };
  });
}
