import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "Christian Marriage Biodata — Format & Free Templates",
  description:
    "Christian marriage biodata guide — denomination, church, diocese fields explained. For Goan Catholic, Kerala, Mangalorean, CSI, CNI, and Anglo-Indian families. Free PDF download.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/christian-biodata-for-marriage",
  },
  openGraph: {
    title: "Christian Marriage Biodata — Format & Free Templates",
    description:
      "Christian marriage biodata guide — denomination, church, diocese fields explained. For Goan Catholic, Kerala, Mangalorean, CSI, CNI, and Anglo-Indian families.",
    url: "https://www.marriagebiodatahub.com/christian-biodata-for-marriage",
    type: "article",
    locale: "en_IN",
    siteName: "Marriage Biodata Hub",
    images: [
      {
        url: "https://www.marriagebiodatahub.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Christian Marriage Biodata — Marriage Biodata Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Marriage Biodata — Format & Free Templates",
    description:
      "Christian marriage biodata guide — denomination, church, diocese fields. For Goan Catholic, Kerala, Mangalorean, and Anglo-Indian families.",
    images: ["https://www.marriagebiodatahub.com/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is a Christian marriage biodata?",
    a: "A Christian marriage biodata is a one-page matrimonial profile used by Indian Christian families in the arranged marriage process. It typically opens with a cross symbol or a blessing line ('In God We Trust' or 'To God Be the Glory'). The community-specific fields are Denomination (Catholic, Jacobite, CSI, CNI, Marthomite, Pentecostal), Church Name, and Diocese. Unlike Hindu biodatas, there are no horoscope fields (Rashi, Nakshatra, Gotra, Manglik). Unlike Muslim biodatas, there is no Sect or Biradari equivalent. It is used by Goan Catholic, Kerala Christian, Mangalorean Catholic, Anglo-Indian, and other Indian Christian communities.",
  },
  {
    q: "What denomination fields should I include in a Christian biodata?",
    a: "Write your denomination clearly: Roman Catholic, Syro-Malabar Catholic, Syro-Malankara Catholic, Jacobite Syrian Christian (Malankara Orthodox), Marthomite (Mar Thoma Syrian Christian), Church of South India (CSI), Church of North India (CNI), Pentecostal, or any other. The denomination matters because sacramental compatibility is important for families — a Roman Catholic marriage has canonical requirements that a non-Catholic may need to meet. Many families prefer same-denomination matches; others are open across Protestant denominations. Write it accurately and let the families it is shared with make their own assessment.",
  },
  {
    q: "Does a Christian marriage biodata include horoscope details?",
    a: "No. Christian theology does not endorse astrology or horoscope-based matchmaking. A Christian marriage biodata does not include Rashi, Nakshatra, Gotra, Nadi, Gan, or Manglik status. These are Vedic astrology fields specific to Hindu biodatas. Families who include horoscope fields in a Christian biodata are typically following pan-Indian social convention out of habit, not religious requirement. If your family specifically wants to include horoscope details as a cultural practice, that is a personal decision — but it is not standard in any Indian Christian community.",
  },
  {
    q: "What is the difference between Goan Catholic and Kerala Christian biodata?",
    a: "Goan Catholic biodatas use Portuguese-influenced surnames (D'Souza, Fernandes, Pereira, Rodrigues, Almeida) and typically mention the home parish and village (Goa's village parish system is central to Catholic identity). Kerala Christian biodatas have more denominational variety — families may be Jacobite, Syro-Malabar Catholic, CSI, or Marthomite — and the denomination must be specified clearly because these are distinct churches with different liturgies and sacramental practices. Kerala families also often mention the Tharavad (ancestral family) name, which carries community identity similar to a clan name.",
  },
  {
    q: "Should a Christian marriage biodata include caste?",
    a: "Christian teaching does not endorse the caste system. However, social caste identities persist in many Indian Christian communities — particularly among converts whose communities converted several generations ago (Dalit Christians, for example) and in some regions of Tamil Nadu and Andhra Pradesh where caste community identity (Nadar, Vellalar, Mudaliar) remains socially active. Whether to include community identity in a Christian biodata is a personal and family decision. Many families write only their denomination and church, leaving community identity out. Others include it for practical matching reasons. Write honestly — do not include it if you are genuinely open across communities, and do not omit it if it is a real factor in your family's decision-making.",
  },
  {
    q: "What opening line should I use in a Christian marriage biodata?",
    a: "The most common opening lines in Indian Christian biodatas are: 'In God We Trust', 'To God Be the Glory', 'In the Name of the Father, the Son, and the Holy Spirit', or a cross symbol followed by a simple blessing. Catholic families often use 'JMJ' (Jesus, Mary, Joseph) at the top. Jacobite and Orthodox families may use a cross with the Aramaic or Syriac blessing. Pentecostal families often use 'Praise the Lord' or 'Hallelujah.' Choose the line that genuinely reflects your family's faith tradition — the opening is the first thing the receiving family reads and it signals your religious identity immediately.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Christian Marriage Biodata — Complete Format Guide for All Denominations",
    description:
      "Christian marriage biodata guide covering denomination, church, and diocese fields for Goan Catholic, Kerala Christian (Jacobite, Syro-Malabar, CSI, CNI), Mangalorean Catholic, and Anglo-Indian families across India.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub", url: "https://www.marriagebiodatahub.com" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      url: "https://www.marriagebiodatahub.com",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/images/Logo-of-marriage-biodata-hub.webp" },
    },
    inLanguage: "en-IN",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/christian-biodata-for-marriage" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Christian Marriage Biodata", item: "https://www.marriagebiodatahub.com/christian-biodata-for-marriage" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

function AEOBlock({ children }) {
  return (
    <div className="rounded-2xl border border-brand-500/30 bg-brand-500/5 p-6 mb-10 text-slate-200 leading-relaxed text-base">
      {children}
    </div>
  );
}

function SectionFAQ({ items }) {
  return (
    <div className="space-y-4 mt-6">
      {items.map((faq, i) => (
        <article key={i} className="premium-card-static overflow-hidden">
          <details className="group marker:content-none [&::-webkit-details-marker]:hidden">
            <summary className="flex w-full items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none focus-visible:bg-slate-800/50">
              <h3 className="font-semibold text-white pr-4 sm:text-lg">{faq.q}</h3>
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 transition-transform duration-300 group-open:rotate-180 group-open:bg-brand-500/20 text-slate-400 group-open:text-brand-400">
                <ChevronDown className="w-5 h-5" />
              </div>
            </summary>
            <div className="px-5 md:px-6 pb-6 pt-0 text-slate-300 leading-relaxed text-sm lg:text-base">
              <p>{faq.a}</p>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}

export default function ChristianBiodataForMarriage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden pb-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[150px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-rose-500/8 blur-[150px]" />
        </div>

        <main className="flex-1 w-full max-w-4xl mx-auto px-6 pt-20 sm:px-8 sm:pt-28 relative z-10">

          <nav className="text-xs text-slate-500 mb-8 flex gap-2 items-center">
            <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Christian Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Christian Marriage Biodata — Complete Format Guide for All Denominations
          </h1>

          <AEOBlock>
            A Christian marriage biodata opens with a cross or a blessing line — "In God We Trust," "JMJ," or "To God
            Be the Glory" depending on denomination — not with a horoscope section. There are no Rashi, Nakshatra,
            Gotra, or Manglik fields. The three community-specific fields are Denomination (Roman Catholic / Jacobite /
            Syro-Malabar / CSI / CNI / Marthomite / Pentecostal), Church Name, and Diocese. Getting the denomination
            right matters — not for cultural decoration, but because sacramental compatibility has practical implications
            for Catholic families whose church has specific requirements for marriage with non-Catholics. Everything else
            follows the same structure as any Indian marriage biodata: personal details, family background, education,
            career, About Me, partner preferences, and contact.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What makes an Indian Christian marriage biodata different?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Christian biodata in India is one of the least-served categories in matrimonial tools. Most templates assume
            the user is Hindu — they include Gotra and Rashi fields by default, and some include a "God image" selector
            for Hindu deities. None of this is relevant for a family in Kochi, Goa, or Chennai's Christian community.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            There are an estimated 28 million Christians in India across dozens of denominations, regional traditions,
            linguistic communities, and liturgical practices. Goan Catholics, Kerala Jacobites, Syro-Malabar Catholics,
            Mangalorean Catholics, Anglo-Indians in Kolkata, Tamil Nadu's CSI families, and Andhra Pradesh's CNI
            families all have distinct biodata expectations. What they share is this: a biodata that opens with faith,
            includes the right denomination fields, and leaves out the Hindu-specific fields that don't belong in their
            matrimonial tradition.
          </p>

          <div className="space-y-4 mb-8">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Opening — blessing or cross</h3>
              <p className="text-slate-300 leading-relaxed">
                The faith invocation at the top of the biodata is not optional for most Indian Christian families. It
                signals that this is a Christian household, that the family takes their faith seriously, and that the
                marriage will be conducted within Christian tradition. The exact form varies by denomination and region
                — see the denomination guide below.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-3">No horoscope section</h3>
              <p className="text-slate-300 leading-relaxed">
                A complete absence of Rashi, Nakshatra, Gotra, Nadi, Gan, and Manglik fields. Not a reduced section —
                no section. This is correct for every Indian Christian denomination. Families who have been creating
                biodatas using general Indian templates may have included these fields out of convention — they should
                be removed.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Denomination, Church, Diocese</h3>
              <p className="text-slate-300 leading-relaxed">
                These three fields carry the same weight in Christian matrimonial matching that Gotra and Rashi carry
                in Hindu matching. A Roman Catholic family and a Jacobite family have different liturgical traditions,
                different sacramental practices, and potentially different views on interdenominational marriage. Writing
                only "Christian" without denomination is like writing "Hindu" without Gotra — it gives the other family
                insufficient information to assess compatibility.
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Christian-specific fields explained</h2>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h3 className="text-lg font-bold text-white mb-3">Denomination</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Write the specific denomination your family belongs to. "Christian" alone is not enough. The Indian
              Christian community is denominationally diverse in ways that matter for matrimonial compatibility.
            </p>
            <div className="space-y-3">
              {[
                {
                  label: "Roman Catholic",
                  desc: "Under the authority of the Pope. Follows the Latin Rite. Largest single Christian denomination in India. Strong presence in Goa, coastal Karnataka, Mumbai, Kerala (Latin Catholic), and the North-East. A Catholic marriage (Matrimony) is a sacrament — if a Catholic marries a non-Catholic, the Catholic party typically needs dispensation from the local diocese.",
                },
                {
                  label: "Syro-Malabar Catholic",
                  desc: "One of the Eastern Catholic Churches. Based in Kerala and associated with the Thomas Christian tradition. In full communion with Rome but follows the Syro-Malabar rite (Chaldean-derived). Distinct from Latin Catholics in liturgy and community identity.",
                },
                {
                  label: "Syro-Malankara Catholic",
                  desc: "Another Eastern Catholic Church, founded in 1930 when Mar Ivanios led a portion of the Malankara Orthodox community into communion with Rome. Smaller community, primarily in Kerala.",
                },
                {
                  label: "Jacobite Syrian Christian (Malankara Orthodox)",
                  desc: "Not in communion with Rome. Part of the Oriental Orthodox family of churches. One of the oldest Christian communities in the world, traditionally tracing origin to the Apostle Thomas. Major presence in Kerala. The long-running legal and canonical dispute between the Jacobite (Patriarchate of Antioch) faction and the Malankara Orthodox (autonomous) faction is a genuine social reality families navigate.",
                },
                {
                  label: "Marthomite (Mar Thoma Syrian Christian)",
                  desc: "A reform denomination that emerged in the 19th century from within the Malankara Syrian Christian tradition, influenced by the Protestant Reformation while retaining Syrian liturgical elements. Based in Kerala.",
                },
                {
                  label: "Church of South India (CSI)",
                  desc: "A united Protestant church formed in 1947 through a merger of Anglican, Methodist, Congregational, Presbyterian, and Reformed churches. Major presence in Tamil Nadu, Karnataka, Andhra Pradesh, and Kerala. One of the largest Protestant denominations in India.",
                },
                {
                  label: "Church of North India (CNI)",
                  desc: "Equivalent to CSI for the northern regions. Formed in 1970. Anglican heritage. Present across North India, including Uttar Pradesh, Madhya Pradesh, Gujarat, Maharashtra, and West Bengal.",
                },
                {
                  label: "Pentecostal",
                  desc: "Umbrella term for charismatic Protestant Christianity. Diverse — includes the Indian Pentecostal Church of God (IPC, major in Kerala), Assemblies of God, Full Gospel churches, and many independent congregations. Pentecostal families often emphasise active church membership, prayer groups, and gifts of the Spirit as community markers.",
                },
              ].map(({ label, desc }) => (
                <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                  <p className="font-semibold text-white mb-1">{label}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h3 className="text-lg font-bold text-white mb-3">Church Name</h3>
            <p className="text-slate-300 leading-relaxed mb-3">
              The name of the church the family regularly attends and is registered with. Not the nearest church to the
              current address — the church where the family has an active connection, where children were baptised, where
              the family will expect the wedding to take place.
            </p>
            <div className="space-y-2">
              {[
                { label: "Goan Catholics", desc: "The village parish church. Mentioning 'Our Lady of the Rosary Parish, Navelim, South Goa' gives the receiving family immediate community context." },
                { label: "Kerala Christians", desc: "The specific church and its affiliated diocese or ecclesiastical authority. 'CSI South Kerala Diocese, St. George's Church, Thiruvananthapuram' is a complete church identification." },
                { label: "Anglo-Indian families", desc: "The cathedral or historic church the family has attended for generations — 'Holy Rosary Cathedral, Kolkata' or 'St. Thomas Cathedral, Mumbai' carries heritage significance." },
              ].map(({ label, desc }) => (
                <div key={label} className="rounded-xl bg-slate-900/40 border border-slate-700 p-3">
                  <p className="font-semibold text-white text-sm mb-1">{label}</p>
                  <p className="text-slate-300 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h3 className="text-lg font-bold text-white mb-3">Diocese</h3>
            <p className="text-slate-300 leading-relaxed mb-3">
              The diocesan division the church belongs to. Every Roman Catholic, CSI, and CNI church belongs to a
              specific diocese. This field tells the receiving family the ecclesiastical territory, the bishop's
              authority, and — for Catholic families — which diocesan office would handle a marriage dispensation if
              needed.
            </p>
            <div className="space-y-2">
              {[
                { label: "Goan families", desc: "Archdiocese of Goa and Daman — the Archbishop of Goa is the Patriarch of the East Indies, the most senior Catholic prelate in Asia." },
                { label: "Kerala families", desc: "Multiple dioceses — Archdiocese of Ernakulam-Angamaly (Syro-Malabar), Diocese of Changanacherry, Diocese of Kothamangalam for Syro-Malabar. CSI Madhya Kerala Diocese for CSI. The diocese immediately tells the receiving family which branch of the Kerala Christian landscape the family belongs to." },
              ].map(({ label, desc }) => (
                <div key={label} className="rounded-xl bg-slate-900/40 border border-slate-700 p-3">
                  <p className="font-semibold text-white text-sm mb-1">{label}</p>
                  <p className="text-slate-300 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Opening blessings by denomination — what to write</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The opening line of a Christian biodata is the equivalent of Bismillah for a Muslim family or Shree
            Ganeshaya Namah for a Hindu family. It frames the entire document. These are the standard openings by
            denomination:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { label: "Roman Catholic", desc: "A cross symbol followed by 'In the Name of the Father, the Son, and the Holy Spirit. Amen.' — or simply 'JMJ' (Jesus, Mary, Joseph) at the top right corner of the document, which is the traditional Catholic correspondence header. Some families use 'In God We Trust.'" },
              { label: "Jacobite / Malankara Orthodox / Syro-Malabar", desc: "A cross — often the Syriac cross (Nasrani Menorah cross) — followed by a Syrian or Aramaic blessing phrase. Many families simply write a cross at the top and the candidate name below it." },
              { label: "Marthomite", desc: "A cross followed by 'To God Be the Glory' or 'In the Name of the Lord.' Consistent with Mar Thoma's Protestant-influenced tradition." },
              { label: "CSI / CNI", desc: "'In God We Trust' or 'To the Glory of God' are both common. Anglican heritage families sometimes use 'IHS' (In Hoc Signo — traditional Christian symbol) at the top." },
              { label: "Pentecostal / Charismatic", desc: "'Praise the Lord,' 'Hallelujah,' or 'In Jesus' Name.' Pentecostal families are often more expressive in faith invocation." },
              { label: "Anglo-Indian families", desc: "Typically 'In God We Trust' or a simple cross. More restrained and formal in the British administrative tradition." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                <p className="font-semibold text-white mb-1">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Christian marriage biodata — full sample (Kerala Jacobite)</h2>
          <pre className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 text-slate-300 text-xs leading-relaxed overflow-x-auto mb-8 whitespace-pre-wrap">
{`✝
To God Be the Glory

─────────────────────────────────────────
MARRIAGE BIODATA
─────────────────────────────────────────

PERSONAL DETAILS
────────────────
Name:               Ms. Anita Thomas
Date of Birth:      22 September 1998
Place of Birth:     Kottayam, Kerala
Height:             5 ft 3 in
Blood Group:        A+
Religion:           Christian
Denomination:       Jacobite Syrian Christian
Church:             Jacobite Syrian Cathedral, Niranam, Pathanamthitta
Diocese:            Jacobite Syrian Church — Pathanamthitta Diocese

EDUCATION & CAREER
──────────────────
Education:          B.Tech, Computer Science — CUSAT, Kochi (2020)
Current Role:       Software Engineer, Infosys — Bengaluru
Annual Income:      7–9 LPA

FAMILY DETAILS
──────────────
Father:             Mr. K.C. Thomas — Retired, Kerala Government (PWD Engineer)
Mother:             Mrs. Annamma Thomas — Homemaker, active in Church choir
Siblings:           One elder brother — married, IT professional in USA
Family Type:        Nuclear — parents in Kottayam
Tharavad:           Kalathil Tharavad, Niranam (ancestral family name)

ABOUT ME
────────
I am a software engineer in Bengaluru who grew up in Kottayam with strong church
and family roots. Sunday service and family visits home every two months are
constants in my life — not obligations, just what we do. I cook Kerala fish
curry reasonably well and am working my way through improving. Outside work I
read, mostly Malayalam literature and some English non-fiction. I am looking
for a partner who values family, has his own interests and ambitions, and is
comfortable with a life that includes regular Kottayam visits.

PARTNER PREFERENCES
───────────────────
Looking for a Christian man between 27 and 33, from a good family with similar
faith values. Jacobite or other Orthodox Syrian denomination preferred; open
to CSI and Marthomite for the right match. Education to at least degree level.
Based in Bengaluru or willing to relocate. Photo available on request.

CONTACT
───────
Contact Person:     Mr. K.C. Thomas (Father)
Mobile:             [number]
WhatsApp:           Same
City:               Kottayam, Kerala`}
          </pre>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Christian biodata by community across India</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                label: "Goan Catholic families",
                desc: "Goa's Catholic community traces its Christianity to the Portuguese colonial period — the Diocese of Goa was established in 1534, making it one of the oldest dioceses in Asia. The village parish system is the centre of Goan Catholic identity. Families are identified by their village and parish. The annual Parish Feast (Festa) is the most important community gathering of the year, and many matrimonial connections are made during Festa season. Goan Catholic surnames are Portuguese in origin — D'Souza, Fernandes, Pereira, Rodrigues, Almeida, Coutinho, Saldanha, Costa, Pinto, Lobo. The biodata typically includes home parish name, village in Goa (even if the family has been in Mumbai for three generations), and income.",
              },
              {
                label: "Kerala Christian families",
                desc: "Kerala is home to one of the most complex Christian landscapes in the world — with communities that claim 2,000-year ancestry going back to St. Thomas the Apostle. The denominational distinctions matter matrimonially and are not interchangeable. The Tharavad (ancestral family) name is an important field specific to Kerala Christian biodatas — it functions similarly to a gotra or clan name. For Syro-Malabar and Syro-Malankara families, the biodata often mentions which rite the wedding will be conducted in.",
              },
              {
                label: "Mangalorean Catholic families",
                desc: "Mangalorean Catholics are a tight-knit coastal Karnataka community, with roots in Goa — their ancestors fled Goa during the Portuguese Inquisition. They share Portuguese-origin surnames with Goan Catholics (D'Souza, Fernandes, Rodrigues, Pinto) but have a distinct community identity. Large diaspora communities exist in Mumbai, Pune, Bengaluru, and — historically — in the Gulf countries. For Mangalorean biodatas, the ancestral village in coastal Karnataka (Mangaluru district, Udupi district) is the equivalent of the Goan village parish.",
              },
              {
                label: "Anglo-Indian families",
                desc: "Anglo-Indian families — with European and South Asian ancestry — are a constitutionally recognised minority community in India, with historical concentration in Kolkata, Mumbai, Chennai, Bengaluru, and Dehradun. Most Anglo-Indian families are Roman Catholic or Protestant (CNI/Church of England heritage). The Anglo-Indian biodata typically uses formal English throughout, includes community identity (Anglo-Indian) alongside denomination, and may mention the family's ancestral location.",
              },
              {
                label: "Tamil Nadu and Andhra Pradesh Christian families",
                desc: "Christian communities in Tamil Nadu include CSI families (formerly Anglican and Protestant missions), Roman Catholics (particularly Vellalar Catholic and Nadar Catholic communities), and Pentecostal congregations. In matrimonial practice, both denomination AND community identity (Nadar, Vellalar, Mudaliar, Chettiar) are often included because social community continues to be relevant despite Christian conversion. In Andhra Pradesh, the Christian community is predominantly CNI and Baptist, with significant presence in Guntur district.",
              },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What NOT to include in a Christian biodata</h2>
          <div className="space-y-3 mb-6">
            {[
              { t: "Horoscope fields", d: "Rashi, Nakshatra, Gotra, Manglik — none of these belong in a Christian biodata. If a generic template has generated them, remove them." },
              { t: "Caste if the family is genuinely open", d: "Christian theology is clear that caste distinctions are incompatible with the Gospel. If your family has genuinely transcended caste identity in practice — not just in theory — leaving this field out is the honest choice. If it is still a real factor in how your family will evaluate a match, include it honestly rather than pretending otherwise." },
              { t: "Dowry-adjacent language", d: "Any phrase in partner preferences that could be read as specifying expected assets or property is inappropriate and should be removed." },
              { t: "Very specific physical requirements", d: "'Fair complexion preferred' in writing reads poorly in any biodata, but particularly in a document that opens with a Christian blessing. Have these conversations in person after initial contact." },
            ].map(({ t, d }, i) => (
              <div key={i} className="flex gap-4 rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{t}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your Christian marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Our templates open with a cross and a blessing, include denomination and church fields, and leave out the
              horoscope section that doesn't belong in a Christian biodata. No login. Free PDF download. Works for Goan
              Catholic, Kerala Christian, Mangalorean, CSI, CNI, and Anglo-Indian families.
            </p>
            <Link
              href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Christian Biodata — Free →
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">Frequently asked questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
                { href: "/what-is-marriage-biodata", label: "What is a marriage biodata?" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
                { href: "/sikh-biodata-for-marriage", label: "Sikh marriage biodata" },
                { href: "/jain-biodata-for-marriage", label: "Jain marriage biodata" },
                { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata" },
                { href: "/about-me-for-marriage-biodata", label: "About Me examples" },
                { href: "/templates", label: "Browse templates" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-xs rounded-full border border-slate-700 px-4 py-2 text-slate-300 hover:border-brand-500/50 hover:text-white transition-all">
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </main>
      </div>
      <Footer />
    </>
  );
}
