export type Language = 'en' | 'fr'

export const translations = {
  en: {
    // Navigation
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      reviews: 'Reviews',
      faq: 'FAQ',
      getReport: 'Get Your Report',
    },
    // Hero
    hero: {
      badge: 'Ancient Wisdom, Modern Clarity',
      title1: 'Discover Your',
      title2: 'Cosmic Blueprint',
      subtitle: 'The Shubham Method delivers the depth of a traditional Jyotish consultation in a beautifully designed, comprehensive report.',
      motto: '|| Jyotisham Surya Chandra Manso ||',
      cta: 'Get Your Report',
      learnMore: 'Learn More',
      trust: {
        reports: '500+ Reports Delivered',
        delivery: '24-48hr Delivery',
        confidential: '100% Confidential',
      },
    },
    // Report Preview
    preview: {
      title: 'Beautiful, Comprehensive Reports',
      subtitle: 'Each report is meticulously crafted with our Vedic-Futuristic design, combining sacred aesthetics with modern clarity.',
      phase: 'PHASE 1 / 14',
      phaseName: 'Initial Evaluation',
      version: 'Shubham Method V3.2',
      ascendant: 'Ascendant',
      moonNakshatra: 'Moon Nakshatra',
      moonExalted: 'Moon Exalted',
      mercuryExalted: 'Mercury Exalted',
      saturnOwn: 'Saturn Own Sign',
      description: 'Your report includes 14 comprehensive phases covering planetary positions, yoga formations, dasha timing, career analysis, relationship patterns, and more...',
    },
    // Features
    features: {
      label: "WHAT'S INCLUDED",
      title: 'The 14-Phase Shubham Method',
      subtitle: 'A systematic approach to Vedic astrology that leaves no stone unturned',
      items: [
        {
          title: '14-Phase Analysis',
          description: 'Comprehensive methodology covering every aspect of your cosmic blueprint',
        },
        {
          title: 'Nakshatra Wisdom',
          description: 'Deep dive into the 27 lunar mansions and their influence on your soul',
        },
        {
          title: 'Dasha Timing',
          description: 'Understand your life cycles and optimal timing for major decisions',
        },
        {
          title: 'Yoga Detection',
          description: 'Identify powerful planetary combinations shaping your destiny',
        },
        {
          title: 'Varga Analysis',
          description: 'Divisional charts for career, marriage, and spiritual insights',
        },
        {
          title: 'Remedial Guidance',
          description: 'Practical recommendations aligned with Vedic traditions',
        },
      ],
    },
    // Pricing
    pricing: {
      label: 'PRICING',
      title: 'Choose Your Journey',
      subtitle: 'Select the depth of analysis that resonates with your seeking',
      popular: 'Most Popular',
      getReport: 'Get',
      report: 'Report',
      footer: 'All prices in USD. Secure payment via Stripe. 7-day satisfaction guarantee.',
      plans: [
        {
          name: 'Essential',
          sanskrit: 'Pratham',
          description: 'Perfect for beginners seeking cosmic clarity',
          phases: '5 Phases',
          features: [
            'Birth Chart Analysis (D1)',
            'Planetary Positions & Dignities',
            'Major Yoga Detection',
            'Nakshatra Analysis',
            'Basic Life Purpose Insights',
            'PDF Report (25+ pages)',
          ],
        },
        {
          name: 'Complete',
          sanskrit: 'Sampurna',
          description: 'Full 14-phase Shubham Method analysis',
          phases: '14 Phases',
          features: [
            'Everything in Essential, plus:',
            'Dispositor Chain Analysis',
            'All Varga Charts (D9, D10, D3)',
            'Dasha Timing Predictions',
            'Career & Marriage Analysis',
            'Trauma & Healing Patterns',
            'Remedial Recommendations',
            'PDF Report (80+ pages)',
          ],
        },
        {
          name: 'Premium',
          sanskrit: 'Vishesh',
          description: 'Complete analysis + personal consultation',
          phases: '14 Phases + Live',
          features: [
            'Everything in Complete, plus:',
            '60-min Video Consultation',
            'Personalized Q&A Session',
            'Custom Remedial Plan',
            'Annual Transit Forecast',
            '30-day Email Support',
            'Priority Report Delivery',
          ],
        },
      ],
    },
    // Testimonials
    testimonials: {
      label: 'TESTIMONIALS',
      title: 'What Our Clients Say',
      items: [
        {
          name: 'Marie L.',
          location: 'Paris, France',
          text: 'The depth of this analysis is unlike anything I have seen. The Shubham Method revealed patterns in my life I never understood before.',
        },
        {
          name: 'David K.',
          location: 'London, UK',
          text: 'Professional, accurate, and beautifully presented. The career analysis was spot-on and helped me make a major life decision.',
        },
        {
          name: 'Priya S.',
          location: 'Mumbai, India',
          text: 'As someone familiar with Jyotish, I was impressed by the methodology. The 14-phase approach is comprehensive and traditional.',
        },
      ],
    },
    // FAQ
    faq: {
      label: 'FAQ',
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What is the Shubham Method?',
          answer: 'The Shubham Method is a comprehensive 14-phase Vedic astrology analysis system that combines traditional Jyotish wisdom with systematic interpretation. It covers everything from basic planetary positions to deep psychological patterns and life timing.',
        },
        {
          question: 'How accurate is Vedic Astrology?',
          answer: 'Vedic astrology (Jyotish) has been practiced for over 5,000 years. While we present this as guidance rather than prediction, many find the insights remarkably aligned with their life experiences. We use precise astronomical calculations with the Lahiri ayanamsa.',
        },
        {
          question: 'What information do I need to provide?',
          answer: 'You will need your exact birth date, birth time (as accurate as possible), and birth location. The more precise your birth time, the more accurate your analysis will be.',
        },
        {
          question: 'How long until I receive my report?',
          answer: 'Essential reports are delivered within 24-48 hours. Complete reports take 2-3 business days. Premium consultations are scheduled within 5-7 days of purchase.',
        },
        {
          question: 'Is my information kept private?',
          answer: 'Absolutely. Your birth data is used solely for generating your report and is never shared with third parties. We take privacy seriously and comply with GDPR regulations.',
        },
      ],
    },
    // CTA
    cta: {
      title: 'Begin Your Cosmic Journey',
      subtitle: 'Unlock the wisdom of your birth chart with the comprehensive Shubham Method analysis. Your cosmic blueprint awaits.',
      motto: '|| Om Gurave Namah ||',
      button: 'Get Your Report Now',
    },
    // Footer
    footer: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact',
      rights: 'All rights reserved.',
      disclaimer: 'For entertainment and spiritual guidance purposes. Not a substitute for professional advice.',
    },
    // Checkout Modal
    checkout: {
      title: 'Complete Your Order',
      subtitle: 'Enter your birth details for your personalized report',
      fullName: 'Full Name',
      email: 'Email Address',
      birthDate: 'Birth Date',
      birthTime: 'Birth Time',
      birthPlace: 'Birth Place (City, Country)',
      processing: 'Processing...',
      proceed: 'Proceed to Payment',
      cancel: 'Cancel',
    },
  },
  fr: {
    // Navigation
    nav: {
      features: 'Caractéristiques',
      pricing: 'Tarifs',
      reviews: 'Avis',
      faq: 'FAQ',
      getReport: 'Obtenir Votre Rapport',
    },
    // Hero
    hero: {
      badge: 'Sagesse Ancienne, Clarté Moderne',
      title1: 'Découvrez Votre',
      title2: 'Plan Cosmique',
      subtitle: 'La Méthode Shubham offre la profondeur d\'une consultation Jyotish traditionnelle dans un rapport complet au design magnifique.',
      motto: '|| Jyotisham Surya Chandra Manso ||',
      cta: 'Obtenir Votre Rapport',
      learnMore: 'En Savoir Plus',
      trust: {
        reports: '500+ Rapports Livrés',
        delivery: 'Livraison 24-48h',
        confidential: '100% Confidentiel',
      },
    },
    // Report Preview
    preview: {
      title: 'Des Rapports Magnifiques et Complets',
      subtitle: 'Chaque rapport est méticuleusement conçu avec notre design Védique-Futuriste, alliant esthétique sacrée et clarté moderne.',
      phase: 'PHASE 1 / 14',
      phaseName: 'Évaluation Initiale',
      version: 'Méthode Shubham V3.2',
      ascendant: 'Ascendant',
      moonNakshatra: 'Nakshatra Lunaire',
      moonExalted: 'Lune Exaltée',
      mercuryExalted: 'Mercure Exalté',
      saturnOwn: 'Saturne en Domicile',
      description: 'Votre rapport comprend 14 phases complètes couvrant les positions planétaires, les formations de yoga, le timing dasha, l\'analyse de carrière, les schémas relationnels, et plus encore...',
    },
    // Features
    features: {
      label: 'CE QUI EST INCLUS',
      title: 'La Méthode Shubham en 14 Phases',
      subtitle: 'Une approche systématique de l\'astrologie védique qui ne laisse rien au hasard',
      items: [
        {
          title: 'Analyse en 14 Phases',
          description: 'Méthodologie complète couvrant chaque aspect de votre plan cosmique',
        },
        {
          title: 'Sagesse des Nakshatras',
          description: 'Exploration approfondie des 27 demeures lunaires et leur influence sur votre âme',
        },
        {
          title: 'Timing Dasha',
          description: 'Comprenez vos cycles de vie et le timing optimal pour les décisions majeures',
        },
        {
          title: 'Détection des Yogas',
          description: 'Identifiez les combinaisons planétaires puissantes qui façonnent votre destin',
        },
        {
          title: 'Analyse des Vargas',
          description: 'Cartes divisionnaires pour la carrière, le mariage et les insights spirituels',
        },
        {
          title: 'Guidance Remédiale',
          description: 'Recommandations pratiques alignées avec les traditions védiques',
        },
      ],
    },
    // Pricing
    pricing: {
      label: 'TARIFS',
      title: 'Choisissez Votre Voyage',
      subtitle: 'Sélectionnez la profondeur d\'analyse qui résonne avec votre quête',
      popular: 'Le Plus Populaire',
      getReport: 'Obtenir le Rapport',
      report: '',
      footer: 'Tous les prix en USD. Paiement sécurisé via Stripe. Garantie satisfaction 7 jours.',
      plans: [
        {
          name: 'Essentiel',
          sanskrit: 'Pratham',
          description: 'Parfait pour les débutants en quête de clarté cosmique',
          phases: '5 Phases',
          features: [
            'Analyse du Thème Natal (D1)',
            'Positions et Dignités Planétaires',
            'Détection des Yogas Majeurs',
            'Analyse des Nakshatras',
            'Insights sur le But de Vie',
            'Rapport PDF (25+ pages)',
          ],
        },
        {
          name: 'Complet',
          sanskrit: 'Sampurna',
          description: 'Analyse complète en 14 phases de la Méthode Shubham',
          phases: '14 Phases',
          features: [
            'Tout ce qui est dans Essentiel, plus :',
            'Analyse de la Chaîne des Dispositeurs',
            'Tous les Cartes Varga (D9, D10, D3)',
            'Prédictions Timing Dasha',
            'Analyse Carrière et Mariage',
            'Schémas de Trauma et Guérison',
            'Recommandations Remédiales',
            'Rapport PDF (80+ pages)',
          ],
        },
        {
          name: 'Premium',
          sanskrit: 'Vishesh',
          description: 'Analyse complète + consultation personnelle',
          phases: '14 Phases + Live',
          features: [
            'Tout ce qui est dans Complet, plus :',
            'Consultation Vidéo de 60 min',
            'Session Q&R Personnalisée',
            'Plan Remédial Personnalisé',
            'Prévisions des Transits Annuels',
            'Support Email pendant 30 jours',
            'Livraison Prioritaire du Rapport',
          ],
        },
      ],
    },
    // Testimonials
    testimonials: {
      label: 'TÉMOIGNAGES',
      title: 'Ce Que Disent Nos Clients',
      items: [
        {
          name: 'Marie L.',
          location: 'Paris, France',
          text: 'La profondeur de cette analyse est incomparable. La Méthode Shubham a révélé des schémas dans ma vie que je n\'avais jamais compris auparavant.',
        },
        {
          name: 'David K.',
          location: 'Londres, Royaume-Uni',
          text: 'Professionnel, précis et magnifiquement présenté. L\'analyse de carrière était parfaitement juste et m\'a aidé à prendre une décision majeure.',
        },
        {
          name: 'Priya S.',
          location: 'Mumbai, Inde',
          text: 'En tant que personne familière avec le Jyotish, j\'ai été impressionnée par la méthodologie. L\'approche en 14 phases est complète et traditionnelle.',
        },
      ],
    },
    // FAQ
    faq: {
      label: 'FAQ',
      title: 'Questions Fréquemment Posées',
      items: [
        {
          question: 'Qu\'est-ce que la Méthode Shubham ?',
          answer: 'La Méthode Shubham est un système d\'analyse astrologique védique complet en 14 phases qui combine la sagesse traditionnelle du Jyotish avec une interprétation systématique. Elle couvre tout, des positions planétaires de base aux schémas psychologiques profonds et au timing de vie.',
        },
        {
          question: 'Quelle est la précision de l\'Astrologie Védique ?',
          answer: 'L\'astrologie védique (Jyotish) est pratiquée depuis plus de 5 000 ans. Bien que nous présentions ceci comme une guidance plutôt qu\'une prédiction, beaucoup trouvent les insights remarquablement alignés avec leurs expériences de vie. Nous utilisons des calculs astronomiques précis avec l\'ayanamsa Lahiri.',
        },
        {
          question: 'Quelles informations dois-je fournir ?',
          answer: 'Vous aurez besoin de votre date de naissance exacte, heure de naissance (aussi précise que possible) et lieu de naissance. Plus votre heure de naissance est précise, plus votre analyse sera exacte.',
        },
        {
          question: 'Combien de temps avant de recevoir mon rapport ?',
          answer: 'Les rapports Essentiels sont livrés sous 24-48 heures. Les rapports Complets prennent 2-3 jours ouvrables. Les consultations Premium sont programmées sous 5-7 jours après l\'achat.',
        },
        {
          question: 'Mes informations sont-elles gardées confidentielles ?',
          answer: 'Absolument. Vos données de naissance sont utilisées uniquement pour générer votre rapport et ne sont jamais partagées avec des tiers. Nous prenons la confidentialité au sérieux et respectons les réglementations RGPD.',
        },
      ],
    },
    // CTA
    cta: {
      title: 'Commencez Votre Voyage Cosmique',
      subtitle: 'Débloquez la sagesse de votre thème natal avec l\'analyse complète de la Méthode Shubham. Votre plan cosmique vous attend.',
      motto: '|| Om Gurave Namah ||',
      button: 'Obtenir Votre Rapport Maintenant',
    },
    // Footer
    footer: {
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
      disclaimer: 'À des fins de divertissement et de guidance spirituelle. Ne remplace pas un avis professionnel.',
    },
    // Checkout Modal
    checkout: {
      title: 'Finalisez Votre Commande',
      subtitle: 'Entrez vos détails de naissance pour votre rapport personnalisé',
      fullName: 'Nom Complet',
      email: 'Adresse Email',
      birthDate: 'Date de Naissance',
      birthTime: 'Heure de Naissance',
      birthPlace: 'Lieu de Naissance (Ville, Pays)',
      processing: 'Traitement en cours...',
      proceed: 'Procéder au Paiement',
      cancel: 'Annuler',
    },
  },
}

export type Translations = typeof translations.en
