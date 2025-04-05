export const converter = {
  title: 'JSON-Konverter',
  description: 'Konvertieren Sie JSON-Daten in andere Formate (YAML, XML, CSV) oder konvertieren Sie andere Formate in JSON.',
  keywords: 'JSON-Konverter,JSON zu XML,JSON zu YAML,XML zu JSON,YAML zu JSON,CSV zu JSON,JSON zu CSV',
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