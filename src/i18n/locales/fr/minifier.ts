export const minifier = {
  title: 'Minificateur JSON',
  h1Title: 'Compressez et Optimisez Votre JSON',
  seo_title: 'Minificateur JSON – Optimisez et Compressez vos Données JSON pour le Web',
  description: 'Compressez JSON en supprimant les espaces et le formatage pour réduire la taille jusqu’à 50%. Optimisez la vitesse de transmission pour APIs et applications mobiles efficacement.',
  keywords: 'Minificateur JSON,Minification JSON,Optimisation de taille JSON,Suppression d\'espaces blancs JSON,Compresseur JSON',
  input: 'JSON d\'Entrée',
  output: 'Résultat Minifié',
  placeholder: 'Collez vos données JSON ici pour minifier',
  minify: 'Minifier JSON',
  copy: 'Copier',
  download: 'Télécharger',
  clear: 'Tout Effacer',
  error: 'Données JSON invalides, veuillez vérifier la syntaxe',
  copied: 'Copié dans le presse-papiers',
  copyFailed: 'Échec de la copie',
  compressionResult: 'Résultat de la Compression',
  originalSize: 'Taille Originale',
  compressedSize: 'Taille Compressée',
  compressionRatio: 'Taux de Compression',
  
  // How to Use Section
  howToUse: {
    title: 'Comment Utiliser le Minificateur JSON',
    steps: [
      {
        title: 'Coller le JSON Formaté',
        description: 'Copiez et collez votre JSON formaté ou indenté dans la zone d\'entrée. L\'outil accepte le JSON de toute taille avec tout niveau d\'espacement ou d\'indentation.'
      },
      {
        title: 'Minifier Instantanément',
        description: 'Cliquez sur le bouton "Minifier JSON" pour supprimer instantanément tous les espaces blancs inutiles, sauts de ligne et indentation tout en préservant la structure des données.'
      },
      {
        title: 'Examiner les Statistiques',
        description: 'Examinez les métriques de compression qui montrent la taille originale vs compressée, le taux de compression et le pourcentage de réduction de taille obtenu.'
      },
      {
        title: 'Copier ou Télécharger',
        description: 'Utilisez le bouton copier pour obtenir le JSON minifié dans votre presse-papiers pour une utilisation immédiate, ou téléchargez-le comme fichier compressé pour votre application.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Questions Fréquentes sur la Minification',
    items: [
      {
        question: 'Que fait exactement la minification JSON ?',
        answer: 'La minification JSON supprime tous les espaces blancs inutiles, sauts de ligne, tabulations et indentation de votre JSON tout en préservant la structure et les données exactes. Cela réduit significativement la taille du fichier sans changer la fonctionnalité.'
      },
      {
        question: 'Combien la minification peut-elle réduire la taille ?',
        answer: 'Le degré de réduction dépend de la quantité de formatage que votre JSON original possède. Typiquement, vous pouvez attendre des réductions de 20-60% de la taille de fichier. Le JSON hautement indenté avec beaucoup d\'espacement peut voir des réductions encore plus importantes.'
      },
      {
        question: 'La minification affecte-t-elle la fonctionnalité du JSON ?',
        answer: 'Non, la minification n\'affecte pas la fonctionnalité de votre JSON de quelque manière que ce soit. Les données, structure, types et valeurs restent exactement les mêmes. Seul le formatage cosmétique est supprimé, rendant le fichier plus petit mais fonctionnellement identique.'
      },
      {
        question: 'Quand devrais-je minifier mon JSON ?',
        answer: 'Minifiez le JSON pour les applications de production, le stockage de données, la transmission API, l\'optimisation de bande passante et quand la taille de fichier importe. Évitez la minification pendant le développement quand vous avez besoin de lisibilité pour le débogage.'
      },
      {
        question: 'Puis-je rétablir le JSON minifié vers un format lisible ?',
        answer: 'Oui, vous pouvez utiliser notre Formateur JSON pour rétablir le JSON minifié vers un format lisible et bien indenté. La minification est complètement réversible sans perte de données.'
      },
      {
        question: 'Y a-t-il des limites de taille pour les fichiers JSON qui peuvent être minifiés ?',
        answer: 'Notre outil peut gérer efficacement de gros fichiers JSON. Cependant, des fichiers extrêmement volumineux peuvent être limités par la mémoire disponible du navigateur et pourraient prendre plus de temps à traiter.'
      }
    ]
  }
}; 