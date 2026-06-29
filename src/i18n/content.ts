// Zentrale Inhalts- und Übersetzungsdatei.
// Alle sichtbaren Texte der Website stehen hier – getrennt nach Sprache (de/en).
// Diese Datei ist später die Schnittstelle zum CMS: Struktur bleibt gleich,
// die Werte werden dann aus dem CMS befüllt.

export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

export interface ServiceItem {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}

export interface GalleryItem {
  image: string;
  alt: string;
  label: string;
}

export interface SiteContent {
  /** <html lang="…"> */
  htmlLang: string;
  /** Browser-Tab-Titel */
  metaTitle: string;
  metaDescription: string;
  nav: {
    about: string;
    services: string;
    gallery: string;
    focus: string;
    contact: string;
  };
  hero: {
    name: string;
    tagline: string;
    fields: string[];
    scroll: string;
  };
  imageStrip: { image: string; alt: string }[];
  about: {
    heading: string;
    paragraphs: string[];
    quote: string;
    image: string;
    imageAlt: string;
  };
  services: {
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };
  gallery: {
    heading: string;
    subheading: string;
    items: GalleryItem[];
  };
  focus: {
    heading: string;
    subheading: string;
    items: string[];
  };
  approach: {
    heading: string;
    text: string;
    keywords: string[];
  };
  languages: {
    heading: string;
    items: { name: string; label: string }[];
  };
  contact: {
    heading: string;
    text: string;
    buttonLabel: string;
    email: string;
  };
  footer: {
    tagline: string;
  };
}

