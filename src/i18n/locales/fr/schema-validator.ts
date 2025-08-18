export const schemaValidator = {
  title: 'Validateur de Schéma JSON',
  h1Title: 'Validez JSON Contre les Règles de Schéma',
  seo_title: 'Validateur de Schéma JSON - Vérifiez vos Données JSON Selon les Normes',
  description: 'Vérifiez la conformité des données JSON aux spécifications de schéma. Assurez les contrats API, types de données et contraintes de champs parfaitement.',
  keywords: 'Schéma JSON,Validation JSON,Validation de schéma,Validation de structure JSON,Validation de format JSON',
  introduction: 'Le Validateur de Schéma JSON est un outil spécialisé pour vérifier la structure et la validité des données JSON par rapport aux spécifications de Schéma JSON. Il est spécialement conçu pour les développeurs, ingénieurs de données et testeurs qui ont besoin de s\'assurer que les données sont conformes aux normes prédéfinies.\n\nL\'outil fonctionne simplement : entrez les données JSON que vous souhaitez valider dans le panneau de données, entrez votre Schéma JSON dans le panneau de schéma, puis cliquez sur "Valider". L\'outil comparera les données au schéma et fournira instantanément les résultats de validation.\n\nLes fonctionnalités principales comprennent :\n• Validation complète de toutes les propriétés et valeurs des données JSON\n• Identification détaillée des erreurs avec des pointeurs précis vers les problèmes\n• Support pour des schémas JSON complexes multi-niveaux\n• Analyse approfondie des données imbriquées\n• Options de validation personnalisables avec mode strict optionnel\n• Exemples préparés pour aider à comprendre le fonctionnement de la validation\n\nQue vous validiez des réponses d\'API, assuriez la compatibilité des données avant stockage, ou vérifiiez des configurations d\'application, le Validateur de Schéma JSON vous aide à garantir que vos données JSON répondent exactement aux exigences structurelles attendues.',
  jsonData: 'Données JSON',
  jsonSchema: 'Schéma JSON',
  options: 'Options de Validation',
  validate: 'Valider',
  validating: 'Validation...',
  clear: 'Effacer',
  loadExample: 'Charger un Exemple',
  jsonPlaceholder: 'Entrez ou collez des données JSON à valider',
  schemaPlaceholder: 'Entrez ou collez le Schéma JSON',
  result: 'Résultat de la Validation',
  valid: 'Valide',
  invalid: 'Invalide',
  errorDetails: 'Détails de l\'Erreur',
  guideTitle: 'Guide du Schéma JSON',
  guideDescription: 'Le Schéma JSON est une norme pour décrire et valider les structures de données JSON. Voici quelques règles de validation courantes:',
  basicTypesTitle: 'Validation de Types de Base',
  commonRulesTitle: 'Règles de Validation Courantes',
  strictMode: 'Mode Strict',
  strictModeDescription: 'Appliquer des contraintes de validation supplémentaires non spécifiées dans la spécification JSON Schema',
  jsonParseError: 'Erreur d\'Analyse JSON',
  schemaParseError: 'Erreur d\'Analyse de Schéma',
  rules: 'Règles de Validation Courantes',
  
  // How to Use Section
  howToUse: {
    title: 'Comment Utiliser le Validateur de Schéma JSON',
    steps: [
      {
        title: 'Préparer les Données JSON',
        description: 'Collez vos données JSON que vous voulez valider dans la zone "Données JSON". Ce sont les données qui seront vérifiées contre les règles du schéma spécifié.'
      },
      {
        title: 'Définir le Schéma JSON',
        description: 'Entrez le schéma JSON qui définit la structure attendue, les types de données, les champs requis et les contraintes de validation dans la zone "Schéma JSON".'
      },
      {
        title: 'Configurer les Options',
        description: 'Ajustez les options de validation comme le mode strict selon vos besoins. Le mode strict applique des contraintes supplémentaires au-delà du standard JSON Schema.'
      },
      {
        title: 'Exécuter la Validation',
        description: 'Cliquez sur "Valider" pour vérifier si vos données JSON se conforment aux spécifications du schéma. Les résultats montreront le succès ou les erreurs spécifiques avec les détails de localisation.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Questions Fréquentes du Validateur de Schéma',
    items: [
      {
        question: 'Qu\'est-ce qu\'un schéma JSON et pourquoi devrais-je l\'utiliser ?',
        answer: 'Un schéma JSON définit la structure attendue, les types de données et les contraintes pour les données JSON. L\'utiliser assure la cohérence des données, prévient les erreurs d\'application, facilite la documentation API et permet la validation automatique des entrées utilisateur.'
      },
      {
        question: 'Quels types de validations puis-je définir dans un schéma JSON ?',
        answer: 'Les schémas JSON supportent la validation des types (string, number, boolean, array, object), les champs requis, les contraintes de longueur, les motifs d\'expressions régulières, les valeurs enum, les limites numériques, les validations de format et les validations conditionnelles complexes.'
      },
      {
        question: 'Comment interpréter les messages d\'erreur de validation ?',
        answer: 'Les messages d\'erreur incluent le chemin spécifique vers l\'élément problématique, le type de violation (ex: type incorrect, champ requis manquant), la valeur attendue versus actuelle, et des suggestions pour corriger le problème.'
      },
      {
        question: 'Puis-je valider des tableaux d\'objets avec différentes structures ?',
        answer: 'Oui, vous pouvez utiliser "oneOf", "anyOf" ou "allOf" dans votre schéma pour valider des éléments de tableau qui peuvent avoir différentes structures valides. Vous pouvez aussi définir des schémas spécifiques pour différents types d\'éléments.'
      },
      {
        question: 'Que fait exactement le mode strict ?',
        answer: 'Le mode strict applique des validations supplémentaires comme interdire les propriétés additionnelles non définies dans le schéma, imposer des contraintes de format plus rigides et rejeter les valeurs qui sont techniquement du JSON valide mais ne respectent pas les meilleures pratiques.'
      },
      {
        question: 'Puis-je utiliser cet outil pour valider les réponses API ?',
        answer: 'Absolument. Cet outil est parfait pour valider les réponses API, les données de formulaires, les fichiers de configuration et toutes données JSON contre des contrats ou spécifications prédéfinies pour assurer l\'intégrité et la cohérence.'
      }
    ]
  }
}; 