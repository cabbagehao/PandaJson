export const treeEditor = {
  title: 'Éditeur d\'Arborescence JSON',
  h1Title: 'Éditez JSON avec une Interface d\'Arbre Visuel',
  seo_title: 'Éditeur Visuel JSON – Modifier des Données JSON Complexes avec une Vue Arborescente Interactive',
  description: 'Éditez du JSON complexe et imbriqué via une interface arborescente intuitive. Naviguez et modifiez des structures profondes sans erreurs de syntaxe. Parfait pour les configurations.',
  keywords: 'Éditeur JSON,Édition arborescente JSON,Visualisation JSON,Éditeur de nœuds JSON,Structure arborescente JSON,Éditeur JSON interactif,Éditeur JSON imbriqué,Visualiseur de structure JSON,Éditeur visuel de données,Explorateur de hiérarchie JSON,Éditeur JSON complexe,Outil de visualisation JSON,Navigateur JSON',
  introduction: 'L\'éditeur visuel d\'arborescence JSON transforme les données JSON complexes en une structure arborescente interactive facilement manipulable. Idéal pour travailler avec des structures de données profondément imbriquées sans s\'embrouiller dans les accolades et la syntaxe.\n\nNotre interface intuitive vous permet de développer et de réduire les nœuds, d\'ajouter de nouvelles propriétés et tableaux, de modifier des valeurs ou de supprimer des éléments inutiles par de simples clics. La vue à double disposition affiche à la fois l\'arborescence modifiable et la sortie JSON formatée en temps réel.\n\nCet outil est parfait pour :\n• Les développeurs d\'API travaillant avec des réponses JSON complexes\n• Les analystes de données explorant des ensembles de données complexes\n• Les gestionnaires de contenu mettant à jour des configurations basées sur JSON\n• Toute personne trouvant l\'édition de JSON brut sujette aux erreurs\n\nLes modifications sont vérifiées instantanément, évitant les erreurs de syntaxe pendant que vous travaillez. Une fois terminé, vous pouvez exporter du JSON parfaitement formaté en un seul clic.',
  viewOptions: 'Options d\'affichage',
  copyJsonResult: 'Copier',
  copySuccessful: 'Copié dans le presse-papiers !',
  downloadJsonResult: 'Télécharger',
  clearJsonData: 'Effacer',
  jsonParsingError: 'Erreur d\'analyse JSON : ',
  validationError: 'Erreur de validation : ',
  enterValidJson: 'Veuillez entrer des données JSON valides',
  treeLabel: 'Vue Arborescente',
  treeView: 'Vue Arborescente',
  jsonLabel: 'Sortie JSON',
  placeholderText: 'Collez vos données JSON ici...',
  loadExample: 'Charger un exemple',
  textView: 'Vue Texte',
  jsonText: 'Texte JSON',
  jsonTree: 'Arborescence JSON',
  placeholder: 'Entrez ou collez des données JSON ici',
  copy: 'Copier',
  download: 'Télécharger',
  clear: 'Effacer',
  copied: 'Copié dans le presse-papiers',
  copyFailed: 'Échec de la copie',
  parseError: 'Erreur d\'analyse',
  unknownError: 'Erreur d\'analyse inconnue',
  updateError: 'Erreur de mise à jour',
  emptyInputMessage: 'Veuillez d\'abord entrer un JSON valide dans l\'éditeur de texte',
  // Traductions spécifiques à l'éditeur d'arborescence
  addItem: 'Ajouter un élément',
  addProperty: 'Ajouter une propriété',
  key: 'Clé',
  keyName: 'Nom de la clé',
  value: 'Valeur',
  type: 'Type',
  expand: 'Tout développer',
  collapse: 'Tout réduire',
  ok: 'OK',
  cancel: 'Annuler',
  emptyArray: 'Tableau vide',
  emptyObject: 'Objet vide',
  deleteItem: 'Supprimer',
  editItem: 'Modifier',
  undoChange: 'Annuler',
  redoChange: 'Rétablir',
  enterValidPropertyName: 'Veuillez entrer un nom de propriété valide',
  add: 'Ajouter',
  empty: 'Vide',
  keyNameEmpty: 'Le nom de la clé ne peut pas être vide',
  addFailed: 'Échec de l\'ajout',
  invalidValue: 'Valeur invalide',
  save: 'Enregistrer',
  
  // How to Use Section
  howToUse: {
    title: 'Comment Utiliser l\'Éditeur d\'Arbre JSON',
    steps: [
      {
        title: 'Charger le JSON',
        description: 'Collez vos données JSON dans l\'éditeur de texte ou chargez un fichier JSON. L\'outil analysera automatiquement votre JSON et affichera sa structure comme un arbre navigable et interactif.'
      },
      {
        title: 'Naviguer dans l\'Arbre',
        description: 'Utilisez la vue arborescente pour explorer votre structure JSON. Développez ou réduisez les nœuds pour voir les objets imbriqués et les tableaux. Chaque élément est affiché avec son type et sa valeur correspondants.'
      },
      {
        title: 'Éditer les Valeurs',
        description: 'Cliquez sur n\'importe quelle valeur pour l\'éditer directement. Vous pouvez modifier les chaînes, nombres, booléens, ou changer les types de données. Ajoutez de nouvelles propriétés et éléments de tableau en utilisant les contrôles de l\'arbre.'
      },
      {
        title: 'Exporter le Résultat',
        description: 'Une fois que vous avez terminé l\'édition, copiez le JSON mis à jour dans le presse-papiers ou téléchargez-le comme fichier. Tous les changements se reflètent instantanément dans la sortie JSON.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Questions Fréquentes de l\'Éditeur',
    items: [
      {
        question: 'Quels sont les avantages de l\'éditeur d\'arbre par rapport à l\'édition de texte JSON ?',
        answer: 'L\'éditeur d\'arbre prévient les erreurs de syntaxe, fournit une navigation visuelle des structures complexes, permet l\'édition sans connaître la syntaxe JSON, et offre une vue claire des relations hiérarchiques. Il est particulièrement utile pour JSON profondément imbriqué.'
      },
      {
        question: 'Puis-je ajouter de nouveaux éléments aux tableaux et objets existants ?',
        answer: 'Oui, vous pouvez facilement ajouter de nouveaux éléments en utilisant les boutons "Ajouter un élément" et "Ajouter une propriété". Pour les tableaux, de nouveaux éléments sont ajoutés à la fin. Pour les objets, vous pouvez spécifier le nom de clé et la valeur pour les nouvelles propriétés.'
      },
      {
        question: 'Comment changer le type de données d\'une valeur existante ?',
        answer: 'Lors de l\'édition d\'une valeur, vous pouvez utiliser le sélecteur de type pour basculer entre string, number, boolean, null, array ou object. L\'éditeur validera automatiquement la nouvelle valeur selon le type sélectionné.'
      },
      {
        question: 'Les changements dans l\'éditeur d\'arbre peuvent-ils être annulés ?',
        answer: 'L\'éditeur maintient un historique des changements et supporte les opérations d\'annulation/rétablissement. Vous pouvez annuler les modifications accidentelles en utilisant les boutons d\'annulation ou revenir au JSON original à tout moment.'
      },
      {
        question: 'Que se passe-t-il si mon JSON est trop volumineux pour l\'éditeur d\'arbre ?',
        answer: 'L\'éditeur gère efficacement les gros fichiers JSON en utilisant le rendu paresseux et la virtualisation. Les très grandes structures peuvent afficher seulement les parties visibles pour maintenir les performances tout en restant entièrement éditables.'
      },
      {
        question: 'Les changements dans la vue arborescente se mettent-ils à jour automatiquement dans la sortie JSON ?',
        answer: 'Oui, l\'éditeur maintient une synchronisation bidirectionnelle entre la vue arborescente et la sortie JSON. Les changements faits dans l\'arbre se reflètent immédiatement dans le texte JSON et vice versa, fournissant un retour en temps réel.'
      }
    ]
  }
}; 