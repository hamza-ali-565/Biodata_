const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'components', 'templates');
const files = fs.readdirSync(templatesDir).filter(f => f.startsWith('Template') && f.endsWith('.js'));

const personalFields = [
    { key: 'dateOfBirth', label: 'Date of Birth' },
    { key: 'timeOfBirth', label: 'Time of Birth' },
    { key: 'placeOfBirth', label: 'Place of Birth' },
    { key: 'rashi', label: 'Rashi' },
    { key: 'nakshatra', label: 'Nakshatra' },
    { key: 'gotra', label: 'Gotra' },
    { key: 'complexion', label: 'Complexion' },
    { key: 'height', label: 'Height' },
    { key: 'bachelors', label: 'Education' },
    { key: 'occupation', label: 'Occupation' }
];

const familyFields = [
    { key: 'fatherName', label: "Father's Name" },
    { key: 'fatherOccupation', label: "Father's Occ." },
    { key: 'motherName', label: "Mother's Name" },
    { key: 'motherOccupation', label: "Mother's Occ." },
    { key: 'siblings', label: 'Siblings' }
];

const contactFields = [
    { key: 'contactPerson', label: 'Contact Person' },
    { key: 'contactNumber', label: 'Phone' },
    { key: 'email', label: 'Email' },
    { key: 'address', label: 'Address' }
];

