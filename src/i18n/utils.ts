import { defaultLocale, type Locale } from './content';

/**
 * Baut einen Pfad für eine Sprache.
 * DE (Standard) ohne Präfix: "/"  ·  EN: "/en/"
 */
export function localizedPath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  const base = locale === defaultLocale ? '/' : `/${locale}/`;
  return (base + clean).replace(/\/{2,}/g, '/');
}
