export const converter = {
  title: 'Convertir JSON a YAML, XML, CSV - Conversor de Formato de Datos Gratuito',
  h1Title: 'Transforma JSON a Cualquier Formato',
  seo_title: 'Convertir JSON a YAML, XML, CSV - Conversor de Formato de Datos Gratuito',
  description: 'Convierta JSON a YAML, XML, CSV sin problemas. Perfecto para migración de datos, gestión de configuración y flujos de trabajo de intercambio multiplataforma.',
  keywords: 'Conversor JSON,JSON a XML,JSON a YAML,XML a JSON,YAML a JSON,CSV a JSON,JSON a CSV,Transformación JSON,Conversor de formato de datos,Exportación JSON,YAML a JSON,XML a JSON,CSV a JSON,Convertir formatos de datos,Transformación de datos JSON,Herramienta de conversión de formato,Conversión bidireccional,Formatos de intercambio de datos,Convertir JSON en línea,Traductor de formato de datos,Conversión de formato de archivo,Importación/exportación JSON,Herramienta de migración JSON',
  introduction: 'El Conversor JSON es tu solución todo en uno para transformar sin problemas datos entre JSON y otros formatos populares. Ya sea que necesites convertir JSON a YAML para archivos de configuración, transformar JSON a XML para sistemas heredados, o exportar JSON a CSV para análisis de datos, nuestra herramienta maneja estas conversiones con precisión y facilidad.\n\nNuestro conversor mantiene la integridad de los datos durante la transformación, preservando relaciones jerárquicas, tipos de datos y elementos estructurales. La interfaz intuitiva te permite pegar o cargar tus datos de origen, seleccionar tu formato objetivo, y ver instantáneamente la salida convertida.\n\nLas características principales incluyen:\n• Conversión bidireccional entre JSON y YAML, XML, CSV, y TSV\n• Preservación de estructuras anidadas y tipos de datos donde sea soportado\n• Opciones personalizables para cada conversión de formato\n• Vista previa en tiempo real de la salida convertida\n• Funcionalidad de copiar al portapapeles o descargar\n• Soporte para conjuntos grandes de datos\n\nSimplemente pega tus datos, selecciona tu formato objetivo, y deja que nuestro conversor haga el resto—ahorrándote valioso tiempo y esfuerzo en tu flujo de trabajo de desarrollo.',
  options: {
    title: 'Opciones de Conversión',
    conversionType: 'Tipo de Conversión',
    jsonTo: 'JSON a',
    toJson: 'A JSON',
    jsonToYaml: 'JSON a YAML',
    jsonToXml: 'JSON a XML',
    jsonToCsv: 'JSON a CSV',
    yamlToJson: 'YAML a JSON',
    xmlToJson: 'XML a JSON',
    csvToJson: 'CSV a JSON'
  },
  input: {
    defaultLabel: 'Entrada',
    jsonLabel: 'Entrada JSON',
    yamlLabel: 'Entrada YAML',
    xmlLabel: 'Entrada XML',
    csvLabel: 'Entrada CSV',
    defaultPlaceholder: 'Pega datos aquí',
    jsonPlaceholder: 'Pega datos JSON aquí',
    yamlPlaceholder: 'Pega datos YAML aquí',
    xmlPlaceholder: 'Pega datos XML aquí',
    csvPlaceholder: 'Pega datos CSV aquí'
  },
  output: {
    defaultLabel: 'Salida',
    jsonLabel: 'Salida JSON',
    yamlLabel: 'Salida YAML',
    xmlLabel: 'Salida XML',
    csvLabel: 'Salida CSV',
    placeholder: 'El resultado de la conversión aparecerá aquí'
  },
  actions: {
    convert: 'Convertir',
    processing: 'Procesando...',
    copy: 'Copiar',
    download: 'Descargar',
    clear: 'Limpiar'
  },
  errors: {
    emptyInput: 'Por favor, ingresa datos para convertir',
    conversionFailed: 'Error de conversión',
    unsupportedConversion: 'Tipo de conversión no soportado',
    invalidJson: 'JSON inválido',
    invalidYaml: 'YAML inválido',
    invalidXml: 'XML inválido',
    invalidCsv: 'CSV inválido',
    jsonNotArray: 'JSON debe ser un array de objetos para convertir a CSV',
    unknownError: 'Ocurrió un error desconocido durante la conversión'
  },
  alerts: {
    copySuccess: 'Copiado al portapapeles',
    copyFailed: 'Fallo al copiar'
  },
  
  // How to Use Section
  howToUse: {
    title: 'Cómo Usar el Conversor JSON',
    steps: [
      {
        title: 'Seleccionar Tipo de Conversión',
        description: 'Elige el tipo de conversión que necesitas del menú desplegable: JSON a YAML, JSON a XML, JSON a CSV, o viceversa. Cada formato tiene sus propias características específicas.'
      },
      {
        title: 'Pegar Datos de Origen',
        description: 'Copia y pega tus datos en el área de entrada correspondiente. La herramienta detectará automáticamente el formato y validará la sintaxis antes de la conversión.'
      },
      {
        title: 'Convertir Instantáneamente',
        description: 'Haz clic en el botón "Convertir" para transformar instantáneamente tus datos al formato de destino. La conversión preserva la estructura y tipos de datos siempre que sea posible.'
      },
      {
        title: 'Copiar o Descargar Resultado',
        description: 'Una vez completada la conversión, puedes copiar el resultado al portapapeles para uso inmediato o descargarlo como archivo con la extensión apropiada.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Preguntas Frecuentes de Conversión',
    items: [
      {
        question: '¿Qué formatos de conversión son compatibles?',
        answer: 'Soportamos conversiones bidireccionales entre JSON, YAML, XML y CSV. Esto incluye JSON a YAML, YAML a JSON, JSON a XML, XML a JSON, JSON a CSV y CSV a JSON. Cada conversión mantiene la integridad de los datos siempre que sea posible.'
      },
      {
        question: '¿Se pierde información durante la conversión entre formatos?',
        answer: 'En la mayoría de casos, los datos se preservan completamente. Sin embargo, algunos formatos tienen limitaciones: CSV no soporta objetos anidados complejos, XML puede requerir ajustes en nombres de elementos, y ciertos tipos de datos pueden convertirse a strings en algunos formatos.'
      },
      {
        question: '¿Cómo maneja la herramienta estructuras JSON complejas al convertir a CSV?',
        answer: 'Para conversión JSON a CSV, tu JSON debe ser un array de objetos con estructura similar. Los objetos anidados se aplanan usando notación de puntos (ej: "address.street"). Arrays anidados se serializan como strings JSON.'
      },
      {
        question: '¿Puedo convertir archivos grandes entre formatos?',
        answer: 'Sí, nuestro conversor está optimizado para manejar archivos de datos grandes eficientemente. Sin embargo, ten en cuenta que archivos muy grandes pueden tomar más tiempo para procesarse y podrían estar limitados por la memoria disponible del navegador.'
      },
      {
        question: '¿Las conversiones XML preservan atributos y espacios de nombres?',
        answer: 'Sí, nuestro conversor maneja atributos XML convirtiéndolos a propiedades especiales en JSON (prefijadas con @). Los espacios de nombres se preservan cuando es posible. La conversión inversa (JSON a XML) respeta estas convenciones.'
      },
      {
        question: '¿Qué pasa si mis datos de origen tienen errores de formato?',
        answer: 'La herramienta validará tus datos de entrada antes de la conversión y mostrará mensajes de error específicos si la sintaxis es inválida. Debes corregir estos errores antes de que pueda proceder la conversión.'
      }
    ]
  }
}; 