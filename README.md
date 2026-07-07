# Website Kindergarten Marienkäfer

Statische Website (Astro), gebaut aus den gesicherten Inhalten. Kein Server-Code, keine Datenbank, kein CMS → praktisch keine Angriffsfläche und quasi wartungsfrei.

## Lokal starten

Voraussetzung: Node.js 20+ (getestet mit Node 22).

```bash
npm install      # einmalig
npm run dev      # Entwicklungsvorschau: http://localhost:4321
npm run build    # baut die fertige Seite nach dist/
npm run preview  # zeigt den gebauten Stand an
```

## Struktur

```
src/
  data/site.ts        → zentrale Daten (Kontakt, Navigation, Team) – hier pflegen
  layouts/            → Grundgerüst (Kopf, Meta)
  components/         → Header, Footer
  pages/              → je Datei = eine Seite (index, konzept, team, …)
  styles/global.css   → gesamtes Design
public/
  bilder/             → Bilder (layout, haus, team, galerie)
  dokumente/          → PDFs
```

## Inhalte pflegen

- **Kontakt/Vorstand/Team-Namen:** in `src/data/site.ts`.
- **Seitentexte:** in der jeweiligen Datei unter `src/pages/`.
- **Neue Galerie-Fotos:** einfach als `.jpg` in `public/bilder/galerie/` legen – erscheinen beim nächsten Build automatisch.
- Nach jeder Änderung: committen & zu GitHub pushen → Cloudflare baut und veröffentlicht automatisch (siehe `DEPLOYMENT.md`).

## Sicherheit & Updates

- Der ausgelieferte Stand ist reines HTML/CSS/Bild – nichts, was gehackt werden kann.
- Abhängigkeiten (Build-Werkzeuge) aktuell halten: `npm update` bzw. automatisiert per Renovate/Dependabot. Diese laufen nie auf dem Live-Server.
