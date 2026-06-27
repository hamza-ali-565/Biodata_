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
