const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../components/templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.js'));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(templatesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace <divstyle=, <h1style=, <h2style=, <h3style=, <pstyle=, <spanstyle=
  content = content.replace(/<(div|h1|h2|h3|h4|p|span)style={{/g, '<$1 style={{');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
  }
}

console.log(`Fixed ${updatedCount} templates.`);
