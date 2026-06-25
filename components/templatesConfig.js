export const STORAGE_KEY = "biodata-for-marriage:data";

export const FONT_OPTIONS = [
  // Serif Fonts
  { id: "playfair", label: "Playfair Display", category: "Serif", css: 'var(--font-playfair-display), "Playfair Display", serif' },
  { id: "merriweather", label: "Merriweather", category: "Serif", css: 'var(--font-merriweather), "Merriweather", "Georgia", serif' },
  { id: "lora", label: "Lora", category: "Serif", css: '"Lora", serif' },
  { id: "libre-baskerville", label: "Libre Baskerville", category: "Serif", css: 'var(--font-libre-baskerville), "Libre Baskerville", "Georgia", serif' },
  { id: "cormorant-garamond", label: "Cormorant Garamond", category: "Serif", css: 'var(--font-cormorant-garamond), "Cormorant Garamond", serif' },
  { id: "dm-serif-display", label: "DM Serif Display", category: "Serif", css: 'var(--font-dm-serif-display), "DM Serif Display", serif' },
  { id: "roboto-slab", label: "Roboto Slab", category: "Serif", css: 'var(--font-roboto-slab), "Roboto Slab", serif' },
  // Traditional / Decorative
  { id: "cinzel", label: "Cinzel", category: "Traditional", css: 'var(--font-cinzel), "Cinzel", "Times New Roman", serif' },
  // Sans-Serif / Modern
  { id: "poppins", label: "Poppins", category: "Sans-Serif", css: 'var(--font-poppins), "Poppins", system-ui, sans-serif' },
  { id: "inter", label: "Inter", category: "Sans-Serif", css: '"Inter", system-ui, sans-serif' },
  { id: "lato", label: "Lato", category: "Sans-Serif", css: 'var(--font-lato), "Lato", system-ui, sans-serif' },
  { id: "montserrat", label: "Montserrat", category: "Sans-Serif", css: 'var(--font-montserrat), "Montserrat", system-ui, sans-serif' },
  { id: "nunito", label: "Nunito", category: "Sans-Serif", css: 'var(--font-nunito), "Nunito", system-ui, sans-serif' },
  { id: "raleway", label: "Raleway", category: "Sans-Serif", css: 'var(--font-raleway), "Raleway", system-ui, sans-serif' },
  { id: "source-sans-pro", label: "Source Sans Pro", category: "Sans-Serif", css: 'var(--font-source-sans-pro), "Source Sans Pro", system-ui, sans-serif' },
];

export const THEME_OPTIONS = [
  { id: "blue", label: "Blue", accent: "#3b82f6", accentSoft: "#dbeafe", textHeading: "#1e3a8a", previewColor: "#3b82f6" },
  { id: "royal-blue", label: "Royal Blue", accent: "#1d4ed8", accentSoft: "#dbeafe", textHeading: "#1e3a8a", previewColor: "#1d4ed8" },
  { id: "purple", label: "Purple", accent: "#8b5cf6", accentSoft: "#ede9fe", textHeading: "#5b21b6", previewColor: "#8b5cf6" },
  { id: "emerald", label: "Emerald", accent: "#10b981", accentSoft: "#d1fae5", textHeading: "#064e3b", previewColor: "#10b981" },
  { id: "green", label: "Green", accent: "#22c55e", accentSoft: "#dcfce7", textHeading: "#14532d", previewColor: "#22c55e" },
  { id: "rose", label: "Rose", accent: "#f43f5e", accentSoft: "#ffe4e6", textHeading: "#881337", previewColor: "#f43f5e" },
  { id: "red", label: "Red", accent: "#ef4444", accentSoft: "#fee2e2", textHeading: "#7f1d1d", previewColor: "#ef4444" },
  { id: "maroon", label: "Maroon", accent: "#9f1239", accentSoft: "#ffe4e6", textHeading: "#4c0519", previewColor: "#9f1239" },
  { id: "gold", label: "Gold", accent: "#d97706", accentSoft: "#fef3c7", textHeading: "#78350f", previewColor: "#d97706" },
  { id: "gray", label: "Gray", accent: "#6b7280", accentSoft: "#f3f4f6", textHeading: "#1f2937", previewColor: "#6b7280" },
  { id: "classic-black", label: "Classic Black", accent: "#111827", accentSoft: "#e5e7eb", textHeading: "#020617", previewColor: "#111827" },
];

export const generateSlug = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

