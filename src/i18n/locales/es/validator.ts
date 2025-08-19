export const validator = {
  title: 'Validar JSON en Línea - Verificar Errores de Sintaxis y Corregir Código JSON',
  h1Title: 'Verifica la Sintaxis JSON y Encuentra Errores',
  seo_title: 'Validar JSON en Línea - Verificar Errores de Sintaxis y Corregir Código JSON',
  description: 'Verifique errores de sintaxis JSON al instante con ubicación precisa y comentarios detallados.',
  keywords: 'Validador JSON,Validación JSON,Comprobación de formato JSON,Comprobación de sintaxis JSON,Localizador de errores JSON,Validador JSON en línea,Corrección de errores JSON,Error de análisis JSON,Detección de errores de sintaxis,Herramienta de depuración JSON,Validación de estructura JSON,Buscador de ubicación de errores,Mensajes de error JSON,Corregir sintaxis JSON,Validador de código JSON',
  introduction: 'El Validador JSON te ayuda a identificar rápidamente errores de sintaxis y problemas estructurales en tus datos JSON. Ya sea que estés depurando una API web, trabajando con archivos de configuración o procesando fuentes de datos, nuestra herramienta proporciona retroalimentación instantánea sobre la validez de tu JSON.\n\nCuando se detectan errores, el validador señala la ubicación exacta del problema y proporciona una guía clara y práctica sobre cómo solucionarlo. Cada error se resalta con información de línea y columna, haciendo que la solución de problemas sea eficiente y directa.\n\nLas características principales incluyen:\n• Validación instantánea de sintaxis contra el estándar JSON\n• Ubicación precisa de errores con números de línea y columna\n• Descripciones detalladas de errores para una resolución rápida de problemas\n• Soporte para documentos JSON grandes\n• Interfaz limpia e intuitiva con retroalimentación en tiempo real\n• Validación con un solo clic con resultados completos\n\nSimplemente pega tu JSON y deja que nuestro validador compruebe si hay errores, asegurando que tus datos estén correctamente formateados antes de usarlos en tus aplicaciones.',
  input: 'Entrada JSON',
  validate: 'Validar JSON',
  validJson: 'JSON Válido',
  invalidJson: 'JSON Inválido',
  errorDetails: 'Detalles del Error',
  errorAt: 'Error en línea {line}, columna {column}',
  expectedToken: 'Token esperado: {token}',
  unexpectedToken: 'Token inesperado: {token}',
  missingComma: 'Falta coma o corchetes no coincidentes',
  extraComma: 'Coma extra',
  unclosedString: 'Cadena no cerrada',
  unclosedObject: 'Objeto no cerrado',
  unclosedArray: 'Array no cerrado',
  invalidProperty: 'Nombre de propiedad inválido',
  duplicateKey: 'Clave duplicada',
  extraData: 'Datos adicionales después del final del JSON',
  missingValue: 'Valor faltante',
  missingColon: 'Falta dos puntos',
  repairSuggestion: 'Sugerencia de Reparación',
  errorType: 'Tipo de Error',
  errorMessage: 'Mensaje de Error',
  position: 'Posición',
  contextLine: 'Línea de Contexto',
  placeholder: 'Introduzca aquí el JSON para validar',
  jsonStructure: 'Estructura JSON',
  jsonSyntaxError: 'Error de Sintaxis JSON',
  parseSuccess: 'Analizado con éxito, contiene {count} nodos de datos.',
  unknownError: 'Error desconocido',
  
  // How to Use Section
  howToUse: {
    title: 'Cómo Usar el Validador JSON',
    steps: [
      {
        title: 'Introduce tu JSON',
        description: 'Pega o escribe tus datos JSON en el área de entrada. La herramienta acepta cualquier estructura JSON, desde objetos simples hasta arrays complejos anidados.'
      },
      {
        title: 'Validación Automática',
        description: 'El validador analiza tu JSON instantáneamente mientras escribes o después de pegar. Detecta errores de sintaxis en tiempo real para una retroalimentación inmediata.'
      },
      {
        title: 'Revisar Errores',
        description: 'Si se detectan errores, la herramienta muestra la ubicación exacta (línea y columna) junto con una descripción detallada del problema para facilitar la corrección.'
      },
      {
        title: 'Confirmar Validez',
        description: 'Una vez que tu JSON es válido, verás una confirmación de éxito. Ahora puedes usar tus datos JSON validados con confianza en tus proyectos.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Preguntas Frecuentes sobre Validación',
    items: [
      {
        question: '¿Qué tipos de errores JSON puede detectar esta herramienta?',
        answer: 'Nuestro validador detecta todos los errores de sintaxis JSON comunes incluyendo: comas faltantes o extra, llaves/corchetes no cerrados, comillas faltantes, nombres de propiedades inválidos, claves duplicadas, caracteres escapados incorrectos y estructuras de datos malformadas.'
      },
      {
        question: '¿Por qué es importante validar JSON antes de usarlo?',
        answer: 'La validación JSON previene errores de tiempo de ejecución, fallos de aplicación y problemas de transmisión de datos. Los datos JSON inválidos pueden romper APIs, causar errores de análisis en aplicaciones y llevar a comportamientos inesperados en sistemas que dependen de estructuras de datos correctas.'
      },
      {
        question: '¿Puede manejar archivos JSON muy grandes?',
        answer: 'Sí, nuestro validador está optimizado para manejar eficientemente documentos JSON grandes. Puede procesar estructuras complejas profundamente anidadas y arrays extensos manteniendo un rendimiento rápido de validación.'
      },
      {
        question: '¿Qué significa el conteo de nodos de datos en los resultados de validación?',
        answer: 'El conteo de nodos representa el número total de elementos de datos en tu JSON, incluyendo objetos, arrays, strings, números, booleanos y valores null. Esto te da una idea de la complejidad y tamaño de tu estructura de datos.'
      },
      {
        question: '¿Los mensajes de error ayudan a localizar problemas específicos?',
        answer: 'Absolutamente. Nuestros mensajes de error incluyen números de línea y columna específicos, tipo de error y descripciones claras. Esto te permite navegar directamente al problema y entender exactamente qué necesita ser corregido.'
      },
      {
        question: '¿Se guarda mi JSON en sus servidores durante la validación?',
        answer: 'No, toda la validación JSON ocurre localmente en tu navegador. Tus datos permanecen completamente privados y nunca se envían a nuestros servidores, garantizando seguridad total de datos sensibles o propietarios.'
      }
    ]
  }
}; 