export const converter = {
  title: 'JSON Converter',
  description: 'Convierte fácilmente entre formatos XML, YAML, CSV y JSON, con conversión bidireccional y opciones personalizadas',
  keywords: 'Conversor JSON,JSON a XML,JSON a YAML,XML a JSON,YAML a JSON,CSV a JSON,JSON a CSV',
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