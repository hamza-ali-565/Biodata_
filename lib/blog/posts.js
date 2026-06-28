import { resolveBlogImage } from "./images";
import { preparePost } from "./content";

const posts = [
  // ─── How To Cluster ──────────────────────────────────────────────────────────
  {
    slug: "how-to-make-marriage-biodata",
    title: "How to Make a Marriage Biodata — Step by Step",
    excerpt:
      "Step-by-step guide to making a marriage biodata. What to include, which fields suit your community, how to download as PDF and share on WhatsApp. Free tool included.",
    publishedAt: "2026-06-05",
    imageFolder: "blog-5",
    sections: [
      {
        type: "paragraph",
        text: "To make a marriage biodata, gather your personal details (name, date of birth, time of birth, place of birth), horoscope information (Gotra, Rashi, Nakshatra, Manglik status for Hindu families), family background (parents' names and occupations, siblings), education, career, and a contact number. Then choose a template suited to your community, fill in the details, and download as PDF. The whole process takes 5–10 minutes using a free online tool. Your data stays in your browser — no account or email is required.",
      },
      {
        type: "heading",
        level: 2,
        text: "What do you need before you start?",
      },
      {
        type: "paragraph",
        text: "Most people sit down to make a biodata and spend 20 minutes trying to remember their Gotra or looking for their parents' middle names. Gathering everything before you open the form saves that time.",
      },
      {
        type: "paragraph",
        text: "Personal details you will need: full name as you want it to appear, date of birth (DD-MM-YYYY), exact time of birth — needed for horoscope calculation in Hindu families; morning, afternoon, or evening works if the exact time is not known — and place of birth (city and state, or district and state for small towns).",
      },
      {
        type: "paragraph",
        text: "Horoscope details for Hindu families: Gotra (ask your father if you do not know it — it is always known in the family), Rashi (Vedic moon sign, different from Western astrology), Nakshatra (birth star), and Manglik status. If you do not know these, a free horoscope calculator on the site computes them from your date, time, and place of birth.",
      },
      {
        type: "paragraph",
        text: "Family information: father's full name and occupation, mother's full name and occupation (Homemaker is a complete and respectful answer), number of brothers and sisters with their married or unmarried status, and family type — joint or nuclear.",
      },
      {
        type: "paragraph",
        text: "Education and career: your highest qualification, institution name, current employer, designation, and city of work. Annual income is optional — include a range if your community expects it.",
      },
      {
        type: "paragraph",
        text: "A recent photo: plain or light background, natural light, clear face, taken within the last 6 months, portrait orientation. The photo is the first element any family looks at.",
      },
      {
        type: "paragraph",
        text: "Contact details: your parent's mobile number, not your own — this is the cultural convention in arranged marriage — and WhatsApp number if different.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to make a marriage biodata — 6 steps",
      },
      {
        type: "paragraph",
        text: "Step 1: Open the Marriage Biodata Hub tool. Go to marriagebiodatahub.com. The tool is on the homepage. No login, no signup, no email required. Your data is stored in your browser — it does not go to any server.",
      },
      {
        type: "paragraph",
        text: "Step 2: Fill in Personal Details. The form opens with the Personal Details section. Enter name, date of birth, time of birth, and place of birth. For Hindu families, the Rashi, Nakshatra, Gotra, and Manglik fields are in this section. Fill them in if you know them. For Muslim families, the Sect and Biradari fields appear here instead of horoscope fields. What is Gotra? Your Gotra is your patrilineal clan lineage, traced back to a Vedic sage — it is passed through the father's line and usually known in the family.",
      },
      {
        type: "paragraph",
        text: "Step 3: Fill in Family Details. Enter father's name and occupation, mother's name and occupation, number of brothers and sisters with married or unmarried status, and family type. Native village or ancestral town is useful here for families in Maharashtra, Rajasthan, UP, and Gujarat — it helps the other family understand your roots. What should I write for mother's occupation if she is a homemaker? Write 'Homemaker.' It is a complete and respectful answer — many educated families in India prefer this term.",
      },
      {
        type: "paragraph",
        text: "Step 4: Fill in Education, Career, and About Me. Enter your highest qualification with institution name, current employer, designation, and work city. For the About Me section: write 3–4 specific sentences. Not 'I am a simple, family-oriented person' — write something real. 'I am a software engineer in Bengaluru who treks on weekends and calls home every Sunday evening' is more memorable than a paragraph of generic adjectives.",
      },
      {
        type: "paragraph",
        text: "Step 5: Choose your template. After filling in your details, navigate to the template selection. Choose based on your community — Beautiful Traditional for Muslim families, Sober Blue Gold for traditional Hindu families, Modern or Neel for IT professionals — and based on how you will share it (high-contrast designs for WhatsApp, ornate designs for printing). Browse all templates at marriagebiodatahub.com/templates.",
      },
      {
        type: "paragraph",
        text: "Step 6: Download as PDF and share. Click Download PDF. The PDF is generated in your browser — no upload to any server happens. The file downloads to your device immediately. To share on WhatsApp, tap the share button on the download screen. It opens WhatsApp with the PDF attached and a message ready to send. Edit the message to add the recipient's name before sending.",
      },
      {
        type: "heading",
        level: 2,
        text: "How long does it take to make a marriage biodata?",
      },
      {
        type: "paragraph",
        text: "5–10 minutes if you have your information ready. 20–30 minutes if you need to look things up — Gotra, parents' full names, exact date of birth. The longest part for most people is the About Me section. Preparing a few sentences about yourself in advance cuts the total time to under 5 minutes.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to make a marriage biodata on mobile?",
      },
      {
        type: "paragraph",
        text: "The tool works on any phone browser — iPhone Safari, Android Chrome, or any mobile browser. Go to marriagebiodatahub.com on your phone. The form is mobile-optimised. Fill in your details, upload your photo directly from your phone's gallery, choose your template, and download. The PDF downloads to your phone and can be shared directly to WhatsApp from there. One tip for mobile users: type your About Me paragraph in your notes app first, then paste it into the form — mobile keyboards make longer paragraphs harder to type directly.",
      },
      {
        type: "heading",
        level: 2,
        text: "Common mistakes when making a marriage biodata",
      },
      {
        type: "paragraph",
        text: "Leaving the Gotra field blank in a Hindu biodata. This signals to a traditional family that the biodata is incomplete. If you genuinely do not know your Gotra, write 'Gotra not known' — it is honest and accepted. Do not leave it blank.",
      },
      {
        type: "paragraph",
        text: "Using a photo more than 6 months old. Families notice. If the photo was taken 2 years ago and you look different now, it creates an awkward moment at the first meeting. A recent photo in natural light, no filters, plain background — that is all that is needed.",
      },
      {
        type: "paragraph",
        text: "Writing 'I am a simple, honest, and family-oriented person' in About Me. This is the most common phrase in Indian marriage biodatas — it appears in roughly half of all profiles. It tells the other family nothing distinguishing about you. Write one concrete thing instead.",
      },
      {
        type: "paragraph",
        text: "Putting your own mobile number in Contact Details. The convention in Indian arranged marriage is to put your parent's contact number — usually your father's. It signals that your family is actively involved in the process, which other families find reassuring.",
      },
      {
        type: "paragraph",
        text: "A two-page biodata. Families reviewing 20–30 profiles at a time do not read page 2. Everything must fit on one A4 page. Use the single-page preview to check before downloading.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to make a marriage biodata for different communities",
      },
      {
        type: "paragraph",
        text: "Hindu North Indian families (UP, Bihar, Delhi, Rajasthan): Gotra, Rashi, Nakshatra, and Manglik are essential. Use Sober Blue Gold or Crimson Swirl Contrast — both read as formal and family-appropriate in the North Indian arranged marriage context. Hindu South Indian families (Tamil Nadu, Kerala, Karnataka): Natchathiram, Rasi, Jathagam section, and Kula are expected. Use Modern or Green Border Art — both print cleanly for sharing through a pandit or marriage bureau. Muslim families: Sect and Biradari fields replace horoscope fields entirely. Use Beautiful Traditional — it opens with Bismillah calligraphy and includes Islamic geometric elements that feel made for the community. Marathi families: Kul, Kulswamini, and Mulchi Gavi are community-specific fields. Use Beautiful Golden Border or the Lagna Patrika template — both have the visual aesthetic Marathi families recognise as appropriate. Sikh families: Gurudwara and Amritdhari status are useful additions. Use Sober Blue Gold. Christian families: Denomination and Diocese instead of Gotra and Manglik. Use Modern or Leafs Effect.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "paragraph",
        text: "How do I make a marriage biodata for free? Go to marriagebiodatahub.com. The tool is entirely free — no login, no payment, no watermark on the downloaded PDF. Fill in your personal details, family background, education, and About Me section. Choose a template suited to your community. Download as PDF. Share on WhatsApp. The whole process takes 5–10 minutes.",
      },
      {
        type: "paragraph",
        text: "What information is needed to make a marriage biodata? You need: personal details (name, date of birth, time of birth, place of birth), horoscope details for Hindu families (Gotra, Rashi, Nakshatra, Manglik status), family background (parents' names and occupations, siblings, family type), education and career details, a recent photo, and your parent's contact number. A short About Me paragraph of 3–5 sentences is optional but strongly recommended.",
      },
      {
        type: "paragraph",
        text: "Can I edit my marriage biodata after downloading it? Yes. Return to marriagebiodatahub.com on the same device. Your details are saved in your browser's local storage and will be pre-filled in the form. Make any changes and download a new PDF. This works as long as you use the same browser on the same device.",
      },
      {
        type: "highlight",
        text: "The most important thing to remember: your biodata is reviewed alongside 20–30 others in a family's WhatsApp group. What makes yours get a second look is not the design — it is the combination of complete information, a clear recent photo, and one genuine detail in the About Me section that only you would write. The tool handles the design. Your job is the content.",
      },
    ],
  },
  {
    slug: "how-to-write-about-me-in-marriage-biodata",
    title: "How to Write About Me in a Marriage Biodata",
    excerpt:
      "How to write the About Me section in a marriage biodata — what to include, what to avoid, and 8 community-specific examples. One section that makes your biodata stand out.",
    publishedAt: "2026-06-12",
    imageFolder: "blog-6",
    sections: [
      {
        type: "paragraph",
        text: "To write the About Me section in a marriage biodata, use 3–4 specific sentences covering: one real quality with a concrete example, one genuine interest or hobby, a family value you hold, and what you're looking for in a partner. Avoid generic phrases like 'simple and family-oriented' — write something only you would write. The About Me section is read more carefully when two candidates look similar on paper. One specific detail is worth more than five generic adjectives.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why the About Me section matters more than most people think",
      },
      {
        type: "paragraph",
        text: "When families review 20–30 biodatas, the personal details, education, and family sections are scanned quickly for compatibility filters — Gotra, caste, city, salary range. These are binary checks. The About Me section is where a person either comes alive or blends into the stack. Families are not reading it for literary quality — they are reading for a feeling of familiarity. A specific, real detail creates that feeling. A generic phrase does not.",
      },
      {
        type: "paragraph",
        text: "One example to illustrate the difference: 'My family eats dinner together every evening — that is something I want to carry forward' tells a family you value togetherness, you are close to your parents, and you have warmth. 'I am family-oriented' tells them nothing they have not read 20 times today.",
      },
      {
        type: "heading",
        level: 2,
        text: "What to include in the About Me section",
      },
      {
        type: "heading",
        level: 3,
        text: "One real personality quality — with an example, not just the adjective",
      },
      {
        type: "paragraph",
        text: "Do not write 'I am patient.' Write 'I coached my younger sibling through their board exams — seven months, every evening.' The quality shows itself. The family remembers the detail. Do not write 'I am ambitious.' Write 'I cleared CA in two attempts and am currently managing a team of six at 28.' The number is specific. The achievement is real. Replace every adjective with a fact — it is the single rule that improves any About Me.",
      },
      {
        type: "heading",
        level: 3,
        text: "One genuine hobby or interest — specific, not a list",
      },
      {
        type: "paragraph",
        text: "Do not write 'I enjoy reading, travelling, cooking, and listening to music.' That is every biodata. Pick the one that is most real to you. 'I have been driving across India on road trips since 2021 — six states so far, three more planned' is one interest, specific, memorable. A list of eight hobbies tells the family nothing. One vivid interest tells them who you are.",
      },
      {
        type: "heading",
        level: 3,
        text: "A family value — something you do, not just something you believe",
      },
      {
        type: "paragraph",
        text: "Not 'I value family.' That means nothing. Write: 'We have had Sunday lunch together at my parents' house every week for the last five years, even when I was working in another city.' That shows value through action. Families receiving the profile can picture themselves in that Sunday lunch. Abstract values are forgotten; concrete habits are remembered.",
      },
      {
        type: "heading",
        level: 3,
        text: "What you are looking for — generous and brief",
      },
      {
        type: "paragraph",
        text: "One or two sentences. Not a checklist. 'I am looking for someone who is caring, has their own interests, and is close to their family' is generous and realistic. 'Looking for a well-educated girl from a good family who is willing to relocate and support my career' sounds like a job specification. The partner preference section at the bottom of the biodata is where detailed expectations go. The About Me version should be warm and open.",
      },
      {
        type: "heading",
        level: 2,
        text: "What to avoid in the About Me section",
      },
      {
        type: "paragraph",
        text: "'I am a simple, honest, and family-oriented person.' This is the single most common phrase in Indian marriage biodatas. It appears in roughly half of all profiles on any matrimonial platform. It says nothing distinguishing about you. The family will not remember it. Do not write it.",
      },
      {
        type: "paragraph",
        text: "A list of 8–10 hobbies with no depth. 'I enjoy reading, cooking, travelling, music, cricket, gym, watching films, and spending time with family.' No family can hold this in their memory after reviewing 25 profiles. Pick two at most — the ones that are most genuinely yours.",
      },
      {
        type: "paragraph",
        text: "Third person when you are writing your own biodata. 'She is a calm and responsible person who enjoys reading.' The third person feels formal in the wrong way — like your parents wrote it about you. Unless your parents are writing it, which is fine for many families, use first person. It is warmer and reads as more genuine.",
      },
      {
        type: "paragraph",
        text: "Anything that sounds like a complaint or a warning. 'I don't like drama or people who are not serious.' 'I have had a difficult past and am looking for a mature partner.' Save these conversations for after the first meeting. In the biodata, only what is genuinely good about you.",
      },
      {
        type: "paragraph",
        text: "Salary or income information in the About Me. That belongs in the education and career section. About Me is for personality and values, not financial details.",
      },
      {
        type: "heading",
        level: 2,
        text: "The one rule that makes any About Me better",
      },
      {
        type: "paragraph",
        text: "Replace every adjective with a fact. 'I am patient' becomes 'I spent 7 months coaching my sister through NEET.' 'I am hardworking' becomes 'I cleared CA Final in my first attempt while working part-time.' 'I love family' becomes 'We have had Sunday lunch together every week for five years.' 'I am ambitious' becomes 'I went from fresher to team lead in two years.' Every adjective in an About Me can be replaced by something specific. Do it every time.",
      },
      {
        type: "heading",
        level: 2,
        text: "8 About Me examples for different communities and professions",
      },
      {
        type: "paragraph",
        text: "Male, Software Engineer, Bengaluru, Modern tone: 'I am a product engineer at a tech company in Bengaluru, working on products used by a few million people — that is the part of my job I find genuinely exciting. Outside work, I run three mornings a week in Cubbon Park and I am learning to cook (currently at acceptable dal fry, working towards Hyderabadi biryani). I come from a close family in Hyderabad — we talk every day. I am looking for a partner who has her own interests and ambitions, and who values quiet family life as much as adventure.'",
      },
      {
        type: "paragraph",
        text: "Female, Doctor, Delhi, Traditional tone: 'I am completing my MD in Paediatrics at AIIMS New Delhi. Medicine runs in my family — my father is a surgeon and my grandfather was a general physician in Rohtak. Outside medicine, I cook on Sundays and have been learning Bharatanatyam since I was seven. I come from a warm, closely knit family. I am looking for a partner who is educated, caring, and ready to build a family with patience and respect.'",
      },
      {
        type: "paragraph",
        text: "Male, Bank Officer, Lucknow, North Indian traditional: 'I work as a Probationary Officer at SBI's Lucknow branch. I come from a middle-class Brahmin family in Kanpur — my father is a retired school principal and we are a joint family of seven. I enjoy Urdu poetry, chess, and reading history. I believe a good family is built on honesty, respect, and patience. I am looking for a well-educated, grounded life partner from a similar family background.'",
      },
      {
        type: "paragraph",
        text: "Female, Teacher, Chennai, Tamil Brahmin: 'I teach Mathematics at a higher secondary school in Chennai. My family is Iyer, with roots in Thanjavur. I play the veena and have been learning for twenty years — it is the part of my day I look forward to most. Horoscope compatibility is important to my family, and I am open to traditional matching. I am looking for a kind, responsible partner who respects our family traditions and is close to his own family.'",
      },
      {
        type: "paragraph",
        text: "Male, IT Professional, Hyderabad, Muslim family: 'Alhamdulillah, I work as a senior developer at a tech company in Hyderabad's Hitec City. I try to maintain my five daily prayers and Juma. On weekends I play cricket with cousins and occasionally cook Hyderabadi biryani — the Old City recipe, not the hotel version. My family is Sunni, Syed, and we are warm and easygoing. I am looking for a pious, educated partner who shares our values and can be comfortable in Hyderabad.'",
      },
      {
        type: "paragraph",
        text: "Female, CA, Pune, Marathi family: 'I am a Chartered Accountant in Pune, currently working with a mid-sized firm in Kothrud. My family is from Nashik — we are Deshastha Brahmin, and we visit every month. I enjoy Marathi theatre, trekking in the Sahyadris, and trying to grow vegetables on my balcony (with mixed success). Our Kulswamini is Renukamata. I am looking for a settled, educated partner from a Marathi family who values both career and family equally.'",
      },
      {
        type: "paragraph",
        text: "Male, Second marriage, honest tone: 'I am 36, working as a project manager in Pune. I come into this process with clarity and honesty — I believe every chapter of life brings understanding that the previous one could not. I enjoy running, reading non-fiction, and cooking for friends on weekends. I have a calm, independent nature and I value real conversations over performance. I am looking for someone emotionally mature, independent, and genuinely open to building something new.'",
      },
      {
        type: "paragraph",
        text: "Female, NRI, Toronto: 'I grew up in Mumbai and have been living in Toronto for six years, working in financial services. I visit India every Diwali and am looking for a partner comfortable with life between both countries. I am close to my family — we call every day. I enjoy cooking Indian food abroad (it is my way of staying grounded), long walks, and reading. I am looking for a partner who values family, has their own career, and is open to a life that spans India and Canada.'",
      },
      {
        type: "heading",
        level: 2,
        text: "About Me for boys vs girls — is there a difference?",
      },
      {
        type: "paragraph",
        text: "The structure is the same. The emphasis differs slightly in practice: a girl's About Me tends toward warmth and family values; a boy's tends toward career achievement and stability. These are cultural patterns, not rules. The best approach for either: ignore the gender expectation entirely and write the most honest, specific version of yourself. A girl who writes about her trek across Himachal Pradesh is more memorable than one who writes about cooking. A boy who writes about calling his mother every evening is warmer than one who lists his salary. Honesty over expectation, every time.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "paragraph",
        text: "How long should the About Me section be in a marriage biodata? 3–5 sentences, no more than 80–100 words. Families reviewing multiple biodatas spend about 90 seconds on each profile. A short, specific, memorable About Me is more effective than a long paragraph. If you have written more than 5 sentences, edit down — keep only the most distinctive details.",
      },
      {
        type: "paragraph",
        text: "Can I write About Me in third person in a marriage biodata? It depends on who is creating the biodata. If a parent is creating it for their child, third person is natural and appropriate. If you are creating your own biodata, first person is warmer and feels more authentic. Many modern urban candidates now write in first person even for biodatas shown to families. First or third — be consistent throughout the section.",
      },
      {
        type: "highlight",
        text: "The About Me section is the only part of a marriage biodata that cannot be filled in from a government document or a certificate. Everything else — date of birth, education, family details — has a verifiable source. The About Me is purely your voice. Families reading 25 profiles in an evening know immediately when someone wrote their own About Me versus when they copied a template. One honest sentence about who you are is worth more than eight polished generic lines.",
      },
    ],
  },
  {
    slug: "how-to-share-marriage-biodata-on-whatsapp",
    title: "How to Share Marriage Biodata on WhatsApp",
    excerpt:
      "Share your marriage biodata on WhatsApp the right way. Ready-to-use message templates in English and Hindi for different situations. PDF vs image format explained.",
    publishedAt: "2026-06-25",
    imageFolder: "blog-4",
    sections: [
      {
        type: "paragraph",
        text: "To share a marriage biodata on WhatsApp, open WhatsApp, go to the chat with the recipient, tap the attachment (paperclip) icon, select Document, and choose your saved biodata PDF. PDF files preserve the design on all phones — do not share as an image unless the recipient specifically asks for it. Include a brief, respectful message like: 'Namaste [name], please find our biodata for your kind consideration. We would be glad to connect if you find it suitable.'",
      },
      {
        type: "heading",
        level: 2,
        text: "Step 1 — Download your biodata as PDF, not as an image",
      },
      {
        type: "paragraph",
        text: "When you share a PDF on WhatsApp, the recipient opens it in their phone's PDF viewer and sees the full design — fonts, layout, photo — exactly as you created it. When you share as a JPEG or PNG, WhatsApp compresses the image and the text becomes slightly blurry on many Android phones. A PDF shared on WhatsApp can also be forwarded to other family members without quality loss. If someone asks for an image format specifically, that is fine — use JPEG. For general distribution, always PDF.",
      },
      {
        type: "heading",
        level: 2,
        text: "Step 2 — How to attach and send on WhatsApp",
      },
      {
        type: "paragraph",
        text: "On Android: open WhatsApp and go to the recipient's chat. Tap the attachment icon (paperclip icon in the message bar). Select Document. Navigate to where your biodata PDF was saved — usually the Downloads folder. Tap the PDF file to select it. Add your message from the templates below. Tap Send.",
      },
      {
        type: "paragraph",
        text: "On iPhone: open WhatsApp and go to the recipient chat. Tap the + icon next to the message bar. Select Document. Browse to your saved biodata PDF in Files. Tap the file to select it. Add your message. Tap Send.",
      },
      {
        type: "paragraph",
        text: "Via the Marriage Biodata Hub share button: after downloading, tap the WhatsApp share button on the confirmation screen. It opens WhatsApp directly with your biodata attached and a starter message in the text field. Edit the message to personalise it before sending — add the recipient's name and adjust the tone to suit your relationship with them.",
      },
      {
        type: "heading",
        level: 2,
        text: "What to write when sending biodata on WhatsApp",
      },
      {
        type: "paragraph",
        text: "The message should be brief, warm, and respectful. Three to four sentences maximum. Do not write a paragraph — it overwhelms. Do not write a single line — it seems careless. The right tone is respectful without being overly formal. The message sets the first impression before the family even opens the PDF.",
      },
      {
        type: "heading",
        level: 2,
        text: "WhatsApp message templates — English",
      },
      {
        type: "paragraph",
        text: "Template 1 — Sending to a family your relatives connected you with: 'Namaste [Name] ji, Pranam. [Your name]'s family from [city] — we received your reference from [common contact's name]. Please find our biodata for your kind consideration. We would be glad to connect further if you find it suitable. Regards, [Your name]'s family.'",
      },
      {
        type: "paragraph",
        text: "Template 2 — Sending to a family you found on a matrimony site: 'Namaste, we came across your profile on [BharatMatrimony / Shaadi.com] and found it compatible with ours. Please find our biodata attached. We would be happy to connect if you feel the same. Best regards, [Candidate name]'s family.'",
      },
      {
        type: "paragraph",
        text: "Template 3 — Sending to a close relative or family friend (informal): 'Namaste Auntie / Uncle, hope you are well. I am sending [name]'s biodata as requested. Please share with whoever you feel may be suitable. We would be very grateful.'",
      },
      {
        type: "paragraph",
        text: "Template 4 — Sending personally (candidate to candidate): 'Hi [name], we were connected through [name]. I am sharing my biodata. Would be nice to connect if you would like to take this forward.'",
      },
      {
        type: "paragraph",
        text: "Template 5 — Follow-up after sending, if no reply after 3–4 days: 'Namaste [Name] ji, just following up — I had sent our biodata a few days ago. Please take your time. If you have any questions or would like to connect, we are happy to do so whenever it is convenient for you.'",
      },
      {
        type: "heading",
        level: 2,
        text: "WhatsApp message templates — Hindi (शादी का बायोडाटा भेजने के लिए संदेश)",
      },
      {
        type: "paragraph",
        text: "Template 1 — To a family connected by relatives: 'आदरणीय [नाम] जी, सादर प्रणाम। [संदर्भ का नाम] जी के माध्यम से आपसे परिचय हुआ। हमारे [बेटे / बेटी] का बायोडाटा संलग्न है। यदि उचित लगे तो आगे बात करने में हमें प्रसन्नता होगी। धन्यवाद, [परिवार का नाम]।'",
      },
      {
        type: "paragraph",
        text: "Template 2 — To a matrimony site match: 'नमस्ते, हमने आपकी प्रोफ़ाइल [BharatMatrimony / Shaadi.com] पर देखी और उचित लगी। बायोडाटा संलग्न है। यदि उचित समझें तो हमें बताएं। सादर, [नाम] के परिवार की ओर से।'",
      },
      {
        type: "paragraph",
        text: "Template 3 — Informal, to close relatives: 'नमस्ते [काका / काकी / मामा] जी, [नाम] का बायोडाटा भेज रहे हैं। जहाँ उचित रिश्ता दिखे, कृपया आगे भेज दें। बहुत आभारी रहेंगे।'",
      },
      {
        type: "heading",
        level: 2,
        text: "Sending to different community families — tone adjustments",
      },
      {
        type: "paragraph",
        text: "Muslim families: use 'Assalamu Alaikum' as the greeting rather than 'Namaste.' The message structure is the same — brief, warm, respectful. Do not mention the biodata's Islamic features; the family will see them when they open it. Focus on the connection and the request to take it forward.",
      },
      {
        type: "paragraph",
        text: "South Indian families: 'Vanakkam' (Tamil) or 'Namaskara' (Kannada / Telugu) as the greeting. Families in Tamil Nadu often send biodatas to the girl's or boy's father directly, not to the candidate. Adjust the tone accordingly — slightly more formal than between candidates.",
      },
      {
        type: "paragraph",
        text: "Marathi families: 'Namaskar' as greeting. If the recipient is older, add 'Pranam' or use respectful address forms. Many Marathi families still have a community marriage organiser or pandit as the intermediary — if the biodata is going through them, keep the message neutral and formal.",
      },
      {
        type: "heading",
        level: 2,
        text: "What NOT to do when sharing a biodata on WhatsApp",
      },
      {
        type: "list",
        items: [
          "Do not send as a screenshot. Screenshots look informal and compress badly on Android. Always PDF.",
          "Do not send without a message. A blank PDF arriving on WhatsApp is confusing and appears careless.",
          "Do not follow up the same day. Give at least 3–4 days before a polite follow-up message.",
          "Do not mass-forward using WhatsApp Broadcast without personalising. A biodata arriving in a broadcast list feels like spam. Each message should feel individual and addressed to that specific family.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Can I share a link instead of a PDF?",
      },
      {
        type: "paragraph",
        text: "Yes. Marriage Biodata Hub generates a private shareable link for your biodata. The link opens your biodata in a mobile-optimised web view — the recipient does not need to download anything. The design renders cleanly on any phone. Use the link instead of PDF when the recipient has trouble opening PDF files on their phone, when sharing in a WhatsApp group (links preview better than PDFs in group chats), or when you want the biodata to be viewable without a download step. To generate the link: after creating your biodata, tap 'Share Link' on the download screen.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "paragraph",
        text: "Should I send the biodata as PDF or image on WhatsApp? PDF is strongly recommended. PDF preserves fonts, layout, and photo quality exactly on every phone. When you share a JPEG or PNG on WhatsApp, the compression reduces image quality and text becomes blurry on smaller screens. Only share as an image if the recipient specifically asks for that format.",
      },
      {
        type: "paragraph",
        text: "How long should I wait before following up after sending a biodata? 3–4 days is a respectful waiting period. After that, one brief follow-up message is appropriate. Do not follow up more than once unless they have responded. Families review many profiles simultaneously and reply when they are ready — following up repeatedly creates a poor first impression.",
      },
      {
        type: "paragraph",
        text: "What should I write when sending a biodata on WhatsApp? Keep it brief and warm. Example: 'Namaste [Name] ji, please find our biodata attached for your kind consideration. We would be happy to connect further if you find it suitable.' Include the sender's name or family name at the end. Three to four sentences is ideal.",
      },
      {
        type: "highlight",
        text: "No competitor website has WhatsApp message templates for sending a marriage biodata — in English or in Hindi. The templates above are the ones that feel natural to Indian families across different communities and situations. Copy the one that fits your situation, replace the names and city, and send. The biodata opens every conversation — the message just needs to open the door politely.",
      },
    ],
  },
  // ─── Photo / Preferences / Mistakes cluster ──────────────────────────────────
  {
    slug: "biodata-for-marriage-photo-tips",
    title: "Marriage Biodata Photo Tips — What Families Notice First",
    excerpt:
      "The photo is the first thing families look at — before your name or qualification. Here's what works and what doesn't.",
    publishedAt: "2026-06-29",
    imageFolder: "blog-7",
    sections: [
      {
        type: "paragraph",
        text: "The best photo for a marriage biodata is a recent portrait taken in the last six months, with a plain or light-coloured background, in natural light, showing your face and shoulders clearly. No filters. No heavy editing. No group photos. No sunglasses. Expression: natural and warm, not a posed grin and not serious-faced. Clothes: whatever you genuinely wear — traditional, formal, or smart casual. The photo is the first thing the other family looks at — before your name, before your qualification, before your family details. It takes about three seconds. Those three seconds matter more than people realise.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why the photo gets looked at before anything else",
      },
      {
        type: "paragraph",
        text: "This is not about photography. It is about how biodata review actually happens in most Indian homes — quickly, on a phone screen, while doing something else. Picture a mother sitting at the kitchen table on a Sunday morning. Three biodatas came in this week through a cousin's WhatsApp group. She opens the first one. What does she see first? The photo. Not the name. Not the qualification. The photo. It either creates a feeling of warmth and interest, or it does not. The rest of the biodata does not get the same chance if the photo lands wrong.",
      },
      {
        type: "paragraph",
        text: "When a family is reviewing 15 or 20 biodatas in a week, the photo is the fastest filter. It is not about looks in the way people worry about — it is about whether the photo communicates something real and warm about the person. A good photo passes this filter. A bad photo does not. The family moves on before reading the name.",
      },
      {
        type: "heading",
        level: 2,
        text: "What makes a photo work — the actual specifics",
      },
      {
        type: "paragraph",
        text: "Background: a plain wall in your home is perfect. White, cream, light grey, pale yellow — all fine. Off-white is actually better than pure white, which can wash out. A blurred background from portrait mode on a phone works well. What does not work: busy backgrounds with furniture competing for attention, outdoor backgrounds where the location competes with your face, dark backgrounds that make the image look like a passport photo. One of the most common mistakes: standing in front of a window with bright light behind you, so your face is in shadow. Turn around — face the window, do not stand with it behind you.",
      },
      {
        type: "paragraph",
        text: "Light: natural light from a window or open door is genuinely the best for most people. You do not need a ring light or a studio. A cloudy afternoon near a large window is ideal — the light is soft, no harsh shadows. Direct midday sun creates shadows under eyes and nose. Early morning or late afternoon light is flattering. If you are taking the photo indoors at night, the overhead tube light in most Indian homes makes everyone look slightly yellow and tired. Move near a lamp instead, or wait for daytime.",
      },
      {
        type: "paragraph",
        text: "Expression: this is where most biodata photos fail. The three common wrong expressions — the unsmiling formal look, which reads as unfriendly; the wide posed grin, which looks performative; the camera-aware tense face that happens when someone knows they are being photographed for a formal purpose. The right expression is a natural, warm, slight smile — the kind on your face when someone says something mildly funny. Take 20 to 30 photos in a short burst while someone is talking to you normally. One of them will have the right expression. Use that one.",
      },
      {
        type: "paragraph",
        text: "Clothing: whatever you genuinely wear. A salwar kameez if that is your daily wear. A shirt and trousers if that is yours. You do not need to change into traditional clothes unless you wear them naturally. What does not work: gym clothes your mum keeps sending, clothes that are clearly for a wedding or party, anything with prominent logos or text.",
      },
      {
        type: "paragraph",
        text: "Photo age: within six months. Families sometimes sense even a two-year difference before they can articulate why — it is something about the face that does not quite match how people look at their current age. If you have changed your hair, your weight, or your style significantly in the last year, use a recent photo. The awkward meeting where you look noticeably different from your biodata photo is exactly what everyone is trying to avoid.",
      },
      {
        type: "heading",
        level: 2,
        text: "Taking a good biodata photo on your phone — without a photographer",
      },
      {
        type: "paragraph",
        text: "You do not need a studio. You need a good wall, a window with natural light, and someone to take the photo — a friend, a sibling, a parent. If you are genuinely alone, a phone tripod and a timer works. Most phones have a 3-second or 10-second timer in the camera.",
      },
      {
        type: "list",
        items: [
          "Step 1: Find your wall. Any plain wall in your home — a bedroom wall, the drawing room wall, even the outside wall of your building if the light is good.",
          "Step 2: Stand facing the light source. If there is a window, stand so the window light is falling on your face. This single adjustment makes the biggest difference between a good phone photo and a bad one.",
          "Step 3: Have the person photographing you hold the phone at slightly above your eye level — not from below (unflattering for nearly everyone), not pointing down at your head.",
          "Step 4: Take 25 to 30 photos in a row while having a normal conversation. Laugh at something real. Your expression will settle into something genuine in a few of them.",
          "Step 5: Choose the one where your expression is the most natural — not the thinnest or most glamorous, the one that looks most like you when you are at ease.",
          "Step 6: Crop to a portrait rectangle showing face and shoulders, with a small amount of space above your head. Not so tight that only your face is visible, not so loose that your body takes up half the frame.",
        ],
      },
      {
        type: "paragraph",
        text: "On editing: adjust brightness and contrast slightly if needed. Remove a blemish if you want to — that is fine. Do not apply smoothing filters that make your skin look like it was painted on. Families notice this and find it off-putting. The Instagram-beauty-filter look reads as untrustworthy in a biodata context, even if people cannot explain why.",
      },
      {
        type: "heading",
        level: 2,
        text: "Photos that get biodatas set aside — real examples",
      },
      {
        type: "paragraph",
        text: "The group photo crop: someone has used a photo from a family function, cropped out the people on either side, but you can still see a sliver of someone's shoulder or the edge of a dupatta. Immediately obvious it is a crop. Immediately reads as — this person does not have a single good photo of themselves, or they could not be bothered to take one.",
      },
      {
        type: "paragraph",
        text: "The sunglasses photo: a common one from men, usually from a trip or an outdoor event. It looks cool. But the other family cannot see the person's eyes. Eyes are how people decide if someone has a warm or guarded face. The sunglasses make it impossible to read anything.",
      },
      {
        type: "paragraph",
        text: "The formal ID photo: the standard passport-or-Aadhaar-style photo taken against a white background under fluorescent light. It looks like a document, not a person. The expression is usually frozen and the light is harsh. Using this does not say 'I take this seriously' — it says 'I did not put any effort into this.'",
      },
      {
        type: "paragraph",
        text: "The heavily filtered selfie: the face looks smooth like CGI. Eyelashes enhanced. Skin toned. Families from traditional backgrounds do not always know why this looks wrong to them, but it does. It reads as someone hiding something, even when they are not.",
      },
      {
        type: "paragraph",
        text: "The group wedding photo: the person looks great — good clothes, good mood. But they are standing in a wedding party with four other people and a decorated mandap behind them. The family receiving it has to figure out which one is the person in question. And the wedding clothes are too formal for a first introduction.",
      },
      {
        type: "paragraph",
        text: "The gym selfie, the car selfie, the gym selfie again: these come almost exclusively from men. A selfie in the gym mirror, or leaning against a car, or in a bathroom. The light is wrong. The context is wrong. The expression is wrong. The family — especially the girl's mother — sees this and forms a very specific impression. It is not a good impression.",
      },
      {
        type: "heading",
        level: 2,
        text: "One photo or multiple?",
      },
      {
        type: "paragraph",
        text: "One photo. Always one photo. A single good portrait at the top of the biodata, right next to or just below your name. Multiple photos feel like you are making a case for yourself, or compensating for one bad photo with another. The biodata is not Instagram. One clear, honest, recent photo is worth far more than three good-angled, strategically chosen ones. If a family wants to see more photos after initial interest, that is a natural part of the conversation that follows. The biodata photo is just a first introduction.",
      },

      {
        type: "heading",
        level: 2,
        text: "A note for parents choosing the photo for their child",
      },
      {
        type: "paragraph",
        text: "You know your child better than anyone. But the photo you think makes them look best may not be the one that works best in a biodata context. Your son's gym photo or his photo with friends might look great to you. To a family reviewing a biodata, these contexts feel informal for an introduction. Your daughter's wedding function photo in full bridal-adjacent makeup might be the most beautiful photo you have of her — but it sets an expectation that can make the first meeting feel like a let-down when she shows up as herself on a normal day.",
      },
      {
        type: "paragraph",
        text: "The photo that works best is one where your child looks like themselves on a good, normal day. Natural expression. Natural makeup or none. Clothes they actually wear. A warm, approachable face. Ask your child what photo they would want to use. The best biodata photos come from people who chose them themselves.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "paragraph",
        text: "What kind of photo should I use in a marriage biodata? Use a recent portrait taken in the last six months. Plain or light background, natural light, face and shoulders clearly visible. Expression should be natural and warm — not stiff, not over-posed. Wear whatever you normally wear. One good photo is better than multiple. Avoid: group photos, heavily filtered selfies, sunglasses, formal ID-style photos, and photos where the background competes with your face.",
      },
      {
        type: "paragraph",
        text: "Can I use a phone photo in my marriage biodata? Yes. A phone photo taken in good light — near a window, outdoors on a cloudy day, or in any well-lit space — is completely fine and often better than a studio photo. Modern phone cameras produce high enough quality for biodata use. What matters is the light, the background, and your expression — not which device was used to take it. Take multiple photos in one session and choose the most natural one.",
      },
      {
        type: "paragraph",
        text: "Does my marriage biodata photo need to be formal or traditional? No. You do not need to wear traditional clothes unless you genuinely wear them regularly. Smart casual — a kurta, a shirt, a salwar kameez — works fine. What families respond to is a warm, natural expression and a clear, uncluttered image. The photo should look like you on a normal day, not like you are dressed for a formal document photo or a festival.",
      },
      {
        type: "paragraph",
        text: "Should I use a studio photo for my marriage biodata? A studio photo can work if the result looks natural. The problem with some studio photos is that the lighting is harsh, the background is fake-looking, and the person ends up with a stiff expression. If you use a studio, choose one that does natural-light portrait photography, not the standard passport-photo style. A good phone photo taken at home is usually more flattering and more natural-looking than a mediocre studio photo.",
      },
    ],
  },
  {
    slug: "marriage-biodata-partner-preferences-what-to-write",
    title: "Partner Preferences in Marriage Biodata — What to Write",
    excerpt:
      "Most partner preferences read like a job description. Here's how to write this section honestly, with 8 real community examples.",
    publishedAt: "2026-06-29",
    imageFolder: "blog-8",
    sections: [
      {
        type: "paragraph",
        text: "The partner preferences section in a marriage biodata should be generous and honest — not a checklist. Write 2 to 4 sentences describing the kind of person you are genuinely open to, not the minimum requirements someone has to meet. Most biodata partner preferences fail in one of two ways: they say nothing ('educated, family-oriented, same caste') or they say too much ('fair, slim, 5\'4\" and above, earning minimum 8 LPA, from specific states only'). The first tells no family anything useful. The second reads like a job specification and makes you sound difficult before anyone has met you.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why this section is harder than it looks",
      },
      {
        type: "paragraph",
        text: "The partner preferences section is the only part of a marriage biodata where you talk about someone who does not exist yet. Every other section is factual — your name, your qualification, your family. This section requires you to describe, in a few sentences, what you are looking for in a life partner. That is actually a very intimate thing to put into words, especially for a document that strangers will read.",
      },
      {
        type: "paragraph",
        text: "It explains why most people either write something completely generic ('educated, good family, family-oriented') that could describe anyone, or they overcorrect and list very specific requirements that sound cold on paper. Neither works. Unlike the About Me section, which at least gives you space to be a person, the partner preferences section often ends up reading like a filter. The other family reads it and does not feel welcomed. They feel screened.",
      },
      {
        type: "heading",
        level: 2,
        text: "The one thing that separates good partner preferences from bad ones",
      },
      {
        type: "paragraph",
        text: "It is generosity. The best partner preferences sections are written as an invitation, not a gatekeeping list. They describe who you would genuinely love to meet — with room for someone real to fit into that description. The worst ones read as if the person is reviewing applications for a role with very specific minimum qualifications.",
      },
      {
        type: "quote",
        text: "The checklist version: 'Looking for a working professional, earning minimum 8-10 LPA, height 5\'4\" and above, Masters degree, non-smoker, non-drinker, from a respectable family, willing to relocate to Pune.' The invitation version: 'Looking for someone who is educated and independent, close to their family, and open to building a life in Pune — though we are flexible on location for the right match. Career and qualifications matter to us, but warmth and honesty matter more.' Both communicate similar underlying preferences. One sounds like a job posting. One sounds like a person.",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can actually mention — and how to frame it",
      },
      {
        type: "paragraph",
        text: "Age: a range is standard. '27 to 32' or 'within 3 to 4 years' is the normal convention. Do not specify an exact age — it reads as inflexible. A generous range of 5 to 6 years is usually better than a tight one of 1 to 2 years.",
      },
      {
        type: "paragraph",
        text: "Education: be specific about what actually matters to you, not what sounds impressive. 'Graduate or above' is honest if that is genuinely your preference. If your actual preference is 'someone who values education and keeps learning,' write that — it is more honest and more attractive.",
      },
      {
        type: "paragraph",
        text: "Career and income: 'Working professional' is fine to state if it matters to you. Mentioning a specific salary figure can read as mercenary. 'Looking for someone who is settled in their career and financially independent' lands better than a rupee figure and communicates the same thing.",
      },
      {
        type: "paragraph",
        text: "Height: you can mention it. 'Taller than me' or 'around 5\'8\" and above' is acceptable. What does not work is being extremely specific or making it the first thing you mention. If height matters, put it at the end and frame it lightly.",
      },
      {
        type: "paragraph",
        text: "Community and caste: this is personal and honest preferences vary widely. If your family prefers a specific community, state it honestly — 'From the Deshastha Brahmin community' or 'Sunni Muslim family preferred' or 'Caste no bar, but similar values important.' Do not be vague about it if it matters — it wastes everyone's time. And do not apologise for it. It is a preference, not a judgment.",
      },
      {
        type: "paragraph",
        text: "What not to mention: skin tone ('fair complexion preferred') — this will never read well in writing, even if it is an honest preference. Have this conversation after initial contact, not before. Also avoid negative statements like 'no divorcees' or 'no one from nuclear families' — if you have hard exclusions, have them as conversations, not written into the biodata.",
      },
      {
        type: "heading",
        level: 2,
        text: "8 partner preferences examples — real community voices",
      },
      {
        type: "paragraph",
        text: "Male candidate, IT professional, Bengaluru, modern family: 'Looking for someone who is educated and working, close to her family, and comfortable with life in Bengaluru. We are an open-minded family — caste is no bar, though we would prefer a Hindu family with similar values. What matters most is honesty, warmth, and someone who is as genuinely close to her family as I am to mine.'",
      },
      {
        type: "paragraph",
        text: "Female candidate, doctor, Delhi, traditional North Indian family: 'Looking for a professionally settled man from a good family, ideally working in a field that gives him reasonable stability and time — we understand demanding careers, but family time matters to us. We would prefer someone from a Brahmin family in North India, though we are open to discussing. Age between 28 and 32.'",
      },
      {
        type: "paragraph",
        text: "Male candidate, bank officer, Lucknow, UP Brahmin: 'Looking for a well-educated girl from a respectable family, preferably from UP or adjoining states. She should be family-oriented and comfortable with a joint family setup, as we live with my parents. Caste: Brahmin. Age: 23 to 28. Career is not a requirement but education to at least graduate level is important to our family.'",
      },
      {
        type: "paragraph",
        text: "Female candidate, CA, Pune, Marathi family: 'Looking for someone who is educated, settled in his career, and from a Marathi family — we are Brahmin (CKP) and would prefer someone from a similar background. He should be respectful of a working woman's career and comfortable living in Pune. Age between 28 and 34.'",
      },
      {
        type: "paragraph",
        text: "Male candidate, Muslim professional, Hyderabad: 'Looking for a pious, educated woman from a good Sunni Muslim family. She should share our family's values of faith, education, and respectful living. We are Syed and would prefer someone from a similar background, but we are open to discussing. Based in Hyderabad or willing to relocate.'",
      },
      {
        type: "paragraph",
        text: "Female candidate, IT professional, Chennai, Tamil Brahmin: 'Looking for a Tamil Brahmin man, ideally an Iyer, between 28 and 33 years of age. Education to at least graduate level; a professional career is preferred. Horoscope match (Jathagam porutham) is important to my family. Open to matches from Chennai, Coimbatore, or Bengaluru.'",
      },
      {
        type: "paragraph",
        text: "Male candidate, second marriage, Pune, open tone: 'Looking for someone who is mature, independent, and emotionally settled. No hard requirements on age, background, or qualifications — the person matters more than the resume. Would prefer someone based in Pune or willing to be. Happy to share more details after initial contact.'",
      },
      {
        type: "paragraph",
        text: "Female candidate, NRI, Toronto: 'Looking for someone who is comfortable with a life divided between India and Canada — visits home regularly, values family, but is also settled and independent abroad. We are open on caste and community. Education and career stability matter. Age between 28 and 36.'",
      },
      {
        type: "heading",
        level: 2,
        text: "What to do when your preferences and your family's preferences do not match",
      },
      {
        type: "paragraph",
        text: "It happens in most families. The candidate has one set of preferences — open, broad, values-based. The parents have another — community, caste, height, income, specific states. The biodata ends up being a negotiation between what the candidate wants and what the parents are comfortable putting in writing.",
      },
      {
        type: "paragraph",
        text: "Write the section yourself, then show your parents. Having something to react to is easier than starting from a blank page. Most parents will accept a reasonable, honest version of their preferences if it is already written and sounds respectful. Put the most important preferences first and the less important ones last — or leave them out entirely. You can always discuss specifics after the first contact. The biodata is not a contract.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "paragraph",
        text: "What should I write in the partner preferences section of a marriage biodata? Write 2 to 4 sentences describing the kind of person you are genuinely open to — values, education, career, location, family background. Be honest but generous — this section should read as an invitation, not a checklist. Mention what genuinely matters to you, not a complete list of every requirement. The other family should finish reading your preferences feeling that you are open to meeting real people.",
      },
      {
        type: "paragraph",
        text: "Is it okay to mention height, caste, or income in partner preferences? Yes, with care about how you frame them. Height: mention it briefly, at the end, lightly. Caste or community: state it honestly if it matters to your family — vagueness wastes everyone's time. Income or career: mention stability preferences rather than a specific rupee figure ('settled in their career and financially independent' lands better than 'minimum 8 LPA'). Skin tone is the one preference to leave out of the written biodata.",
      },
      {
        type: "paragraph",
        text: "How long should the partner preferences section be? Two to four sentences is ideal. Any longer and it starts reading as a demand list. Any shorter and it says nothing. The goal is to give the other family enough to know whether they would like to take the conversation forward.",
      },
      {
        type: "paragraph",
        text: "What if I do not have strong preferences — should I just leave this section blank? Do not leave it blank. Write something simple and honest: 'Open to meeting someone who is educated, genuinely close to their family, and values warmth and honesty in a relationship. Caste and location are flexible for the right match.' Even a vague but genuine statement is better than nothing.",
      },
      {
        type: "highlight",
        text: "The partner preferences section is the only part of the biodata that is explicitly about the other person. Write it the way you would talk about who you are hoping to meet — not who you are willing to accept. That shift in framing changes everything about how it reads.",
      },
    ],
  },
  {
    slug: "marriage-biodata-mistakes-that-get-you-rejected",
    title: "Marriage Biodata Mistakes That Get You Rejected — 9 Fixes",
    excerpt:
      "These are the things families notice and never tell you. 9 real mistakes sourced from community feedback — and every one is fixable.",
    publishedAt: "2026-06-29",
    imageFolder: "blog-9",
    sections: [
      {
        type: "paragraph",
        text: "The most common reasons a marriage biodata gets rejected or set aside: a photo that looks old or informal, a blank or generic About Me section ('I am simple and family-oriented'), a two-page layout that nobody reads past page one, partner preferences that read as a checklist of requirements, missing community-specific fields like Gotra or Sect, and salary or qualification information that does not match what can be found online. None of these are hard to fix. But they are also things people do not tell you directly — you only hear about them when you are wondering why you are not getting responses.",
      },
      {
        type: "heading",
        level: 2,
        text: "A word before the list",
      },
      {
        type: "paragraph",
        text: "These are things that families say to each other — not to you. When your biodata gets set aside, nobody sends a reply saying 'we have passed on this because the photo was from 2022 and the About Me section was generic.' They just do not respond. So this feedback circulates in private — in conversations between parents, in matrimonial WhatsApp groups, on Reddit threads where people vent, on Quora where someone asks 'why is nobody responding to my son's biodata.' What follows are the real reasons, in plain language. Every single one is fixable. But you cannot fix what you do not know.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mistake 1 — The photo is not recent, or it is from the wrong context",
      },
      {
        type: "paragraph",
        text: "A mother in Hyderabad received a biodata for her daughter through a relative's WhatsApp group last October. The photo showed a young man in good clothes, smiling, with a clear background. She forwarded it to her husband. He looked at it and said, 'this photo is at least five or six years old — look at the collar style, and his face is younger.' They did not proceed. The family who sent that biodata had no idea the photo was read that way. This is how quickly and specifically a photo gets assessed — in the two or three seconds before someone reads the name.",
      },
      {
        type: "paragraph",
        text: "What counts as wrong context: group photos, wedding function photos, formal ID-style photos, gym or car selfies, photos with sunglasses, photos where the background is cluttered or someone else's shoulder is visible. What counts as not recent: anything more than six months to a year old where you look noticeably younger or different. The fix: one portrait photo, natural light, plain background, recent. That is it. Read the full photo guide at /blog/biodata-for-marriage-photo-tips.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mistake 2 — The About Me says something that could be said by anyone",
      },
      {
        type: "paragraph",
        text: "The most common phrase in Indian marriage biodatas, across all communities, all cities, all years: 'I am a simple, family-oriented person who enjoys music, travel, and spending time with family.' If you wrote something close to this, you wrote something that roughly 70 percent of all biodatas also say. Not because everyone is lying — most people genuinely are family-oriented. But the phrase tells the other family nothing about who you are specifically. What the other family is thinking when they read this: okay, next one.",
      },
      {
        type: "paragraph",
        text: "The point of the About Me is to create one moment where the person becomes a real human being rather than a set of facts. One specific detail — your actual hobby, something true about how you spend your weekends, one thing you genuinely care about — does more work than three sentences of generic adjectives. 'I coach my cousin's cricket team on Sunday mornings and it has become my favourite part of the week' tells a family: this person is generous, involved with extended family, consistent. The fix: replace one adjective with a fact. Full guide at /blog/how-to-write-about-me-in-marriage-biodata.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mistake 3 — Two pages",
      },
      {
        type: "paragraph",
        text: "Families reviewing biodatas are usually looking at several at a time — often on a phone, often in a spare 20 minutes. When a biodata comes in and scrolling past page one reveals a page two, most families do not read it. This is not because they are lazy. It is because when 15 biodatas come in a week and 10 of them are one page, the one-page ones feel like complete, efficient introductions. The two-page ones feel like they could not decide what to include. A biodata is not a resume. It is a first introduction. Everything needs to fit on one A4 page. The fix: use a template designed for single-page output. Shorten the About Me to 3 to 4 sentences. Remove any sub-sections that are redundant.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mistake 4 — Missing horoscope fields for a Hindu family",
      },
      {
        type: "paragraph",
        text: "For many Hindu families — especially those from North India, Maharashtra, South India — the horoscope section is not optional. It is the first section they check. When Gotra is blank, or Rashi is listed as a Western sun sign ('Scorpio') instead of the Vedic moon sign, or Manglik status says 'Not Known' — these are read as signals. Not necessarily that the family is hiding something, but that they did not take this process seriously enough to know their own basic details.",
      },
      {
        type: "paragraph",
        text: "The specific ones that create the most friction: 'Gotra: Not applicable' in a clearly Hindu biodata — not the same as 'Gotra not known'; 'Not applicable' implies it does not matter, which will not go down well with a traditional family. Rashi listed as a Western zodiac sign — in Hindu matrimonial contexts, Rashi means the Vedic moon sign, calculated from your birth time and place, not the Western sun sign. Manglik status left completely blank — for families where this matters, a blank is as concerning as a Yes. The fix: find out your actual Gotra (ask your father), calculate your correct Vedic Rashi and Nakshatra from your date, time, and place of birth, and state Manglik status honestly.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mistake 5 — Partner preferences that sound like a job specification",
      },
      {
        type: "paragraph",
        text: "A real example, paraphrased from community discussion: one family sent out a biodata with the following partner preferences — 'Looking for a fair, slim girl, minimum 5\'4\", Masters degree or above, working in IT or healthcare, earning minimum 10 LPA, from UP or Maharashtra only, Brahmin preferred (Kanyakubj or Gaur), vegetarian only, willing to relocate abroad.' Eight requirements. Each one individually reasonable. Together, they create the impression of someone who has applied very specific filters before meeting anyone. The family receiving this biodata does not feel welcomed. They feel like their daughter is being screened. The irony: many families receiving this biodata might actually meet every criterion. But the tone makes them not want to respond.",
      },
      {
        type: "paragraph",
        text: "The fix: write partner preferences as an invitation, not a filter. Keep requirements to three or four. Put values before specifics. Let the most personal requirements come up in conversation. Read the full guide at /blog/marriage-biodata-partner-preferences-what-to-write.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mistake 6 — Information that does not match what can be found online",
      },
      {
        type: "paragraph",
        text: "This one has increased significantly in the last three to four years because families now search for candidates on LinkedIn and social media before responding to a biodata. The most common mismatches: salary listed in the biodata is noticeably higher than the LinkedIn profile range suggests — this is noticed immediately and creates suspicion that is very difficult to recover from in conversation. Job title in the biodata is more senior than what LinkedIn shows at the same company. Age or date of birth that varies slightly between the biodata and what is visible on social profiles. None of these mismatches have to be intentional — a parent overstating their child's position out of pride, or using an informal title. But they read as dishonesty and they cost responses. The fix: be accurate. Use your current official job title and a genuine salary range. A biodata that undersells you slightly is infinitely better than one that oversells and gets caught.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mistake 7 — The biodata was clearly made by a parent, not the candidate",
      },
      {
        type: "paragraph",
        text: "There is a specific combination of signals that tells the family reviewing a biodata that the candidate did not write it themselves — and in some cases, was not really consulted: third person throughout ('She is a sincere and hardworking professional who values her family above all'); formal, slightly stiff language that does not match how the candidate's generation talks; About Me section that is entirely adjectives, no anecdotes; contact number is a parent's number with no mention of the candidate's own contact preferences; partner preferences written in formal terminology ('seeks an alliance with a well-settled boy from a respectable family') rather than a natural voice.",
      },
      {
        type: "paragraph",
        text: "This is not always a problem — many families operate this way, and there is nothing wrong with parents being involved. But when the biodata reads as if the candidate was not present in its creation at all, families wonder whether the candidate is genuinely ready for marriage, or whether this is entirely family-driven. The fix: even if parents are managing the biodata process, have the candidate write the About Me section themselves, in first person, in their own voice. One paragraph. That is enough to make the biodata feel human.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mistake 8 — The design looks like it is from 2010",
      },
      {
        type: "paragraph",
        text: "This sounds superficial. It is not. When a family is reviewing biodatas on a phone and one of them looks well-designed — clean fonts, good layout, photo well-placed — and the next one looks like a Microsoft Word document with decorative clip-art borders and a photo squeezed into a tiny box in the corner, the contrast creates an impression. Not about looks. About care and effort. A biodata that looks like someone spent time on it signals that the family takes this process seriously. One that looks like it was assembled in 20 minutes sends the opposite signal. You do not need to pay a designer. You need a good template and a recent photo. The bar is not high. But it needs to clear the bar.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mistake 9 — No clear contact information",
      },
      {
        type: "paragraph",
        text: "A biodata without a contact number. A biodata with only an email address. A biodata where the contact is listed as 'available on request.' Families who are genuinely interested want to make contact quickly and easily. If your biodata requires them to go on a treasure hunt for contact information, many will not bother — not because they are not interested, but because they are also reviewing 15 other biodatas and the ones with clear, immediate contact information are easier to act on. Standard convention: father's mobile number (or mother's, or whoever is managing the process), WhatsApp number if different. 'Available on request' in a first-introduction document creates friction before any conversation has started.",
      },
      {
        type: "highlight",
        text: "Check your biodata against this list before sending it. Use our free tool at marriagebiodatahub.com to create a clean, community-specific biodata with the right fields, a well-placed photo, and a design that reads well on any phone.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "paragraph",
        text: "Why is my marriage biodata not getting responses? The most common reasons: the photo is outdated or from an informal context; the About Me section is generic; the biodata is two pages long; partner preferences read as a demanding checklist; horoscope fields are blank or incorrect for a Hindu biodata; information does not match what families find on LinkedIn. Each of these is fixable — the challenge is that nobody tells you which one is the issue.",
      },
      {
        type: "paragraph",
        text: "What are the most common mistakes in an Indian marriage biodata? The nine most common: old or informal photo, generic About Me section, two-page layout, checklist-style partner preferences, missing or incorrect horoscope fields, salary or job information that does not match LinkedIn, biodata written entirely by parents in third person with no candidate voice, outdated design, and no clear contact information. Any one of these can cost you responses that would otherwise have come.",
      },
      {
        type: "paragraph",
        text: "Does the design of a marriage biodata really matter? Yes, practically speaking. A clean, well-laid-out biodata communicates effort and care. A template from a good tool — with proper fonts, good photo placement, and clear sections — reads as a serious introduction. You do not need to spend money on design — free tools produce perfectly good results. But the design needs to look intentional.",
      },
      {
        type: "paragraph",
        text: "Should my marriage biodata be one page or two? One page. Always. Families reviewing multiple biodatas on a phone, in limited time, do not reliably read page two. Everything important — personal details, horoscope if applicable, family background, education, career, About Me, partner preferences, and contact — should fit on a single A4 page. If it does not, cut the About Me to 3 to 4 sentences and simplify the family details section.",
      },
    ],
  },
  // ─── Existing posts ───────────────────────────────────────────────────────────
  {
    slug: "creative-marriage-biodata-template-ideas",
    title: "Creative Marriage Biodata Template Ideas for 2026",
    excerpt:
      "Template ideas for boys and girls, features of premium biodata designs, common mistakes to avoid, and how to choose the right template for your personality.",
    publishedAt: "2026-05-23",
    imageFolder: "blog-1",
    sections: [
      {
        type: "paragraph",
        text: "Most families in India receive 20 to 30 biodatas before scheduling a first meeting. The template you choose determines whether yours gets a second look. These are the creative directions that are working in 2026 — for boys, for girls, and for different communities.",
      },
      {
        type: "heading",
        level: 2,
        text: "Features of Premium Biodata Template",
      },
      {
        type: "paragraph",
        text: "What makes a design premium in 2026 is not just ‘professional layout’ — it is in the details that survive compression and printing. Micro-ornamental corner details that print crisply at 300dpi without turning into blotches. Photo frame shapes (oval, arch, circular) that read clearly at thumbnail size when shared in a WhatsApp group preview. Section dividers that are visible at 72dpi mobile screen resolution, not just in an editor. Cultural motifs — Bismillah calligraphy for Muslim families, mandala borders for Hindu families, Kolam patterns for South Indian families — that feel authentic rather than decorative. These are the creative details that families notice without being able to name them. The layout is the frame; these micro-details are what elevates the impression.",
      },
      {
        type: "heading",
        level: 2,
        text: "Biodata Template Ideas for Boys",
      },
      {
        type: "paragraph",
        text: "The right design depends more on where the profile will be shared than on gender preference alone. For a 28-year-old software engineer in Bengaluru creating his own biodata for online matrimonial profiles: choose Nutan or Neel — both put career and education prominently, and the clean layout reads well on phone screens. For a 25-year-old in Lucknow whose parents are creating the profile for distribution through a matrimonial bureau: Rajasvi or Kumkum read as formal and family-approved — the kind of design that works on a printed A4 sheet left on a relative’s table. For an NRI groom creating a profile for international sharing: Shvetambar photographs well in soft lighting and prints without losing detail.",
      },
      {
        type: "heading",
        level: 2,
        text: "Biodata Template Ideas for Girls",
      },
      {
        type: "paragraph",
        text: "For a doctor in Chennai whose family wants the Jathagam section to be prominent: the Nutan design keeps the horoscope section clean and structured — nothing is hidden, nothing competes for attention. For a Marathi girl in Pune whose family will share the profile with a local pandit: Kanakamala — it prints beautifully on glossy paper and feels traditionally appropriate without being heavy. For a girl from a Punjabi family in Delhi who wants something that stands out in a WhatsApp matrimonial group: Shvetambar has the highest contrast ratio of all our designs and gets noticed in a scrolling preview. For a software professional in Hyderabad sharing on an online platform: the Peepal design is modern without looking corporate.",
      },
      {
        type: "heading",
        level: 2,
        text: "Creative Mistakes to Avoid in Your Biodata Design",
      },
      {
        type: "paragraph",
        text: "These are creative and visual mistakes — not content mistakes. Using an Instagram-filter profile photo: high-saturation, heavily edited photos look artificial in print and reduce trust. A plain, natural-light photo against a neutral background works better. Choosing a dark background design when you know the profile will primarily be shared on WhatsApp: dark templates look beautiful on screen but become unreadable when WhatsApp compresses the PDF for preview on a 5-inch screen — the dark areas merge and text disappears. Picking script or display fonts that render beautifully in a browser but break when the PDF is opened on an Android device with a different font stack. And finally, sending an English-only design to a family that primarily speaks Hindi or Marathi — a mismatch in cultural presentation creates an unnecessary barrier before the family has even read a single detail.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to Select the Perfect Biodata Template",
      },
      {
        type: "paragraph",
        text: "The fastest way: answer two questions. One — is the family network traditional or modern? Two — will the profile be shared on WhatsApp or printed for in-person delivery? If traditional + WhatsApp: choose a high-contrast design with cultural elements — Kumkum or Rajasvi. If modern + WhatsApp: choose Nutan or Neel — minimal layouts read best in compressed previews. If traditional + print: Kanakamala or Hilal both print at A4 without losing ornamental detail. If modern + print: Peepal or Tulsi both hold detail at 300dpi. Browse all options and filter by community on our templates page at marriagebiodatahub.com/templates.",
      },
      {
        type: "heading",
        level: 2,
        text: "Final Thoughts",
      },
      {
        type: "highlight",
        text: "Three template trends shifting in 2026: Photo prominence is increasing — families want the photo larger and placed earlier in the layout, not tucked in a corner. Minimal two-column layouts are outperforming single-column designs in mobile WhatsApp readability — the information density is better, and less scrolling is needed. Community-specific designs with actual community fields (Gotra, Biradari, Kul, Jathagam) are getting better response rates than generic ‘elegant’ designs, because families can immediately see that the design was made for someone like them. Looking for a clean, minimal design? Browse our Nutan and Peepal templates at marriagebiodatahub.com/templates — both are designed with WhatsApp readability first.",
      },
    ],
  },
  {
    slug: "trending-marriage-biodata-formats-in-india",
    title: "Trending Biodata Formats in India — What Families Choose in 2026",
    excerpt:
      "How biodata formats are changing in India — single-page preference, regional and cultural differences, modern vs traditional layouts, and AI vs dedicated tools.",
    publishedAt: "2026-05-25",
    imageFolder: "blog-2",
    sections: [
      {
        type: "paragraph",
        text: "The way Indian families create and share their biodata has changed more in the last three years than in the previous three decades. Paper biodata sent through relatives is nearly gone. The shift to WhatsApp sharing has forced a rethink of layout, length, and design. Here is what is actually changing — and what it means for the format you choose.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Minimalist Biodata Designs Are Replacing Traditional Formats in India",
      },
      {
        type: "paragraph",
        text: "The old process — going to a shop, having someone type up details, printing copies, sending through relatives — took days and required sharing personal information with strangers. Online tools changed this by letting families create, edit, and share a profile in minutes from home. Privacy matters: a family in a smaller city does not want their daughter’s photo and contact details handled by a local print shop. Creating the profile themselves on a dedicated platform keeps control with the family. The WhatsApp culture accelerated this further — a PDF sent in seconds to a relative in another city, ready to read immediately. The modern format is online, self-created, PDF-first, and WhatsApp-ready.",
      },
      {
        type: "heading",
        level: 2,
        text: "Preference of One-Page Biodata Formats",
      },
      {
        type: "paragraph",
        text: "A two-page profile loses most readers on the second page in WhatsApp preview. Families in Delhi and Mumbai matrimonial groups are reviewing 20 to 30 profiles simultaneously. The scroll habit on mobile means page 2 is almost never seen unless the first page created a strong enough impression to make the reader scroll back and open the full PDF. One A4 page is not a limitation — it is the format families actually consume. When your profile does not fit a single page, cut in this order: long About Me sections (families skim these — a two-sentence version works better than eight sentences), duplicate contact information repeated in multiple sections, and decorative blank space that the design template inserted but carries no information. Every line that stays should earn its place.",
      },
      {
        type: "heading",
        level: 2,
        text: "Regional and Cultural Biodata Formats in India",
      },
      {
        type: "paragraph",
        text: "Regional differences in how biodata profiles look are primarily visual, not just about fields. North Indian families — particularly in UP, Bihar, Delhi, Rajasthan — tend toward warmer color palettes: gold borders, maroon headers, cream backgrounds. The aesthetic reflects the visual language of traditional printing, wedding cards, and festive materials from that region. South Indian families — Tamil Nadu, Kerala, Karnataka, Andhra — tend toward cleaner, more minimal layouts with more white space. The Marathi printing tradition has its own ornamental character: specific border patterns and the Devanagari script aesthetic that distinguishes a Lagnacha Biodata from a North Indian shadi biodata. Understanding these visual regional differences helps you choose a design that feels right to the receiving family, not just to you.",
      },
      {
        type: "heading",
        level: 2,
        text: "AI-Generated Vs Creating Via Dedicated Platforms",
      },
      {
        type: "paragraph",
        text: "AI tools are general-purpose and biodata creation is highly specific. When you ask an AI to create a biodata, it does not know that a Hindu family needs Gotra, Rashi, Nakshatra, Nadi, Gan, and Manglik status fields — or that a Marathi family needs Kul, Kulswamini, and Mulchi Gavi — or that a Muslim family’s profile should open with Bismillah. It generates a generic CV-style document with no community context. The output is not optimised for WhatsApp compression — dark backgrounds, small text, and complex layouts that look fine in an AI preview but become unreadable after PDF sharing. Data privacy is a concern: to generate your profile, you enter your family’s personal details into an external AI system. With a dedicated tool, your data stays in your browser and never leaves your device. The templates are already built for Indian communities, the fields are already labelled in the right language, and the PDF output is already tested for WhatsApp readability.",
      },
      {
        type: "heading",
        level: 2,
        text: "Trending Formats by State — What is Working in 2026",
      },
      {
        type: "paragraph",
        text: "Delhi and NCR: Two-column minimal layouts with a prominent photo on the right are getting the best responses in WhatsApp matrimonial groups. High contrast (dark text on white) works better than tinted backgrounds. Mumbai: Clean modern designs without heavy borders — families here tend to see over-decorated designs as old-fashioned. The Modern and Sea Green Contrast designs are consistently well-received. Chennai and Bengaluru: Photo-right layouts with a prominent horoscope section. The Leafs Effect and Modern designs work for urban families; for traditional families sharing through a pandit or marriage bureau, something with more visual formality. Lucknow, Kanpur, and other UP cities: Sober Blue Gold and Crimson Swirl Contrast — both read as respectful and family-appropriate in the traditional North Indian arranged marriage context. Browse and preview all designs at marriagebiodatahub.com/templates.",
      },
      {
        type: "heading",
        level: 2,
        text: "Final Thoughts",
      },
      {
        type: "highlight",
        text: "The format that works is not the most beautiful one — it is the one that is read completely on the first viewing on a 5-inch Android phone screen after WhatsApp compression. One page, high contrast, community-appropriate fields, clean information hierarchy. The trend is moving away from elaborate decoration and toward quiet professionalism. The families reviewing your profile do not need to be impressed by the design — they need to be able to read the information without effort.",
      }
    ],
  },
  {
    slug: "clean-and-simple-biodata-templates-for-marriage",
    title: "Simple Biodata Templates for Marriage — Design Tips",
    excerpt:
      "In this article, we will see the trend simplicity in biodata, readable font style, and the importance of organized information in detail.",
    publishedAt: "2026-05-27",
    imageFolder: "blog-3",
    sections: [
      {
        type: "paragraph",
        text: "In this article, we will see the trend simplicity in biodata templates, readable font style, and the importance of organized information in detail. Also, the distraction-free layout should be of high priority for a better reader experience, and the importance of minimal design will also be discussed in this blog. If we discuss in general, people will understand us when we communicate with them in an easy way, so information should be written by keeping one thing in mind that we are talking to the reader.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Simple Biodata Designs Are Trending?",
      },
      {
        type: "paragraph",
        text: "In India, where biodatas are primarily shared on WhatsApp on Android phones, a simple layout is not just an aesthetic preference — it is a practical one. Heavy decorative designs lose detail when WhatsApp compresses the PDF for preview on a 5-inch screen. The ornamental borders that look beautiful in a design editor become muddy grey smudges on a mid-range Android phone. The script fonts that look elegant on a laptop become unreadable when compressed. Simple layouts — clean backgrounds, high-contrast text, minimal graphic elements — survive this compression process with almost no degradation. The reader on the other end sees the same clean, readable layout that you designed. That is why simple designs get more responses: they are the ones that can actually be read.",
      },
      {
        type: "heading",
        level: 2,
        text: "Importance of Information Hierarchy in Your Biodata Design",
      },
      {
        type: "paragraph",
        text: "Information is the main factor in the layout of a profile after selecting design and color, so the information should be portrayed in this way so that the user can engage with your profile, and the information should be written in a very straightforward way, which should be relevant and reflect your personality. The hierarchy of information is the key so it should start with your personal details and all the information should be covered inside this section — your name, age, height, date of birth, and most importantly your professional detail. After that, the other important part is the family details section covering your father’s name, your mother’s name, and their profession, also sibling details, and lastly, contact details so that the families can approach you for further processing.",
      },
      {
        type: "heading",
        level: 2,
        text: "Minimal Design And Its Impact",
      },
      {
        type: "paragraph",
        text: "The audience for your profile matters more than personal taste. A 30-year-old IT professional in Bengaluru whose profile will be shared in an online matrimonial group expects and responds well to a minimal two-column layout — it looks like the professional communication style that person is used to at work. A 24-year-old from a traditional family in Lucknow whose profile will be printed and handed to a local relative or a marriage bureau needs something that reads as formal and family-appropriate — a design with some visible cultural aesthetics but without being garish. Minimal design is not one-size-fits-all. The question is: what does minimal mean to the receiving family?",
      },
      {
        type: "heading",
        level: 2,
        text: "Why does too much decoration reduce biodata quality?",
      },
      {
        type: "paragraph",
        text: "Beauty is essential to attract attention, but over-styling distracts from the information. The reader gets distracted by too much decoration and possibly will not read it completely. Similarly, heavy graphics are not recommended because the only important part of the profile is information — the layout and design are just to make it readable and elegant, not to compete with the content. Elements should be placed separately, which looks elegant and increases readability; elements should not overlap with each other. Too many icons and shapes create visual noise that pulls attention away from the text.",
      },
      {
        type: "heading",
        level: 2,
        text: "Avoid Over-trendy Templates for Biodata",
      },
      {
        type: "paragraph",
        text: "Over-trendy in 2026 means specific things. Gradient backgrounds — the kind that look vibrant on a MacBook Retina screen — turn into unreadable blurs after WhatsApp compression on a 720p Android phone. Heavily animated presentation styles that exist on some online tools do not transfer to PDF at all — the file your recipient opens looks completely different from what you designed. Instagram-aesthetic fonts — the brushstroke styles and hand-lettered scripts popularized by social media — work for stories but break badly in PDF rendering on devices that don’t have those fonts installed. Families receiving your profile on older Android devices see a substituted system font instead, often breaking the entire layout. Evergreen minimal designs avoid all of these problems and remain consistently readable regardless of the device or compression.",
      },
      {
        type: "heading",
        level: 2,
        text: "Final Thoughts",
      },
      {
        type: "highlight",
        text: "A profile is not just about showing design skill or color selection ability — it is about how you present yourself in information. Your tone in the information is more important than the design of the layout; the reader should focus on your words more than your theme selection. Information hierarchy, clarity, and a design that does not fight the content — these matter more than creative flair. If you are looking for a clean, minimal design that reads well on WhatsApp and prints well on paper, browse the Modern and Leafs Effect designs at marriagebiodatahub.com/templates — both are built with readability as the first design requirement.",
      },
    ],
  },
];

export async function getAllPosts() {
  return Promise.all(
    posts.map(async (post) => {
      const prepared = await preparePost(post);
      return {
        slug: prepared.slug,
        title: prepared.title,
        excerpt: prepared.excerpt,
        publishedAt: prepared.publishedAt,
        image: prepared.image,
      };
    })
  );
}

export async function getPostBySlug(slug) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  return preparePost(post);
}

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}

export async function getPostsForListing() {
  const all = await getAllPosts();
  return all.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}
