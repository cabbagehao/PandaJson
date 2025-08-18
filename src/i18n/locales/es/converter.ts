export const converter = {
  title: 'Convertir JSON a YAML, XML, CSV - Conversor de Formato de Datos Gratuito',
  seo_title: 'Convertir JSON a YAML, XML, CSV - Conversor de Formato de Datos Gratuito',
  description: 'Convierta JSON a YAML, XML, CSV y viceversa con nuestro convertidor en línea gratuito. Transforme datos entre formatos instantáneamente preservando estructura y tipos de datos.',
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
  }
}; 