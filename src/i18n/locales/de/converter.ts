export const converter = {
  title: 'JSON zu YAML, XML, CSV Konvertieren - Kostenloser Datenformat-Konverter',
  h1Title: 'Transformieren Sie JSON in Jedes Format',
  seo_title: 'JSON zu YAML, XML, CSV Konvertieren - Kostenloser Datenformat-Konverter',
  description: 'Konvertieren Sie JSON nahtlos zu YAML, XML, CSV-Formaten und zurück. Perfekt für Datenmigration, Konfigurationsverwaltung und plattformübergreifende Datenaustauschabwörter.',
  keywords: 'JSON-Konverter,JSON zu YAML,JSON zu XML,JSON zu CSV,JSON-Transformation,Datenformat-Konverter,JSON-Export,YAML zu JSON,XML zu JSON,CSV zu JSON,Datenformate konvertieren,JSON-Datentransformation,Format-Konvertierungstool,bidirektionale Konvertierung,Datenaustauschformate,JSON online konvertieren,Datenformat-Übersetzer,Dateiformatkonvertierung,JSON-Import-Export,JSON-Migrationstool',
  introduction: 'Der JSON-Konverter ist Ihre All-in-One-Lösung für die nahtlose Transformation von Daten zwischen JSON und anderen beliebten Formaten. Ob Sie JSON zu YAML für Konfigurationsdateien konvertieren, JSON zu XML für Legacy-Systeme transformieren oder JSON zu CSV für Datenanalyse exportieren müssen – unser Tool bewältigt diese Konvertierungen mit Präzision und Leichtigkeit.\n\nUnser Konverter bewahrt die Datenintegrität während der Transformation und erhält hierarchische Beziehungen, Datentypen und strukturelle Elemente. Die intuitive Benutzeroberfläche ermöglicht es Ihnen, Ihre Quelldaten einzufügen oder hochzuladen, Ihr Zielformat auszuwählen und die konvertierte Ausgabe sofort zu betrachten.\n\nWichtige Funktionen:\n• Bidirektionale Konvertierung zwischen JSON und YAML, XML, CSV und TSV\n• Beibehaltung verschachtelter Strukturen und Datentypen wo unterstützt\n• Anpassbare Optionen für jede Formatkonvertierung\n• Echtzeit-Vorschau der konvertierten Ausgabe\n• In Zwischenablage kopieren oder Download-Funktionalität\n• Unterstützung für große Datensätze\n\nFügen Sie einfach Ihre Daten ein, wählen Sie Ihr Zielformat und lassen Sie unseren Konverter den Rest erledigen – das spart wertvolle Zeit und Aufwand in Ihrem Entwicklungsworkflow.',
  options: {
    title: 'Konvertierungsoptionen',
    conversionType: 'Konvertierungstyp',
    jsonTo: 'JSON zu',
    toJson: 'Zu JSON',
    jsonToYaml: 'JSON zu YAML',
    jsonToXml: 'JSON zu XML',
    jsonToCsv: 'JSON zu CSV',
    yamlToJson: 'YAML zu JSON',
    xmlToJson: 'XML zu JSON',
    csvToJson: 'CSV zu JSON'
  },
  input: {
    defaultLabel: 'Eingabe',
    jsonLabel: 'JSON-Eingabe',
    yamlLabel: 'YAML-Eingabe',
    xmlLabel: 'XML-Eingabe',
    csvLabel: 'CSV-Eingabe',
    defaultPlaceholder: 'Daten hier einfügen',
    jsonPlaceholder: 'JSON-Daten hier einfügen',
    yamlPlaceholder: 'YAML-Daten hier einfügen',
    xmlPlaceholder: 'XML-Daten hier einfügen',
    csvPlaceholder: 'CSV-Daten hier einfügen'
  },
  output: {
    defaultLabel: 'Ausgabe',
    jsonLabel: 'JSON-Ausgabe',
    yamlLabel: 'YAML-Ausgabe',
    xmlLabel: 'XML-Ausgabe',
    csvLabel: 'CSV-Ausgabe',
    placeholder: 'Konvertierungsergebnis wird hier angezeigt'
  },
  actions: {
    convert: 'Konvertieren',
    processing: 'Verarbeitung...',
    copy: 'Kopieren',
    download: 'Herunterladen',
    clear: 'Löschen'
  },
  errors: {
    emptyInput: 'Bitte geben Sie Daten zum Konvertieren ein',
    conversionFailed: 'Konvertierungsfehler',
    unsupportedConversion: 'Nicht unterstützter Konvertierungstyp',
    invalidJson: 'Ungültiges JSON',
    invalidYaml: 'Ungültiges YAML',
    invalidXml: 'Ungültiges XML',
    invalidCsv: 'Ungültiges CSV',
    jsonNotArray: 'JSON muss ein Array von Objekten sein, um zu CSV zu konvertieren',
    unknownError: 'Unbekannter Fehler während der Konvertierung'
  },
  alerts: {
    copySuccess: 'In die Zwischenablage kopiert',
    copyFailed: 'Kopieren fehlgeschlagen'
  }
}; 