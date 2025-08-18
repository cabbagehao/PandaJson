export const schemaValidator = {
  title: 'Validador de Schema JSON',
  h1Title: 'Validate JSON Schema',
  seo_title: 'Validador de Schema JSON – Verifique a Conformidade dos Dados JSON com Especificações de Schema',
  description: 'Verifique conformidade de dados JSON contra especificações de schema. Garanta contratos de API, tipos de dados e restrições de campos perfeitamente.',
  keywords: 'Schema JSON,Validação JSON,Validação de Schema,Validação de estrutura JSON,Validação de formato JSON,verificador de Schema JSON,conformidade de dados JSON,validador online de Schema JSON,ferramenta de validação de Schema,verificação de integridade JSON,validação de estrutura de dados,verificador de formato JSON,teste de Schema JSON,compatibilidade JSON Schema,verificação de dados estruturados,validação de API JSON',
  introduction: 'Nosso Validador de Schema JSON é uma ferramenta online gratuita que permite verificar se seus dados JSON estão em conformidade com um schema JSON predefinido. Esta ferramenta é essencial para desenvolvedores que trabalham com APIs, contratos de dados ou qualquer aplicação que exija validação estrutural de dados. O validador verifica se seus dados JSON seguem as regras e restrições definidas em seu schema, ajudando a identificar problemas como tipos de dados incorretos, valores ausentes ou propriedades não permitidas. Use nosso validador para garantir a integridade dos seus dados JSON antes de implementá-los em produção.',
  jsonData: 'Dados JSON',
  jsonSchema: 'Schema JSON',
  options: 'Opções de Validação',
  validate: 'Validar',
  validating: 'Validando...',
  clear: 'Limpar',
  loadExample: 'Carregar Exemplo',
  jsonPlaceholder: 'Digite ou cole dados JSON para validar',
  schemaPlaceholder: 'Digite ou cole o Schema JSON',
  result: 'Resultado da Validação',
  valid: 'Válido',
  invalid: 'Inválido',
  errorDetails: 'Detalhes do Erro',
  guideTitle: 'Guia de Schema JSON',
  guideDescription: 'JSON Schema é um padrão para descrever e validar estruturas de dados JSON. Aqui estão algumas regras de validação comuns:',
  basicTypesTitle: 'Validação de Tipos Básicos',
  commonRulesTitle: 'Regras de Validação Comuns',
  strictMode: 'Modo Estrito',
  strictModeDescription: 'Aplicar restrições de validação adicionais não especificadas na especificação JSON Schema',
  jsonParseError: 'Erro de Análise JSON',
  schemaParseError: 'Erro de Análise de Schema',
  rules: 'Regras de Validação Comuns',
  
  // How to Use Section
  howToUse: {
    title: 'Como Usar o Validador de Schema JSON',
    steps: [
      {
        title: 'Prepare seus Dados',
        description: 'Cole seus dados JSON no campo "Dados JSON" e seu schema JSON no campo "Schema JSON". Ambos devem ser JSON válido para prosseguir com a validação.'
      },
      {
        title: 'Configure as Opções',
        description: 'Escolha suas preferências de validação, incluindo modo estrito para restrições adicionais não especificadas na especificação JSON Schema.'
      },
      {
        title: 'Execute a Validação',
        description: 'Clique em "Validar" para verificar se seus dados JSON estão em conformidade com o schema. O processo é instantâneo e fornece feedback detalhado.'
      },
      {
        title: 'Revise os Resultados',
        description: 'Se válido, você verá uma confirmação. Se inválido, erros detalhados mostrarão exatamente onde e por que a validação falhou.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Perguntas Frequentes',
    items: [
      {
        question: 'O que é JSON Schema e por que devo usá-lo?',
        answer: 'JSON Schema é um padrão para descrever e validar estruturas de dados JSON. Define regras para tipos de dados, propriedades obrigatórias, formatos e restrições, garantindo consistência e qualidade dos dados em suas aplicações.'
      },
      {
        question: 'Como crio um schema JSON para meus dados?',
        answer: 'Comece definindo o tipo raiz (object/array), depois especifique propriedades, seus tipos e restrições. Use palavras-chave como "required", "properties", "type", "format" para definir regras de validação.'
      },
      {
        question: 'Quais restrições de validação são suportadas?',
        answer: 'Suportamos todas as restrições padrão do JSON Schema: tipos de dados, valores obrigatórios, limites numéricos, comprimento de strings, padrões regex, enumerações e muito mais.'
      },
      {
        question: 'O que significa "Modo Estrito" na validação?',
        answer: 'Modo Estrito aplica restrições adicionais como proibir propriedades não especificadas no schema, aplicar validação mais rigorosa de tipos e garantir conformidade total com especificações.'
      },
      {
        question: 'Posso validar arrays e objetos aninhados?',
        answer: 'Sim! O validador suporta estruturas JSON complexas incluindo arrays aninhados, objetos profundos e schemas recursivos. Defina regras para cada nível da hierarquia de dados.'
      },
      {
        question: 'Como interpreto as mensagens de erro de validação?',
        answer: 'Mensagens de erro mostram o caminho exato dos dados que falharam na validação, a regra violada e valores esperados versus atuais. Use essas informações para corrigir seus dados ou schema.'
      },
      {
        question: 'Posso usar schemas de especificações de API como OpenAPI?',
        answer: 'Sim, schemas de OpenAPI/Swagger são compatibles com JSON Schema. Extraia a seção de schema da especificação da API e use-a diretamente para validação.'
      },
      {
        question: 'Meus dados e schemas são seguros durante a validação?',
        answer: 'Absolutamente! Toda validação é feita localmente no seu navegador. Nem seus dados nem schemas são enviados para servidores externos, garantindo total privacidade e segurança.'
      }
    ]
  }
}; 