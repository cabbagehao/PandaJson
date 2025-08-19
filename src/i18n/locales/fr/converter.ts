export const converter = {
  title: 'Convertisseur JSON',
  h1Title: 'Transformez JSON vers Tout Format',
  seo_title: 'Convertisseur JSON Polyvalent - Conversion entre XML, YAML, CSV et JSON',
  description: 'Convertissez JSON vers YAML, XML, CSV et inversement avec transformation bidirectionnelle de format.',
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
  },
  
  // How to Use Section
  howToUse: {
    title: 'Comment Utiliser le Convertisseur JSON',
    steps: [
      {
        title: 'Sélectionner le Type de Conversion',
        description: 'Choisissez le type de conversion dont vous avez besoin dans le menu déroulant : JSON vers YAML, JSON vers XML, JSON vers CSV, ou vice versa. Chaque format a ses propres caractéristiques spécifiques.'
      },
      {
        title: 'Coller les Données Source',
        description: 'Copiez et collez vos données dans la zone d\'entrée correspondante. L\'outil détectera automatiquement le format et validera la syntaxe avant la conversion.'
      },
      {
        title: 'Convertir Instantanément',
        description: 'Cliquez sur le bouton "Convertir" pour transformer instantanément vos données vers le format cible. La conversion préserve la structure et les types de données chaque fois que possible.'
      },
      {
        title: 'Copier ou Télécharger le Résultat',
        description: 'Une fois la conversion terminée, vous pouvez copier le résultat dans le presse-papiers pour une utilisation immédiate ou le télécharger comme fichier avec l\'extension appropriée.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Questions Fréquentes sur la Conversion',
    items: [
      {
        question: 'Quels formats de conversion sont pris en charge ?',
        answer: 'Nous prenons en charge les conversions bidirectionnelles entre JSON, YAML, XML et CSV. Cela inclut JSON vers YAML, YAML vers JSON, JSON vers XML, XML vers JSON, JSON vers CSV et CSV vers JSON. Chaque conversion maintient l\'intégrité des données chaque fois que possible.'
      },
      {
        question: 'Les informations sont-elles perdues lors de la conversion entre formats ?',
        answer: 'Dans la plupart des cas, les données sont préservées complètement. Cependant, certains formats ont des limitations : CSV ne supporte pas les objets imbriqués complexes, XML peut nécessiter des ajustements des noms d\'éléments, et certains types de données peuvent être convertis en chaînes dans certains formats.'
      },
      {
        question: 'Comment l\'outil gère-t-il les structures JSON complexes lors de la conversion vers CSV ?',
        answer: 'Pour la conversion JSON vers CSV, votre JSON doit être un tableau d\'objets avec une structure similaire. Les objets imbriqués sont aplatis en utilisant la notation par points (ex: "address.street"). Les tableaux imbriqués sont sérialisés comme des chaînes JSON.'
      },
      {
        question: 'Puis-je convertir de gros fichiers entre formats ?',
        answer: 'Oui, notre convertisseur est optimisé pour gérer efficacement de gros fichiers de données. Cependant, notez que des fichiers très volumineux peuvent prendre plus de temps à traiter et pourraient être limités par la mémoire disponible du navigateur.'
      },
      {
        question: 'Les conversions XML préservent-elles les attributs et espaces de noms ?',
        answer: 'Oui, notre convertisseur gère les attributs XML en les convertissant en propriétés spéciales dans JSON (préfixées avec @). Les espaces de noms sont préservés lorsque possible. La conversion inverse (JSON vers XML) respecte ces conventions.'
      },
      {
        question: 'Que se passe-t-il si mes données source ont des erreurs de format ?',
        answer: 'L\'outil validera vos données d\'entrée avant la conversion et affichera des messages d\'erreur spécifiques si la syntaxe est invalide. Vous devez corriger ces erreurs avant que la conversion puisse procéder.'
      }
    ]
  }
}; 