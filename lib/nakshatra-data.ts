// Nakshatra data with descriptions in English and French

export interface NakshatraData {
  index: number
  name: string
  sanskrit: string
  meaning: { en: string; fr: string }
  lord: string
  deity: string
  symbol: string
  degree: { start: number; end: number }
  element: string
  guna: string
  description: { en: string; fr: string }
  keywords: { en: string[]; fr: string[] }
  padas: {
    1: { en: string; fr: string }
    2: { en: string; fr: string }
    3: { en: string; fr: string }
    4: { en: string; fr: string }
  }
}

export const NAKSHATRAS: NakshatraData[] = [
  {
    index: 0,
    name: 'Ashwini',
    sanskrit: 'अश्विनी',
    meaning: { en: 'The Horse Woman', fr: 'La Femme Cheval' },
    lord: 'Ketu',
    deity: 'Ashwini Kumaras',
    symbol: 'Horse head',
    degree: { start: 0, end: 13.333 },
    element: 'Earth',
    guna: 'Rajas',
    description: {
      en: 'Ashwini natives are pioneers with healing abilities. Quick-minded and action-oriented, they possess natural vitality and a desire to help others. They are often drawn to medicine, sports, or any field requiring speed and initiative.',
      fr: 'Les natifs d\'Ashwini sont des pionniers dotés de capacités de guérison. Rapides d\'esprit et orientés vers l\'action, ils possèdent une vitalité naturelle et un désir d\'aider les autres. Ils sont souvent attirés par la médecine, le sport ou tout domaine nécessitant rapidité et initiative.',
    },
    keywords: {
      en: ['Speed', 'Healing', 'Initiative', 'Youth', 'Vitality'],
      fr: ['Rapidité', 'Guérison', 'Initiative', 'Jeunesse', 'Vitalité'],
    },
    padas: {
      1: { en: 'Leadership and courage in healing professions', fr: 'Leadership et courage dans les professions de guérison' },
      2: { en: 'Material stability through quick action', fr: 'Stabilité matérielle par l\'action rapide' },
      3: { en: 'Intellectual approach to wellness', fr: 'Approche intellectuelle du bien-être' },
      4: { en: 'Emotional healing and nurturing abilities', fr: 'Guérison émotionnelle et capacités nourricières' },
    },
  },
  {
    index: 1,
    name: 'Bharani',
    sanskrit: 'भरणी',
    meaning: { en: 'The Bearer', fr: 'La Porteuse' },
    lord: 'Venus',
    deity: 'Yama',
    symbol: 'Yoni (female organ)',
    degree: { start: 13.333, end: 26.666 },
    element: 'Earth',
    guna: 'Rajas',
    description: {
      en: 'Bharani represents the creative power of life and death. Natives are passionate, resilient, and transformative. They face life\'s extremes with courage and possess deep creative and nurturing abilities.',
      fr: 'Bharani représente le pouvoir créatif de la vie et de la mort. Les natifs sont passionnés, résilients et transformateurs. Ils affrontent les extrêmes de la vie avec courage et possèdent de profondes capacités créatives et nourricières.',
    },
    keywords: {
      en: ['Transformation', 'Creativity', 'Restraint', 'Birth/Death', 'Passion'],
      fr: ['Transformation', 'Créativité', 'Retenue', 'Naissance/Mort', 'Passion'],
    },
    padas: {
      1: { en: 'Creative expression and artistic talents', fr: 'Expression créative et talents artistiques' },
      2: { en: 'Material pursuits and sensual pleasures', fr: 'Poursuites matérielles et plaisirs sensuels' },
      3: { en: 'Communication and versatility', fr: 'Communication et polyvalence' },
      4: { en: 'Emotional depth and family bonds', fr: 'Profondeur émotionnelle et liens familiaux' },
    },
  },
  {
    index: 2,
    name: 'Krittika',
    sanskrit: 'कृत्तिका',
    meaning: { en: 'The Cutter', fr: 'La Coupeuse' },
    lord: 'Sun',
    deity: 'Agni',
    symbol: 'Razor/Flame',
    degree: { start: 26.666, end: 40 },
    element: 'Fire',
    guna: 'Rajas',
    description: {
      en: 'Krittika natives possess the purifying fire of truth. Sharp, determined, and dignified, they cut through illusion to reveal essence. They are natural leaders with strong will and critical intelligence.',
      fr: 'Les natifs de Krittika possèdent le feu purificateur de la vérité. Vifs, déterminés et dignes, ils tranchent à travers l\'illusion pour révéler l\'essence. Ce sont des leaders naturels dotés d\'une forte volonté et d\'une intelligence critique.',
    },
    keywords: {
      en: ['Purification', 'Authority', 'Sharpness', 'Dignity', 'Leadership'],
      fr: ['Purification', 'Autorité', 'Acuité', 'Dignité', 'Leadership'],
    },
    padas: {
      1: { en: 'Leadership through courage and initiative', fr: 'Leadership par le courage et l\'initiative' },
      2: { en: 'Focus on wealth and material security', fr: 'Focus sur la richesse et la sécurité matérielle' },
      3: { en: 'Sharp intellect and communication', fr: 'Intellect vif et communication' },
      4: { en: 'Nurturing yet authoritative nature', fr: 'Nature nourricière mais autoritaire' },
    },
  },
  {
    index: 3,
    name: 'Rohini',
    sanskrit: 'रोहिणी',
    meaning: { en: 'The Red One', fr: 'La Rouge' },
    lord: 'Moon',
    deity: 'Brahma',
    symbol: 'Ox cart/Chariot',
    degree: { start: 40, end: 53.333 },
    element: 'Earth',
    guna: 'Rajas',
    description: {
      en: 'Rohini is the most fertile and creative nakshatra. Natives are attractive, artistic, and materially blessed. They possess natural charm, sensuality, and an ability to create beauty and abundance.',
      fr: 'Rohini est le nakshatra le plus fertile et créatif. Les natifs sont attirants, artistiques et bénis matériellement. Ils possèdent un charme naturel, une sensualité et une capacité à créer beauté et abondance.',
    },
    keywords: {
      en: ['Beauty', 'Growth', 'Fertility', 'Creativity', 'Abundance'],
      fr: ['Beauté', 'Croissance', 'Fertilité', 'Créativité', 'Abondance'],
    },
    padas: {
      1: { en: 'Creative pioneering and artistic leadership', fr: 'Pionnier créatif et leadership artistique' },
      2: { en: 'Material prosperity and earthly pleasures', fr: 'Prospérité matérielle et plaisirs terrestres' },
      3: { en: 'Artistic communication and versatility', fr: 'Communication artistique et polyvalence' },
      4: { en: 'Deep emotional and family connections', fr: 'Connexions émotionnelles et familiales profondes' },
    },
  },
  {
    index: 4,
    name: 'Mrigashira',
    sanskrit: 'मृगशिरा',
    meaning: { en: 'The Deer Head', fr: 'La Tête de Cerf' },
    lord: 'Mars',
    deity: 'Soma',
    symbol: 'Deer head',
    degree: { start: 53.333, end: 66.666 },
    element: 'Earth',
    guna: 'Rajas',
    description: {
      en: 'Mrigashira natives are eternal seekers, gentle yet restless. They search for knowledge, beauty, and truth. Curious and sensitive, they possess a gentle nature combined with sharp perception.',
      fr: 'Les natifs de Mrigashira sont des chercheurs éternels, doux mais agités. Ils cherchent la connaissance, la beauté et la vérité. Curieux et sensibles, ils possèdent une nature douce combinée à une perception aiguë.',
    },
    keywords: {
      en: ['Seeking', 'Curiosity', 'Gentleness', 'Wandering', 'Perception'],
      fr: ['Recherche', 'Curiosité', 'Douceur', 'Errance', 'Perception'],
    },
    padas: {
      1: { en: 'Courageous exploration and seeking', fr: 'Exploration courageuse et recherche' },
      2: { en: 'Practical approach to seeking fulfillment', fr: 'Approche pratique de la recherche d\'épanouissement' },
      3: { en: 'Intellectual curiosity and learning', fr: 'Curiosité intellectuelle et apprentissage' },
      4: { en: 'Emotional seeking and intuitive understanding', fr: 'Recherche émotionnelle et compréhension intuitive' },
    },
  },
  {
    index: 5,
    name: 'Ardra',
    sanskrit: 'आर्द्रा',
    meaning: { en: 'The Moist One', fr: 'L\'Humide' },
    lord: 'Rahu',
    deity: 'Rudra',
    symbol: 'Teardrop/Diamond',
    degree: { start: 66.666, end: 80 },
    element: 'Water',
    guna: 'Tamas',
    description: {
      en: 'Ardra represents the storm that clears the air. Natives experience intense transformations and possess deep emotional intelligence. They are brilliant researchers with penetrating minds.',
      fr: 'Ardra représente la tempête qui purifie l\'air. Les natifs vivent des transformations intenses et possèdent une intelligence émotionnelle profonde. Ce sont des chercheurs brillants avec des esprits pénétrants.',
    },
    keywords: {
      en: ['Transformation', 'Intensity', 'Research', 'Storms', 'Renewal'],
      fr: ['Transformation', 'Intensité', 'Recherche', 'Tempêtes', 'Renouveau'],
    },
    padas: {
      1: { en: 'Pioneering through challenges', fr: 'Pionnier à travers les défis' },
      2: { en: 'Material transformation and rebuilding', fr: 'Transformation matérielle et reconstruction' },
      3: { en: 'Mental acuity and analytical abilities', fr: 'Acuité mentale et capacités analytiques' },
      4: { en: 'Emotional processing and healing', fr: 'Traitement émotionnel et guérison' },
    },
  },
  {
    index: 6,
    name: 'Punarvasu',
    sanskrit: 'पुनर्वसु',
    meaning: { en: 'Return of Light', fr: 'Retour de la Lumière' },
    lord: 'Jupiter',
    deity: 'Aditi',
    symbol: 'Bow and quiver',
    degree: { start: 80, end: 93.333 },
    element: 'Water',
    guna: 'Sattva',
    description: {
      en: 'Punarvasu brings renewal and restoration. Natives are optimistic, resilient, and blessed with the ability to bounce back. They are philosophical, generous, and possess natural wisdom.',
      fr: 'Punarvasu apporte renouveau et restauration. Les natifs sont optimistes, résilients et bénis de la capacité de rebondir. Ils sont philosophiques, généreux et possèdent une sagesse naturelle.',
    },
    keywords: {
      en: ['Renewal', 'Return', 'Wisdom', 'Optimism', 'Restoration'],
      fr: ['Renouveau', 'Retour', 'Sagesse', 'Optimisme', 'Restauration'],
    },
    padas: {
      1: { en: 'Spiritual leadership and pioneering', fr: 'Leadership spirituel et pionnier' },
      2: { en: 'Material restoration and growth', fr: 'Restauration matérielle et croissance' },
      3: { en: 'Intellectual wisdom and teaching', fr: 'Sagesse intellectuelle et enseignement' },
      4: { en: 'Emotional healing and nurturing', fr: 'Guérison émotionnelle et nourrissante' },
    },
  },
  {
    index: 7,
    name: 'Pushya',
    sanskrit: 'पुष्य',
    meaning: { en: 'The Nourisher', fr: 'Le Nourricier' },
    lord: 'Saturn',
    deity: 'Brihaspati',
    symbol: 'Cow udder/Lotus',
    degree: { start: 93.333, end: 106.666 },
    element: 'Water',
    guna: 'Tamas',
    description: {
      en: 'Pushya is considered the most auspicious nakshatra for material prosperity. Natives are nurturing, reliable, and spiritually inclined. They excel in positions of responsibility and service.',
      fr: 'Pushya est considéré comme le nakshatra le plus propice à la prospérité matérielle. Les natifs sont nourriciers, fiables et spirituellement inclinés. Ils excellent dans les positions de responsabilité et de service.',
    },
    keywords: {
      en: ['Nourishment', 'Prosperity', 'Service', 'Reliability', 'Spirituality'],
      fr: ['Nourriture', 'Prospérité', 'Service', 'Fiabilité', 'Spiritualité'],
    },
    padas: {
      1: { en: 'Spiritual leadership and guidance', fr: 'Leadership spirituel et guidance' },
      2: { en: 'Material abundance and practical care', fr: 'Abondance matérielle et soins pratiques' },
      3: { en: 'Intellectual nourishment and teaching', fr: 'Nourriture intellectuelle et enseignement' },
      4: { en: 'Emotional support and family care', fr: 'Soutien émotionnel et soins familiaux' },
    },
  },
  {
    index: 8,
    name: 'Ashlesha',
    sanskrit: 'आश्लेषा',
    meaning: { en: 'The Embrace', fr: 'L\'Étreinte' },
    lord: 'Mercury',
    deity: 'Nagas',
    symbol: 'Coiled serpent',
    degree: { start: 106.666, end: 120 },
    element: 'Water',
    guna: 'Sattva',
    description: {
      en: 'Ashlesha represents the mystical serpent energy. Natives are intuitive, magnetic, and possess deep psychological insight. They can be powerful healers or manipulators depending on their evolution.',
      fr: 'Ashlesha représente l\'énergie mystique du serpent. Les natifs sont intuitifs, magnétiques et possèdent une perspicacité psychologique profonde. Ils peuvent être de puissants guérisseurs ou manipulateurs selon leur évolution.',
    },
    keywords: {
      en: ['Mysticism', 'Intuition', 'Kundalini', 'Psychology', 'Transformation'],
      fr: ['Mysticisme', 'Intuition', 'Kundalini', 'Psychologie', 'Transformation'],
    },
    padas: {
      1: { en: 'Mystical leadership and insight', fr: 'Leadership mystique et perspicacité' },
      2: { en: 'Material gains through subtle means', fr: 'Gains matériels par des moyens subtils' },
      3: { en: 'Sharp intellect and psychological insight', fr: 'Intellect vif et perspicacité psychologique' },
      4: { en: 'Deep emotional understanding and healing', fr: 'Compréhension émotionnelle profonde et guérison' },
    },
  },
  {
    index: 9,
    name: 'Magha',
    sanskrit: 'मघा',
    meaning: { en: 'The Mighty', fr: 'Le Puissant' },
    lord: 'Ketu',
    deity: 'Pitris',
    symbol: 'Royal throne',
    degree: { start: 120, end: 133.333 },
    element: 'Fire',
    guna: 'Tamas',
    description: {
      en: 'Magha connects to ancestral lineage and royal dignity. Natives are proud, traditional, and possess natural authority. They honor their heritage and often achieve positions of power.',
      fr: 'Magha se connecte à la lignée ancestrale et à la dignité royale. Les natifs sont fiers, traditionnels et possèdent une autorité naturelle. Ils honorent leur héritage et atteignent souvent des positions de pouvoir.',
    },
    keywords: {
      en: ['Royalty', 'Ancestry', 'Authority', 'Tradition', 'Power'],
      fr: ['Royauté', 'Ancestralité', 'Autorité', 'Tradition', 'Pouvoir'],
    },
    padas: {
      1: { en: 'Leadership and pioneering authority', fr: 'Leadership et autorité pionnière' },
      2: { en: 'Material wealth and traditional values', fr: 'Richesse matérielle et valeurs traditionnelles' },
      3: { en: 'Intellectual authority and communication', fr: 'Autorité intellectuelle et communication' },
      4: { en: 'Emotional connection to ancestry', fr: 'Connexion émotionnelle à l\'ancestralité' },
    },
  },
  {
    index: 10,
    name: 'Purva Phalguni',
    sanskrit: 'पूर्व फाल्गुनी',
    meaning: { en: 'Former Red One', fr: 'La Première Rouge' },
    lord: 'Venus',
    deity: 'Bhaga',
    symbol: 'Front legs of bed/Hammock',
    degree: { start: 133.333, end: 146.666 },
    element: 'Fire',
    guna: 'Rajas',
    description: {
      en: 'Purva Phalguni represents pleasure, rest, and creative expression. Natives are charming, artistic, and seek enjoyment in life. They attract good fortune and have natural magnetism.',
      fr: 'Purva Phalguni représente le plaisir, le repos et l\'expression créative. Les natifs sont charmants, artistiques et cherchent le plaisir dans la vie. Ils attirent la bonne fortune et ont un magnétisme naturel.',
    },
    keywords: {
      en: ['Pleasure', 'Creativity', 'Romance', 'Fortune', 'Rest'],
      fr: ['Plaisir', 'Créativité', 'Romance', 'Fortune', 'Repos'],
    },
    padas: {
      1: { en: 'Creative leadership and artistic expression', fr: 'Leadership créatif et expression artistique' },
      2: { en: 'Material comforts and sensual pleasures', fr: 'Conforts matériels et plaisirs sensuels' },
      3: { en: 'Intellectual creativity and social charm', fr: 'Créativité intellectuelle et charme social' },
      4: { en: 'Emotional fulfillment and romantic love', fr: 'Épanouissement émotionnel et amour romantique' },
    },
  },
  {
    index: 11,
    name: 'Uttara Phalguni',
    sanskrit: 'उत्तर फाल्गुनी',
    meaning: { en: 'Latter Red One', fr: 'La Dernière Rouge' },
    lord: 'Sun',
    deity: 'Aryaman',
    symbol: 'Back legs of bed',
    degree: { start: 146.666, end: 160 },
    element: 'Fire',
    guna: 'Rajas',
    description: {
      en: 'Uttara Phalguni represents friendship, contracts, and social responsibility. Natives are generous, helpful, and make excellent partners. They balance pleasure with duty and service.',
      fr: 'Uttara Phalguni représente l\'amitié, les contrats et la responsabilité sociale. Les natifs sont généreux, serviables et font d\'excellents partenaires. Ils équilibrent plaisir avec devoir et service.',
    },
    keywords: {
      en: ['Partnership', 'Service', 'Generosity', 'Contracts', 'Friendship'],
      fr: ['Partenariat', 'Service', 'Générosité', 'Contrats', 'Amitié'],
    },
    padas: {
      1: { en: 'Leadership through service and partnership', fr: 'Leadership par le service et le partenariat' },
      2: { en: 'Material partnerships and collaborations', fr: 'Partenariats matériels et collaborations' },
      3: { en: 'Intellectual partnerships and contracts', fr: 'Partenariats intellectuels et contrats' },
      4: { en: 'Emotional bonds and caring relationships', fr: 'Liens émotionnels et relations attentionnées' },
    },
  },
  {
    index: 12,
    name: 'Hasta',
    sanskrit: 'हस्त',
    meaning: { en: 'The Hand', fr: 'La Main' },
    lord: 'Moon',
    deity: 'Savitar',
    symbol: 'Open hand/Palm',
    degree: { start: 160, end: 173.333 },
    element: 'Fire',
    guna: 'Rajas',
    description: {
      en: 'Hasta represents skill, craftsmanship, and manifestation. Natives are clever, dexterous, and practical. They excel in hands-on work, healing arts, and manifesting their ideas into reality.',
      fr: 'Hasta représente l\'habileté, l\'artisanat et la manifestation. Les natifs sont intelligents, adroits et pratiques. Ils excellent dans le travail manuel, les arts de guérison et la manifestation de leurs idées en réalité.',
    },
    keywords: {
      en: ['Skill', 'Craftsmanship', 'Healing', 'Manifestation', 'Dexterity'],
      fr: ['Habileté', 'Artisanat', 'Guérison', 'Manifestation', 'Dextérité'],
    },
    padas: {
      1: { en: 'Skillful leadership and pioneering crafts', fr: 'Leadership habile et artisanat pionnier' },
      2: { en: 'Practical skills and material creation', fr: 'Compétences pratiques et création matérielle' },
      3: { en: 'Intellectual skills and communication', fr: 'Compétences intellectuelles et communication' },
      4: { en: 'Healing hands and emotional care', fr: 'Mains guérisseuses et soins émotionnels' },
    },
  },
  {
    index: 13,
    name: 'Chitra',
    sanskrit: 'चित्रा',
    meaning: { en: 'The Brilliant', fr: 'Le Brillant' },
    lord: 'Mars',
    deity: 'Vishvakarma',
    symbol: 'Bright jewel/Pearl',
    degree: { start: 173.333, end: 186.666 },
    element: 'Fire',
    guna: 'Tamas',
    description: {
      en: 'Chitra represents the divine architect and creative brilliance. Natives are artistic, attractive, and skilled at creating beauty. They have an eye for aesthetics and structural perfection.',
      fr: 'Chitra représente l\'architecte divin et la brillance créative. Les natifs sont artistiques, attirants et habiles à créer la beauté. Ils ont un œil pour l\'esthétique et la perfection structurelle.',
    },
    keywords: {
      en: ['Brilliance', 'Architecture', 'Beauty', 'Creativity', 'Structure'],
      fr: ['Brillance', 'Architecture', 'Beauté', 'Créativité', 'Structure'],
    },
    padas: {
      1: { en: 'Pioneering creative vision', fr: 'Vision créative pionnière' },
      2: { en: 'Material beauty and artistic wealth', fr: 'Beauté matérielle et richesse artistique' },
      3: { en: 'Intellectual creativity and design', fr: 'Créativité intellectuelle et design' },
      4: { en: 'Emotional artistry and aesthetic feeling', fr: 'Art émotionnel et sentiment esthétique' },
    },
  },
  {
    index: 14,
    name: 'Swati',
    sanskrit: 'स्वाती',
    meaning: { en: 'The Sword', fr: 'L\'Épée' },
    lord: 'Rahu',
    deity: 'Vayu',
    symbol: 'Young plant/Coral',
    degree: { start: 186.666, end: 200 },
    element: 'Fire',
    guna: 'Tamas',
    description: {
      en: 'Swati represents independence and self-determination. Natives are adaptable, diplomatic, and freedom-loving. They possess natural business acumen and ability to thrive in any environment.',
      fr: 'Swati représente l\'indépendance et l\'autodétermination. Les natifs sont adaptables, diplomatiques et épris de liberté. Ils possèdent un sens naturel des affaires et la capacité de prospérer dans n\'importe quel environnement.',
    },
    keywords: {
      en: ['Independence', 'Flexibility', 'Business', 'Diplomacy', 'Freedom'],
      fr: ['Indépendance', 'Flexibilité', 'Affaires', 'Diplomatie', 'Liberté'],
    },
    padas: {
      1: { en: 'Independent leadership and initiative', fr: 'Leadership indépendant et initiative' },
      2: { en: 'Business acumen and material independence', fr: 'Sens des affaires et indépendance matérielle' },
      3: { en: 'Intellectual flexibility and communication', fr: 'Flexibilité intellectuelle et communication' },
      4: { en: 'Emotional independence and adaptability', fr: 'Indépendance émotionnelle et adaptabilité' },
    },
  },
  {
    index: 15,
    name: 'Vishakha',
    sanskrit: 'विशाखा',
    meaning: { en: 'The Forked', fr: 'La Fourchue' },
    lord: 'Jupiter',
    deity: 'Indra-Agni',
    symbol: 'Triumphal arch/Potter\'s wheel',
    degree: { start: 200, end: 213.333 },
    element: 'Fire',
    guna: 'Sattva',
    description: {
      en: 'Vishakha represents focused determination and goal achievement. Natives are ambitious, competitive, and persistent. They pursue their objectives with single-minded dedication until success.',
      fr: 'Vishakha représente la détermination focalisée et l\'atteinte des objectifs. Les natifs sont ambitieux, compétitifs et persistants. Ils poursuivent leurs objectifs avec une dévotion absolue jusqu\'au succès.',
    },
    keywords: {
      en: ['Determination', 'Goals', 'Ambition', 'Victory', 'Persistence'],
      fr: ['Détermination', 'Objectifs', 'Ambition', 'Victoire', 'Persistance'],
    },
    padas: {
      1: { en: 'Ambitious leadership and pioneering goals', fr: 'Leadership ambitieux et objectifs pionniers' },
      2: { en: 'Material ambitions and practical goals', fr: 'Ambitions matérielles et objectifs pratiques' },
      3: { en: 'Intellectual goals and competitive mind', fr: 'Objectifs intellectuels et esprit compétitif' },
      4: { en: 'Emotional determination and deep goals', fr: 'Détermination émotionnelle et objectifs profonds' },
    },
  },
  {
    index: 16,
    name: 'Anuradha',
    sanskrit: 'अनुराधा',
    meaning: { en: 'Following Radha', fr: 'Suivant Radha' },
    lord: 'Saturn',
    deity: 'Mitra',
    symbol: 'Lotus/Triumphant gateway',
    degree: { start: 213.333, end: 226.666 },
    element: 'Water',
    guna: 'Tamas',
    description: {
      en: 'Anuradha represents devotion, friendship, and organizational ability. Natives are loyal, disciplined, and excel in group leadership. They balance personal ambition with collaborative harmony.',
      fr: 'Anuradha représente la dévotion, l\'amitié et la capacité d\'organisation. Les natifs sont loyaux, disciplinés et excellent dans le leadership de groupe. Ils équilibrent l\'ambition personnelle avec l\'harmonie collaborative.',
    },
    keywords: {
      en: ['Devotion', 'Friendship', 'Organization', 'Discipline', 'Loyalty'],
      fr: ['Dévotion', 'Amitié', 'Organisation', 'Discipline', 'Loyauté'],
    },
    padas: {
      1: { en: 'Devoted leadership and spiritual guidance', fr: 'Leadership dévoué et guidance spirituelle' },
      2: { en: 'Practical organization and material discipline', fr: 'Organisation pratique et discipline matérielle' },
      3: { en: 'Intellectual devotion and learning', fr: 'Dévotion intellectuelle et apprentissage' },
      4: { en: 'Emotional devotion and deep friendships', fr: 'Dévotion émotionnelle et amitiés profondes' },
    },
  },
  {
    index: 17,
    name: 'Jyeshtha',
    sanskrit: 'ज्येष्ठा',
    meaning: { en: 'The Eldest', fr: 'L\'Aîné' },
    lord: 'Mercury',
    deity: 'Indra',
    symbol: 'Circular amulet/Umbrella',
    degree: { start: 226.666, end: 240 },
    element: 'Water',
    guna: 'Sattva',
    description: {
      en: 'Jyeshtha represents seniority, protection, and responsibility. Natives are protective, responsible, and often carry heavy burdens. They are natural leaders who shield others from harm.',
      fr: 'Jyeshtha représente l\'ancienneté, la protection et la responsabilité. Les natifs sont protecteurs, responsables et portent souvent de lourds fardeaux. Ce sont des leaders naturels qui protègent les autres du mal.',
    },
    keywords: {
      en: ['Seniority', 'Protection', 'Responsibility', 'Leadership', 'Power'],
      fr: ['Ancienneté', 'Protection', 'Responsabilité', 'Leadership', 'Pouvoir'],
    },
    padas: {
      1: { en: 'Protective leadership and authority', fr: 'Leadership protecteur et autorité' },
      2: { en: 'Material protection and resource management', fr: 'Protection matérielle et gestion des ressources' },
      3: { en: 'Intellectual authority and communication', fr: 'Autorité intellectuelle et communication' },
      4: { en: 'Emotional protection and family responsibility', fr: 'Protection émotionnelle et responsabilité familiale' },
    },
  },
  {
    index: 18,
    name: 'Mula',
    sanskrit: 'मूल',
    meaning: { en: 'The Root', fr: 'La Racine' },
    lord: 'Ketu',
    deity: 'Nirriti',
    symbol: 'Bundle of roots/Lion\'s tail',
    degree: { start: 240, end: 253.333 },
    element: 'Water',
    guna: 'Rajas',
    description: {
      en: 'Mula represents the root of all existence and transformation. Natives seek truth at the deepest level, often experiencing intense transformations. They are researchers and truth-seekers.',
      fr: 'Mula représente la racine de toute existence et transformation. Les natifs cherchent la vérité au niveau le plus profond, vivant souvent des transformations intenses. Ce sont des chercheurs et des chercheurs de vérité.',
    },
    keywords: {
      en: ['Root', 'Transformation', 'Truth', 'Research', 'Foundation'],
      fr: ['Racine', 'Transformation', 'Vérité', 'Recherche', 'Fondation'],
    },
    padas: {
      1: { en: 'Spiritual seeking and transformation', fr: 'Recherche spirituelle et transformation' },
      2: { en: 'Material foundation and practical roots', fr: 'Fondation matérielle et racines pratiques' },
      3: { en: 'Intellectual research and truth-seeking', fr: 'Recherche intellectuelle et quête de vérité' },
      4: { en: 'Emotional transformation and deep roots', fr: 'Transformation émotionnelle et racines profondes' },
    },
  },
  {
    index: 19,
    name: 'Purva Ashadha',
    sanskrit: 'पूर्व आषाढ़ा',
    meaning: { en: 'The Invincible', fr: 'L\'Invincible' },
    lord: 'Venus',
    deity: 'Apas',
    symbol: 'Elephant tusk/Fan',
    degree: { start: 253.333, end: 266.666 },
    element: 'Water',
    guna: 'Rajas',
    description: {
      en: 'Purva Ashadha represents invincibility and purification through water. Natives are confident, philosophical, and seek truth. They possess natural conviction and the ability to influence others.',
      fr: 'Purva Ashadha représente l\'invincibilité et la purification par l\'eau. Les natifs sont confiants, philosophiques et cherchent la vérité. Ils possèdent une conviction naturelle et la capacité d\'influencer les autres.',
    },
    keywords: {
      en: ['Invincibility', 'Purification', 'Conviction', 'Philosophy', 'Influence'],
      fr: ['Invincibilité', 'Purification', 'Conviction', 'Philosophie', 'Influence'],
    },
    padas: {
      1: { en: 'Invincible leadership and vision', fr: 'Leadership invincible et vision' },
      2: { en: 'Material success and practical philosophy', fr: 'Succès matériel et philosophie pratique' },
      3: { en: 'Intellectual conviction and communication', fr: 'Conviction intellectuelle et communication' },
      4: { en: 'Emotional purification and influence', fr: 'Purification émotionnelle et influence' },
    },
  },
  {
    index: 20,
    name: 'Uttara Ashadha',
    sanskrit: 'उत्तर आषाढ़ा',
    meaning: { en: 'The Later Invincible', fr: 'Le Dernier Invincible' },
    lord: 'Sun',
    deity: 'Vishvadevas',
    symbol: 'Elephant tusk/Small bed',
    degree: { start: 266.666, end: 280 },
    element: 'Water',
    guna: 'Rajas',
    description: {
      en: 'Uttara Ashadha represents final victory and universal goals. Natives are ethical, authoritative, and dedicated to righteous causes. They achieve lasting success through integrity.',
      fr: 'Uttara Ashadha représente la victoire finale et les objectifs universels. Les natifs sont éthiques, autoritaires et dévoués aux causes justes. Ils atteignent un succès durable par l\'intégrité.',
    },
    keywords: {
      en: ['Victory', 'Ethics', 'Authority', 'Righteousness', 'Success'],
      fr: ['Victoire', 'Éthique', 'Autorité', 'Droiture', 'Succès'],
    },
    padas: {
      1: { en: 'Victorious leadership and universal goals', fr: 'Leadership victorieux et objectifs universels' },
      2: { en: 'Material victory and ethical wealth', fr: 'Victoire matérielle et richesse éthique' },
      3: { en: 'Intellectual authority and righteous communication', fr: 'Autorité intellectuelle et communication droite' },
      4: { en: 'Emotional success and family victory', fr: 'Succès émotionnel et victoire familiale' },
    },
  },
  {
    index: 21,
    name: 'Shravana',
    sanskrit: 'श्रवण',
    meaning: { en: 'The Listener', fr: 'L\'Auditeur' },
    lord: 'Moon',
    deity: 'Vishnu',
    symbol: 'Ear/Three footprints',
    degree: { start: 280, end: 293.333 },
    element: 'Air',
    guna: 'Rajas',
    description: {
      en: 'Shravana represents listening, learning, and connection. Natives are excellent learners, teachers, and connectors. They possess natural wisdom gained through attentive listening.',
      fr: 'Shravana représente l\'écoute, l\'apprentissage et la connexion. Les natifs sont d\'excellents apprenants, enseignants et connecteurs. Ils possèdent une sagesse naturelle acquise par une écoute attentive.',
    },
    keywords: {
      en: ['Listening', 'Learning', 'Connection', 'Knowledge', 'Teaching'],
      fr: ['Écoute', 'Apprentissage', 'Connexion', 'Connaissance', 'Enseignement'],
    },
    padas: {
      1: { en: 'Spiritual listening and divine connection', fr: 'Écoute spirituelle et connexion divine' },
      2: { en: 'Practical learning and material knowledge', fr: 'Apprentissage pratique et connaissance matérielle' },
      3: { en: 'Intellectual listening and communication', fr: 'Écoute intellectuelle et communication' },
      4: { en: 'Emotional connection and intuitive learning', fr: 'Connexion émotionnelle et apprentissage intuitif' },
    },
  },
  {
    index: 22,
    name: 'Dhanishta',
    sanskrit: 'धनिष्ठा',
    meaning: { en: 'The Wealthy', fr: 'Le Riche' },
    lord: 'Mars',
    deity: 'Vasus',
    symbol: 'Drum/Flute',
    degree: { start: 293.333, end: 306.666 },
    element: 'Air',
    guna: 'Tamas',
    description: {
      en: 'Dhanishta represents wealth, music, and group harmony. Natives are talented, ambitious, and musical. They excel in group settings and often achieve material success.',
      fr: 'Dhanishta représente la richesse, la musique et l\'harmonie de groupe. Les natifs sont talentueux, ambitieux et musicaux. Ils excellent dans les contextes de groupe et atteignent souvent le succès matériel.',
    },
    keywords: {
      en: ['Wealth', 'Music', 'Rhythm', 'Group', 'Ambition'],
      fr: ['Richesse', 'Musique', 'Rythme', 'Groupe', 'Ambition'],
    },
    padas: {
      1: { en: 'Ambitious leadership and musical expression', fr: 'Leadership ambitieux et expression musicale' },
      2: { en: 'Material wealth and practical talents', fr: 'Richesse matérielle et talents pratiques' },
      3: { en: 'Intellectual talents and group communication', fr: 'Talents intellectuels et communication de groupe' },
      4: { en: 'Emotional harmony and group connection', fr: 'Harmonie émotionnelle et connexion de groupe' },
    },
  },
  {
    index: 23,
    name: 'Shatabhisha',
    sanskrit: 'शतभिषा',
    meaning: { en: 'Hundred Healers', fr: 'Cent Guérisseurs' },
    lord: 'Rahu',
    deity: 'Varuna',
    symbol: 'Empty circle/Hundred flowers',
    degree: { start: 306.666, end: 320 },
    element: 'Air',
    guna: 'Tamas',
    description: {
      en: 'Shatabhisha represents healing, mystery, and unconventional approaches. Natives are independent healers with unique methods. They possess deep knowledge of hidden truths and alternative medicine.',
      fr: 'Shatabhisha représente la guérison, le mystère et les approches non conventionnelles. Les natifs sont des guérisseurs indépendants avec des méthodes uniques. Ils possèdent une connaissance profonde des vérités cachées et de la médecine alternative.',
    },
    keywords: {
      en: ['Healing', 'Mystery', 'Independence', 'Research', 'Secrets'],
      fr: ['Guérison', 'Mystère', 'Indépendance', 'Recherche', 'Secrets'],
    },
    padas: {
      1: { en: 'Pioneering healing and spiritual research', fr: 'Guérison pionnière et recherche spirituelle' },
      2: { en: 'Practical healing and material research', fr: 'Guérison pratique et recherche matérielle' },
      3: { en: 'Intellectual research and scientific healing', fr: 'Recherche intellectuelle et guérison scientifique' },
      4: { en: 'Emotional healing and intuitive medicine', fr: 'Guérison émotionnelle et médecine intuitive' },
    },
  },
  {
    index: 24,
    name: 'Purva Bhadrapada',
    sanskrit: 'पूर्व भाद्रपद',
    meaning: { en: 'Former Lucky Feet', fr: 'Les Premiers Pieds Chanceux' },
    lord: 'Jupiter',
    deity: 'Aja Ekapada',
    symbol: 'Front legs of funeral cot/Sword',
    degree: { start: 320, end: 333.333 },
    element: 'Air',
    guna: 'Sattva',
    description: {
      en: 'Purva Bhadrapada represents the fire of transformation and spiritual intensity. Natives are passionate, extreme, and transformative. They experience life intensely and pursue spiritual growth.',
      fr: 'Purva Bhadrapada représente le feu de la transformation et l\'intensité spirituelle. Les natifs sont passionnés, extrêmes et transformateurs. Ils vivent la vie intensément et poursuivent la croissance spirituelle.',
    },
    keywords: {
      en: ['Transformation', 'Intensity', 'Spirituality', 'Extremes', 'Passion'],
      fr: ['Transformation', 'Intensité', 'Spiritualité', 'Extrêmes', 'Passion'],
    },
    padas: {
      1: { en: 'Spiritual intensity and leadership', fr: 'Intensité spirituelle et leadership' },
      2: { en: 'Material transformation and practical change', fr: 'Transformation matérielle et changement pratique' },
      3: { en: 'Intellectual intensity and communication', fr: 'Intensité intellectuelle et communication' },
      4: { en: 'Emotional transformation and deep feeling', fr: 'Transformation émotionnelle et sentiment profond' },
    },
  },
  {
    index: 25,
    name: 'Uttara Bhadrapada',
    sanskrit: 'उत्तर भाद्रपद',
    meaning: { en: 'Latter Lucky Feet', fr: 'Les Derniers Pieds Chanceux' },
    lord: 'Saturn',
    deity: 'Ahir Budhnya',
    symbol: 'Back legs of funeral cot/Twin',
    degree: { start: 333.333, end: 346.666 },
    element: 'Air',
    guna: 'Tamas',
    description: {
      en: 'Uttara Bhadrapada represents the depths of the cosmic ocean and wisdom. Natives are wise, contemplative, and spiritually evolved. They possess deep understanding of life\'s mysteries.',
      fr: 'Uttara Bhadrapada représente les profondeurs de l\'océan cosmique et la sagesse. Les natifs sont sages, contemplatifs et spirituellement évolués. Ils possèdent une compréhension profonde des mystères de la vie.',
    },
    keywords: {
      en: ['Wisdom', 'Depth', 'Contemplation', 'Kundalini', 'Mysticism'],
      fr: ['Sagesse', 'Profondeur', 'Contemplation', 'Kundalini', 'Mysticisme'],
    },
    padas: {
      1: { en: 'Spiritual wisdom and leadership', fr: 'Sagesse spirituelle et leadership' },
      2: { en: 'Practical wisdom and material stability', fr: 'Sagesse pratique et stabilité matérielle' },
      3: { en: 'Intellectual wisdom and deep learning', fr: 'Sagesse intellectuelle et apprentissage profond' },
      4: { en: 'Emotional depth and mystical understanding', fr: 'Profondeur émotionnelle et compréhension mystique' },
    },
  },
  {
    index: 26,
    name: 'Revati',
    sanskrit: 'रेवती',
    meaning: { en: 'The Wealthy', fr: 'La Riche' },
    lord: 'Mercury',
    deity: 'Pushan',
    symbol: 'Fish/Drum',
    degree: { start: 346.666, end: 360 },
    element: 'Air',
    guna: 'Sattva',
    description: {
      en: 'Revati represents safe journeys, completion, and nourishment. Natives are compassionate, protective of the weak, and blessed with abundance. They guide others on their path.',
      fr: 'Revati représente les voyages sûrs, l\'achèvement et la nourriture. Les natifs sont compatissants, protecteurs des faibles et bénis d\'abondance. Ils guident les autres sur leur chemin.',
    },
    keywords: {
      en: ['Completion', 'Guidance', 'Compassion', 'Journey', 'Nourishment'],
      fr: ['Achèvement', 'Guidance', 'Compassion', 'Voyage', 'Nourriture'],
    },
    padas: {
      1: { en: 'Spiritual guidance and completion', fr: 'Guidance spirituelle et achèvement' },
      2: { en: 'Material nourishment and practical care', fr: 'Nourriture matérielle et soins pratiques' },
      3: { en: 'Intellectual guidance and communication', fr: 'Guidance intellectuelle et communication' },
      4: { en: 'Emotional compassion and nurturing', fr: 'Compassion émotionnelle et nourriture' },
    },
  },
]

/**
 * Get full nakshatra data by index
 */
export function getNakshatraData(index: number): NakshatraData {
  return NAKSHATRAS[index]
}

/**
 * Get nakshatra data by sidereal degrees
 */
export function getNakshatraFromDegrees(siderealDegrees: number): NakshatraData {
  const NAKSHATRA_SPAN = 360 / 27
  const normalizedDegrees = ((siderealDegrees % 360) + 360) % 360
  const index = Math.floor(normalizedDegrees / NAKSHATRA_SPAN)
  return NAKSHATRAS[index]
}
