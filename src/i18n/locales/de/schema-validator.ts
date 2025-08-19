export const schemaValidator = {
  title: 'JSON gegen Schema Validieren - Datenstruktur-Integrität Prüfen',
  h1Title: 'Validieren Sie JSON gegen Schema-Regeln',
  seo_title: 'JSON gegen Schema Validieren - Datenstruktur-Integrität Prüfen',
  description: 'Validieren Sie JSON gegen Schema-Regeln für Datenintegrität und API-Vertrags-Compliance.',
  keywords: 'JSON-Schema,JSON-Validierung,Schema-Validierung,JSON-Strukturvalidierung,JSON-Formatvalidierung,JSON-Schema-Validator,Schema-Konformitäts-Checker,JSON-Datenintegrität,gegen Schema validieren,JSON-Constraint-Validierung,Typ-Validierung,strukturelle Validierung,Muster-Validierung,JSON-Regeln-Validierung,Pflichtfelder-Validator,JSON-Format-Checker,JSON-Vertrags-Validator,API-Schema-Validierung',
  introduction: 'Müssen Sie sicherstellen, dass Ihre JSON-Daten einem bestimmten Schema entsprechen (z.B. API-Verträge oder Datenmodelle)? Unser **JSON-Schema-Validator** prüft, ob Ihr JSON einem definierten Schema entspricht und verifiziert Feldtypen, erforderliche Schlüssel und Datenbeschränkungen. Dies ist entscheidend für Teamzusammenarbeit, API-Dokumentation und Gewährleistung der Datenkonsistenz in Systemen.\n\nSo funktioniert es: Laden Sie Ihre JSON- und Schema-Datei hoch (oder fügen Sie das Schema direkt ein), und wir validieren gegen Eigenschaften wie `type`, `enum`, `minimum` und `pattern`. Fehlermeldungen zeigen genau, wo die Daten nicht mit dem Schema übereinstimmen, und helfen Ihnen, Probleme schnell zu beheben.\n\nOb Sie Microservices entwickeln, Benutzereingaben validieren oder Datenpipelines standardisieren – unser **JSON-Schema validieren**-Tool gewährleistet, dass Ihre Datenstrukturen zuverlässig und konform sind. Probieren Sie es heute kostenlos aus!',
  jsonData: 'JSON-Daten',
  jsonSchema: 'JSON-Schema',
  options: 'Validierungsoptionen',
  validate: 'Validieren',
  validating: 'Validierung...',
  clear: 'Löschen',
  loadExample: 'Beispiel laden',
  jsonPlaceholder: 'Geben Sie JSON-Daten zum Validieren ein oder fügen Sie sie ein',
  schemaPlaceholder: 'Geben Sie JSON-Schema ein oder fügen Sie es ein',
  result: 'Validierungsergebnis',
  valid: 'Gültig',
  invalid: 'Ungültig',
  errorDetails: 'Fehlerdetails',
  guideTitle: 'JSON-Schema-Anleitung',
  guideDescription: 'JSON-Schema ist ein Standard zur Beschreibung und Validierung von JSON-Datenstrukturen. Hier sind einige gängige Validierungsregeln:',
  basicTypesTitle: 'Validierung grundlegender Typen',
  commonRulesTitle: 'Häufige Validierungsregeln',
  strictMode: 'Strikter Modus',
  strictModeDescription: 'Erzwingt zusätzliche Validierungsbeschränkungen, die nicht in der JSON-Schema-Spezifikation angegeben sind',
  jsonParseError: 'JSON-Analysefehler',
  schemaParseError: 'Schema-Analysefehler',
  rules: 'Häufige Validierungsregeln',
  
  // How to Use Section
  howToUse: {
    title: 'So verwenden Sie den JSON-Schema-Validator',
    steps: [
      {
        title: 'JSON-Daten vorbereiten',
        description: 'Fügen Sie Ihre JSON-Daten ein, die Sie validieren möchten, in den Bereich JSON-Daten. Dies sind die Daten, die gegen Ihre Schema-Regeln überprüft werden.'
      },
      {
        title: 'Schema definieren',
        description: 'Geben Sie Ihr JSON-Schema in den Bereich JSON-Schema ein. Das Schema definiert die Struktur, Datentypen und Validierungsregeln, denen Ihr JSON folgen muss.'
      },
      {
        title: 'Validierung ausführen',
        description: 'Klicken Sie auf die Schaltfläche "Validieren", um Ihre JSON-Daten gegen das Schema zu überprüfen. Der Validator verarbeitet beide Dokumente und identifiziert Compliance-Probleme.'
      },
      {
        title: 'Ergebnisse überprüfen',
        description: 'Prüfen Sie die Validierungsergebnisse, die entweder eine Erfolgsbestätigung oder detaillierte Fehlermeldungen mit spezifischen Standorten anzeigen, wo die Daten die Schema-Anforderungen nicht erfüllen.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'JSON-Schema-Validator FAQ',
    items: [
      {
        question: 'Was ist JSON-Schema und warum sollte ich es verwenden?',
        answer: 'JSON-Schema ist ein Vokabular, mit dem Sie JSON-Dokumente kommentieren und validieren können. Es definiert Verträge für JSON-Daten, gewährleistet API-Konsistenz, validiert Benutzereingaben und bietet eine klare Dokumentation der Datenstrukturanforderungen.'
      },
      {
        question: 'Welche JSON-Schema-Versionen werden unterstützt?',
        answer: 'Unser Validator unterstützt JSON-Schema Draft-07, Draft-06, Draft-04 und die neuesten Spezifikationen. Der Validator erkennt automatisch die Schema-Version basierend auf der $schema-Eigenschaft in Ihrem Schema-Dokument.'
      },
      {
        question: 'Kann ich verschachtelte Objekte und Arrays mit Schemas validieren?',
        answer: 'Ja! JSON-Schema unterstützt vollständig verschachtelte Validierung mit Eigenschaften für Objekte, Elemente für Arrays und komplexe Validierungsregeln einschließlich Bedingungen, Abhängigkeiten und rekursiver Schema-Referenzen.'
      },
      {
        question: 'Wie detailliert sind die Validierungsfehlermeldungen?',
        answer: 'Unser Validator bietet umfassende Fehlermeldungen einschließlich des genauen Pfads zu den ungültigen Daten, der spezifischen Validierungsregel, die fehlgeschlagen ist, erwarteten vs. tatsächlichen Werten und Vorschlägen zur Behebung der Probleme.'
      },
      {
        question: 'Kann ich benutzerdefinierte Validierungsschlüsselwörter in meinem Schema verwenden?',
        answer: 'Der Validator unterstützt alle Standard-JSON-Schema-Schlüsselwörter einschließlich type, properties, required, pattern, minimum, maximum, enum und viele andere. Benutzerdefinierte Schlüsselwörter aus Erweiterungen können begrenzt unterstützt werden.'
      },
      {
        question: 'Ist dieser Validator für API-Vertragstests geeignet?',
        answer: 'Absolut! JSON-Schema-Validierung ist perfekt für API-Vertragstests, um sicherzustellen, dass Request-/Response-Daten erwarteten Formaten entsprechen und Konsistenz zwischen verschiedenen API-Versionen und Umgebungen zu wahren.'
      }
    ]
  }
}; 