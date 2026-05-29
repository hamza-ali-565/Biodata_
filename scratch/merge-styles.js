const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../components/templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.js'));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(templatesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Regex to match tags with two style={{...}} attributes.
  // We use a loop to handle cases where there might be multiple such tags in a file.
  // Pattern explanation:
  // (<[a-zA-Z0-9]+[^>]*?)     -> Group 1: tag start up to first style
  // style={{([\s\S]*?)}}      -> Group 2: first style content
  // ([^>]*?)                  -> Group 3: between styles
  // style={{([\s\S]*?)}}      -> Group 4: second style content
  // ([^>]*>)                  -> Group 5: rest of tag
  
  let previousContent = '';
  while (content !== previousContent) {
    previousContent = content;
    content = content.replace(/(<[a-zA-Z0-9]+[^>]*?)\s*style={{([\s\S]*?)}}([^>]*?)\s*style={{([\s\S]*?)}}([^>]*>)/g, (match, p1, p2, p3, p4, p5) => {
      // Clean up commas
      let style1 = p2.trim();
      let style2 = p4.trim();
      if (style1.endsWith(',')) style1 = style1.slice(0, -1);
      if (style2.endsWith(',')) style2 = style2.slice(0, -1);
      
      const mergedStyle = [style1, style2].filter(Boolean).join(', ');
      
      return `${p1}${p3} style={{ ${mergedStyle} }}${p5}`;
    });
  }

  // Also remove duplicate classNames if any
  previousContent = '';
  while (content !== previousContent) {
    previousContent = content;
    content = content.replace(/(<[a-zA-Z0-9]+[^>]*?)\s*className="([^"]*)"([^>]*?)\s*className="([^"]*)"([^>]*>)/g, (match, p1, p2, p3, p4, p5) => {
      const mergedClass = `${p2} ${p4}`.trim();
      return `${p1}${p3} className="${mergedClass}"${p5}`;
    });
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`Merged styles/classes in: ${file}`);
  }
}

console.log(`Fixed ${updatedCount} files.`);