const RAW_TEMPLATE_DEFINITIONS = [
  
    { id: "royal-emerald", slug: "royal-emerald", name: "Royal Emerald", layout: "TemplateRoyalEmerald", style: "Traditional", description: "Emerald accent pillar with Ganesh invocation — crafted for Hindu, Brahmin, and North Indian families who want a premium, dignified presence.", defaultThemeId: "emerald" },
    { id: "night-sky", slug: "night-sky", name: "Night Sky", layout: "TemplateNightSky", style: "Modern", description: "Navy star-field header with hexagonal photo and contact chips — made for IT professionals, MBA graduates, and NRI families.", defaultThemeId: "blue" },
    { id: "rishta-nikah", slug: "rishta-nikah", name: "Rishta", layout: "TemplateRishtaNikah", style: "Traditional", description: "Opens with Bismillah calligraphy, Sect and Biradari fields, Islamic star motif — built specifically for Muslim families. No horoscope fields.", defaultThemeId: "gold" },
    { id: "prabhaat", slug: "prabhaat", name: "Prabhaat", layout: "TemplatePrabhaat", style: "Traditional", description: "12-petal lotus mandala ring around circular photo, Jathagam section with Rasi and Natchathiram — designed for South Indian Hindu and Brahmin families.", defaultThemeId: "maroon" },
    { id: "lagna-patrika", slug: "lagna-patrika", name: "Lagna Patrika", layout: "TemplateLagnaPatrika", style: "Traditional", description: "Saffron-and-green dual border, bilingual headings in Marathi and English, Kul field — crafted for Marathi families across all communities in Maharashtra.", defaultThemeId: "maroon" },
  { id: "TemplateCrimsonSwirlContrast", name: "Kumkum", slug: "crimson-swirl-contrast", style: "premium", description: "Deep red and cream design with traditional Indian ornamental swirls — suits Hindu and North Indian families who want a formal, distinctive look. Includes all horoscope fields.", layout: "TemplateCrimsonSwirlContrast", defaultThemeId: "maroon" },
  { id: "TemplateGreenBorderArt", name: "Tulsi", slug: "green-border-art", style: "premium", description: "Decorative green border with a clean right-side photo layout — a popular choice for families in Maharashtra and South India who prefer understated elegance. Works well for both boy's and girl's biodata.", layout: "TemplateGreenBorderArt", defaultThemeId: "emerald" },
  { id: "TemplateBeautifulGoldenBorder", name: "Kanakamala", slug: "beautiful-golden-border", style: "premium", description: "Warm beige background with a gold ornamental border — designed for traditional Hindu and Marathi families. The golden accents read as auspicious without overwhelming the information. Prints beautifully.", layout: "TemplateBeautifulGoldenBorder", defaultThemeId: "gold" },
  { id: "TemplateLeafsEffect", name: "Peepal", slug: "leafs-effect", style: "premium", description: "Subtle green leaf artwork in the corners with an oval photo frame — suits families who want something natural and modern without being Western in feel. Good for professionals from Bengaluru, Pune, and Mumbai.", layout: "TemplateLeafsEffect", defaultThemeId: "emerald" },
  { id: "TemplateSeaGreenContrast", name: "Neel", slug: "sea-green-contrast", style: "premium", description: "Sea-green header panel with a clean oval photo and spacious family section below — a modern format that works well for IT professionals and urban families who want simplicity over ornamentation.", layout: "TemplateSeaGreenContrast", defaultThemeId: "emerald" },
  { id: "TemplateGreenOffWhiteContrast", name: "Shvetambar", slug: "green-off-white-contrast", style: "premium", description: "Bold dark green header with a crisp circular photo cutout and off-white information sections — a modern, high-contrast design that photographs well and shares cleanly on WhatsApp.", layout: "TemplateGreenOffWhiteContrast", defaultThemeId: "emerald" },
  { id: "TemplateSoberBlueGold", name: "Rajasvi", slug: "sober-blue-gold", style: "premium", description: "Navy blue and gold — a formal, dignified design suited for families from UP, Bihar, Delhi, and Rajasthan who want a traditional, respectable presentation. Gold framing adds a formal register.", layout: "TemplateSoberBlueGold", defaultThemeId: "royal-blue" },
  { id: "TemplateBeautifulTraditional", name: "Hilal", slug: "beautiful-traditional", style: "premium", description: "Designed for Muslim families — opens with Bismillah calligraphy, features Islamic geometric arches, and includes Sect and Biradari fields. The central gold photo frame gives it a dignified, formal feel. Also used by some Sikh families who prefer the arch aesthetic.", layout: "TemplateBeautifulTraditional", defaultThemeId: "emerald" },
  { id: "TemplateModern", name: "Nutan", slug: "modern", style: "modern", description: "Minimal, clean design with the photo on the right and information left-aligned — the most popular choice for IT professionals, doctors, and MBAs in cities like Bengaluru, Pune, Hyderabad, and Mumbai. Prints in one page, shares cleanly on WhatsApp.", layout: "TemplateModern", defaultThemeId: "royal-blue" },
  { id: "TemplateClassic", name: "Classic", style: "traditional", description: "Traditional layout with top-centered photo.", layout: "TemplateClassic", defaultThemeId: "maroon" },
  { id: "TemplateElegant", name: "Elegant", style: "elegant", description: "Sophisticated left-photo with full border.", layout: "TemplateElegant", defaultThemeId: "classic-black" },
  { id: "TemplateMinimal", name: "Minimal", style: "minimal", description: "Text-focused layout with no photo.", layout: "TemplateMinimal", defaultThemeId: "classic-black" },
  { id: "TemplateFloral", name: "Floral", style: "traditional", description: "Subtle traditional layout.", layout: "TemplateFloral", defaultThemeId: "maroon" },
  { id: "TemplateGeometric", name: "Geometric", style: "modern", description: "Left-photo clean aesthetic.", layout: "TemplateGeometric", defaultThemeId: "emerald" },
  { id: "TemplateCard", name: "Card", style: "modern", description: "Fully rounded borders, centered photo.", layout: "TemplateCard", defaultThemeId: "gold" },
  { id: "TemplateTwoColumn", name: "Two Column", style: "modern", description: "Standard photo sidebar.", layout: "TemplateTwoColumn", defaultThemeId: "royal-blue" },
  { id: "TemplateSidebar", name: "Sidebar", style: "modern", description: "Highlight sidebar with photo.", layout: "TemplateSidebar", defaultThemeId: "classic-black" },
  { id: "TemplateCentered", name: "Centered", style: "elegant", description: "Clean center-aligned layout.", layout: "TemplateCentered", defaultThemeId: "classic-black" },
  { id: "TemplateGold", name: "Gold Frame", style: "luxury", description: "Decorative luxury style.", layout: "TemplateGold", defaultThemeId: "gold" },
  { id: "TemplateDark", name: "Dark Mode", style: "dark", description: "Premium dark aesthetics.", layout: "TemplateDark", defaultThemeId: "classic-black" },
  { id: "TemplateVintage", name: "Vintage", style: "traditional", description: "Dashed borders and center photo.", layout: "TemplateVintage", defaultThemeId: "maroon" },
  { id: "TemplateLuxury", name: "Luxury Bold", style: "luxury", description: "Elegant double border styling.", layout: "TemplateLuxury", defaultThemeId: "gold" },
  { id: "TemplateRoyal", name: "Royal", style: "luxury", description: "Premium center alignment.", layout: "TemplateRoyal", defaultThemeId: "emerald" },
  { id: "TemplateClassicRoyal", name: "Classic Royal", style: "traditional", description: "Classic dual border with elegant motifs.", layout: "TemplateClassicRoyal", defaultThemeId: "maroon" },
  { id: "TemplateArchMandala", name: "Blue Arch Mandala", style: "premium", description: "Regal blue arch framing with mandala background.", layout: "TemplateArchMandala", defaultThemeId: "royal-blue" },
  { id: "TemplateMaroonPillars", name: "Maroon & Gold", style: "premium", description: "Deep maroon background with gold rounded headers.", layout: "TemplateMaroonPillars", defaultThemeId: "maroon" },
  { id: "TemplateSample1", name: "Cyan Diamond", style: "modern", description: "Cyan-Yellow gradient with black diamond borders.", layout: "TemplateSample1", defaultThemeId: "classic-black" },
  { id: "TemplateSample2", name: "Autumn Leaves", style: "elegant", description: "Soft watercolor background with maple leaves.", layout: "TemplateSample2", defaultThemeId: "gold" },
  { id: "TemplateSample3", name: "Royal Gold", style: "premium", description: "Ornate gold curly borders with a beige background.", layout: "TemplateSample3", defaultThemeId: "gold" },
  { id: "TemplateSample4", name: "Floral Mandala", style: "premium", description: "Purple and orange flourish corner borders.", layout: "TemplateSample4", defaultThemeId: "maroon" },

];

export const TEMPLATE_DEFINITIONS = RAW_TEMPLATE_DEFINITIONS.map(template => ({
  ...template,
  slug: template.slug || generateSlug(template.name)
}));
