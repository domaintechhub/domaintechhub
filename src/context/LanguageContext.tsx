import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'EN' | 'FR' | 'SW';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  EN: {
    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services & Tech',
    'nav.tools': 'Client Tools',
    'nav.portfolio': 'Case Studies',
    'nav.clientPortal': 'Client Portal',
    'nav.insights': 'Insights & Trends',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.bookCall': 'Book Strategy Call',
    'nav.whatsapp': 'WhatsApp',
    'nav.subheading': 'Nairobi · Digital Engineering',
    'nav.techStack': 'Our Specialized Tech Stack',
    'nav.calculator': 'Project Cost Calculator',
    'nav.audit': 'Live SEO & Speed Audit',
    'nav.domains': 'Domains & Cloud Hosting',
    'nav.exploreAll': 'Explore Full Catalog',

    // Hero
    'hero.badge': 'ACCEPTING NEW Q3/Q4 PROJECTS',
    'hero.title1': 'Architecting',
    'hero.titleHighlight': 'High-Performance',
    'hero.title2': 'Websites, E-Commerce & Growth Engines.',
    'hero.desc': 'We partner with ambitious Kenyan and global brands to deliver custom web applications, frictionless M-Pesa e-commerce stores, data-driven SEO, WhatsApp marketing automation, and tailor-made CRM solutions.',
    'hero.btnEstimate': 'Estimate Your Project Cost',
    'hero.btnAudit': 'Free Live Website Audit',
    'hero.btnServices': 'Browse 15+ Services',
    'hero.modernEng': 'Modern Engineering',
    'hero.modernEngDesc': 'React, Next.js, TypeScript, and clean code standards. No clunky bloated templates; built for speed and security.',
    'hero.mpesaNative': 'M-Pesa & Payment Native',
    'hero.mpesaNativeDesc': 'Seamless local payment integrations with Safaricom Daraja STK Push, Flutterwave, and global Stripe checkouts.',
    'hero.growthLeads': 'Tangible Growth & Leads',
    'hero.growthLeadsDesc': 'Data-backed SEO campaigns, Google Ads PPC, and automated WhatsApp conversion funnels that generate real buyers.',

    // Services
    'services.kicker': 'COMPLETE DIGITAL SOLUTIONS · SERVICES CATALOG',
    'services.title': 'Everything your business needs to excel online.',
    'services.subtitle': 'From bespoke software engineering and high-converting e-commerce to local SEO dominance and WhatsApp marketing automation. Explore our end-to-end capabilities.',
    'services.searchPlaceholder': 'Search services or tech (e.g. M-Pesa, SEO)...',
    'services.from': 'Starting from',
    'services.details': 'Details',
    'services.quote': 'Quote',

    // Tech Stack
    'tech.kicker': 'ENGINEERING EXCELLENCE · OUR TECH STACK',
    'tech.title': 'Specialized technologies built for speed, security & scale.',
    'tech.subtitle': "We don't rely on fragile off-the-shelf site builders. Our engineers craft production-grade software using industry-standard frameworks, battle-tested databases, and resilient cloud architectures.",
    'tech.searchPlaceholder': 'Search stack (e.g. AWS, Python)...',

    // Calculator
    'calc.kicker': 'TRANSPARENT PRICING · INSTANT ESTIMATOR',
    'calc.title': 'Interactive Project Cost Calculator',
    'calc.subtitle': 'Configure your technical scope, select tailored integrations (M-Pesa, WhatsApp, AI, SEO), and receive an instant transparent project quotation with zero surprises.',
    'calc.step1': '1. Select Primary Service',
    'calc.step2': '2. Project Tier & Scale',
    'calc.step3': '3. Tailored Add-Ons & Technical Modules',
    'calc.step4': '4. Project Timeline & Delivery Pace',
    'calc.summaryTitle': 'Quotation Summary',
    'calc.instantEst': 'Instant Estimate',
    'calc.estInvestment': 'Estimated Investment',
    'calc.btnLock': 'Book Strategy & Lock Quote',
    'calc.btnSendWA': 'Send Quote to DTH WhatsApp',
    'calc.btnCopy': 'Copy Full Quote Breakdown',
    'calc.copied': 'Quote Copied to Clipboard',

    // Audit
    'audit.kicker': 'DIAGNOSTIC UTILITY · 100% FREE',
    'audit.title': 'Instant Website & SEO Health Audit Scanner',
    'audit.subtitle': 'Uncover why your website might be losing customers to competitors. Run our deep diagnostic scanner to test Core Web Vitals, on-page SEO, mobile responsiveness, and security.',
    'audit.urlLabel': 'Website URL / Domain Name',
    'audit.keywordLabel': 'Target Search Keyword (Optional)',
    'audit.btnRun': 'Generate Free Audit Report',
    'audit.analyzing': 'Analyzing Site Architecture...',

    // Domains
    'domain.kicker': 'INFRASTRUCTURE · DOMAINS & CLOUD HOSTING',
    'domain.title': 'Secure your digital address & high-speed cloud infrastructure.',
    'domain.subtitle': 'We handle everything from Kenyan .co.ke and global .com registrations to high-availability NVMe cloud servers, DNS security, and corporate email systems.',
    'domain.lookupTab': 'Domain Name Lookup',
    'domain.hostingTab': 'Managed Cloud Hosting Plans',
    'domain.btnCheck': 'Check Availability',

    // Portfolio
    'port.kicker': 'PROVEN TRACK RECORD · CASE STUDIES',
    'port.title': 'Transformative digital results for ambitious brands.',
    'port.subtitle': 'Explore how Domain Tech Hub delivers revenue acceleration, top Google rankings, and seamless operational workflows across Kenya and beyond.',
    'port.turnaround': 'Estimated Turnaround:',
    'port.btnRead': 'Read Full Case Study',
    'port.deliverySchedule': 'Verified Delivery Schedule & Sprint Pace',
    'port.milestoneBreakdown': 'Phased Milestone Breakdown:',

    // FAQ
    'faq.kicker': 'CLIENT QUESTIONS · TRANSPARENT ANSWERS',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Have questions about M-Pesa integrations, development timelines, SEO guarantees, or source code ownership? Find straightforward answers below before booking your strategy session.',
    'faq.expandAll': 'Expand All',
    'faq.collapseAll': 'Collapse All',
    'faq.unlistedTitle': 'Have a question not listed here?',
    'faq.unlistedSubtitle': 'Speak directly with our senior engineers and digital architects in Nairobi. Average response under 20 minutes.',

    // Contact
    'contact.kicker': 'DIRECT ENGAGEMENT · SCHEDULE A STRATEGY SESSION',
    'contact.title': "Let's build something exceptional together.",
    'contact.subtitle': 'Book a complimentary 30-minute discovery session with our senior digital strategists. We will review your goals, recommend architectures, and outline estimated budgets.',
    'contact.btnSubmit': 'Confirm Strategy Consultation'
  },
  FR: {
    // Nav
    'nav.home': 'Accueil',
    'nav.services': 'Services & Tech',
    'nav.tools': 'Outils Clients',
    'nav.portfolio': 'Études de Cas',
    'nav.clientPortal': 'Portail Client',
    'nav.insights': 'Insights & Tendances',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.bookCall': 'Réserver un Appel',
    'nav.whatsapp': 'WhatsApp',
    'nav.subheading': 'Nairobi · Ingénierie Numérique',
    'nav.techStack': 'Notre Stack Technique',
    'nav.calculator': 'Calculateur de Coûts',
    'nav.audit': 'Audit SEO & Vitesse Gratuit',
    'nav.domains': 'Domaines & Hébergement Cloud',
    'nav.exploreAll': 'Voir le Catalogue Complet',

    // Hero
    'hero.badge': 'NOUVEAUX PROJETS T3/T4 ACCEPTÉS',
    'hero.title1': 'Conception de',
    'hero.titleHighlight': 'Haute Performance',
    'hero.title2': 'Sites Web, E-Commerce & Moteurs de Croissance.',
    'hero.desc': 'Nous collaborons avec des entreprises ambitieuses en Afrique et dans le monde pour déployer des applications web sur mesure, des boutiques e-commerce avec M-Pesa et paiements internationaux, du SEO à fort impact, et des automatisations WhatsApp.',
    'hero.btnEstimate': 'Estimer le Coût de Votre Projet',
    'hero.btnAudit': 'Audit de Site Web Gratuit',
    'hero.btnServices': 'Explorer 15+ Services',
    'hero.modernEng': 'Ingénierie Moderne',
    'hero.modernEngDesc': 'React, Next.js, TypeScript et normes de code propres. Pas de templates surchargés; conçu pour la rapidité et la sécurité.',
    'hero.mpesaNative': 'Intégration Paiements & M-Pesa',
    'hero.mpesaNativeDesc': 'Paiements locaux fluides avec Safaricom Daraja STK Push, Flutterwave, et paiements internationaux par carte Stripe.',
    'hero.growthLeads': 'Croissance & Leads Tangibles',
    'hero.growthLeadsDesc': 'Campagnes SEO basées sur les données, Google Ads PPC et tunnels de conversion WhatsApp qui génèrent de vrais clients.',

    // Services
    'services.kicker': 'SOLUTIONS NUMÉRIQUES COMPLÈTES · CATALOGUE DE SERVICES',
    'services.title': 'Tout ce dont votre entreprise a besoin pour réussir en ligne.',
    'services.subtitle': 'Du développement logiciel sur mesure au commerce électronique à haute conversion, en passant par le SEO de pointe et l’automatisation WhatsApp.',
    'services.searchPlaceholder': 'Rechercher des services (ex: M-Pesa, SEO)...',
    'services.from': 'À partir de',
    'services.details': 'Détails',
    'services.quote': 'Devis',

    // Tech Stack
    'tech.kicker': 'EXCELLENCE DE L’INGÉNIERIE · NOTRE STACK TECHNIQUE',
    'tech.title': 'Des technologies spécialisées conçues pour la vitesse, la sécurité et l’échelle.',
    'tech.subtitle': 'Nous ne dépendons pas d’outils précaires. Nos ingénieurs conçoivent des solutions robustes avec des frameworks modernes et une infrastructure cloud résiliente.',
    'tech.searchPlaceholder': 'Rechercher la stack (ex: AWS, Python)...',

    // Calculator
    'calc.kicker': 'TARIFICATION TRANSPARENTE · ESTIMATION INSTANTANÉE',
    'calc.title': 'Calculateur Interactif de Coût de Projet',
    'calc.subtitle': 'Configurez votre périmètre technique, choisissez vos intégrations (M-Pesa, WhatsApp, IA, SEO) et obtenez un devis instantané et transparent.',
    'calc.step1': '1. Sélectionner le Service Principal',
    'calc.step2': '2. Échelle & Niveau du Projet',
    'calc.step3': '3. Modules Techniques & Options Sur Mesure',
    'calc.step4': '4. Délai et Rythme de Livraison',
    'calc.summaryTitle': 'Récapitulatif du Devis',
    'calc.instantEst': 'Estimation Instantanée',
    'calc.estInvestment': 'Investissement Estimé',
    'calc.btnLock': 'Réserver & Valider le Devis',
    'calc.btnSendWA': 'Envoyer le Devis via WhatsApp',
    'calc.btnCopy': 'Copier le Détail du Devis',
    'calc.copied': 'Devis Copié dans le Presse-papier',

    // Audit
    'audit.kicker': 'OUTIL DE DIAGNOSTIC · 100% GRATUIT',
    'audit.title': 'Scanner d’Audit de Santé SEO & Vitesse Web',
    'audit.subtitle': 'Découvrez pourquoi votre site web perd des clients face à la concurrence. Testez vos Core Web Vitals, votre SEO on-page, votre compatibilité mobile et votre sécurité.',
    'audit.urlLabel': 'URL du Site Web / Nom de Domaine',
    'audit.keywordLabel': 'Mot-Clé de Recherche Cible (Optionnel)',
    'audit.btnRun': 'Générer l’Audit Gratuit',
    'audit.analyzing': 'Analyse de l’architecture du site...',

    // Domains
    'domain.kicker': 'INFRASTRUCTURE · DOMAINES & HÉBERGEMENT CLOUD',
    'domain.title': 'Sécurisez votre adresse web & infrastructure cloud haute vitesse.',
    'domain.subtitle': 'Nous gérons tout, de l’enregistrement de domaines kenyans (.co.ke) et mondiaux (.com) aux serveurs cloud NVMe haute disponibilité avec certificats SSL.',
    'domain.lookupTab': 'Recherche de Nom de Domaine',
    'domain.hostingTab': 'Plans d’Hébergement Cloud Géré',
    'domain.btnCheck': 'Vérifier la Disponibilité',

    // Portfolio
    'port.kicker': 'RÉSULTATS PROUVÉS · ÉTUDES DE CAS',
    'port.title': 'Résultats numériques transformateurs pour marques ambitieuses.',
    'port.subtitle': 'Découvrez comment Domain Tech Hub génère des accélérations de revenus, des classements Google #1 et des flux opérationnels fluides.',
    'port.turnaround': 'Délai Estimé :',
    'port.btnRead': 'Lire l’Étude Complète',
    'port.deliverySchedule': 'Calendrier de Livraison & Rythme de Sprint',
    'port.milestoneBreakdown': 'Décomposition par Étapes Jalons :',

    // FAQ
    'faq.kicker': 'QUESTIONS CLIENTS · RÉPONSES TRANSPARENTES',
    'faq.title': 'Foire Aux Questions (FAQ)',
    'faq.subtitle': 'Des questions sur les intégrations M-Pesa, les délais de livraison, les garanties SEO ou la propriété du code source ? Trouvez les réponses ici.',
    'faq.expandAll': 'Tout Déplier',
    'faq.collapseAll': 'Tout Replier',
    'faq.unlistedTitle': 'Vous avez une question non listée ?',
    'faq.unlistedSubtitle': 'Discutez directement avec nos ingénieurs et architectes seniors à Nairobi. Réponse moyenne sous 20 minutes.',

    // Contact
    'contact.kicker': 'ENGAGEMENT DIRECT · RÉSERVER UNE SESSION STRATÉGIQUE',
    'contact.title': 'Bâtissons ensemble quelque chose d’exceptionnel.',
    'contact.subtitle': 'Réservez une session de cadrage gratuite de 30 minutes avec nos stratèges numériques. Nous analyserons vos objectifs et budgets prévisionnels.',
    'contact.btnSubmit': 'Confirmer la Consultation Stratégique'
  },
  SW: {
    // Nav
    'nav.home': 'Mwanzo',
    'nav.services': 'Huduma & Teknolojia',
    'nav.tools': 'Zana za Wateja',
    'nav.portfolio': 'Mifano ya Kazi',
    'nav.clientPortal': 'Lango la Mteja',
    'nav.insights': 'Makala & Mienendo',
    'nav.faq': 'Maswali ya Kawaida',
    'nav.contact': 'Wasiliana Nasi',
    'nav.bookCall': 'Panga Mazungumzo',
    'nav.whatsapp': 'WhatsApp',
    'nav.subheading': 'Nairobi · Uhandisi wa Kidijitali',
    'nav.techStack': 'Mifumo ya Teknolojia',
    'nav.calculator': 'Kikokotoo cha Bei',
    'nav.audit': 'Kaguzi ya Bure ya SEO',
    'nav.domains': 'Majina ya Tovuti & Cloud',
    'nav.exploreAll': 'Angalia Orodha Kamili',

    // Hero
    'hero.badge': 'TUNAPOKEA MIRADI MIPYA SASA',
    'hero.title1': 'Ujenzi wa',
    'hero.titleHighlight': 'Kiwango cha Juu',
    'hero.title2': 'Tovuti, Maduka ya Kidijitali & Ukuaji wa Biashara.',
    'hero.desc': 'Tunashirikiana na biashara kote Kenya na kimataifa kuunda mifumo ya kisasa ya wavuti, maduka ya mtandaoni yenye M-Pesa STK Push, huduma za SEO, na mifumo ya CRM.',
    'hero.btnEstimate': 'Kadiria Gharama ya Mradi',
    'hero.btnAudit': 'Kaguzi ya Bure ya Tovuti',
    'hero.btnServices': 'Angalia Huduma 15+',
    'hero.modernEng': 'Uhandisi wa Kisasa',
    'hero.modernEngDesc': 'Mifumo ya React, Next.js, na TypeScript. Hakuna bloat; kasi na ulinzi wa hali ya juu.',
    'hero.mpesaNative': 'Malipo Rahisi ya M-Pesa',
    'hero.mpesaNativeDesc': 'Uunganishaji wa papo hapo na Safaricom Daraja STK Push, Flutterwave, na kadi za Stripe.',
    'hero.growthLeads': 'Ukuaji wa Kweli wa Mauzo',
    'hero.growthLeadsDesc': 'Mikakati ya SEO, matangazo ya Google Ads na roboti za WhatsApp zenye matokeo halisi.',

    // Services
    'services.kicker': 'HUDUMA KAMILI ZA KIDIITALI',
    'services.title': 'Kila kitu unachohitaji kufanikiwa mtandaoni.',
    'services.subtitle': 'Kuanzia utengenezaji wa programu na maduka ya mtandaoni hadi ukuzaji wa biashara na roboti za WhatsApp.',
    'services.searchPlaceholder': 'Tafuta huduma (mfano M-Pesa, SEO)...',
    'services.from': 'Kuanzia',
    'services.details': 'Maelezo',
    'services.quote': 'Gharama',

    // Tech Stack
    'tech.kicker': 'UBORA WA KITEKNOLOJIA',
    'tech.title': 'Teknolojia thabiti zilizojengwa kwa kasi, usalama na ukuaji.',
    'tech.subtitle': 'Hatutumii mifumo ya kubahatisha. Wahandisi wetu hutumia zana thabiti zinazoaminika kimataifa.',
    'tech.searchPlaceholder': 'Tafuta teknolojia (mfano Python, AWS)...',

    // Calculator
    'calc.kicker': 'BEI WAZI · MAKADIRIO YA PAPO HAPO',
    'calc.title': 'Kikokotoo cha Bei ya Mradi',
    'calc.subtitle': 'Chagua huduma zako, vipengele vya ziada vya M-Pesa, roboti ya WhatsApp, au SEO upate makadirio kamili bila ada zilizofichwa.',
    'calc.step1': '1. Chagua Huduma Kuu',
    'calc.step2': '2. Kiwango cha Mradi',
    'calc.step3': '3. Vipengele vya Ziada',
    'calc.step4': '4. Muda wa Utengenezaji',
    'calc.summaryTitle': 'Muhtasari wa Makadirio',
    'calc.instantEst': 'Makadirio ya Papo Hapo',
    'calc.estInvestment': 'Gharama Inayokadiriwa',
    'calc.btnLock': 'Hifadhi Bei & Panga Mazungumzo',
    'calc.btnSendWA': 'Tuma Makadirio kwa WhatsApp',
    'calc.btnCopy': 'Nakili Muhtasari Kamili',
    'calc.copied': 'Imenakiliwa Kwenye Clipboard',

    // Audit
    'audit.kicker': 'ZANA YA UCHUNGUZI · BURE 100%',
    'audit.title': 'Kaguzi ya Papo Hapo ya Afya ya Tovuti na SEO',
    'audit.subtitle': 'Fahamu kwa nini tovuti yako inapoteza wateja kwa washindani. Pima kasi ya Google Core Web Vitals, usalama na mwonekano wa simu.',
    'audit.urlLabel': 'Anwani ya Tovuti / Jina la Domain',
    'audit.keywordLabel': 'Neno Kuu Unalolenga (Hiari)',
    'audit.btnRun': 'Tengeneza Ripoti ya Bure',
    'audit.analyzing': 'Tovuti inachunguzwa sasa...',

    // Domains
    'domain.kicker': 'MIUNDOMBINU · MAJINA YA TOVUTI NA HOSTING',
    'domain.title': 'Sajili anwani yako ya kidijitali na hosting ya haraka.',
    'domain.subtitle': 'Tunashughulikia usajili wa .co.ke na .com pamoja na seva zenye kasi ya NVMe na cheti cha usalama cha SSL.',
    'domain.lookupTab': 'Tafuta Jina la Tovuti',
    'domain.hostingTab': 'Vifurushi vya Cloud Hosting',
    'domain.btnCheck': 'Angalia Upatikanaji',

    // Portfolio
    'port.kicker': 'MATOKEO YALIYOTHIBITISHWA',
    'port.title': 'Mageuzi ya kidijitali kwa biashara zinazojituma.',
    'port.subtitle': 'Tazama jinsi Domain Tech Hub inavyoongeza mapato, nafasi za kwanza Google na mifumo mizuri ya kazi.',
    'port.turnaround': 'Muda wa Kukamilika:',
    'port.btnRead': 'Soma Ushuhuda Kamili',
    'port.deliverySchedule': 'Ratiba ya Uwasilishaji Iliyothibitishwa',
    'port.milestoneBreakdown': 'Mgawanyo wa Hatua za Kazi:',

    // FAQ
    'faq.kicker': 'MASWALI YA WATEJA · MAJIBU WAZI',
    'faq.title': 'Maswali Yanayoulizwa Mara kwa Mara',
    'faq.subtitle': 'Una maswali kuhusu M-Pesa, muda wa kazi, au umiliki wa source code? Pata majibu ya moja kwa moja hapa chini.',
    'faq.expandAll': 'Fungua Yote',
    'faq.collapseAll': 'Funga Yote',
    'faq.unlistedTitle': 'Je, una swali ambalo halijaorodheshwa hapa?',
    'faq.unlistedSubtitle': 'Zungumza moja kwa moja na wahandisi wetu wakuu hapa Nairobi. Jibu ndani ya dakika 20.',

    // Contact
    'contact.kicker': 'MAZUNGUMZO YA MOJA KWA MOJA',
    'contact.title': 'Tujenge mradi mzuri pamoja na wewe.',
    'contact.subtitle': 'Panga mazungumzo ya dakika 30 bila malipo na wataalamu wetu wa kidijitali kupanga mikakati na bajeti.',
    'contact.btnSubmit': 'Thibitisha Mazungumzo ya Kimkakati'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('dth_language');
    if (saved === 'FR' || saved === 'SW' || saved === 'EN') {
      return saved;
    }
    return 'EN';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('dth_language', lang);
  };

  const t = (key: string): string => {
    const langDict = TRANSLATIONS[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // Fallback to English
    return TRANSLATIONS.EN[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
