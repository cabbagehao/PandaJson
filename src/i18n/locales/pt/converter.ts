export const converter = {
  title: 'Conversor JSON',
  h1Title: 'Convert JSON Format',
  seo_title: 'Conversor JSON – Transforme JSON para/de YAML, XML, CSV e Mais',
  description: 'Converta perfeitamente JSON para formatos YAML, XML, CSV e vice-versa. Perfeito para migração de dados, gerenciamento de configuração e fluxos de troca de dados multiplataforma.',
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
  },
  
  // How to Use Section
  howToUse: {
    title: 'Como Usar o Conversor JSON',
    steps: [
      {
        title: 'Selecione o Tipo de Conversão',
        description: 'Escolha o formato de entrada e saída desejado nas opções de conversão. Suportamos JSON, YAML, XML e CSV em conversões bidirecionais.'
      },
      {
        title: 'Cole seus Dados',
        description: 'Insira seus dados no campo de entrada. O conversor aceita dados de qualquer tamanho e automaticamente detecta problemas de formatação.'
      },
      {
        title: 'Converta Instantaneamente',
        description: 'Clique em "Converter" para transformar seus dados. A conversão acontece instantaneamente com preservação da estrutura de dados.'
      },
      {
        title: 'Copie ou Baixe',
        description: 'Use os botões de ação para copiar o resultado para a área de transferência ou baixar como arquivo para uso em suas aplicações.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Perguntas Frequentes',
    items: [
      {
        question: 'Que formatos de conversão são suportados?',
        answer: 'Suportamos conversão bidirecional entre JSON e YAML, XML, CSV. Você pode converter de qualquer um desses formatos para qualquer outro, mantendo a estrutura e integridade dos dados sempre que possível.'
      },
      {
        question: 'Como a estrutura de dados é preservada durante a conversão?',
        answer: 'Nosso conversor mantém estruturas hierárquicas, tipos de dados e relações sempre que o formato de destino suportar. Para formatos limitados como CSV, dados complexos são achatados de forma inteligente.'
      },
      {
        question: 'Posso converter arquivos grandes?',
        answer: 'Sim, nosso conversor é otimizado para lidar com arquivos grandes e estruturas de dados complexas de forma eficiente. Processa rapidamente grandes conjuntos de dados sem problemas de performance.'
      },
      {
        question: 'O que acontece com dados aninhados ao converter para CSV?',
        answer: 'Ao converter para CSV, objetos aninhados são achatados usando notação de ponto (ex: user.address.city). Arrays complexos são serializados como strings para manter a integridade dos dados.'
      },
      {
        question: 'Meus dados estão seguros durante a conversão?',
        answer: 'Absolutamente! Todas as conversões são realizadas localmente no seu navegador. Seus dados nunca deixam seu dispositivo ou são enviados para servidores externos, garantindo total privacidade.'
      },
      {
        question: 'O conversor valida os dados de entrada?',
        answer: 'Sim, o conversor inclui validação para todos os formatos suportados. Se os dados de entrada contiverem erros de sintaxe, você receberá mensagens de erro específicas para ajudar na correção.'
      },
      {
        question: 'Posso personalizar a saída da conversão?',
        answer: 'O conversor aplica as melhores práticas para cada formato automaticamente. Isso inclui indentação adequada para YAML, estrutura XML válida e formatação CSV padrão.'
      },
      {
        question: 'Como baixar os dados convertidos?',
        answer: 'Use o botão "Baixar" para salvar os dados convertidos como arquivo com a extensão apropriada (.json, .yaml, .xml, .csv). O arquivo estará pronto para uso imediato em suas aplicações.'
      }
    ]
  }
}; 