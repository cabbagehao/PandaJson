export const converter = {
  title: 'Convertisseur JSON',
  h1Title: 'Transformez JSON vers Tout Format',
  seo_title: 'Convertisseur JSON Polyvalent - Conversion entre XML, YAML, CSV et JSON',
  description: 'Convertissez facilement JSON vers YAML, XML, CSV et inversement. Parfait pour migration de données, gestion de configuration et flux d’échange multiplateformes.',
  keywords: 'Convertisseur JSON,JSON vers XML,JSON vers YAML,XML vers JSON,YAML vers JSON,CSV vers JSON,JSON vers CSV',
  introduction: 'Le Convertisseur JSON est un outil complet qui simplifie le processus de conversion entre les formats de données courants : JSON, XML, YAML et CSV. Conçu pour faire gagner du temps aux développeurs, analystes de données et rédacteurs techniques, il propose une interface utilisateur intuitive qui rend la conversion de données transparente.\n\nAvec des options de conversion bidirectionnelle, vous pouvez facilement transformer n\'importe lequel de ces formats en un autre. Il suffit de sélectionner le type de conversion souhaité, de coller les données source et de cliquer sur "Convertir". Le résultat apparaît instantanément, prêt à être copié ou téléchargé.\n\nCaractéristiques principales :\n• Conversion entre JSON et XML, YAML, CSV dans les deux sens\n• Traitement rapide des fichiers de données volumineux\n• Conversion précise préservant la hiérarchie des données\n• Format de sortie propre et lisible\n• Options de conversion avancées pour un contrôle précis des sorties\n\nLe convertisseur est idéal pour les développeurs travaillant avec plusieurs API, les gestionnaires de contenu qui doivent changer les formats de données, et les analystes de données traitant diverses sources. Il gère les cas de conversion les plus complexes tout en préservant l\'intégrité de vos données.',
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