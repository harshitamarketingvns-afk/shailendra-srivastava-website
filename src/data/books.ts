/**
 * Books data source for Shailendra Srivastava's author website.
 *
 * To add a new book, append a new object to the `books` array below.
 * The slug must be unique and URL-safe (lowercase, hyphenated).
 *
 * Cover images: place a file in `/public/books/<slug>.jpg` and set `cover`
 * to `/books/<slug>.jpg`. If no image is available yet, leave the placeholder.
 *
 * Purchase platforms:
 *   - "amazon"  → uses `amazonUrl`
 *   - "gumroad" → uses `gumroadUrl`
 *   - "both"    → uses both (BookCard renders both buttons)
 * Use "#" as a placeholder until the real URL is confirmed.
 */

export type BookCategory =
  | "Gemstones"
  | "Diamonds & Jewellery"
  | "Science & Philosophy"
  | "Fiction & Speculative Thought";

export type BookSeries =
  | "Ratna Gyan Academy"
  | "Diamond & Jewellery Knowledge Series"
  | "The Birth of God Series"
  | "Standalone";

/** Which storefront a book is sold on. Drives which CTA buttons render. */
export type BookPlatform = "amazon" | "gumroad" | "both";

export interface Book {
  /** Unique URL-safe identifier, e.g. "manik" */
  slug: string;
  /** Full book title as it appears on the cover */
  title: string;
  /** Subtitle or descriptor */
  subtitle: string;
  /** Author name (kept consistent across the site) */
  author: string;
  /** Path to the cover image inside /public, or null for placeholder */
  cover: string | null;
  /** Short marketing description shown on cards */
  description: string;
  /** Longer description shown on the dedicated book page */
  longDescription?: string;
  /** Primary language of the book */
  language: "Hindi" | "English" | "Bilingual";
  /** Series the book belongs to */
  series: BookSeries;
  /** High-level category used for filtering */
  category: BookCategory;
  /** Which storefront(s) sell this book. Drives the CTA buttons. */
  platform: BookPlatform;
  /** Direct Amazon purchase URL. Use "#" placeholder until confirmed. */
  amazonUrl: string;
  /** Direct Gumroad purchase URL. Use "#" placeholder until confirmed. */
  gumroadUrl: string;
  /** Whether this book should be featured prominently */
  featured?: boolean;
  /** Sort order within a category (lower = first) */
  order?: number;
}

/**
 * Central author record. Used across the site for consistency
 * and for Schema.org Person JSON-LD.
 */
export const author = {
  name: "Shailendra Srivastava",
  displayName: "SHAILENDRA SRIVASTAVA",
  tagline: "Author • Researcher • Diamond & Gemstone Professional",
  nationality: "Indian",
  roles: ["Author", "Entrepreneur", "Researcher", "Diamond & Jewellery Professional"],
  interests: [
    "Diamonds",
    "Gemstones",
    "Gemology",
    "Jewellery",
    "Artificial Intelligence",
    "Science",
    "Human Evolution",
    "Consciousness",
    "Civilization",
    "Philosophy",
    "Speculative Thought",
  ],
  // Placeholder links — replace with the real handles once available.
  links: {
    amazonAuthorCentral: "https://www.amazon.com/author/shailendrasrivastava",
    gumroadProfile: "https://shailendrasrivastava.gumroad.com",
    youtube: "https://www.youtube.com/@shailendrasrivastava",
    twitter: "https://twitter.com/shailendraauthor",
    linkedin: "https://www.linkedin.com/in/shailendrasrivastava",
    instagram: "https://www.instagram.com/shailendraauthor",
    email: "contact@shailendrasrivastava.com",
    website: "https://shailendrasrivastava.com",
  },
} as const;

/**
 * All published and forthcoming books.
 * Do NOT invent titles — only confirmed titles are listed here.
 */
