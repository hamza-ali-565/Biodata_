const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../components/templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.js'));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(templatesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Add space before style={{ if there's none (e.g. "style={{ or >style={{ or className="..."style={{)
  content = content.replace(/([^ \n])style={{/g, '$1 style={{');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
  }
}

console.log(`Fixed ${updatedCount} templates.`);
