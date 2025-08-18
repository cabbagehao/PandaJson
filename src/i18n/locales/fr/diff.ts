export const diff = {
  title: 'Comparateur JSON',
  h1Title: 'Comparez et Mettez en Évidence les Changements JSON',
  seo_title: 'Comparer des Ensembles de Données JSON en Ligne – Mettre en Évidence Ajouts, Suppressions et Modifications',
  description: 'Comparez les fichiers JSON avec surbrillance visuelle côte à côte. Idéal pour les revues de code, suivi de versions et identifier rapidement les différences API.',
  keywords: 'différence JSON,comparer JSON,différence JSON,comparaison JSON,comparateur JSON,trouver différences JSON,suivi changements JSON,comparaison versions JSON,différence données JSON,comparaison fichiers JSON,comparaison JSON côte à côte,comparaison structure JSON,outil comparaison JSON,identifier changements JSON,suivre modifications JSON,delta JSON,différence visuelle JSON,résolution conflits JSON',
  introduction: 'Vous travaillez sur un projet d\'équipe ou suivez des changements de versions JSON ? Notre outil JSON Diff vous aide à comparer rapidement deux fichiers JSON et à visualiser les différences. Nous mettons en évidence les clés ajoutées, les entrées supprimées et les valeurs modifiées dans une vue claire et codée par couleurs, pour que vous puissiez repérer les changements d\'un coup d\'œil.\nLes cas d\'utilisation incluent :\nLa révision des pull requests avec des configurations JSON\nLe suivi de l\'historique des versions de données dans les bases de données\nLe débogage des différences entre les réponses d\'API\nPlus besoin de faire défiler des lignes de code — notre outil analyse automatiquement les objets et tableaux imbriqués, rendant les comparaisons complexes simples. Collez ou téléchargez deux fichiers JSON, et laissez notre fonction de comparaison JSON vous montrer exactement ce qui a changé. Idéal pour les développeurs, les équipes QA et les gestionnaires de données !',
  leftInput: 'Premier JSON',
  rightInput: 'Second JSON',
  result: 'Résultat de la Comparaison',
  placeholderLeft: 'Collez vos premières données JSON ici',
  placeholderRight: 'Collez vos secondes données JSON ici',
  compare: 'Comparer',
  clear: 'Effacer',
  loadExample: 'Charger un Exemple',
  processing: 'Traitement en cours...',
  error: 'Erreur de comparaison: ',
  unknown: 'Erreur inconnue lors de la comparaison',
  diffGuide: 'Guide des Différences',
  addedContent: 'Contenu Ajouté',
  removedContent: 'Contenu Supprimé',
  modifiedContent: 'Contenu Modifié',
  originalJson: 'JSON Original',
  updatedJson: 'JSON Mis à jour',
  
  // How to Use Section
  howToUse: {
    title: 'Comment Utiliser la Comparaison JSON',
    steps: [
      {
        title: 'Coller le Premier JSON',
        description: 'Collez votre premier fichier ou données JSON dans la zone d\'entrée de gauche. Celui-ci sera traité comme la version "originale" ou "antérieure" pour la comparaison.'
      },
      {
        title: 'Coller le Second JSON',
        description: 'Collez votre second fichier JSON dans la zone d\'entrée de droite. Celui-ci sera traité comme la version "nouvelle" ou "mise à jour" pour identifier les changements.'
      },
      {
        title: 'Exécuter la Comparaison',
        description: 'Cliquez sur le bouton "Comparer" pour analyser les différences entre les deux fichiers JSON. L\'outil traitera et mettra en évidence tous les changements détectés.'
      },
      {
        title: 'Examiner les Différences',
        description: 'Examinez les résultats codés par couleur : vert pour les ajouts, rouge pour les suppressions et jaune pour les modifications. Chaque changement est affiché avec son contexte complet.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Questions Fréquentes sur la Comparaison',
    items: [
      {
        question: 'Quels types de changements l\'outil de comparaison peut-il détecter ?',
        answer: 'Notre outil détecte tous les types de changements JSON : propriétés ajoutées (surlignées en vert), propriétés supprimées (surlignées en rouge), valeurs modifiées (surlignées en jaune), et changements structurels comme le réordonnancement de tableaux ou les changements de types de données.'
      },
      {
        question: 'Comment la comparaison gère-t-elle les objets JSON profondément imbriqués ?',
        answer: 'L\'outil analyse récursivement toute la structure JSON, comparant les objets imbriqués, tableaux et valeurs primitives à tout niveau de profondeur. Il montre le chemin complet vers chaque différence pour faciliter la navigation.'
      },
      {
        question: 'Peut-il comparer des fichiers JSON avec des structures complètement différentes ?',
        answer: 'Oui, l\'outil peut comparer toute paire de fichiers JSON valides, peu importe à quel point leurs structures sont différentes. Il identifiera clairement quels éléments sont présents dans l\'un mais pas dans l\'autre.'
      },
      {
        question: 'La comparaison est-elle sensible à l\'ordre pour les tableaux JSON ?',
        answer: 'Oui, la comparaison de tableaux est sensible à l\'ordre par défaut. Si les mêmes éléments apparaissent dans un ordre différent, ils seront affichés comme des différences. C\'est important pour les cas où l\'ordre des éléments a une signification.'
      },
      {
        question: 'Quelle taille peuvent avoir les fichiers JSON pour la comparaison ?',
        answer: 'L\'outil peut gérer efficacement de gros fichiers JSON, mais des fichiers très volumineux (plusieurs mégaoctets) peuvent prendre plus de temps à traiter et pourraient être limités par la mémoire disponible du navigateur.'
      },
      {
        question: 'Les résultats de comparaison peuvent-ils être exportés ou sauvegardés ?',
        answer: 'Actuellement, vous pouvez copier les résultats de la comparaison ou prendre des captures d\'écran des différences surlignées. Les résultats sont affichés dans un format visuellement clair qui est facile à partager avec les membres de l\'équipe.'
      }
    ]
  }
}; 