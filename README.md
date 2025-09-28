# Event Tattoo Website

Eine moderne, einseitige Website für das private Tattoo-Studio "Event Tattoo" mit drei Tattoo-Künstlern: Anna (therealpanda.ink), Basti (Basti Datura Tattoo) und Carlotta (Blackbelladonna Tattoo).

## Features

- **Moderne, responsive Gestaltung** mit dunklem Theme
- **Interaktive Künstler-Galerie** mit Hover-Effekten
- **Smooth Scroll-Animationen** inspiriert von Apple's MacBook-Seite
- **Instagram-Integration** für jeden Künstler
- **Event Tattoo Services** mit detaillierten Paketen
- **Umfassende FAQ-Sektion** auf Deutsch
- **Kontaktformular** mit Google Maps Integration
- **Custom Font** (Grith) für einzigartiges Design

## Dateistruktur

```
event-tattoo-website/
├── index.html              # Homepage
├── alex.html              # Alex's Künstler-Seite
├── basti.html             # Basti's Künstler-Seite
├── carlotta.html          # Carlotta's Künstler-Seite
├── event.html             # Event Tattoo Services
├── faq.html               # FAQ-Seite
├── contact.html           # Kontakt-Seite
├── css/
│   ├── style.css          # Haupt-Stylesheet
│   ├── artist-page.css    # Künstler-Seiten Styles
│   ├── static-page.css    # FAQ/Kontakt Styles
│   ├── event-page.css     # Event-Seite Styles
│   ├── contact-page.css   # Kontakt-Formular Styles
│   └── fonts/             # Font-Dateien
│       └── Grith-Regular.otf
├── js/
│   ├── script.js          # Allgemeine JavaScript-Funktionen
│   ├── artist-animations.js # Künstler-Seiten Animationen
│   └── event-animations.js  # Event-Seite Animationen
├── images/                # Bilder-Verzeichnis
│   ├── anna.jpg          # Anna's Hauptfoto
│   ├── basti.jpg         # Basti's Hauptfoto
│   ├── carlotta.jpg      # Carlotta's Hauptfoto
│   ├── group.jpg         # Gruppenfoto für Event-Sektion
│   ├── anna_gallery_1.jpg # Anna's Galerie-Bilder
│   ├── basti_gallery_1.jpg # Basti's Galerie-Bilder
│   └── carlotta_gallery_1.jpg # Carlotta's Galerie-Bilder
└── README.md
```

## Bilder-Anforderungen

### Hauptbilder (erforderlich)
- `anna.jpg` - Anna's Profilfoto (1:1 Verhältnis empfohlen)
- `basti.jpg` - Basti's Profilfoto (1:1 Verhältnis empfohlen)
- `carlotta.jpg` - Carlotta's Profilfoto (1:1 Verhältnis empfohlen)
- `group.jpg` - Gruppenfoto für Event-Sektion (16:9 Verhältnis empfohlen)

### Galerie-Bilder (optional)
- `anna_gallery_1.jpg` bis `anna_gallery_6.jpg`
- `basti_gallery_1.jpg` bis `basti_gallery_6.jpg`
- `carlotta_gallery_1.jpg` bis `carlotta_gallery_6.jpg`

## Installation & Setup

1. **Font installieren:**
   - Lade die Grith-Schriftart von FontSpace herunter
   - Platziere `Grith-Regular.otf` im `css/fonts/` Verzeichnis

2. **Bilder hinzufügen:**
   - Füge alle erforderlichen Bilder zum `images/` Verzeichnis hinzu
   - Stelle sicher, dass die Dateinamen exakt mit den CSS-Referenzen übereinstimmen

3. **Website öffnen:**
   - Öffne `index.html` in einem modernen Webbrowser
   - Für beste Performance: Verwende einen lokalen Server

## Anpassungen

### Farben ändern
Bearbeite die CSS-Variablen in `css/style.css`:
```css
:root {
    --primary-color: #111;
    --secondary-color: #000;
    --accent-color: #aaa;
}
```

### Inhalte aktualisieren
- **Künstler-Biografien:** Bearbeite die entsprechenden HTML-Dateien
- **Event-Pakete:** Aktualisiere Preise und Details in `event.html`
- **FAQ:** Füge neue Fragen in `faq.html` hinzu
- **Kontaktdaten:** Aktualisiere Adressen und Links in `contact.html`

### Instagram-Feeds
Ersetze die Platzhalter-Bilder in den Galerie-Sektionen mit echten Instagram-Feeds oder aktuellen Arbeiten der Künstler.

## Deployment

### GitHub Pages
1. Erstelle ein neues Repository auf GitHub
2. Lade alle Dateien hoch
3. Aktiviere GitHub Pages in den Repository-Einstellungen
4. Die Website ist unter `https://username.github.io/repository-name` verfügbar

### Andere Hosting-Dienste
- **Netlify:** Drag & Drop des Projektordners
- **Vercel:** Verbinde mit GitHub-Repository
- **Traditionelles Hosting:** Lade alle Dateien zum Webspace hoch

## Browser-Kompatibilität

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance-Optimierung

- Komprimiere Bilder vor dem Upload
- Verwende WebP-Format für bessere Kompression
- Minifiziere CSS und JavaScript für Produktion
- Aktiviere Gzip-Kompression auf dem Server

## Support

Bei Fragen oder Problemen:
1. Überprüfe die Browser-Konsole auf JavaScript-Fehler
2. Stelle sicher, dass alle Bildpfade korrekt sind
3. Teste die Website in verschiedenen Browsern
4. Überprüfe die Dateistruktur auf Vollständigkeit

## Lizenz

Dieses Projekt ist für private Nutzung erstellt. Alle Rechte vorbehalten.

---

**Event Tattoo** - Professionelle Tattoo-Services für besondere Anlässe 
