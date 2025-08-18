export const validator = {
  title: 'Validar JSON Online - Verificar Erros de Sintaxe e Corrigir Código JSON',
  h1Title: 'Validate JSON Syntax',
  seo_title: 'Validar JSON Online - Verificar Erros de Sintaxe e Corrigir Código JSON',
  description: 'Detecte instantaneamente erros de sintaxe JSON com feedback preciso linha por linha. Essencial para depurar respostas de API e garantir integridade de dados em suas aplicações.',
  keywords: 'validador JSON,verificador de sintaxe JSON,validar JSON,localizador de erros JSON,validador de formato JSON,ferramenta de verificação JSON,erro de parsing JSON,detecção de erro de sintaxe,ferramenta de debug JSON,validação de estrutura JSON,localizador de posição de erro,mensagens de erro JSON,corrigir sintaxe JSON,validador de código JSON',
  introduction: 'O Validador JSON é uma ferramenta essencial para garantir a validade e conformidade dos seus dados JSON. Ele fornece validação instantânea de sintaxe e formatação JSON, ajudando os desenvolvedores a identificar e resolver problemas rapidamente.\n\nAtravés de um validador rápido do lado do cliente, a ferramenta consegue detectar muitos erros comuns na sintaxe JSON, incluindo colchetes incompatíveis, vírgulas ausentes, chaves duplicadas e strings não fechadas.\n\nAs principais características incluem:\n• Verificação precisa da sintaxe JSON\n• Indicações claras da localização de erros e linha específica do código\n• Descrições detalhadas de erros com sugestões para correção\n• Visualização interativa em árvore dos dados quando a validação é bem-sucedida\n• Execução instantânea sem necessidade de processamento no servidor\n\nSeja verificando um arquivo de configuração, uma resposta de API ou um conjunto de dados complexo, o Validador JSON ajuda a garantir que seus dados estejam formatados corretamente e em conformidade com o padrão JSON. Isso economiza tempo na identificação de erros e garante que os dados que você está trabalhando funcionem como esperado em suas aplicações.',
  input: 'JSON de Entrada',
  validate: 'Validar JSON',
  validJson: 'JSON Válido',
  invalidJson: 'JSON Inválido',
  errorDetails: 'Detalhes do Erro',
  errorAt: 'Erro na linha {line}, coluna {column}',
  expectedToken: 'Token esperado: {token}',
  unexpectedToken: 'Token inesperado: {token}',
  missingComma: 'Vírgula ausente ou colchetes incompatíveis',
  extraComma: 'Vírgula extra',
  unclosedString: 'String não fechada',
  unclosedObject: 'Objeto não fechado',
  unclosedArray: 'Array não fechado',
  invalidProperty: 'Nome de propriedade inválido',
  duplicateKey: 'Chave duplicada',
  extraData: 'Dados extras após o fim do JSON',
  missingValue: 'Valor ausente',
  missingColon: 'Dois pontos ausente',
  repairSuggestion: 'Sugestão de Reparo',
  errorType: 'Tipo de Erro',
  errorMessage: 'Mensagem de Erro',
  position: 'Posição',
  contextLine: 'Linha de Contexto',
  placeholder: 'Insira o JSON para validar aqui',
  jsonStructure: 'Estrutura JSON',
  jsonSyntaxError: 'Erro de Sintaxe JSON',
  parseSuccess: 'Analisado com sucesso, contendo {count} nós de dados.',
  unknownError: 'Erro desconhecido',
  
  // How to Use Section
  howToUse: {
    title: 'Como Usar o Validador JSON',
    steps: [
      {
        title: 'Cole seu JSON',
        description: 'Insira ou cole seus dados JSON no campo de entrada. O validador aceita JSON de qualquer tamanho e complexidade para análise.'
      },
      {
        title: 'Validação Automática',
        description: 'A validação ocorre automaticamente conforme você digita, ou clique em "Validar JSON" para uma verificação manual da sintaxe.'
      },
      {
        title: 'Revise os Resultados',
        description: 'Se válido, você verá uma confirmação e estrutura em árvore. Se inválido, erros detalhados mostrarão localização e tipo de problema.'
      },
      {
        title: 'Corrija os Erros',
        description: 'Use as mensagens de erro detalhadas e sugestões de reparo para corrigir problemas de sintaxe e garantir JSON válido.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Perguntas Frequentes',
    items: [
      {
        question: 'O que é validação JSON e por que é importante?',
        answer: 'A validação JSON verifica se seus dados seguem a sintaxe JSON correta. É crucial para prevenir erros em aplicações, garantir intercâmbio de dados adequado e identificar problemas antes da implementação em produção.'
      },
      {
        question: 'Quais tipos de erros JSON este validador pode detectar?',
        answer: 'Nosso validador detecta erros comuns como colchetes/chaves não fechadas, vírgulas ausentes ou extras, strings não fechadas, chaves duplicadas, dois pontos ausentes e caracteres inválidos. Fornece localização precisa e descrições para cada erro.'
      },
      {
        question: 'O validador funciona com arquivos JSON grandes?',
        answer: 'Sim, nosso validador é otimizado para lidar com arquivos JSON grandes e estruturas complexas de forma eficiente. Processa rapidamente objetos aninhados, arrays extensos e conjuntos de dados complexos.'
      },
      {
        question: 'Meus dados estão seguros durante a validação?',
        answer: 'Completamente seguro! Toda validação é feita localmente no seu navegador usando JavaScript do lado do cliente. Seus dados JSON nunca deixam seu dispositivo ou são enviados para servidores externos.'
      },
      {
        question: 'Posso validar JSON de APIs ou serviços externos?',
        answer: 'Sim! Cole qualquer resposta JSON de APIs, serviços web ou arquivos de configuração diretamente no validador. É perfeito para depurar respostas de API e verificar integridade de dados recebidos.'
      },
      {
        question: 'O validador suporta comentários ou JSON5?',
        answer: 'Este validador é otimizado para JSON padrão (RFC 7159). Para melhor compatibilidade e resultados precisos, recomendamos remover comentários e usar sintaxe JSON padrão.'
      },
      {
        question: 'Como interpreto as mensagens de erro?',
        answer: 'Cada erro mostra a linha e coluna exatas, tipo de erro e descrição detalhada. Use a numeração de linha para localizar problemas rapidamente e siga as sugestões de reparo fornecidas para correções.'
      },
      {
        question: 'O que fazer se o JSON parecer correto mas ainda mostra erros?',
        answer: 'Verifique caracteres invisíveis, codificação de arquivo e aspas especiais. Às vezes copiar de documentos ou páginas web pode introduzir caracteres inválidos que não são visíveis mas causam erros de parsing.'
      }
    ]
  }
}; 