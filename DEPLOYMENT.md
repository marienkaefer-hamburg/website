# Anleitung: Website online nehmen (Netlify) – Domain & E-Mail bleiben bei Strato

Diese Anleitung ist für Nicht-Techniker geschrieben. Ziel:

- **Website** liegt kostenlos bei **Netlify**.
- **Domain** `marienkaefer-hamburg.de` **und alle E-Mails** bleiben unverändert bei **Strato**.
- Alle Konten laufen über eine **Vereins-E-Mail**, damit die Übergabe an künftige Vorstände einfach ist.

## Wichtig vorab: E-Mail bleibt heil
Wir fassen bei Strato **nur den „Website-Wegweiser" (CNAME/A-Record)** an. Die **E-Mail-Einträge (MX)** bleiben unberührt → eure `@marienkaefer-hamburg.de`-Postfächer funktionieren die ganze Zeit weiter.

---

## Schritt 0 – Vereins-Zugänge anlegen (einmalig)
1. Nutzt eine **Vereins-E-Mail** als Login für alles, z. B. `vorstand@marienkaefer-hamburg.de` (bei Strato anlegen, falls noch nicht vorhanden).
2. Alle folgenden Konten (GitHub, Netlify) **mit dieser Adresse** registrieren – nicht mit einer privaten.
3. Zugangsdaten in einem **Passwortmanager / Übergabe-Ordner** des Vereins ablegen.

## Schritt 1 – Code zu GitHub (übergabesicher)
1. Auf [github.com](https://github.com) mit der Vereins-E-Mail anmelden.
2. Oben rechts **„+" → New organization → Free** wählen und eine Organisation anlegen, z. B. `marienkaefer-hamburg`.
   - Unter *People* später weitere Vorstände als **Owner** einladen. Scheidet jemand aus, entfernt ihr einfach seinen Zugang – die Website bleibt beim Verein.
3. In der Organisation **New repository** → Name z. B. `website`, Sichtbarkeit **Private** → *Create*.
4. Den Projektordner `kita-website` hochladen. Am einfachsten mit **GitHub Desktop** (grafisches Programm, kein Kommandozeilen-Wissen nötig):
   - [desktop.github.com](https://desktop.github.com) installieren, mit der Vereins-E-Mail anmelden.
   - *File → Add local repository* → den Ordner `kita-website` auswählen → *Publish* → die Organisation und das Repo wählen.
   - (Das Git-Repo ist lokal bereits vorbereitet, es ist also schon alles startklar.)

> `node_modules/` und `dist/` werden absichtlich nicht mitgeladen – Netlify baut das selbst.

## Schritt 2 – Netlify verbinden
1. Auf [netlify.com](https://www.netlify.com) mit der Vereins-E-Mail anmelden, am besten **„Sign up with GitHub"**.
2. **Add new site → Import an existing project → GitHub** → das Repo `website` auswählen.
3. Build-Einstellungen (Netlify erkennt Astro meist automatisch):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Deploy.** Nach ~1 Minute ist die Seite unter einer Adresse wie `zufallsname.netlify.app` live.
5. Ab jetzt gilt: Jede Änderung, die in GitHub landet, wird von Netlify **automatisch** neu gebaut und veröffentlicht.

## Schritt 3 – Eigene Domain bei Netlify hinterlegen
1. In Netlify: **Site configuration → Domain management → Add a domain** → `www.marienkaefer-hamburg.de` eingeben.
2. Netlify fragt nach der DNS-Methode → **„Use external DNS"** wählen (weil die Domain bei Strato bleibt).
3. Netlify zeigt dir jetzt die **genauen Werte** an, die du bei Strato eintragen musst – meist:
   - für **www**: ein **CNAME** auf `zufallsname.netlify.app`
   - für die nackte Domain `marienkaefer-hamburg.de`: ein **A-Record** auf eine von Netlify genannte IP-Adresse
   > Trage bei Strato **exakt die Werte ein, die Netlify dir anzeigt** – nicht aus dem Gedächtnis.

## Schritt 4 – Bei Strato die zwei Wegweiser setzen (E-Mail nicht anfassen!)
1. Im **Strato-Kundenlogin → Domainverwaltung → DNS-Einstellungen** von `marienkaefer-hamburg.de`.
2. **Neuen CNAME-Eintrag** hinzufügen: Name `www`, Ziel = die von Netlify genannte `…netlify.app`-Adresse.
3. Für die nackte Domain den **A-Record** auf die von Netlify genannte IP setzen (oder alternativ eine **Strato-Weiterleitung** von `marienkaefer-hamburg.de` auf `https://www.marienkaefer-hamburg.de` einrichten).
4. **Finger weg von den MX-Einträgen** und allem, was mit Mail/`mail`/`imap`/`smtp` zu tun hat – die bleiben, wie sie sind.
5. Speichern. DNS-Änderungen brauchen manchmal ein paar Stunden, bis sie überall sichtbar sind.

## Schritt 5 – HTTPS (Schloss-Symbol)
Sobald die DNS-Einträge greifen, erzeugt Netlify **automatisch ein kostenloses SSL-Zertifikat**. Nichts weiter zu tun – nach kurzer Zeit ist die Seite unter `https://www.marienkaefer-hamburg.de` sicher erreichbar.

## Schritt 6 – Automatische Updates (optional, empfohlen)
Im GitHub-Repo **Renovate** oder **Dependabot** aktivieren. Die schlagen automatisch neue Versionen der Bau-Werkzeuge vor. Das läuft nie auf dem Live-Server und hält das Projekt langfristig aktuell.

---

## Laufende Pflege
- Text ändern: in GitHub direkt im Browser bearbeiten (bei kleinen Änderungen) oder über GitHub Desktop → speichern.
- Netlify baut und veröffentlicht automatisch, meist in unter einer Minute.
- **Kein Patchen, keine Plugins, keine Datenbank** – genau das war die Ursache des alten Hacks und fällt hier komplett weg.

## Übergabe an künftige Vorstände
- GitHub-**Organisation**, Netlify und die Vereins-E-Mail sind die drei Zugänge.
- Neue Person als Owner/Mitglied einladen, ausscheidende Person entfernen. Fertig.
- Zugangsdaten immer im Vereins-Passwortmanager aktuell halten.