files.forEach(file => {
    const filePath = path.join(templatesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;

    if (content.includes('function Row(')) {
        content = content.replace(/if \(!label && !value\) return null;/, 'if (!value) return null;');
        for (const section of ['PERSONAL DETAILS', 'FAMILY DETAILS', 'CONTACT DETAILS']) {
            const sectionMatch = new RegExp(`<Section title="${section}"[\\s\\S]*?</Section>`);
            let fields, objName;
            if (section === 'PERSONAL DETAILS') { fields = personalFields; objName = 'personal'; }
            if (section === 'FAMILY DETAILS') { fields = familyFields; objName = 'family'; }
            if (section === 'CONTACT DETAILS') { fields = contactFields; objName = 'contact'; }

            const newInner = fields.map(f => `{${objName}?.${f.key} ? <Row label="${f.label}" value={${objName}.${f.key}} color={primaryColor} /> : null}`).join('\n                            ');
            const customInner = `{${objName}?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} color={primaryColor} /> : null)}`;

            content = content.replace(sectionMatch, `<Section title="${section}" color={primaryColor}>
                            ${newInner}
                            ${customInner}
                        </Section>`);
        }

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Updated ${file} (Row type)`);
            return;
        }
    }

    const spanMatch = content.match(/<span className="([^"]+)">([^<]+):<\/span> \{personal\.([a-zA-Z]+)\}/);
    if (spanMatch) {
        const spanClass = spanMatch[1];
        const renderBlock = (fields, objName, colSpanKey = null) => {
            let code = fields.map(f => {
                const cls = (f.key === colSpanKey) ? ' className="col-span-2"' : '';
                return `{${objName}?.${f.key} ? <p${cls}><span className="${spanClass}">${f.label}:</span> {${objName}.${f.key}}</p> : null}`;
            }).join('\n            ');
            code += `\n            {${objName}?.customFields?.map(f => f.value ? <p key={f.id}><span className="${spanClass}">{f.label}:</span> {f.value}</p> : null)}`;
            return code;
        };

        const personalRegex = /<h2[^>]*>Personal Details<\/h2>[\s\S]*?<div className="grid[^>]*>([\s\S]*?)<\/div>/;
        content = content.replace(personalRegex, (match, gridInner) => {
            return match.replace(gridInner, '\n            ' + renderBlock(personalFields, 'personal', 'occupation') + '\n          ');
        });

        const familyRegex = /<h2[^>]*>Family Details<\/h2>[\s\S]*?<div className="grid[^>]*>([\s\S]*?)<\/div>/;
        content = content.replace(familyRegex, (match, gridInner) => {
            return match.replace(gridInner, '\n            ' + renderBlock(familyFields, 'family') + '\n          ');
        });

        const contactRegex = /<h2[^>]*>Contact<\/h2>[\s\S]*?<div className="grid[^>]*>([\s\S]*?)<\/div>/;
        content = content.replace(contactRegex, (match, gridInner) => {
            return match.replace(gridInner, '\n            ' + renderBlock(contactFields, 'contact') + '\n          ');
        });

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Updated ${file} (Span type)`);
            return;
        }
    }

    const minMatch = content.match(/<div className="space-y-1">\s*<p className="([^"]+)">DOB<\/p>\s*<p className="([^"]+)">\{personal\.dateOfBirth\}<\/p>\s*<\/div>/);
    if (minMatch) {
        const labelClass = minMatch[1];
        const valClass = minMatch[2];
        const renderBlock = (fields, objName) => {
            let code = fields.map(f => {
                return `{${objName}?.${f.key} ? <div className="space-y-1"><p className="${labelClass}">${f.label}</p><p className="${valClass}">{${objName}.${f.key}}</p></div> : null}`;
            }).join('\n            ');
            code += `\n            {${objName}?.customFields?.map(f => f.value ? <div key={f.id} className="space-y-1"><p className="${labelClass}">{f.label}</p><p className="${valClass}">{f.value}</p></div> : null)}`;
            return code;
        };

        const personalRegex = /<h2[^>]*>Personal<\/h2>[\s\S]*?<div className="grid[^>]*>([\s\S]*?)<\/div>/;
        content = content.replace(personalRegex, (match, gridInner) => {
            return match.replace(gridInner, '\n            ' + renderBlock(personalFields, 'personal') + '\n          ');
        });

        const familyRegex = /<h2[^>]*>Family<\/h2>[\s\S]*?<div className="grid[^>]*>([\s\S]*?)<\/div>/;
        content = content.replace(familyRegex, (match, gridInner) => {
            return match.replace(gridInner, '\n            ' + renderBlock(familyFields, 'family') + '\n          ');
        });

        const contactRegex = /<h2[^>]*>Contact<\/h2>[\s\S]*?<div className="grid[^>]*>([\s\S]*?)<\/div>/;
        content = content.replace(contactRegex, (match, gridInner) => {
            return match.replace(gridInner, '\n            ' + renderBlock(contactFields, 'contact') + '\n          ');
        });

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Updated ${file} (Minimal type)`);
            return;
        }
    }

    const sbMatch = content.match(/<div>\s*<p className="([^"]+)">DOB<\/p>\s*<p className="([^"]+)">\{personal\.dateOfBirth\}<\/p>\s*<\/div>/);
    if (sbMatch) {
        const labelClass = sbMatch[1];
        const valClass = sbMatch[2];
        const renderBlock = (fields, objName) => {
            let code = fields.map(f => {
                return `{${objName}?.${f.key} ? <div><p className="${labelClass}">${f.label}</p><p className="${valClass}">{${objName}.${f.key}}</p></div> : null}`;
            }).join('\n            ');
            code += `\n            {${objName}?.customFields?.map(f => f.value ? <div key={f.id}><p className="${labelClass}">{f.label}</p><p className="${valClass}">{f.value}</p></div> : null)}`;
            return code;
        };

        const personalRegex = /<h2[^>]*>Personal<\/h2>[\s\S]*?<div className="grid[^>]*>([\s\S]*?)<\/div>/;
        content = content.replace(personalRegex, (match, gridInner) => {
            return match.replace(gridInner, '\n            ' + renderBlock(personalFields, 'personal') + '\n          ');
        });

        const familyRegex = /<h2[^>]*>Family<\/h2>[\s\S]*?<div className="grid[^>]*>([\s\S]*?)<\/div>/;
        content = content.replace(familyRegex, (match, gridInner) => {
            return match.replace(gridInner, '\n            ' + renderBlock(familyFields, 'family') + '\n          ');
        });

        const contactRegex = /<h2[^>]*>Contact<\/h2>[\s\S]*?<div className="grid[^>]*>([\s\S]*?)<\/div>/;
        content = content.replace(contactRegex, (match, gridInner) => {
            return match.replace(gridInner, '\n            ' + renderBlock(contactFields, 'contact') + '\n          ');
        });

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Updated ${file} (Sidebar type)`);
            return;
        }
    }

    const tcMatch = content.match(/<div>\s*<p className="([^"]+)">Date of Birth<\/p>\s*<p>\{personal\.dateOfBirth\}<\/p>\s*<\/div>/) || content.match(/<div>\s*<p className="([^"]+)">DOB<\/p>\s*<p>\{personal\.dateOfBirth\}<\/p>\s*<\/div>/);
    if (tcMatch) {
        const labelClass = tcMatch[1];
        const renderBlock = (fields, objName) => {
            let code = fields.map(f => {
                return `{${objName}?.${f.key} ? <div><p className="${labelClass}">${f.label}</p><p>{${objName}.${f.key}}</p></div> : null}`;
            }).join('\n            ');
            code += `\n            {${objName}?.customFields?.map(f => f.value ? <div key={f.id}><p className="${labelClass}">{f.label}</p><p>{f.value}</p></div> : null)}`;
            return code;
        };

        const personalRegex = /<h2[^>]*>Personal Details<\/h2>[\s\S]*?<div className="grid[^>]*>([\s\S]*?)<\/div>/;
        content = content.replace(personalRegex, (match, gridInner) => {
            return match.replace(gridInner, '\n            ' + renderBlock(personalFields, 'personal') + '\n          ');
        });

        const familyRegex = /<h2[^>]*>Family Details<\/h2>[\s\S]*?<div className="grid[^>]*>([\s\S]*?)<\/div>/;
        content = content.replace(familyRegex, (match, gridInner) => {
            return match.replace(gridInner, '\n            ' + renderBlock(familyFields, 'family') + '\n          ');
        });

        const contactRegex = /<h2[^>]*>Contact<\/h2>[\s\S]*?<div className="space-y-4">([\s\S]*?)<\/div>/;
        if (content.match(contactRegex)) {
            content = content.replace(contactRegex, (match, gridInner) => {
                return match.replace(gridInner, '\n            ' + renderBlock(contactFields, 'contact') + '\n          ');
            });
        }

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Updated ${file} (TwoColumn type)`);
            return;
        }
    }

    console.log(`Could not automatically update ${file}`);
});
