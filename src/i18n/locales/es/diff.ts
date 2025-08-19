export const diff = {
  title: 'Comparar Archivos JSON en Línea - Detector Visual de Diferencias JSON',
  h1Title: 'Compara y Resalta Cambios en JSON',
  seo_title: 'Comparar Archivos JSON en Línea - Detector Visual de Diferencias JSON',
  description: 'Compare archivos JSON visualmente con resaltado lado a lado para revisiones de código.',
  keywords: 'diferencia JSON,comparar JSON,diferencia JSON,comparación JSON,comparador JSON,encontrar diferencias JSON,rastreador de cambios JSON,comparación de versiones JSON,diferencia de datos JSON,comparación de archivos JSON,comparación JSON lado a lado,comparación de estructura JSON,herramienta de comparación JSON,identificar cambios JSON,rastrear modificaciones JSON,delta JSON,diferencia visual JSON,resolución de conflictos JSON',
  introduction: '¿Trabajando en un proyecto de equipo o haciendo seguimiento a cambios de versiones JSON? Nuestra herramienta JSON Diff te ayuda a comparar rápidamente dos archivos JSON y visualizar diferencias. Resaltamos claves añadidas, entradas eliminadas y valores modificados en una vista clara y codificada por colores, para que puedas detectar cambios de un vistazo.\nLos casos de uso incluyen:\nRevisión de solicitudes de extracción con configuraciones JSON\nSeguimiento del historial de versiones de datos en bases de datos\nDepuración de discrepancias entre respuestas de API\n¡No más desplazamiento a través de líneas de código—nuestra herramienta analiza automáticamente objetos y arrays anidados, haciendo simples las comparaciones complejas. Pega o carga dos archivos JSON, y deja que nuestra función de comparación JSON te muestre exactamente lo que ha cambiado. ¡Ideal para desarrolladores, equipos de QA y gestores de datos!',
  leftInput: 'Primer JSON',
  rightInput: 'Segundo JSON',
  result: 'Resultado de Comparación',
  placeholderLeft: 'Pegue sus primeros datos JSON aquí',
  placeholderRight: 'Pegue sus segundos datos JSON aquí',
  compare: 'Comparar',
  clear: 'Limpiar',
  loadExample: 'Cargar Ejemplo',
  processing: 'Procesando...',
  error: 'Error de comparación: ',
  unknown: 'Error desconocido durante la comparación',
  diffGuide: 'Guía de Diferencias',
  addedContent: 'Contenido Añadido',
  removedContent: 'Contenido Eliminado',
  modifiedContent: 'Contenido Modificado',
  originalJson: 'JSON Original',
  updatedJson: 'JSON Actualizado',
  
  // How to Use Section
  howToUse: {
    title: 'Cómo Usar la Comparación JSON',
    steps: [
      {
        title: 'Pegar Primer JSON',
        description: 'Pega tu primer archivo o datos JSON en el área de entrada izquierda. Este será tratado como la versión "original" o "anterior" para la comparación.'
      },
      {
        title: 'Pegar Segundo JSON',
        description: 'Pega tu segundo archivo JSON en el área de entrada derecha. Este será tratado como la versión "nueva" o "actualizada" para identificar cambios.'
      },
      {
        title: 'Ejecutar Comparación',
        description: 'Haz clic en el botón "Comparar" para analizar las diferencias entre ambos archivos JSON. La herramienta procesará y resaltará todos los cambios detectados.'
      },
      {
        title: 'Revisar Diferencias',
        description: 'Examina los resultados codificados por colores: verde para adiciones, rojo para eliminaciones y amarillo para modificaciones. Cada cambio se muestra con su contexto completo.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Preguntas Frecuentes de Comparación',
    items: [
      {
        question: '¿Qué tipos de cambios puede detectar la herramienta de comparación?',
        answer: 'Nuestra herramienta detecta todos los tipos de cambios JSON: propiedades añadidas (resaltadas en verde), propiedades eliminadas (resaltadas en rojo), valores modificados (resaltadas en amarillo), y cambios en la estructura como reordenación de arrays o cambios en tipos de datos.'
      },
      {
        question: '¿Cómo maneja la comparación objetos JSON profundamente anidados?',
        answer: 'La herramienta analiza recursivamente toda la estructura JSON, comparando objetos anidados, arrays y valores primitivos en cualquier nivel de profundidad. Muestra la ruta completa a cada diferencia para facilitar la navegación.'
      },
      {
        question: '¿Puede comparar archivos JSON con estructuras completamente diferentes?',
        answer: 'Sí, la herramienta puede comparar cualquier par de archivos JSON válidos, independientemente de qué tan diferentes sean sus estructuras. Identificará claramente qué elementos están presentes en uno pero no en el otro.'
      },
      {
        question: '¿Es sensible al orden la comparación para arrays JSON?',
        answer: 'Sí, la comparación de arrays es sensible al orden por defecto. Si los mismos elementos aparecen en diferente orden, se mostrarán como diferencias. Esto es importante para casos donde el orden de los elementos tiene significado.'
      },
      {
        question: '¿Qué tan grandes pueden ser los archivos JSON para comparación?',
        answer: 'La herramienta puede manejar archivos JSON grandes eficientemente, pero archivos muy grandes (varios megabytes) pueden tomar más tiempo para procesarse y podrían estar limitados por la memoria disponible del navegador.'
      },
      {
        question: '¿Los resultados de comparación se pueden exportar o guardar?',
        answer: 'Actualmente, puedes copiar los resultados de la comparación o tomar capturas de pantalla de las diferencias resaltadas. Los resultados se muestran en un formato visualmente claro que es fácil de compartir con miembros del equipo.'
      }
    ]
  }
}; 