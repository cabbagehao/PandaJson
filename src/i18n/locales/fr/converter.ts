export const converter = {
  title: 'Convertisseur JSON',
  description: 'Convertir des données JSON vers d\'autres formats (YAML, XML, CSV), ou convertir d\'autres formats vers JSON.',
  keywords: 'Convertisseur JSON,JSON vers XML,JSON vers YAML,XML vers JSON,YAML vers JSON,CSV vers JSON,JSON vers CSV',
  options: {
    title: 'Options de Conversion',
    conversionType: 'Type de Conversion',
    jsonTo: 'JSON vers',
    toJson: 'Vers JSON',
    jsonToYaml: 'JSON vers YAML',
    jsonToXml: 'JSON vers XML',
    jsonToCsv: 'JSON vers CSV',
    yamlToJson: 'YAML vers JSON',
    xmlToJson: 'XML vers JSON',
    csvToJson: 'CSV vers JSON'
  },
  input: {
    defaultLabel: 'Entrée',
    jsonLabel: 'Entrée JSON',
    yamlLabel: 'Entrée YAML',
    xmlLabel: 'Entrée XML',
    csvLabel: 'Entrée CSV',
    defaultPlaceholder: 'Collez les données ici',
    jsonPlaceholder: 'Collez les données JSON ici',
    yamlPlaceholder: 'Collez les données YAML ici',
    xmlPlaceholder: 'Collez les données XML ici',
    csvPlaceholder: 'Collez les données CSV ici'
  },
  output: {
    defaultLabel: 'Sortie',
    jsonLabel: 'Sortie JSON',
    yamlLabel: 'Sortie YAML',
    xmlLabel: 'Sortie XML',
    csvLabel: 'Sortie CSV',
    placeholder: 'Le résultat de la conversion apparaîtra ici'
  },
  actions: {
    convert: 'Convertir',
    processing: 'Traitement...',
    copy: 'Copier',
    download: 'Télécharger',
    clear: 'Effacer'
  },
  errors: {
    emptyInput: 'Veuillez entrer des données à convertir',
    conversionFailed: 'Erreur de conversion',
    unsupportedConversion: 'Type de conversion non pris en charge',
    invalidJson: 'JSON invalide',
    invalidYaml: 'YAML invalide',
    invalidXml: 'XML invalide',
    invalidCsv: 'CSV invalide',
    jsonNotArray: 'JSON doit être un tableau d\'objets pour la conversion vers CSV',
    unknownError: 'Une erreur inconnue s\'est produite pendant la conversion'
  },
  alerts: {
    copySuccess: 'Copié dans le presse-papiers',
    copyFailed: 'Échec de la copie'
  }
}; 