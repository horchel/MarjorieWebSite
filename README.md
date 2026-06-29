# Marjorie Website

Persönliche Website (Psychotherapy · Coaching · Research), gebaut mit [Astro](https://astro.build).
Statische Seite, zweisprachig (Deutsch / Englisch), ausgelegt auf einfache Pflege und Erweiterung.

## Schnellstart

```bash
npm install      # einmalig: Abhängigkeiten installieren
npm run dev      # Entwicklungsserver, http://localhost:4321
npm run build    # Produktions-Build nach ./dist
npm run preview  # gebauten Build lokal ansehen
```

## Struktur

```
src/
  i18n/
    content.ts      ← ALLE Texte & Bild-URLs, getrennt nach Sprache (de/en)
    utils.ts        ← Hilfsfunktion für Sprach-Links
  styles/
    global.css      ← komplettes Design (aus dem Original-Mockup übernommen)
  layouts/
    Layout.astro    ← HTML-Grundgerüst, Fonts, Scroll-/Animations-Skript
  components/        ← einzelne Seitenabschnitte (Hero, About, Services …)
  pages/
    index.astro     ← Deutsche Startseite  →  /
    en/index.astro  ← Englische Startseite  →  /en/
public/
  images/           ← hier echte Fotos ablegen
reference/
  marjorie-website-final.html  ← ursprüngliches Design-Mockup (nur Referenz)
```

## Inhalte ändern

Texte und Bild-Adressen stehen zentral in [`src/i18n/content.ts`](src/i18n/content.ts).
Beim Anbinden des CMS (nächster Schritt) wird diese Datei die Schnittstelle, über die
Inhalte ohne Code-Kenntnisse gepflegt werden können.

## Noch offen (siehe TODOs im Code)

- Echte Fotos statt Unsplash-Platzhalter (`public/images/`, Pfade in `content.ts`)
- Französische Sprachversion (FR)
- Kontaktformular statt reinem `mailto:`-Link
- Impressum & Datenschutzerklärung (rechtlich erforderlich)
- CMS-Anbindung für die Inhaltspflege durch Marjorie
- `site`-URL in `astro.config.mjs` auf die echte Domain setzen
# MarjorieWebSite
