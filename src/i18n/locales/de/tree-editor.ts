export const treeEditor = {
  title: 'JSON mit Visuellem Baumeditor Bearbeiten - Interaktiver JSON-Navigator',
  h1Title: 'Bearbeiten Sie JSON mit Visueller Baum-Oberfläche',
  seo_title: 'JSON mit Visuellem Baumeditor Bearbeiten - Interaktiver JSON-Navigator',
  description: 'Bearbeiten Sie JSON über eine intuitive Baumschnittstelle für einfache Navigation und fehlerfreie Bearbeitung.',
  keywords: 'JSON-Baumeditor,JSON-visueller Editor,JSON-Editor,JSON-Baumansicht,JSON-Parser,JSON modifizieren,JSON bearbeiten,interaktiver JSON-Editor,verschachtelter JSON-Editor,JSON-Strukturbetrachter,JSON-Knoten-Editor,visueller Dateneditor,JSON-Hierarchiebetrachter,komplexer JSON-Editor,JSON-Baumstruktur,JSON-Visualisierungstool,JSON-Navigator',
  introduction: 'Der visuelle JSON-Baumeditor transformiert komplexe JSON-Daten in eine interaktive Baumstruktur, die Sie einfach manipulieren können. Ideal für die Verwaltung tief verschachtelter Datenstrukturen, ohne sich in geschweiften Klammern und Syntax zu verlieren.\n\nUnsere intuitive Benutzeroberfläche ermöglicht es Ihnen, Knoten zu erweitern und zu reduzieren, neue Eigenschaften und Arrays hinzuzufügen, Werte zu ändern oder unerwünschte Elemente mit einfachen Klicks zu löschen. Das Layout mit Doppelansicht zeigt sowohl Ihren bearbeitbaren Baum als auch die formatierte JSON-Ausgabe in Echtzeit.\n\nDieses Tool ist perfekt für:\n• API-Entwickler, die mit komplexen JSON-Antworten arbeiten\n• Datenanalysten, die komplexe Datensätze erforschen\n• Content-Manager, die JSON-basierte Konfigurationen aktualisieren\n• Jeden, der die Bearbeitung von Roh-JSON fehleranfällig findet\n\nÄnderungen werden sofort validiert, wodurch Syntaxfehler während der Arbeit verhindert werden. Wenn Sie fertig sind, exportieren Sie Ihr perfekt formatiertes JSON mit einem einzigen Klick.',
  viewOptions: 'Ansichtsoptionen',
  copyJsonResult: 'Kopieren',
  copySuccessful: 'In die Zwischenablage kopiert!',
  downloadJsonResult: 'Herunterladen',
  clearJsonData: 'Löschen',
  jsonParsingError: 'JSON-Parsing-Fehler: ',
  validationError: 'Validierungsfehler: ',
  enterValidJson: 'Bitte geben Sie gültige JSON-Daten ein',
  treeLabel: 'Baumansicht',
  treeView: 'Baumansicht',
  jsonLabel: 'JSON-Ausgabe',
  placeholderText: 'Fügen Sie hier Ihre JSON-Daten ein...',
  loadExample: 'Beispiel laden',
  textView: 'Textansicht',
  jsonText: 'JSON-Text',
  jsonTree: 'JSON-Baumstruktur',
  placeholder: 'JSON-Daten hier eingeben oder einfügen',
  copy: 'Kopieren',
  download: 'Herunterladen',
  clear: 'Löschen',
  copied: 'In die Zwischenablage kopiert',
  copyFailed: 'Kopieren fehlgeschlagen',
  parseError: 'Parsing-Fehler',
  unknownError: 'Unbekannter Fehler beim Parsing',
  updateError: 'Aktualisierungsfehler',
  emptyInputMessage: 'Bitte geben Sie zuerst gültiges JSON im Texteditor ein',
  // Baumeditor-spezifische Übersetzungen
  addItem: 'Element hinzufügen',
  addProperty: 'Eigenschaft hinzufügen',
  key: 'Schlüssel',
  keyName: 'Schlüsselname',
  value: 'Wert',
  type: 'Typ',
  expand: 'Alle erweitern',
  collapse: 'Alle reduzieren',
  ok: 'OK',
  cancel: 'Abbrechen',
  emptyArray: 'Leeres Array',
  emptyObject: 'Leeres Objekt',
  deleteItem: 'Löschen',
  editItem: 'Bearbeiten',
  undoChange: 'Rückgängig',
  redoChange: 'Wiederholen',
  enterValidPropertyName: 'Bitte geben Sie einen gültigen Eigenschaftsnamen ein',
  add: 'Hinzufügen',
  empty: 'Leer',
  keyNameEmpty: 'Schlüsselname darf nicht leer sein',
  addFailed: 'Hinzufügen fehlgeschlagen',
  invalidValue: 'Ungültiger Wert',
  save: 'Speichern',
  
  // How to Use Section
  howToUse: {
    title: 'So verwenden Sie den JSON-Baumeditor',
    steps: [
      {
        title: 'JSON eingeben oder einfügen',
        description: 'Geben Sie Ihre JSON-Daten in den Texteditor ein oder fügen Sie vorhandenes JSON ein. Das Tool parst automatisch und zeigt es als interaktive Baumstruktur an.'
      },
      {
        title: 'Navigieren Sie durch den Baum',
        description: 'Klicken Sie auf Knoten, um sie zu erweitern oder zu reduzieren. Verwenden Sie die Baumansicht, um visuell durch Ihre JSON-Struktur zu navigieren, ohne sich in verschachtelten Daten zu verlieren.'
      },
      {
        title: 'Visuell bearbeiten',
        description: 'Klicken Sie auf Werte, um sie direkt zu bearbeiten, fügen Sie neue Eigenschaften mit der +-Taste hinzu oder löschen Sie Elemente mit der Löschen-Taste. Alle Änderungen werden in Echtzeit angewendet.'
      },
      {
        title: 'Änderungen exportieren',
        description: 'Nach Abschluss der Bearbeitung kopieren Sie das aktualisierte JSON in die Zwischenablage oder laden es als Datei herunter. Die Ausgabe behält die ordnungsgemäße JSON-Formatierung bei.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'JSON-Baumeditor FAQ',
    items: [
      {
        question: 'Was sind die Vorteile der Baumbearbeitung gegenüber der Textbearbeitung?',
        answer: 'Die Baumbearbeitung bietet eine visuelle Darstellung der JSON-Struktur, wodurch verschachtelte Beziehungen leichter zu verstehen sind, Syntaxfehler verhindert werden und die Navigation in komplexen Daten erleichtert wird. Sie können sich auf den Inhalt konzentrieren, anstatt sich um Klammern und Kommas zu sorgen.'
      },
      {
        question: 'Kann ich neue Eigenschaften und Arrays in der Baumansicht hinzufügen?',
        answer: 'Ja! Sie können problemlos neue Eigenschaften, Objekte und Arrays mit den Schnittstellen-Buttons hinzufügen. Der Baumeditor bietet intuitive Steuerelemente zum Erweitern Ihrer JSON-Struktur ohne manuelles Tippen.'
      },
      {
        question: 'Wie behandelt der Baumeditor verschiedene Datentypen?',
        answer: 'Der Editor unterstützt alle JSON-Datentypen einschließlich Strings, Zahlen, Booleans, Arrays, Objekte und Null-Werte. Jeder Typ ist visuell unterschiedlich und kann mit entsprechenden Eingabesteuerelementen bearbeitet werden.'
      },
      {
        question: 'Kann ich Änderungen im Baumeditor rückgängig machen?',
        answer: 'Der Baumeditor führt eine Änderungshistorie und Sie können zwischen Baum- und Textansicht wechseln, um Ihr JSON in verschiedenen Formaten zu sehen. Für komplexe Rückgängig-Operationen empfehlen wir jedoch, Backups Ihrer ursprünglichen Daten zu behalten.'
      },
      {
        question: 'Ist der Baumeditor für große JSON-Dateien geeignet?',
        answer: 'Ja, der Baumeditor behandelt große JSON-Strukturen effizient mit virtuellem Scrollen und Lazy Loading für verschachtelte Elemente. Komplexe Objekte werden nur beim Erweitern gerendert, wodurch eine gute Performance beibehalten wird.'
      },
      {
        question: 'Was passiert, wenn ich zwischen Baum- und Textansicht wechsle?',
        answer: 'Sie können nahtlos zwischen visueller Baumbearbeitung und Rohtext-Bearbeitung wechseln. Änderungen in beiden Ansichten werden synchronisiert, sodass Sie die beste Bearbeitungsmethode für verschiedene Aufgaben verwenden können.'
      }
    ]
  }
}; 