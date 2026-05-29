const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../components/templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.js'));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(templatesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Patch personal name
  const nameRegex = /(<\w+[^>]*?)(style={{([^}]*)}})?([^>]*>)(\s*\{personal(?:\?)?\.name)/g;
  content = content.replace(nameRegex, (match, p1, p2, p3, p4, p5) => {
    if (p2) {
      if (!p3.includes('--font-heading') && !p3.includes('fontFamily')) {
        return `${p1}style={{ fontFamily: 'var(--font-heading)', ${p3} }}${p4}${p5}`;
      }
      return match;
    } else {
      return `${p1}style={{ fontFamily: 'var(--font-heading)' }}${p4}${p5}`;
    }
  });

  // 2. Patch section headers
  const sectionRegex = /(<\w+[^>]*?)(style={{([^}]*)}})?([^>]*>)(\s*(?:Personal Details|Family Details|Contact|Contact Details|Education(?: & Profession)?|About Me|Horoscope Details|Physical Details|Other Details)\s*)(<\/\w+>)/g;
  content = content.replace(sectionRegex, (match, p1, p2, p3, p4, p5, p6) => {
    if (p2) {
      if (!p3.includes('--font-heading') && !p3.includes('fontFamily')) {
        return `${p1}style={{ fontFamily: 'var(--font-heading)', ${p3} }}${p4}${p5}${p6}`;
      }
      return match;
    } else {
      return `${p1}style={{ fontFamily: 'var(--font-heading)' }}${p4}${p5}${p6}`;
    }
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
  }
}

console.log(`Updated ${updatedCount} templates.`);
