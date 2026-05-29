const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../components/templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.js') && f !== 'index.js');

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(templatesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Replace explicit "Bio Data" text
  content = content.replace(/>\s*Bio Data\s*</g, '>{personal?.name || "Your Name"}<');

  // 2. Inject headingStyle into Section usage
  content = content.replace(/<Section(?!\w|(?:\s+headingStyle))/g, '<Section headingStyle={headingStyle}');

  if (content.includes('function Section(')) {
    content = content.replace(/function Section\(\{\s*(.*?)\s*\}\)\s*\{/, 'function Section({ $1, headingStyle }) {');
    
    // Add headingStyle to {title} inside Section
    content = content.replace(/style=\{\{([^}]*)\}\}(\s*(?:className="[^"]*")?\s*(?:>)\s*\{title\})/g, (match, p1, p2) => {
        if (p1.includes('headingStyle')) return match;
        return `style={{ ${p1}, ...headingStyle }}${p2}`;
    });
    
    content = content.replace(/className="([^"]*)"(\s*>\s*\{title\})/g, (match, p1, p2) => {
        if (match.includes('style=')) return match;
        return `className="${p1}" style={headingStyle}${p2}`;
    });
  }

  // 3. Update main name div
  content = content.replace(/style=\{\{([^}]*)\}\}([^>]*>\s*\{personal(?:\?)?\.name\s*\|\|[^\}]*\})/g, (match, p1, p2) => {
      if (p1.includes('headingStyle')) return match;
      return `style={{ ${p1}, ...headingStyle }}${p2}`;
  });
  
  content = content.replace(/className="([^"]*)"([^>]*>\s*\{personal(?:\?)?\.name\s*\|\|[^\}]*\})/g, (match, p1, p2) => {
      if (match.includes('style=')) return match;
      return `className="${p1}" style={headingStyle}${p2}`;
  });

  // 4. Update hardcoded sections for templates without <Section>
  const sections = ['Personal Details', 'Family Details', 'Contact Details', 'Contact'];
  for (const sec of sections) {
      const regexStyle = new RegExp(`style=\\{\\{([^}]*)\\}\\}([^>]*>\\s*${sec}\\s*<)`, 'g');
      content = content.replace(regexStyle, (match, p1, p2) => {
          if (p1.includes('headingStyle')) return match;
          return `style={{ ${p1}, ...headingStyle }}${p2}`;
      });

      const regexClass = new RegExp(`className="([^"]*)"([^>]*>\\s*${sec}\\s*<)`, 'g');
      content = content.replace(regexClass, (match, p1, p2) => {
          if (match.includes('style=')) return match;
          return `className="${p1}" style={headingStyle}${p2}`;
      });
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
  }
}
console.log(`Updated ${updatedCount} templates.`);
