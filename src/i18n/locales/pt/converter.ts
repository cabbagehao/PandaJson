export const converter = {
  title: 'JSON Converter',
  description: 'Converta facilmente entre formatos XML, YAML, CSV e JSON, com conversão bidirecional e opções personalizadas',
  keywords: 'Conversor JSON,JSON para XML,JSON para YAML,XML para JSON,YAML para JSON,CSV para JSON,JSON para CSV',
  options: {
    title: 'Opções de Conversão',
    conversionType: 'Tipo de Conversão',
    jsonTo: 'JSON para',
    toJson: 'Para JSON',
    jsonToYaml: 'JSON para YAML',
    jsonToXml: 'JSON para XML',
    jsonToCsv: 'JSON para CSV',
    yamlToJson: 'YAML para JSON',
    xmlToJson: 'XML para JSON',
    csvToJson: 'CSV para JSON'
  },
  input: {
    defaultLabel: 'Entrada',
    jsonLabel: 'Entrada JSON',
    yamlLabel: 'Entrada YAML',
    xmlLabel: 'Entrada XML',
    csvLabel: 'Entrada CSV',
    defaultPlaceholder: 'Cole os dados aqui',
    jsonPlaceholder: 'Cole os dados JSON aqui',
    yamlPlaceholder: 'Cole os dados YAML aqui',
    xmlPlaceholder: 'Cole os dados XML aqui',
    csvPlaceholder: 'Cole os dados CSV aqui'
  },
  output: {
    defaultLabel: 'Saída',
    jsonLabel: 'Saída JSON',
    yamlLabel: 'Saída YAML',
    xmlLabel: 'Saída XML',
    csvLabel: 'Saída CSV',
    placeholder: 'O resultado da conversão aparecerá aqui'
  },
  actions: {
    convert: 'Converter',
    processing: 'Processando...',
    copy: 'Copiar',
    download: 'Baixar',
    clear: 'Limpar'
  },
  errors: {
    emptyInput: 'Por favor, insira dados para converter',
    conversionFailed: 'Erro de conversão',
    unsupportedConversion: 'Tipo de conversão não suportado',
    invalidJson: 'JSON inválido',
    invalidYaml: 'YAML inválido',
    invalidXml: 'XML inválido',
    invalidCsv: 'CSV inválido',
    jsonNotArray: 'JSON deve ser uma matriz de objetos para converter para CSV',
    unknownError: 'Ocorreu um erro desconhecido durante a conversão'
  },
  alerts: {
    copySuccess: 'Copiado para a área de transferência',
    copyFailed: 'Falha ao copiar'
  }
}; 