export const books: Book[] = [
  // ─────────────────────────────────────────────────────────────
  // FLAGSHIP TITLE (Amazon / KDP)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "the-birth-of-god",
    title: "THE BIRTH OF GOD",
    subtitle: "How the Human Mind Created the Idea of God",
    author: author.name,
    cover: "/books/the-birth-of-god.jpg",
    description:
      "This book does not begin by asking whether God exists. It asks a different question: How did the idea of God emerge in the human mind?",
    longDescription:
      "THE BIRTH OF GOD studies the historical and cognitive emergence of the God-concept. It does not claim to prove or disprove the existence of God. Instead, it traces how the idea of God may have formed across human evolution — through mortality awareness, dreams, imagination, agency detection, language, culture, religion, civilization, consciousness, science and philosophy. The book is an inquiry into the mind that asks, not a verdict on the divine that answers.",
    language: "English",
    series: "The Birth of God Series",
    category: "Science & Philosophy",
    platform: "amazon",
    amazonUrl: "https://www.amazon.in/dp/B0HHSCQGF5",
    gumroadUrl: "#",
    featured: true,
    order: 0,
  },

  // ─────────────────────────────────────────────────────────────
  // RATNA GYAN ACADEMY SERIES (Hindi gemstone books — Amazon / KDP)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "manik",
    title: "माणिक",
    subtitle: "रत्न विज्ञान, बाज़ार और खरीदारी का व्यावहारिक ज्ञान",
    author: author.name,
    cover: "/books/manik.jpg",
    description:
      "रुबी (माणिक) को विज्ञान, व्यापार और खरीदारी के व्यावहारिक दृष्टिकोण से समझने वाली एक प्रामाणिक पुस्तक।",
    language: "Hindi",
    series: "Ratna Gyan Academy",
    category: "Gemstones",
    platform: "amazon",
    amazonUrl: "https://www.amazon.in/dp/B0HGMJWWN6",
    gumroadUrl: "#",
    order: 1,
  },
  {
    slug: "opal",
    title: "ओपल",
    subtitle: "विज्ञान, व्यापार और सौंदर्य",
    author: author.name,
    cover: "/books/opal.png",
    description:
      "ओपल के वैज्ञानिक रहस्य, व्यापारिक मूल्य और सौंदर्य का विस्तृत विश्लेषण।",
    language: "Hindi",
    series: "Ratna Gyan Academy",
    category: "Gemstones",
    platform: "amazon",
    amazonUrl: "https://www.amazon.in/dp/B0HFXM75D8",
    gumroadUrl: "#",
    order: 2,
  },
  {
    slug: "pukhraj",
    title: "पुखराज",
    subtitle: "Yellow Sapphire — विज्ञान, ज्योतिष परंपरा और बाज़ार",
    author: author.name,
    cover: "/books/pukhraj.jpg",
    description:
      "पीली पुखराज (Yellow Sapphire) का विज्ञान, ज्योतिषीय परंपरा और बाज़ार का संपूर्ण ज्ञान।",
    language: "Hindi",
    series: "Ratna Gyan Academy",
    category: "Gemstones",
    platform: "amazon",
    amazonUrl: "https://www.amazon.in/dp/B0HGQFTKMM",
    gumroadUrl: "#",
    order: 3,
  },
  {
    slug: "rudraksh",
    title: "रुद्राक्ष",
    subtitle: "प्रकृति, विज्ञान, इतिहास और अध्यात्म",
    author: author.name,
    cover: "/books/rudraksh.jpg",
    description:
      "रुद्राक्ष की प्रकृति, वैज्ञानिक पहलु, ऐतिहासिक परंपरा और अध्यात्मिक महत्व का गहन अध्ययन।",
    language: "Hindi",
    series: "Ratna Gyan Academy",
    category: "Gemstones",
    platform: "amazon",
    amazonUrl: "https://www.amazon.in/dp/B0HH8QSMZX",
    gumroadUrl: "#",
    order: 4,
  },
  {
    slug: "neelam",
    title: "नीलम",
    subtitle: "प्रकृति, विज्ञान, इतिहास और अध्यात्म",
    author: author.name,
    cover: "/books/neelam.jpg",
    description:
      "ब्लू सफ़ायर (नीलम) की प्रकृति, विज्ञान, इतिहास और अध्यात्मिक परंपरा का प्रामाणिक दस्तावेज़।",
    language: "Hindi",
    series: "Ratna Gyan Academy",
    category: "Gemstones",
    platform: "amazon",
    amazonUrl: "https://www.amazon.in/dp/B0HH8JK3GM",
    gumroadUrl: "#",
    order: 5,
  },
  {
    slug: "panna",
    title: "पन्ना",
    subtitle: "प्रकृति, विज्ञान, इतिहास और अध्यात्म",
    author: author.name,
    cover: "/books/panna.jpg",
    description:
      "एमराल्ड (पन्ना) की प्रकृति, वैज्ञानिक संरचना, इतिहास और अध्यात्मिक परंपरा।",
    language: "Hindi",
    series: "Ratna Gyan Academy",
    category: "Gemstones",
    platform: "amazon",
    amazonUrl: "https://www.amazon.in/dp/B0H5X43ZP2",
    gumroadUrl: "#",
    order: 6,
  },
  {
    slug: "moonga",
    title: "मूंगा",
    subtitle: "प्रकृति, विज्ञान, इतिहास और अध्यात्म",
    author: author.name,
    cover: "/books/moonga.jpg",
    description:
      "कोरल (मूंगा) की प्रकृति, विज्ञान, इतिहास और अध्यात्मिक महत्व का समग्र ज्ञान।",
    language: "Hindi",
    series: "Ratna Gyan Academy",
    category: "Gemstones",
    platform: "amazon",
    amazonUrl: "https://www.amazon.in/dp/B0HHB7P527",
    gumroadUrl: "#",
    order: 7,
  },
  {
    slug: "moti",
    title: "मोती",
    subtitle: "प्रकृति, विज्ञान, इतिहास और अध्यात्म",
    author: author.name,
    cover: "/books/moti.jpg",
    description:
      "मोती (Pearl) की प्रकृति, वैज्ञानिक रहस्य, इतिहास और अध्यात्मिक परंपरा का परिचय।",
    language: "Hindi",
    series: "Ratna Gyan Academy",
    category: "Gemstones",
    platform: "amazon",
    amazonUrl: "https://www.amazon.in/dp/B0HHC1Y897",
    gumroadUrl: "#",
    order: 8,
  },

  // ─────────────────────────────────────────────────────────────
  // DIAMOND & JEWELLERY KNOWLEDGE SERIES (Gumroad)
  // Professional education on diamonds, grading, manufacturing,
  // pricing, sales, jewellery design — plus one speculative title.
  // ─────────────────────────────────────────────────────────────
  {
    slug: "diamond-basics",
    title: "Diamond Basics",
    subtitle: "The foundation of diamond knowledge — for beginners and professionals",
    author: author.name,
    cover: null,
    description:
      "The essential starting point for anyone entering the diamond trade. Covers the language, the 4Cs, anatomy, light behaviour and the everyday vocabulary used in the diamond world.",
    longDescription:
      "Diamond Basics is the entry-level volume of the Diamond & Jewellery Knowledge Series. It introduces the reader to the foundational concepts of diamonds — the 4Cs (Cut, Colour, Clarity, Carat), diamond anatomy, how light interacts with a stone, the difference between natural and treated diamonds at a glance, and the everyday vocabulary used inside the trade. Written for students, jewellers and curious buyers alike, it is the ground floor on which every later volume in the series builds.",
    language: "English",
    series: "Diamond & Jewellery Knowledge Series",
    category: "Diamonds & Jewellery",
    platform: "gumroad",
    amazonUrl: "#",
    gumroadUrl: "#",
    order: 1,
  },
  {
    slug: "diamond-grading",
    title: "डायमंड ग्रेडिंग",
    subtitle: "Diamond Grading — the 4Cs, labs and the language of quality",
    author: author.name,
    cover: null,
    description:
      "ग्रेडिंग की दुनिया — 4Cs, लैब रिपोर्ट, और गुणवत्ता की भाषा को व्यावहारिक उदाहरणों के साथ समझाने वाली एक प्रामाणिक पुस्तक।",
    longDescription:
      "डायमंड ग्रेडिंग (Diamond Grading) उस व्यवस्थित प्रक्रिया का विस्तृत विश्लेषण है जिससे एक पत्थर की गुणवत्ता तय होती है। यह पुस्तक 4Cs — Cut, Colour, Clarity और Carat — को गहराई से समझाती है, मुख्य ग्रेडिंग लैबों (GIA, IGI, HRD आदि) की रिपोर्टों को पढ़ना सिखाती है, और यह भी बताती है कि व्यापारी और खरीदार गुणवत्ता की भाषा को वास्तविक रूप में कैसे इस्तेमाल करते हैं। व्यावहारिक उदाहरणों और चित्रों के साथ, यह किताब छात्रों और व्यापारियों दोनों के लिए उपयोगी है।",
    language: "Bilingual",
    series: "Diamond & Jewellery Knowledge Series",
    category: "Diamonds & Jewellery",
    platform: "gumroad",
    amazonUrl: "#",
    gumroadUrl: "#",
    order: 2,
  },
  {
    slug: "diamond-cutting-polishing",
    title: "डायमंड कटिंग एंड पॉलिशिंग",
    subtitle: "Diamond Cutting & Polishing — from rough to brilliance",
    author: author.name,
    cover: "/books/diamond-cutting-polishing.png",
    description:
      "रफ़ से चमक तक की यात्रा — कटिंग और पॉलिशिंग के विज्ञान, तकनीक और शिल्प को विस्तार से समझाने वाली पुस्तक।",
    longDescription:
      "डायमंड कटिंग एंड पॉलिशिंग (Diamond Cutting & Polishing) उस कला और विज्ञान का विस्तृत दस्तावेज़ है जिससे एक कच्चा पत्थर चमकते हीरे में बदलता है। इसमें कट के सिद्धांत, फेसेटिंग की तकनीक, पॉलिशिंग के चरण, उपकरण और मशीनरी, और वह शिल्प-परंपरा शामिल है जो सदियों से डायमंड उद्योग की रीढ़ रही है। यह पुस्तक उत्पादन के छात्रों, डायमंड कार्यशालाओं के लिए काम करने वालों और उत्सुक पाठकों के लिए समान रूप से लिखी गई है।",
    language: "Bilingual",
    series: "Diamond & Jewellery Knowledge Series",
    category: "Diamonds & Jewellery",
    platform: "gumroad",
    amazonUrl: "#",
    gumroadUrl: "#",
    order: 3,
  },
  {
    slug: "diamond-planning-marking",
    title: "डायमंड प्लानिंग एंड मार्किंग",
    subtitle: "Diamond Planning & Marking — deciding what a rough will become",
    author: author.name,
    cover: "/books/diamond-planning-marking.png",
    description:
      "रफ़ की दिशा और दाम — प्लानिंग और मार्किंग के निर्णय जो हीरे के अंतिम मूल्य को तय करते हैं, इसका व्यावहारिक ज्ञान।",
    longDescription:
      "डायमंड प्लानिंग एंड मार्किंग (Diamond Planning & Marking) उन निर्णायक क्षणों का अध्ययन है जब एक रफ़ डायमंड का भविष्य तय होता है। प्लानिंग तय करती है कि पत्थर से कौन-सा शेप और कितने कैरेट निकलेंगे, और मार्किंग उस योजना को पत्थर पर दृश्य रूप में अंकित करती है। यह पुस्तक इन निर्णयों के आर्थिक और तकनीकी पहलुओं को समझाती है — जिसमें इन्क्लूज़न की पहचान, यील्ड अनुकूलन, और आधुनिक 3D स्कैनिंग तकनीक शामिल हैं। यह डायमंड मैन्युफैक्चरिंग का सबसे महत्वपूर्ण और सबसे कम समझा जाने वाला चरण है।",
    language: "Bilingual",
    series: "Diamond & Jewellery Knowledge Series",
    category: "Diamonds & Jewellery",
    platform: "gumroad",
    amazonUrl: "#",
    gumroadUrl: "#",
    order: 4,
  },
  {
    slug: "diamond-manufacturing-process",
    title: "डायमंड मैन्युफैक्चरिंग प्रोसेस",
    subtitle: "Diamond Manufacturing Process — the full pipeline from rough to polished",
    author: author.name,
    cover: "/books/diamond-manufacturing-process.png",
    description:
      "रफ़ से रेडी तक — पूरी मैन्युफैक्चरिंग पाइपलाइन का चरण-दर-चरण व्यावहारिक मार्गदर्शन।",
    longDescription:
      "डायमंड मैन्युफैक्चरिंग प्रोसेस (Diamond Manufacturing Process) डायमंड उद्योग की संपूर्ण प्रोडक्शन पाइपलाइन का व्यावहारिक दस्तावेज़ है। प्लानिंग और मार्किंग से लेकर सॉइंग, ब्रूटिंग, पॉलिशिंग, इंस्पेक्शन और पैकेजिंग तक — हर चरण उसके उपकरणों, मानकों और गुणवत्ता-नियंत्रण के साथ विस्तार से समझाया गया है। यह पुस्तक मैन्युफैक्चरिंग इकाइयों के मालिकों, कार्यशाला पर्यवेक्षकों, छात्रों और व्यापारियों के लिए एक संपूर्ण संदर्भ है।",
    language: "Bilingual",
    series: "Diamond & Jewellery Knowledge Series",
    category: "Diamonds & Jewellery",
    platform: "gumroad",
    amazonUrl: "#",
    gumroadUrl: "#",
    order: 5,
  },
  {
    slug: "diamond-pricing-guide",
    title: "डायमंड प्राइसिंग गाइड",
    subtitle: "Diamond Pricing Guide — how a stone becomes a number",
    author: author.name,
    cover: "/books/diamond-pricing-guide.png",
    description:
      "हीरे की कीमत कैसे तय होती है — रैप, मार्जिन, शेप-प्रीमियम और बाज़ार की वास्तविकताओं का व्यावहारिक ज्ञान।",
    longDescription:
      "डायमंड प्राइसिंग गाइड (Diamond Pricing Guide) उस जटिल प्रणाली का खुलासा है जिससे हीरे की कीमत तय होती है। इसमें Rapaport price list, मार्जिन संरचना, शेप-प्रीमियम, कलर और क्लैरिटी का कीमत पर प्रभाव, और प्राकृतिक बनाम लैब-ग्रोन डायमंड की वर्तमान बाज़ार वास्तविकताएँ शामिल हैं। यह पुस्तक व्यापारियों, खुदरा विक्रेताओं और खरीदारों के लिए एक व्यावहारिक मार्गदर्शक है जो कीमत के पीछे की तर्क को समझना चाहते हैं।",
    language: "Bilingual",
    series: "Diamond & Jewellery Knowledge Series",
    category: "Diamonds & Jewellery",
    platform: "gumroad",
    amazonUrl: "#",
    gumroadUrl: "#",
    order: 6,
  },
  {
    slug: "natural-vs-lab-grown-diamond",
    title: "नेचुरल vs लैब-ग्रोन डायमंड",
    subtitle: "Natural vs Lab-Grown Diamond — science, market and meaning",
    author: author.name,
    cover: null,
    description:
      "प्राकृतिक और लैब-ग्रोन डायमंड के बीच विज्ञान, पहचान, मूल्य और अर्थ का पक्ष-दर-पक्ष विश्लेषण।",
    longDescription:
      "नेचुरल vs लैब-ग्रोन डायमंड (Natural vs Lab-Grown Diamond) आधुनिक डायमंड उद्योग के सबसे महत्वपूर्ण सवालों में से एक को गहराई से पेश करती है। यह पुस्तक दोनों के वैज्ञानिक अंतर, पहचान की तकनीकें, मूल्य-भेद, बाज़ार की दिशा और उपभोक्ता के लिए इनके अर्थ को संतुलित दृष्टिकोण से समझाती है। यह ज्वेलर, खरीदार और छात्र — तीनों के लिए समान रूप से आवश्यक है।",
    language: "Bilingual",
    series: "Diamond & Jewellery Knowledge Series",
    category: "Diamonds & Jewellery",
    platform: "gumroad",
    amazonUrl: "#",
    gumroadUrl: "#",
    order: 7,
  },
  {
    slug: "diamond-sales-customer-handling",
    title: "डायमंड सेल्स एंड कस्टमर हैंडलिंग",
    subtitle: "Diamond Sales and Customer Handling — the human side of the counter",
    author: author.name,
    cover: "/books/diamond-sales-customer-handling.png",
    description:
      "काउंटर के पार — बिक्री, विश्वास, और ग्राहक-संबंध के व्यावहारिक कौशल के लिए एक प्रामाणिक गाइड।",
    longDescription:
      "डायमंड सेल्स एंड कस्टमर हैंडलिंग (Diamond Sales and Customer Handling) डायमंड व्यापार के उस पहलू पर केंद्रित है जिसे अक्सर नज़रअंदाज़ किया जाता है — इंसानी बातचीत। यह पुस्तक बिक्री की तकनीक, ग्राहक की ज़रूरत समझना, विश्वास बनाना, आपत्तियों का सामना, और दीर्घकालिक ग्राहक-संबंध की कला सिखाती है। ज्वेलर, सेल्स स्टाफ और खुदरा विक्रेताओं के लिए यह एक व्यावहारिक हैंडबुक है।",
    language: "Bilingual",
    series: "Diamond & Jewellery Knowledge Series",
    category: "Diamonds & Jewellery",
    platform: "gumroad",
    amazonUrl: "#",
    gumroadUrl: "#",
    order: 8,
  },
  {
    slug: "jewellery-design-basics",
    title: "ज्वेलरी डिज़ाइन बेसिक्स",
    subtitle: "Jewellery Design Basics — from idea to sketch to CAD",
    author: author.name,
    cover: "/books/jewellery-design-basics.png",
    description:
      "आभूषण डिज़ाइन की नींव — स्केच से CAD तक, अनुपात से विनिर्माण तक का व्यावहारिक परिचय।",
    longDescription:
      "ज्वेलरी डिज़ाइन बेसिक्स (Jewellery Design Basics) आभूषण डिज़ाइन के मूल सिद्धांतों का परिचय है। इसमें अनुपात, संतुलन, रूप, मेटल-चयन, स्टोन-सेटिंग, स्केचिंग तकनीक, और आधुनिक CAD-आधारित डिज़ाइन की शुरुआत शामिल है। यह पुस्तक डिज़ाइन के छात्रों, ज्वेलर्स के लिए काम करने वाले डिज़ाइनरों और स्व-शिक्षित कलाकारों के लिए समान रूप से लिखी गई है।",
    language: "Bilingual",
    series: "Diamond & Jewellery Knowledge Series",
    category: "Diamonds & Jewellery",
    platform: "gumroad",
    amazonUrl: "#",
    gumroadUrl: "#",
    order: 9,
  },
  {
    slug: "dusri-dharti-alternate-universe",
    title: "दूसरी धरती",
    subtitle: "अल्टरनेट यूनिवर्स — Alternate Universe",
    author: author.name,
    cover: "/books/dusri-dharti-alternate-universe.png",
    description:
      "एक कल्पनाशील और दार्शनिक यात्रा — क्या होता यदि धरती के साथ एक और संभावना भी चल रही हो?",
    longDescription:
      "दूसरी धरती — अल्टरनेट यूनिवर्स (Alternate Universe) एक कल्पनाशील और विचार-प्रधान कथा है जो वैज्ञानिक संभावनाओं, सभ्यता की दिशा और मानवीय चेतना की सीमाओं को एक साथ छूती है। यह पुस्तक पाठक को एक ऐसी दुनिया में ले जाती है जहाँ हमारी धरती की वास्तविकता के समानांतर एक और संभावना मौजूद है — और इस तरह वह मौलिक सवाल खड़े करती है कि हम जो दुनिया समझते हैं, वह अकेली क्यों हो।",
    language: "Hindi",
    series: "Diamond & Jewellery Knowledge Series",
    category: "Fiction & Speculative Thought",
    platform: "gumroad",
    amazonUrl: "#",
    gumroadUrl: "#",
    order: 10,
  },

  // ─────────────────────────────────────────────────────────────
  // OTHER STANDALONE BOOKS (Amazon / KDP)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "memorial-diamond",
    title: "मेमोरियल डायमंड",
    subtitle: "स्मृति, विज्ञान और हीरे के रूप में अमर विरासत",
    author: author.name,
    cover: "/books/memorial-diamond.jpg",
    description:
      "स्मृति और विरासत को हीरे के रूप में संजोने वाली एक अनोखी पुस्तक — जहाँ विज्ञान और भावना मिलते हैं।",
    language: "Hindi",
    series: "Standalone",
    category: "Diamonds & Jewellery",
    platform: "amazon",
    amazonUrl: "https://www.amazon.in/dp/B0HHC3WW6F",
    gumroadUrl: "#",
    order: 1,
  },
  {
    slug: "man-sync",
    title: "मन-सिंक",
    subtitle: "एक डायमंड व्यापारी, एक चश्मा, और आधे सेकंड की कीमत",
    author: author.name,
    cover: "/books/man-sync.png",
    description:
      "एक डायमंड व्यापारी की कहानी, एक चश्मा, और आधे सेकंड में बदल जाने वाली ज़िंदगी — विज्ञान और मनोविज्ञान का रोमांचक मिलन।",
    language: "Hindi",
    series: "Standalone",
    category: "Fiction & Speculative Thought",
    platform: "amazon",
    amazonUrl: "https://www.amazon.in/dp/B0HFKFDTDS",
    gumroadUrl: "#",
    order: 2,
  },
  {
    slug: "divya-sandhya",
    title: "दिव्य संध्या",
    subtitle: "नारी-लोक की यात्रा",
    author: author.name,
    cover: "/books/divya-sandhya.jpg",
    description:
      "नारी-लोक की एक अनुभवात्मक और कल्पनाशील यात्रा, जहाँ दर्शन, कहानी और संभावना एक साथ चलते हैं।",
    language: "Hindi",
    series: "Standalone",
    category: "Fiction & Speculative Thought",
    platform: "amazon",
    amazonUrl: "https://www.amazon.in/dp/B0H7NNMQMK",
    gumroadUrl: "#",
    order: 3,
  },
];

