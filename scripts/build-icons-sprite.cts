import * as path from 'node:path';
import fsExtra from 'fs-extra';
import { glob } from 'glob';
import { parse } from 'node-html-parser';

const cwd = process.cwd();
const inputDir = path.join(cwd, 'scripts', 'icons');
const outputDir = path.join(cwd, 'public');
const typeDir = path.join(cwd, 'src/types');

const files = glob.sync('**/*.svg', { cwd: inputDir }).sort((a, b) => a.localeCompare(b));

if (files.length === 0) {
  console.log('No icons found');
} else {
  generateIconFiles();
}

async function generateIconFiles() {
  generateSvgSprite();
  generateIconUnion();
}

async function generateIconUnion() {
  const fileNames = files.map((file) => file.replace('.svg', '')) ?? [];
  const symbols = fileNames.map((item) => `  '${item}',`);
  if (!symbols) return;

  const output = [
    'export const IconsList = [',
    ...symbols,
    '] as const;',
    'export type IconsUnion = (typeof IconsList)[number];',
    '',
  ].join('\n');
  await fsExtra.writeFile(path.join(typeDir, 'icons.ts'), output, 'utf-8');

  console.log('Icons type created successfully');
}

async function generateSvgSprite() {
  const symbols = await Promise.all(
    files.map(async (file) => {
      const input = await fsExtra.readFile(path.join(inputDir, file), 'utf-8');
      const root = parse(input);
      const svg = root.querySelector('svg');
      if (!svg) throw new Error('SVG not found');
      svg.tagName = 'symbol';
      svg.setAttribute('id', file.replace('.svg', ''));
      svg.removeAttribute('xmlns');
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      svg.removeAttribute('fill');
      return svg.toString().trim();
    })
  );

  const output = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">',
    '<defs>',
    ...symbols,
    '</defs>',
    '</svg>',
  ].join('\n');

  await fsExtra.writeFile(path.join(outputDir, 'sprite.svg'), output, 'utf-8');

  console.log('Sprite created successfully');
}
