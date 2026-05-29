const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../components/templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.js') && f !== 'index.js');

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(templatesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Update function signature
  content = content.replace(/export function ([A-Za-z0-9_]+)\(\{\s*data,\s*theme[^,]*(?:,\s*fontFamily)?\s*\}\)/, 'export function $1({ data, theme, headingFont, bodyFont })');

  // 2. Inject styles
  const injectStyles = `
  const headingStyle = { fontFamily: headingFont || "inherit" };
  const bodyStyle = { fontFamily: bodyFont || "inherit" };
`;
  if (!content.includes('const headingStyle')) {
      content = content.replace(/(export function [A-Za-z0-9_]+\([^{]*\{[^}]*\}[^)]*\)\s*\{)/, `$1${injectStyles}`);
  }

  // 3. Apply bodyStyle to the root wrapper
  // Match `fontFamily: fontFamily || '...'` or `fontFamily: fontFamily || "..."`
  // The string can contain any characters except its closing quote.
  content = content.replace(/style=\{\{\s*fontFamily:\s*fontFamily\s*\|\|\s*('[^']+'|"[^"]+")\s*,/g, 'style={{ ...bodyStyle,');
  content = content.replace(/style=\{\{\s*fontFamily:\s*fontFamily\s*\|\|\s*('[^']+'|"[^"]+")\s*\}\}/g, 'style={bodyStyle}');
  // If some templates still have it
  content = content.replace(/fontFamily:\s*fontFamily\s*\|\|\s*('[^']+'|"[^"]+")/g, '...bodyStyle');

  // 4. Apply headingStyle
  content = content.replace(/fontFamily:\s*['"]var\(--font-heading\)['"]/g, '...headingStyle');

  // 5. Remove static Biodata text
  // We'll remove <p ...>Marriage Biodata</p> or <div ...>...</div> etc.
  content = content.replace(/<p[^>]*>\s*(?:Marriage\s+)?Biodata\s*<\/p>\s*/gi, '');
  content = content.replace(/<div[^>]*>\s*(?:Marriage\s+)?Biodata\s*<\/div>\s*/gi, '');
  content = content.replace(/<span[^>]*>\s*(?:Marriage\s+)?Biodata\s*<\/span>\s*/gi, '');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
  }
}

console.log(`Updated ${updatedCount} files`);
