export const converter = {
  title: 'Conversor JSON',
  seo_title: 'Conversor JSON – Transforme JSON para/de YAML, XML, CSV e Mais',
  description: 'Converta JSON de e para múltiplos formatos de dados incluindo YAML, XML e CSV com este poderoso conversor online',
  keywords: 'Conversor JSON,JSON para YAML,JSON para XML,JSON para CSV,transformação JSON,conversor de formato de dados,exportação JSON,YAML para JSON,XML para JSON,CSV para JSON,converter formatos de dados,transformação de dados JSON,ferramenta de conversão de formato,conversão bidirecional,formatos de intercâmbio de dados,converter JSON online,tradutor de formato de dados,conversão de formato de arquivo,importação e exportação JSON,ferramenta de migração JSON',
  introduction: 'O Conversor JSON é sua solução completa para transformar dados entre JSON e outros formatos populares. Seja você precisando converter JSON para YAML para arquivos de configuração, transformar JSON para XML para sistemas legados, ou exportar JSON para CSV para análise de dados, nossa ferramenta lida com essas conversões com precisão e facilidade.\n\nNosso conversor mantém a integridade dos dados durante a transformação, preservando relações hierárquicas, tipos de dados e elementos estruturais. A interface intuitiva permite que você cole ou carregue seus dados de origem, selecione seu formato de destino e visualize instantaneamente a saída convertida.\n\nRecursos principais incluem:\n• Conversão bidirecional entre JSON e YAML, XML, CSV e TSV\n• Preservação de estruturas aninhadas e tipos de dados onde suportado\n• Opções personalizáveis para cada conversão de formato\n• Visualização em tempo real da saída convertida\n• Funcionalidade de copiar para a área de transferência ou baixar\n• Suporte para grandes conjuntos de dados\n\nSimplemente cole seus dados, selecione seu formato de destino e deixe nosso conversor fazer o resto—economizando tempo e esforço valiosos em seu fluxo de trabalho de desenvolvimento.',
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