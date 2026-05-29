const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../components/templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.js') && f !== 'index.js');

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(templatesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Remove bodyStyle from root wrapper
  // e.g., `style={{ ...bodyStyle, backgroundColor: bgColor }}` -> `style={{ backgroundColor: bgColor }}`
  // e.g., `style={{ ...bodyStyle }}` -> `style={{ }}`
  content = content.replace(/style=\{\{\s*\.\.\.bodyStyle\s*,?/g, 'style={{');
  content = content.replace(/style=\{bodyStyle\}/g, '');
  content = content.replace(/,\s*\.\.\.bodyStyle\s*/g, '');
  // Clean up empty style={{ }} or style={{  }}
  content = content.replace(/style=\{\{\s*\}\}/g, '');

  // 2. Pass bodyStyle and headingStyle to all Row components
  // Match `<Row ` or `<HeaderRow ` or `<BodyRow ` or `<DataRow ` or `<HeroRow ` or `<SimpleRow `
  // The key attribute can have spaces inside curly braces: `key={field.id || field.label}`
  content = content.replace(/(<(?:Row|DataRow|HeaderRow|BodyRow|HeroRow|SimpleRow)(?!\w)(?:\s+key=\{[^}]+\}|\s+key="[^"]+")?)(?!\s+headingStyle)/g, '$1 headingStyle={headingStyle} bodyStyle={bodyStyle}');

  // 3. Update function signatures for Row components
  content = content.replace(/function (Row|DataRow|HeaderRow|BodyRow|HeroRow|SimpleRow)\(\{\s*(.*?)\s*\}\)\s*\{/g, (match, p1, p2) => {
      if (p2.includes('bodyStyle')) return match;
      return `function ${p1}({ ${p2}, headingStyle, bodyStyle }) {`;
  });

  // 4. Apply styles inside Row components
  // Inside the function, we wrap {label} and {value} with spans if they are just >{label}<
  content = content.replace(/>(\s*\{label\}\s*)</g, '><span style={headingStyle}>$1</span><');
  content = content.replace(/>(\s*\{value\}\s*)</g, '><span style={bodyStyle}>$1</span><');

  // 5. Handle hardcoded rows in templates like TemplateModern
  // e.g. <p><span className="font-semibold opacity-70">Date of Birth:</span> {personal.dateOfBirth}</p>
  const hardcodedRowRegex = /(<p[^>]*)(><span[^>]*>[^<]+<\/span>[^<]*\{(?:personal|family|contact|f)(?:\?)?\.[a-zA-Z]+[^\}]*\}[^<]*<\/p>)/g;
  content = content.replace(hardcodedRowRegex, (match, p1, p2) => {
      let newP1 = p1.includes('style=') 
          ? p1.replace(/style=\{\{([^}]*)\}\}/, 'style={{$1, ...bodyStyle}}') 
          : p1 + ' style={bodyStyle}';
          
      let newP2 = p2.replace(/<span([^>]*)>/, (m, spanAttrs) => {
          if (spanAttrs.includes('style=')) {
              return `<span${spanAttrs.replace(/style=\{\{([^}]*)\}\}/, 'style={{$1, ...headingStyle}}')}>`;
          }
          return `<span${spanAttrs} style={headingStyle}>`;
      });
      return newP1 + newP2;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
  }
}
console.log(`Updated ${updatedCount} templates.`);