// Bild-URLs sind aktuell noch Unsplash-Platzhalter aus dem Mockup.
// TODO: durch echte Fotos ersetzen (in /public/images legen und Pfad eintragen).
const strip = [
  { image: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?w=600&h=600&fit=crop', alt: 'Zen Raum' },
  { image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop', alt: 'Vintage Tee' },
  { image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop', alt: 'Tropische Natur' },
  { image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop', alt: 'Yoga Meditation' },
  { image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop', alt: 'Blüten' },
];

export const content: Record<Locale, SiteContent> = {
  de: {
    htmlLang: 'de',
    metaTitle: 'Marjorie – Psychotherapy · Coaching · Research',
    metaDescription:
      'Marjorie – interdisziplinäre Begleitung in Psychotherapie, Coaching und Forschung. Warmherzig, achtsam und kultursensibel.',
    nav: {
      about: 'Über mich',
      services: 'Angebot',
      gallery: 'Galerie',
      focus: 'Schwerpunkte',
      contact: 'Kontakt',
    },
    hero: {
      name: 'Marjorie',
      tagline: 'Psychotherapy · Coaching · Research',
      fields: ['Interdisciplinary', 'Embodiment', 'Intercultural', 'Art & Music', 'Yoga'],
      scroll: 'Entdecken',
    },
    imageStrip: strip,
    about: {
      heading: 'Über Mich',
      paragraphs: [
        'Mit einem interdisziplinären Ansatz, der Psychotherapie, Coaching und Forschung verbindet, begleite ich Menschen auf ihrem persönlichen Entwicklungsweg. Meine Arbeit ist geprägt von Wärme, Achtsamkeit und einem tiefen Verständnis für die Komplexität menschlicher Erfahrungen.',
        'Durch die Integration von Körperarbeit, kreativen Ausdrucksformen und wissenschaftlicher Fundierung schaffe ich einen Raum, in dem Transformation möglich wird.',
      ],
      quote:
        '„Heilung geschieht, wenn wir uns selbst mit Mitgefühl begegnen und den Mut finden, authentisch zu leben."',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop',
      imageAlt: 'Portrait',
    },
    services: {
      heading: 'Mein Angebot',
      subheading: 'Ganzheitliche Begleitung für Ihre persönliche Entwicklung',
      items: [
        {
          title: 'Psychotherapie',
          text: 'Tiefgehende therapeutische Begleitung mit einem integrativen Ansatz, der Körper, Geist und Seele verbindet. Raum für Heilung und persönliches Wachstum.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
          imageAlt: 'Therapie Raum',
        },
        {
          title: 'Coaching',
          text: 'Professionelle Unterstützung bei Lebensübergängen, beruflichen Herausforderungen und der Entfaltung Ihres vollen Potenzials.',
          image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
          imageAlt: 'Coaching',
        },
        {
          title: 'Research',
          text: 'Wissenschaftliche Forschung an der Schnittstelle von Psychologie, Sozialwissenschaften und Embodiment-Studien.',
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
          imageAlt: 'Forschung',
        },
      ],
    },
    gallery: {
      heading: 'Impressionen',
      subheading: 'Einblicke in meine Arbeit und Inspirationen',
      items: [
        { image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop', alt: 'Yoga Embodiment', label: 'Embodiment' },
        { image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=500&fit=crop', alt: 'Kunst', label: 'Art' },
        { image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=500&fit=crop', alt: 'Musik', label: 'Music' },
        { image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=500&fit=crop', alt: 'Reisterrassen', label: 'Nature' },
        { image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=500&fit=crop', alt: 'Vintage', label: 'Vintage' },
      ],
    },
    focus: {
      heading: 'Schwerpunkte',
      subheading: 'Themen, die meine Arbeit prägen',
      items: [
        'Racism in Sport',
        'Education',
        'Art & Creativity',
        'Music & Expression',
        'Yoga & Embodiment',
        'Intercultural Work',
        'Black Perspectives',
        'Languages & Identity',
      ],
    },
    approach: {
      heading: 'Mein Ansatz',
      text: 'Ich arbeite mit einem tiefen Respekt für die Einzigartigkeit jedes Menschen. Mein Ansatz verbindet wissenschaftliche Erkenntnisse mit verkörperter Weisheit, kultureller Sensibilität und kreativen Ausdrucksformen. In einem sicheren, wertschätzenden Raum begleite ich Sie dabei, Ihre inneren Ressourcen zu entdecken und Ihren eigenen Weg zu finden.',
      keywords: ['Warmherzig', 'Kultiviert', 'Sensibel', 'Nachdenklich', 'Würdevoll', 'Integrativ'],
    },
    languages: {
      heading: 'Sprachen',
      items: [
        { name: 'Deutsch', label: 'German' },
        { name: 'English', label: 'Englisch' },
        { name: 'Français', label: 'Französisch' },
      ],
    },
    contact: {
      heading: 'Kontakt',
      text: 'Ich freue mich darauf, Sie kennenzulernen und gemeinsam herauszufinden, wie ich Sie auf Ihrem Weg begleiten kann.',
      buttonLabel: 'Schreiben Sie mir',
      email: 'kontakt@marjorie.de',
    },
    footer: {
      tagline: 'Psychotherapy · Coaching · Research',
    },
  },

  en: {
    htmlLang: 'en',
    metaTitle: 'Marjorie – Psychotherapy · Coaching · Research',
    metaDescription:
      'Marjorie – interdisciplinary support in psychotherapy, coaching and research. Warm, mindful and culturally sensitive.',
    nav: {
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      focus: 'Focus Areas',
      contact: 'Contact',
    },
    hero: {
      name: 'Marjorie',
      tagline: 'Psychotherapy · Coaching · Research',
      fields: ['Interdisciplinary', 'Embodiment', 'Intercultural', 'Art & Music', 'Yoga'],
      scroll: 'Discover',
    },
    imageStrip: strip,
    about: {
      heading: 'About Me',
      paragraphs: [
        'With an interdisciplinary approach that combines psychotherapy, coaching and research, I accompany people on their personal path of development. My work is characterised by warmth, mindfulness and a deep understanding of the complexity of human experience.',
        'By integrating body work, creative forms of expression and a scientific foundation, I create a space in which transformation becomes possible.',
      ],
      quote:
        '"Healing happens when we meet ourselves with compassion and find the courage to live authentically."',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop',
      imageAlt: 'Portrait',
    },
    services: {
      heading: 'My Services',
      subheading: 'Holistic support for your personal development',
      items: [
        {
          title: 'Psychotherapy',
          text: 'In-depth therapeutic support with an integrative approach that connects body, mind and soul. A space for healing and personal growth.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
          imageAlt: 'Therapy room',
        },
        {
          title: 'Coaching',
          text: 'Professional support during life transitions, professional challenges and the unfolding of your full potential.',
          image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
          imageAlt: 'Coaching',
        },
        {
          title: 'Research',
          text: 'Academic research at the intersection of psychology, social sciences and embodiment studies.',
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
          imageAlt: 'Research',
        },
      ],
    },
    gallery: {
      heading: 'Impressions',
      subheading: 'Insights into my work and inspirations',
      items: [
        { image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop', alt: 'Yoga Embodiment', label: 'Embodiment' },
        { image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=500&fit=crop', alt: 'Art', label: 'Art' },
        { image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=500&fit=crop', alt: 'Music', label: 'Music' },
        { image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=500&fit=crop', alt: 'Rice terraces', label: 'Nature' },
        { image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=500&fit=crop', alt: 'Vintage', label: 'Vintage' },
      ],
    },
    focus: {
      heading: 'Focus Areas',
      subheading: 'Themes that shape my work',
      items: [
        'Racism in Sport',
        'Education',
        'Art & Creativity',
        'Music & Expression',
        'Yoga & Embodiment',
        'Intercultural Work',
        'Black Perspectives',
        'Languages & Identity',
      ],
    },
    approach: {
      heading: 'My Approach',
      text: 'I work with a deep respect for the uniqueness of every person. My approach combines scientific insight with embodied wisdom, cultural sensitivity and creative forms of expression. In a safe, appreciative space, I support you in discovering your inner resources and finding your own path.',
      keywords: ['Warm', 'Cultivated', 'Sensitive', 'Thoughtful', 'Dignified', 'Integrative'],
    },
    languages: {
      heading: 'Languages',
      items: [
        { name: 'Deutsch', label: 'German' },
        { name: 'English', label: 'English' },
        { name: 'Français', label: 'French' },
      ],
    },
    contact: {
      heading: 'Contact',
      text: 'I look forward to meeting you and finding out together how I can support you on your path.',
      buttonLabel: 'Write to me',
      email: 'kontakt@marjorie.de',
    },
    footer: {
      tagline: 'Psychotherapy · Coaching · Research',
    },
  },
};
