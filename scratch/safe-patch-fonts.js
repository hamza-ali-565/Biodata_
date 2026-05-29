const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../components/templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.js'));

let updatedCount = 0;

const injectFontHeading = (text, regexes) => {
  let newText = text;
  
  for (const regex of regexes) {
    let match;
    // We must reset lastIndex if global
    let searchRegex = new RegExp(regex.source, regex.flags);
    
    // We collect all match indices first because modifying the string shifts indices.
    // To safely modify, we process from right to left (end to start)
    const matches = [];
    while ((match = searchRegex.exec(newText)) !== null) {
      matches.push({
        index: match.index,
        length: match[0].length
      });
    }

    for (let i = matches.length - 1; i >= 0; i--) {
      const { index } = matches[i];
      
      // Backtrack to find the nearest '<'
      let tagStart = newText.lastIndexOf('<', index);
      if (tagStart !== -1) {
        // Skip if it's a closing tag
        if (newText[tagStart + 1] === '/') continue;
        
        let tagContent = newText.slice(tagStart, index);
        
        // Skip custom components like <Section, <Row, etc.
        const tagNameMatch = tagContent.match(/<([a-zA-Z0-9_]+)/);
        if (tagNameMatch) {
            const tagName = tagNameMatch[1];
            // If the tag name starts with a capital letter, it's a React component
            if (tagName[0] === tagName[0].toUpperCase() && tagName !== 'SVG' && tagName !== 'Path') {
                continue; 
            }
        }

        // Does it already have var(--font-heading)?
        if (tagContent.includes('var(--font-heading)')) {
          continue;
        }
        
        // Does it have a style={{ ... }} block?
        const styleMatch = tagContent.match(/style=\{\{([^}]*)\}\}/);
        if (styleMatch) {
          // Replace the style block safely
          const newStyle = `style={{ fontFamily: 'var(--font-heading)', ${styleMatch[1]} }}`;
          const newTagContent = tagContent.replace(styleMatch[0], newStyle);
          newText = newText.slice(0, tagStart) + newTagContent + newText.slice(index);
        } else {
          // Find the first space or > to inject style
          const spaceIdx = tagContent.indexOf(' ');
          const bracketIdx = tagContent.indexOf('>');
          let injectIdx = spaceIdx !== -1 && spaceIdx < bracketIdx ? spaceIdx : bracketIdx;
          
          if (injectIdx !== -1) {
            const newTagContent = tagContent.slice(0, injectIdx) + ` style={{ fontFamily: 'var(--font-heading)' }}` + tagContent.slice(injectIdx);
            newText = newText.slice(0, tagStart) + newTagContent + newText.slice(index);
          }
        }
      }
    }
  }
  return newText;
};

for (const file of files) {
  const filePath = path.join(templatesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  const targetRegexes = [
    /\{personal\?\.name[^}]*\}/g,
    /\{personal\.name[^}]*\}/g,
    /\{title\}/g,
    />\s*Personal Details\s*</gi,
    />\s*Family Details\s*</gi,
    />\s*Contact(?: Details)?\s*</gi,
    />\s*Education(?: & Profession)?\s*</gi,
    />\s*Horoscope Details\s*</gi,
    />\s*About Me\s*</gi
  ];

  content = injectFontHeading(content, targetRegexes);

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
  }
}

console.log(`Safely patched ${updatedCount} templates.`);
