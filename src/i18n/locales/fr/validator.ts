export const validator = {
  title: 'Validateur JSON',
  h1Title: 'Vérifiez la Syntaxe JSON et Trouvez les Erreurs',
  seo_title: 'Validateur JSON – Vérifiez la Syntaxe JSON et Trouvez les Erreurs Instantanément',
  description: 'Vérifiez les erreurs de syntaxe JSON instantanément avec localisation précise et retour détaillé.',
  keywords: 'Validateur JSON,Validation JSON,Vérification de format JSON,Vérification de syntaxe JSON,Localisateur d\'erreurs JSON,Validateur JSON en ligne,Correction d\'erreurs JSON,Erreur d\'analyse JSON,Détection d\'erreurs de syntaxe,Outil de débogage JSON,Validation de structure JSON,Localisateur de position d\'erreur,Messages d\'erreur JSON,Correction de syntaxe JSON,Validateur de code JSON',
  introduction: 'Le Validateur JSON vous aide à identifier rapidement les erreurs de syntaxe et les problèmes structurels dans vos données JSON. Que vous déboguiez une API web, travailliez avec des fichiers de configuration ou traitiez des flux de données, notre outil vous fournit un retour instantané sur la validité de votre JSON.\n\nLorsque des erreurs sont détectées, le validateur pointe l\'emplacement exact du problème et fournit des conseils clairs et pratiques sur la façon de le résoudre. Chaque erreur est mise en évidence avec des informations de ligne et de colonne, rendant le dépannage efficace et direct.\n\nLes fonctionnalités principales incluent :\n• Validation syntaxique instantanée selon le standard JSON\n• Localisation précise des erreurs avec numéros de ligne et de colonne\n• Descriptions détaillées des erreurs pour une résolution rapide des problèmes\n• Support pour les grands documents JSON\n• Interface propre et intuitive avec retour en temps réel\n• Validation en un clic avec des résultats complets\n\nCollez simplement votre JSON et laissez notre validateur vérifier les erreurs, assurant que vos données sont correctement formatées avant de les utiliser dans vos applications.',
  input: 'JSON d\'Entrée',
  validate: 'Valider JSON',
  validJson: 'JSON Valide',
  invalidJson: 'JSON Invalide',
  errorDetails: 'Détails de l\'Erreur',
  errorAt: 'Erreur à la ligne {line}, colonne {column}',
  expectedToken: 'Jeton attendu: {token}',
  unexpectedToken: 'Jeton inattendu: {token}',
  missingComma: 'Virgule manquante ou accolades non correspondantes',
  extraComma: 'Virgule supplémentaire',
  unclosedString: 'Chaîne non fermée',
  unclosedObject: 'Objet non fermé',
  unclosedArray: 'Tableau non fermé',
  invalidProperty: 'Nom de propriété invalide',
  duplicateKey: 'Clé dupliquée',
  extraData: 'Données supplémentaires après la fin du JSON',
  missingValue: 'Valeur manquante',
  missingColon: 'Deux-points manquant',
  repairSuggestion: 'Suggestion de Réparation',
  errorType: 'Type d\'Erreur',
  errorMessage: 'Message d\'Erreur',
  position: 'Position',
  contextLine: 'Ligne de Contexte',
  placeholder: 'Entrez le JSON à valider ici',
  jsonStructure: 'Structure JSON',
  jsonSyntaxError: 'Erreur de Syntaxe JSON',
  parseSuccess: 'Analysé avec succès, contenant {count} nœuds de données.',
  unknownError: 'Erreur inconnue',
  
  // How to Use Section
  howToUse: {
    title: 'Comment Utiliser le Validateur JSON',
    steps: [
      {
        title: 'Entrez Votre JSON',
        description: 'Collez ou tapez vos données JSON dans la zone d\'entrée. L\'outil accepte toute structure JSON, des objets simples aux tableaux complexes imbriqués.'
      },
      {
        title: 'Validation Automatique',
        description: 'Le validateur analyse votre JSON instantanément pendant que vous tapez ou après avoir collé. Il détecte les erreurs de syntaxe en temps réel pour un retour immédiat.'
      },
      {
        title: 'Examinez les Erreurs',
        description: 'Si des erreurs sont détectées, l\'outil montre l\'emplacement exact (ligne et colonne) avec une description détaillée du problème pour faciliter la correction.'
      },
      {
        title: 'Confirmez la Validité',
        description: 'Une fois que votre JSON est valide, vous verrez une confirmation de succès. Vous pouvez maintenant utiliser vos données JSON validées avec confiance dans vos projets.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Questions Fréquentes sur la Validation',
    items: [
      {
        question: 'Quels types d\'erreurs JSON cet outil peut-il détecter ?',
        answer: 'Notre validateur détecte toutes les erreurs de syntaxe JSON courantes incluant : virgules manquantes ou supplémentaires, accolades/crochets non fermés, guillemets manquants, noms de propriétés invalides, clés dupliquées, caractères d\'échappement incorrects et structures de données malformées.'
      },
      {
        question: 'Pourquoi est-il important de valider le JSON avant de l\'utiliser ?',
        answer: 'La validation JSON prévient les erreurs d\'exécution, les pannes d\'application et les problèmes de transmission de données. Les données JSON invalides peuvent casser les APIs, causer des erreurs d\'analyse dans les applications et conduire à des comportements inattendus dans les systèmes qui dépendent de structures de données correctes.'
      },
      {
        question: 'Peut-il gérer de très gros fichiers JSON ?',
        answer: 'Oui, notre validateur est optimisé pour gérer efficacement de gros documents JSON. Il peut traiter des structures complexes profondément imbriquées et des tableaux étendus tout en maintenant une performance de validation rapide.'
      },
      {
        question: 'Que signifie le décompte des nœuds de données dans les résultats de validation ?',
        answer: 'Le décompte des nœuds représente le nombre total d\'éléments de données dans votre JSON, incluant les objets, tableaux, chaînes, nombres, booléens et valeurs null. Cela vous donne une idée de la complexité et de la taille de votre structure de données.'
      },
      {
        question: 'Les messages d\'erreur aident-ils à localiser des problèmes spécifiques ?',
        answer: 'Absolument. Nos messages d\'erreur incluent des numéros de ligne et de colonne spécifiques, le type d\'erreur et des descriptions claires. Cela vous permet de naviguer directement vers le problème et de comprendre exactement ce qui doit être corrigé.'
      },
      {
        question: 'Mon JSON est-il sauvegardé sur vos serveurs pendant la validation ?',
        answer: 'Non, toute la validation JSON se produit localement dans votre navigateur. Vos données restent complètement privées et ne sont jamais envoyées à nos serveurs, garantissant une sécurité totale des données sensibles ou propriétaires.'
      }
    ]
  }
}; 