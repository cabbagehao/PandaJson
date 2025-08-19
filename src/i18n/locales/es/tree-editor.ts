export const treeEditor = {
  title: 'Editar JSON con Editor de Árbol Visual - Navegador JSON Interactivo',
  h1Title: 'Edita JSON con Interfaz de Árbol Visual',
  seo_title: 'Editar JSON con Editor de Árbol Visual - Navegador JSON Interactivo',
  description: 'Edite JSON a través de una interfaz de árbol intuitiva para navegación fácil y edición sin errores.',
  keywords: 'Editor JSON,Edición de árbol JSON,Visualización JSON,Editor de nodos JSON,Estructura de árbol JSON,Editor JSON interactivo,Editor JSON anidado,Visor de estructura JSON,Editor de nodos JSON,Editor visual de datos,Visor de jerarquía JSON,Editor JSON complejo,Estructura de árbol JSON,Herramienta de visualización JSON,Navegador JSON',
  introduction: 'El Editor de Árbol JSON visual transforma datos JSON complejos en una estructura de árbol interactiva que puedes manipular con facilidad. Ideal para gestionar estructuras de datos profundamente anidadas sin perderse en llaves y sintaxis.\n\nNuestra interfaz intuitiva te permite expandir y colapsar nodos, añadir nuevas propiedades y arrays, modificar valores o eliminar elementos no deseados con simples clics. El diseño de vista dual muestra tanto tu árbol editable como la salida JSON formateada en tiempo real.\n\nEsta herramienta es perfecta para:\n• Desarrolladores de API que trabajan con respuestas JSON complejas\n• Analistas de datos explorando conjuntos de datos intrincados\n• Gestores de contenido actualizando configuraciones basadas en JSON\n• Cualquiera que encuentre propensa a errores la edición de JSON en bruto\n\nLos cambios se validan instantáneamente, evitando errores de sintaxis mientras trabajas. Al terminar, exporta tu JSON perfectamente formateado con un solo clic.',
  viewOptions: 'Opciones de Vista',
  copyJsonResult: 'Copiar',
  copySuccessful: '¡Copiado al portapapeles!',
  downloadJsonResult: 'Descargar',
  clearJsonData: 'Limpiar',
  jsonParsingError: 'Error de Análisis JSON: ',
  validationError: 'Error de Validación: ',
  enterValidJson: 'Por favor ingrese datos JSON válidos',
  treeLabel: 'Vista de Árbol',
  treeView: 'Vista de Árbol',
  jsonLabel: 'Salida JSON',
  placeholderText: 'Pegue sus datos JSON aquí...',
  loadExample: 'Cargar Ejemplo',
  textView: 'Vista de Texto',
  jsonText: 'Texto JSON',
  jsonTree: 'Estructura de Árbol JSON',
  placeholder: 'Ingrese o pegue datos JSON aquí',
  copy: 'Copiar',
  download: 'Descargar',
  clear: 'Limpiar',
  copied: 'Copiado al portapapeles',
  copyFailed: 'Error al copiar',
  parseError: 'Error de análisis',
  unknownError: 'Error desconocido durante el análisis',
  updateError: 'Error de actualización',
  emptyInputMessage: 'Por favor, ingrese JSON válido en el editor de texto primero',
  addItem: 'Añadir Item',
  addProperty: 'Añadir Propiedad',
  key: 'Clave',
  keyName: 'Nombre de Clave',
  value: 'Valor',
  type: 'Tipo',
  expand: 'Expandir Todo',
  collapse: 'Colapsar Todo',
  ok: 'OK',
  cancel: 'Cancelar',
  emptyArray: 'Array Vacío',
  emptyObject: 'Objeto Vacío',
  deleteItem: 'Eliminar',
  editItem: 'Editar',
  undoChange: 'Deshacer',
  redoChange: 'Rehacer',
  enterValidPropertyName: 'Por favor ingrese un nombre de propiedad válido',
  add: 'Añadir',
  empty: 'Vacío',
  keyNameEmpty: 'El nombre de la clave no puede estar vacío',
  addFailed: 'Error al añadir',
  invalidValue: 'Valor inválido',
  save: 'Guardar',
  
  // How to Use Section
  howToUse: {
    title: 'Cómo Usar el Editor de Árbol JSON',
    steps: [
      {
        title: 'Cargar JSON',
        description: 'Pega tus datos JSON en el editor de texto o carga un archivo JSON. La herramienta parseará automáticamente tu JSON y mostrará su estructura como un árbol navegable e interactivo.'
      },
      {
        title: 'Navegar el Árbol',
        description: 'Usa la vista de árbol para explorar tu estructura JSON. Expande o colapsa nodos para ver objetos anidados y arrays. Cada elemento se muestra con su tipo y valor correspondiente.'
      },
      {
        title: 'Editar Valores',
        description: 'Haz clic en cualquier valor para editarlo directamente. Puedes modificar strings, números, booleanos, o cambiar tipos de datos. Añade nuevas propiedades y elementos de array usando los controles del árbol.'
      },
      {
        title: 'Exportar Resultado',
        description: 'Una vez que hayas terminado de editar, copia el JSON actualizado al portapapeles o descárgalo como archivo. Todos los cambios se reflejan instantáneamente en el JSON de salida.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Preguntas Frecuentes del Editor',
    items: [
      {
        question: '¿Qué ventajas tiene el editor de árbol sobre la edición de texto JSON?',
        answer: 'El editor de árbol previene errores de sintaxis, proporciona navegación visual de estructuras complejas, permite edición sin conocer la sintaxis JSON, y ofrece una vista clara de relaciones jerárquicas. Es especialmente útil para JSON profundamente anidado.'
      },
      {
        question: '¿Puedo añadir nuevos elementos a arrays y objetos existentes?',
        answer: 'Sí, puedes añadir fácilmente nuevos elementos usando los botones "Añadir Item" y "Añadir Propiedad". Para arrays, nuevos elementos se añaden al final. Para objetos, puedes especificar el nombre de la clave y valor para nuevas propiedades.'
      },
      {
        question: '¿Cómo cambio el tipo de datos de un valor existente?',
        answer: 'Al editar un valor, puedes usar el selector de tipo para cambiar entre string, number, boolean, null, array u object. El editor validará automáticamente el nuevo valor según el tipo seleccionado.'
      },
      {
        question: '¿Se pueden deshacer cambios en el editor de árbol?',
        answer: 'El editor mantiene un historial de cambios y soporta operaciones de deshacer/rehacer. Puedes revertir modificaciones accidentales usando los botones de deshacer o volver al JSON original en cualquier momento.'
      },
      {
        question: '¿Qué pasa si mi JSON es demasiado grande para el editor de árbol?',
        answer: 'El editor maneja eficientemente archivos JSON grandes usando renderizado perezoso y virtualización. Muy estructuras grandes pueden mostrar solo partes visibles para mantener el rendimiento mientras siguen siendo completamente editables.'
      },
      {
        question: '¿Los cambios en la vista de árbol se actualizan automáticamente en la salida JSON?',
        answer: 'Sí, el editor mantiene sincronización bidireccional entre la vista de árbol y la salida JSON. Cambios hechos en el árbol se reflejan inmediatamente en el texto JSON y viceversa, proporcionando retroalimentación en tiempo real.'
      }
    ]
  }
}; 