// ─────────────────────────────────────────────────────────────
// Convenience queries used across the site
// ─────────────────────────────────────────────────────────────

export const bookCategories: BookCategory[] = [
  "Gemstones",
  "Diamonds & Jewellery",
  "Science & Philosophy",
  "Fiction & Speculative Thought",
];

export const bookSeries: BookSeries[] = [
  "Ratna Gyan Academy",
  "Diamond & Jewellery Knowledge Series",
  "The Birth of God Series",
  "Standalone",
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function getFeaturedBook(): Book | undefined {
  return books.find((b) => b.featured);
}

export function getBooksBySeries(series: BookSeries): Book[] {
  return books
    .filter((b) => b.series === series)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getBooksByCategory(category: BookCategory): Book[] {
  return books
    .filter((b) => b.category === category)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getBooksByPlatform(platform: BookPlatform): Book[] {
  return books
    .filter((b) => b.platform === platform || b.platform === "both")
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getAllBookSlugs(): string[] {
  return books.map((b) => b.slug);
}

/**
 * The shared branded placeholder cover shown until a real cover is uploaded.
 * Lives at /public/books/placeholder-cover.svg.
 */
export const PLACEHOLDER_COVER = "/books/placeholder-cover.svg" as const;

/**
 * Returns the image path to display for a book.
 *
 * - If the book has a real `cover` path (e.g. "/books/manik.jpg"), returns it.
 * - Otherwise returns the shared placeholder SVG.
 *
 * This function is the single source of truth for "which image do we show"
 * and is used by every component that renders a book cover.
 */
export function getBookCover(book: Book): string {
  return book.cover ?? PLACEHOLDER_COVER;
}

/**
 * Whether a book currently shows the placeholder (no real cover uploaded yet).
 * Used to toggle the "Cover coming soon" caption on the detail page.
 */
export function isPlaceholderCover(book: Book): boolean {
  return !book.cover;
}

