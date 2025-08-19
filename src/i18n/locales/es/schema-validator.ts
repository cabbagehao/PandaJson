export const schemaValidator = {
  title: 'Validar JSON Contra Esquema - Verificar Integridad de Estructura de Datos',
  h1Title: 'Valida JSON Contra Reglas de Esquema',
  seo_title: 'Validar JSON Contra Esquema - Verificar Integridad de Estructura de Datos',
  description: 'Valide JSON contra reglas de esquema para integridad de datos y cumplimiento de contratos API.',
  keywords: 'Esquema JSON,Validación JSON,Validación de esquema,Validación de estructura JSON,Validación de formato JSON,Validador de esquema JSON,Verificador de conformidad de esquema,Integridad de datos JSON,Validar contra esquema,Validación de restricciones JSON,Validación de tipos,Validación estructural,Validación de patrones,Validación de reglas JSON,Validador de campos requeridos,Verificador de formato JSON,Validador de contrato JSON,Validación de esquema API',
  introduction: '¿Necesitas asegurarte de que tus datos JSON coincidan con un esquema específico (por ejemplo, contratos API o modelos de datos)? Nuestro **Validador de Esquema JSON** comprueba si tu JSON se ajusta a un esquema definido, verificando tipos de campo, claves requeridas y restricciones de datos. Esto es crítico para colaboraciones en equipo, documentación API y garantizar la consistencia de datos entre sistemas.\n\nCómo funciona: Sube tu archivo JSON y de esquema (o pega el esquema directamente), y validaremos contra propiedades como `type`, `enum`, `minimum`, y `pattern`. Los mensajes de error señalan exactamente dónde los datos no coinciden con el esquema, ayudándote a solucionar problemas rápidamente.\n\nYa sea que estés desarrollando microservicios, validando entradas de usuario o estandarizando canales de datos, nuestra herramienta **validate json schema** asegura que tus estructuras de datos sean fiables y conformes. ¡Pruébalo gratis hoy!',
  jsonData: 'Datos JSON',
  jsonSchema: 'Esquema JSON',
  options: 'Opciones de Validación',
  validate: 'Validar',
  validating: 'Validando...',
  clear: 'Limpiar',
  loadExample: 'Cargar Ejemplo',
  jsonPlaceholder: 'Ingrese o pegue datos JSON para validar',
  schemaPlaceholder: 'Ingrese o pegue el Esquema JSON',
  result: 'Resultado de Validación',
  valid: 'Válido',
  invalid: 'Inválido',
  errorDetails: 'Detalles del Error',
  guideTitle: 'Guía de Esquema JSON',
  guideDescription: 'El Esquema JSON es un estándar para describir y validar estructuras de datos JSON. Aquí hay algunas reglas de validación comunes:',
  basicTypesTitle: 'Validación de Tipos Básicos',
  commonRulesTitle: 'Reglas de Validación Comunes',
  strictMode: 'Modo Estricto',
  strictModeDescription: 'Aplicar restricciones de validación adicionales no especificadas en la especificación de Esquema JSON',
  jsonParseError: 'Error de Análisis JSON',
  schemaParseError: 'Error de Análisis de Esquema',
  rules: 'Reglas de Validación Comunes',
  
  // How to Use Section
  howToUse: {
    title: 'Cómo Usar el Validador de Esquema JSON',
    steps: [
      {
        title: 'Preparar Datos JSON',
        description: 'Pega tus datos JSON que quieres validar en el área de "Datos JSON". Estos son los datos que serán verificados contra las reglas del esquema especificado.'
      },
      {
        title: 'Definir Esquema JSON',
        description: 'Introduce el esquema JSON que define la estructura esperada, tipos de datos, campos requeridos y restricciones de validación en el área de "Esquema JSON".'
      },
      {
        title: 'Configurar Opciones',
        description: 'Ajusta las opciones de validación como el modo estricto según tus necesidades. El modo estricto aplica restricciones adicionales más allá del estándar JSON Schema.'
      },
      {
        title: 'Ejecutar Validación',
        description: 'Haz clic en "Validar" para verificar si tus datos JSON cumplen con las especificaciones del esquema. Los resultados mostrarán éxito o errores específicos con detalles de ubicación.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Preguntas Frecuentes del Validador de Esquema',
    items: [
      {
        question: '¿Qué es un esquema JSON y por qué debería usarlo?',
        answer: 'Un esquema JSON define la estructura esperada, tipos de datos y restricciones para datos JSON. Usarlo asegura consistencia de datos, previene errores en aplicaciones, facilita documentación de API y permite validación automática de entrada de usuarios.'
      },
      {
        question: '¿Qué tipos de validaciones puedo definir en un esquema JSON?',
        answer: 'Los esquemas JSON soportan validación de tipos (string, number, boolean, array, object), campos requeridos, restricciones de longitud, patrones de expresiones regulares, valores enum, límites numéricos, validaciones de formato y validaciones condicionales complejas.'
      },
      {
        question: '¿Cómo interpreto los mensajes de error de validación?',
        answer: 'Los mensajes de error incluyen la ruta específica al elemento problemático, el tipo de violación (ej: tipo incorrecto, campo requerido faltante), el valor esperado versus el actual, y sugerencias para corregir el problema.'
      },
      {
        question: '¿Puedo validar arrays de objetos con diferentes estructuras?',
        answer: 'Sí, puedes usar "oneOf", "anyOf" o "allOf" en tu esquema para validar elementos de array que pueden tener diferentes estructuras válidas. También puedes definir esquemas específicos para diferentes tipos de elementos.'
      },
      {
        question: '¿Qué hace exactamente el modo estricto?',
        answer: 'El modo estricto aplica validaciones adicionales como prohibir propiedades adicionales no definidas en el esquema, imponer restricciones de formato más rígidas y rechazar valores que técnicamente son válidos JSON pero no se ajustan a las mejores prácticas.'
      },
      {
        question: '¿Puedo usar esta herramienta para validar respuestas de API?',
        answer: 'Absolutamente. Esta herramienta es perfecta para validar respuestas de API, datos de formularios, archivos de configuración y cualquier dato JSON contra contratos o especificaciones predefinidas para asegurar integridad y consistencia.'
      }
    ]
  }
}; 