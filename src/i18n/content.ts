// Typen & Sprach-Konfiguration der Website.
//
// Die eigentlichen Inhalte (Texte, Bild-URLs) stehen NICHT mehr hier, sondern
// in den editierbaren Dateien src/content/de.json und src/content/en.json.
// Genau diese beiden Dateien bearbeitet das CMS (Pages CMS) – ohne Code.
// Diese Datei kümmert sich nur noch um Typisierung und das Zusammensetzen.

import deData from '../content/de.json';
import enData from '../content/en.json';
import frData from '../content/fr.json';

export const locales = ['de', 'en', 'fr'] as const;
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
  /** <html lang="…"> – wird in Code gesetzt, nicht im CMS bearbeitet */
  htmlLang: string;
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

// htmlLang wird hier ergänzt, damit die JSON-Dateien rein inhaltlich bleiben
// (und das CMS nichts Strukturelles versehentlich überschreibt).
export const content: Record<Locale, SiteContent> = {
  de: { htmlLang: 'de', ...deData } as unknown as SiteContent,
  en: { htmlLang: 'en', ...enData } as unknown as SiteContent,
  fr: { htmlLang: 'fr', ...frData } as unknown as SiteContent,
};
