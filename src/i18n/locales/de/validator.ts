export const validator = {
  title: 'JSON Online Validieren - Syntaxfehler Prüfen & JSON-Code Reparieren',
  h1Title: 'Prüfen Sie JSON-Syntax und Finden Fehler',
  seo_title: 'JSON Online Validieren - Syntaxfehler Prüfen & JSON-Code Reparieren',
  description: 'Prüfen Sie JSON-Syntaxfehler sofort mit genauer Fehlerlokalisierung und detailliertem Feedback.',
  keywords: 'JSON-Validator,JSON-Syntax-Checker,JSON validieren,JSON-Fehlerfinder,JSON-Format-Validator,JSON-Verifikationstool,JSON-Parsing-Fehler,Syntaxfehler-Erkennung,JSON-Debugging-Tool,JSON-Struktur-Validierung,Fehlerpositions-Finder,JSON-Fehlermeldungen,JSON-Syntax reparieren,JSON-Code-Validator',
  introduction: 'Der JSON-Validator hilft Ihnen, Syntaxfehler und strukturelle Probleme in Ihren JSON-Daten schnell zu identifizieren. Ob Sie eine Web-API debuggen, mit Konfigurationsdateien arbeiten oder Datenfeeds verarbeiten, unser Tool gibt Ihnen sofortiges Feedback zur Gültigkeit Ihres JSONs.\n\nWenn Fehler erkannt werden, zeigt der Validator die genaue Position des Problems an und bietet klare, umsetzbare Hinweise zur Behebung. Jeder Fehler wird mit Zeilen- und Spalteninformationen hervorgehoben, was die Fehlerbehebung effizient und unkompliziert macht.\n\nZu den Hauptfunktionen gehören:\n• Sofortige Syntaxvalidierung gegen den JSON-Standard\n• Präzise Fehlerposition mit Zeilen- und Spaltennummern\n• Detaillierte Fehlerbeschreibungen für schnelle Problemlösung\n• Unterstützung für große JSON-Dokumente\n• Saubere, intuitive Benutzeroberfläche mit Echtzeit-Feedback\n• Ein-Klick-Validierung mit umfassenden Ergebnissen\n\nFügen Sie einfach Ihr JSON ein und lassen Sie unseren Validator auf Fehler prüfen, um sicherzustellen, dass Ihre Daten richtig formatiert sind, bevor Sie sie in Ihren Anwendungen verwenden.',
  input: 'JSON-Eingabe',
  validate: 'JSON validieren',
  validJson: 'Gültiges JSON',
  invalidJson: 'Ungültiges JSON',
  errorDetails: 'Fehlerdetails',
  errorAt: 'Fehler in Zeile {line}, Spalte {column}',
  expectedToken: 'Erwartetes Token: {token}',
  unexpectedToken: 'Unerwartetes Token: {token}',
  missingComma: 'Fehlendes Komma oder nicht übereinstimmende Klammern',
  extraComma: 'Zusätzliches Komma',
  unclosedString: 'Nicht geschlossene Zeichenkette',
  unclosedObject: 'Nicht geschlossenes Objekt',
  unclosedArray: 'Nicht geschlossenes Array',
  invalidProperty: 'Ungültiger Eigenschaftsname',
  duplicateKey: 'Doppelter Schlüssel',
  extraData: 'Zusätzliche Daten nach JSON-Ende',
  missingValue: 'Fehlender Wert',
  missingColon: 'Fehlendes Doppelpunkt',
  repairSuggestion: 'Reparaturvorschlag',
  errorType: 'Fehlertyp',
  errorMessage: 'Fehlermeldung',
  position: 'Position',
  contextLine: 'Kontext-Zeile',
  placeholder: 'Geben Sie hier JSON zum Validieren ein',
  jsonStructure: 'JSON-Struktur',
  jsonSyntaxError: 'JSON-Syntaxfehler',
  parseSuccess: 'Erfolgreich geparst, enthält {count} Datenknoten.',
  unknownError: 'Unbekannter Fehler',
  
  // How to Use Section
  howToUse: {
    title: 'So verwenden Sie den JSON-Validator',
    steps: [
      {
        title: 'JSON eingeben',
        description: 'Fügen Sie Ihre JSON-Daten in das Eingabefeld ein oder geben Sie sie ein. Das Tool akzeptiert jede JSON-Struktur, von einfachen Objekten bis zu komplex verschachtelten Arrays.'
      },
      {
        title: 'Automatische Validierung',
        description: 'Der Validator analysiert Ihr JSON sofort, während Sie tippen oder nach dem Einfügen. Er erkennt Syntaxfehler in Echtzeit für sofortiges Feedback.'
      },
      {
        title: 'Fehler überprüfen',
        description: 'Wenn Fehler erkannt werden, zeigt das Tool die genaue Position (Zeile und Spalte) zusammen mit einer detaillierten Beschreibung des Problems an, um die Korrektur zu erleichtern.'
      },
      {
        title: 'Gültigkeit bestätigen',
        description: 'Sobald Ihr JSON gültig ist, sehen Sie eine Erfolgsbestätigung. Sie können nun Ihre validierten JSON-Daten vertrauensvoll in Ihren Projekten verwenden.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Häufige Fragen zur Validierung',
    items: [
      {
        question: 'Welche Arten von JSON-Fehlern kann dieses Tool erkennen?',
        answer: 'Unser Validator erkennt alle gängigen JSON-Syntaxfehler einschließlich: fehlende oder zusätzliche Kommas, nicht geschlossene Klammern/Schlüssel, fehlende Anführungszeichen, ungültige Eigenschaftsnamen, doppelte Schlüssel, falsche Escape-Zeichen und fehlgeformte Datenstrukturen.'
      },
      {
        question: 'Warum ist es wichtig, JSON vor der Verwendung zu validieren?',
        answer: 'JSON-Validierung verhindert Laufzeitfehler, Anwendungsabstürze und Datenübertragungsprobleme. Ungültiges JSON kann APIs zum Absturz bringen, Parsing-Fehler in Anwendungen verursachen und zu unerwartetem Verhalten in Systemen führen, die auf korrekte Datenstrukturen angewiesen sind.'
      },
      {
        question: 'Kann es sehr große JSON-Dateien verarbeiten?',
        answer: 'Ja, unser Validator ist optimiert, um große JSON-Dokumente effizient zu verarbeiten. Er kann komplex tief verschachtelte Strukturen und umfangreiche Arrays verarbeiten, während er eine schnelle Validierungsleistung beibehält.'
      },
      {
        question: 'Was bedeutet die Datenknoten-Anzahl in den Validierungsergebnissen?',
        answer: 'Die Knotenzahl repräsentiert die Gesamtzahl der Datenelemente in Ihrem JSON, einschließlich Objekten, Arrays, Strings, Zahlen, Booleans und Null-Werten. Dies gibt Ihnen eine Vorstellung von der Komplexität und Größe Ihrer Datenstruktur.'
      },
      {
        question: 'Helfen die Fehlermeldungen dabei, spezifische Probleme zu lokalisieren?',
        answer: 'Absolut. Unsere Fehlermeldungen enthalten spezifische Zeilen- und Spaltennummern, Fehlertyp und klare Beschreibungen. Dies ermöglicht es Ihnen, direkt zum Problem zu navigieren und genau zu verstehen, was behoben werden muss.'
      },
      {
        question: 'Wird mein JSON bei der Validierung auf Ihren Servern gespeichert?',
        answer: 'Nein, die gesamte JSON-Validierung erfolgt lokal in Ihrem Browser. Ihre Daten bleiben vollständig privat und werden niemals an unsere Server gesendet, was totale Sicherheit für sensible oder proprietäre Daten gewährleistet.'
      }
    ]
  }
}; 