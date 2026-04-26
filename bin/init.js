#!/usr/bin/env node

'use strict';

const fs   = require('fs');
const path = require('path');

const PKG_ROOT = path.join(__dirname, '..');
const TARGET   = process.cwd();

// Refuse to run inside the package's own directory
if (TARGET === PKG_ROOT) {
  console.error('\nRun this command from the root of the repository you want to install into.\n');
  process.exit(1);
}

const COPY_PAIRS = [
  { src: '.github/agents',  dest: '.github/agents' },
  { src: '.github/prompts', dest: '.github/prompts' },
];

function installFiles(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });

  const files = fs.readdirSync(srcDir).filter(f => f.startsWith('caio.'));
  let installed = 0;

  for (const file of files) {
    const srcFile  = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    const rel      = path.relative(TARGET, destFile);

    if (fs.existsSync(destFile)) {
      console.log(`  skip (exists)  ${rel}`);
    } else {
      fs.copyFileSync(srcFile, destFile);
      console.log(`  add            ${rel}`);
      installed++;
    }
  }

  return installed;
}

function updateGitignore() {
  const gitignorePath = path.join(TARGET, '.gitignore');
  const entry = 'initiatives/';

  if (fs.existsSync(gitignorePath)) {
    const content = fs.readFileSync(gitignorePath, 'utf8');
    if (content.includes(entry)) return;
    fs.appendFileSync(gitignorePath, `\n# caio-startkit runtime output\n${entry}\n`);
    console.log('  update         .gitignore  (added initiatives/)');
  } else {
    fs.writeFileSync(gitignorePath, `# caio-startkit runtime output\n${entry}\n`);
    console.log('  create         .gitignore');
  }
}

// ── main ─────────────────────────────────────────────────────────────────────

console.log('\ncaio-startkit: installing CAIO framework commands\n');

let total = 0;

for (const { src, dest } of COPY_PAIRS) {
  const srcDir  = path.join(PKG_ROOT, src);
  const destDir = path.join(TARGET,   dest);

  if (!fs.existsSync(srcDir)) {
    console.warn(`  warn: source directory not found: ${srcDir}`);
    continue;
  }

  total += installFiles(srcDir, destDir);
}

updateGitignore();

console.log(`\n${total === 0 ? 'Nothing new to install — all files already present.' : `Done! ${total} file(s) installed.`}`);
console.log('\nGet started:\n');
console.log('  /caio.assess <your-initiative-name>\n');
console.log('Full guide: https://github.com/your-username/caio-startkit\n');
