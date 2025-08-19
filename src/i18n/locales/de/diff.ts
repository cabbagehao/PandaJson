export const diff = {
  title: 'JSON-Dateien Online Vergleichen - Visueller JSON-Diff & Änderungs-Detektor',
  h1Title: 'Vergleichen und Hervorheben von JSON-Änderungen',
  seo_title: 'JSON-Dateien Online Vergleichen - Visueller JSON-Diff & Änderungs-Detektor',
  description: 'Vergleichen Sie JSON-Dateien visuell mit Side-by-Side-Hervorhebung für Code-Reviews.',
  keywords: 'JSON-Diff,JSON vergleichen,JSON-Unterschied,JSON-Vergleich,JSON-Komparator,JSON-Unterschiede finden,JSON-Änderungs-Tracker,JSON-Versionenvergleich,JSON-Daten-Diff,JSON-Datei vergleichen,nebeneinander JSON-Vergleich,JSON-Struktur-Vergleich,JSON-Diff-Tool,JSON-Änderungen identifizieren,JSON-Änderungen verfolgen,JSON-Delta,visueller JSON-Diff,JSON-Konfliktlösung',
  introduction: 'Arbeiten Sie in einem Team-Projekt oder verfolgen JSON-Versionsänderungen? Unser JSON-Diff-Tool hilft Ihnen, zwei JSON-Dateien schnell zu vergleichen und Unterschiede zu visualisieren. Wir heben hinzugefügte Schlüssel, gelöschte Einträge und geänderte Werte in einer klaren, farbkodierten Ansicht hervor, sodass Sie Änderungen auf einen Blick erkennen können.\nAnwendungsfälle umfassen:\nPull-Requests mit JSON-Konfigurationen überprüfen\nDatenversionsverlauf in Datenbanken verfolgen\nAbweichungen zwischen API-Antworten debuggen\nKein Scrollen mehr durch Codezeilen – unser Tool parst automatisch verschachtelte Objekte und Arrays und macht komplexe Vergleiche einfach. Fügen Sie zwei JSON-Dateien ein oder laden Sie sie hoch, und lassen Sie unser JSON-Vergleichsfeature Ihnen genau zeigen, was sich geändert hat. Ideal für Entwickler, QA-Teams und Datenmanager!',
  leftInput: 'Erstes JSON',
  rightInput: 'Zweites JSON',
  result: 'Vergleichsergebnis',
  placeholderLeft: 'Fügen Sie hier Ihre ersten JSON-Daten ein',
  placeholderRight: 'Fügen Sie hier Ihre zweiten JSON-Daten ein',
  compare: 'Vergleichen',
  clear: 'Löschen',
  loadExample: 'Beispiel laden',
  processing: 'Verarbeitung...',
  error: 'Vergleichsfehler: ',
  unknown: 'Unbekannter Fehler beim Vergleich',
  diffGuide: 'Diff-Anleitung',
  addedContent: 'Hinzugefügter Inhalt',
  removedContent: 'Entfernter Inhalt',
  modifiedContent: 'Geänderter Inhalt',
  originalJson: 'Original JSON',
  updatedJson: 'Aktualisierte JSON',
  
  // How to Use Section
  howToUse: {
    title: 'So verwenden Sie den JSON-Vergleich',
    steps: [
      {
        title: 'Erste JSON einfügen',
        description: 'Fügen Sie Ihre erste Datei oder JSON-Daten in das linke Eingabefeld ein. Diese wird als "ursprüngliche" oder "frühere" Version für den Vergleich behandelt.'
      },
      {
        title: 'Zweite JSON einfügen',
        description: 'Fügen Sie Ihre zweite JSON-Datei in das rechte Eingabefeld ein. Diese wird als "neue" oder "aktualisierte" Version behandelt, um Änderungen zu identifizieren.'
      },
      {
        title: 'Vergleich ausführen',
        description: 'Klicken Sie auf die Schaltfläche "Vergleichen", um die Unterschiede zwischen den beiden JSON-Dateien zu analysieren. Das Tool verarbeitet und hebt alle erkannten Änderungen hervor.'
      },
      {
        title: 'Unterschiede überprüfen',
        description: 'Untersuchen Sie die farbcodierten Ergebnisse: Grün für Hinzufügungen, Rot für Löschungen und Gelb für Änderungen. Jede Änderung wird mit ihrem vollständigen Kontext angezeigt.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Häufige Fragen zum Vergleich',
    items: [
      {
        question: 'Welche Arten von Änderungen kann das Vergleichstool erkennen?',
        answer: 'Unser Tool erkennt alle Arten von JSON-Änderungen: hinzugefügte Eigenschaften (grün hervorgehoben), gelöschte Eigenschaften (rot hervorgehoben), geänderte Werte (gelb hervorgehoben) und strukturelle Änderungen wie Array-Neuordnung oder Datentypänderungen.'
      },
      {
        question: 'Wie behandelt der Vergleich tief verschachtelte JSON-Objekte?',
        answer: 'Das Tool analysiert rekursiv die gesamte JSON-Struktur und vergleicht verschachtelte Objekte, Arrays und primitive Werte auf jeder Tiefe. Es zeigt den vollständigen Pfad zu jeder Differenz für einfache Navigation.'
      },
      {
        question: 'Kann es JSON-Dateien mit völlig unterschiedlichen Strukturen vergleichen?',
        answer: 'Ja, das Tool kann jedes Paar gültiger JSON-Dateien vergleichen, unabhängig davon, wie unterschiedlich ihre Strukturen sind. Es wird klar identifizieren, welche Elemente in einer, aber nicht in der anderen vorhanden sind.'
      },
      {
        question: 'Ist der Vergleich bei JSON-Arrays reihenfolgenabhängig?',
        answer: 'Ja, Array-Vergleiche sind standardmäßig reihenfolgenabhängig. Wenn dieselben Elemente in unterschiedlicher Reihenfolge erscheinen, werden sie als Unterschiede angezeigt. Dies ist wichtig für Fälle, wo die Reihenfolge der Elemente Bedeutung hat.'
      },
      {
        question: 'Wie groß können JSON-Dateien für den Vergleich sein?',
        answer: 'Das Tool kann große JSON-Dateien effizient handhaben, aber sehr große Dateien (mehrere Megabyte) können länger zum Verarbeiten brauchen und könnten durch den verfügbaren Browser-Speicher begrenzt sein.'
      },
      {
        question: 'Können Vergleichsergebnisse exportiert oder gespeichert werden?',
        answer: 'Derzeit können Sie die Vergleichsergebnisse kopieren oder Screenshots der hervorgehobenen Unterschiede machen. Die Ergebnisse werden in einem visuell klaren Format angezeigt, das einfach mit Teammitgliedern zu teilen ist.'
      }
    ]
  }
}; 