export const diff = {
  title: 'Comparador JSON',
  h1Title: 'Compare JSON Files',
  seo_title: 'Compare Conjuntos de Dados JSON Online – Destaque Adições, Exclusões e Alterações',
  description: 'Compare arquivos JSON visualmente com destaque lado a lado para revisões de código.',
  keywords: 'diferença JSON,comparar JSON,diferença JSON,comparação JSON,comparador JSON,encontrar diferenças JSON,rastreador de alterações JSON,comparação de versões JSON,diferença de dados JSON,comparação de arquivos JSON,comparação lado a lado JSON,comparação de estrutura JSON,ferramenta de diferença JSON,identificar alterações JSON,rastrear modificações JSON,delta JSON,diferença visual JSON,resolução de conflitos JSON',
  introduction: 'Trabalhando em um projeto em equipe ou rastreando alterações de versão JSON? Nossa ferramenta JSON Diff ajuda você a comparar rapidamente dois arquivos JSON e visualizar as diferenças. Destacamos chaves adicionadas, entradas excluídas e valores modificados em uma visualização clara e codificada por cores, para que você possa identificar alterações em um piscar de olhos.\nCasos de uso incluem:\nRevisão de solicitações pull com configurações JSON\nRastreamento de histórico de versões de dados em bancos de dados\nDepuração de incompatibilidades entre respostas de API\nChega de rolar por linhas de código—nossa ferramenta analisa automaticamente objetos e arrays aninhados, tornando comparações complexas simples. Cole ou faça upload de dois arquivos JSON e deixe nosso recurso de comparação json mostrar exatamente o que mudou. Ideal para desenvolvedores, equipes de QA e gerentes de dados!',
  leftInput: 'Primeiro JSON',
  rightInput: 'Segundo JSON',
  result: 'Resultado da Comparação',
  placeholderLeft: 'Cole seus primeiros dados JSON aqui',
  placeholderRight: 'Cole seus segundos dados JSON aqui',
  compare: 'Comparar',
  clear: 'Limpar',
  loadExample: 'Carregar Exemplo',
  processing: 'Processando...',
  error: 'Erro de comparação: ',
  unknown: 'Erro desconhecido durante a comparação',
  diffGuide: 'Guia de Diferenças',
  addedContent: 'Conteúdo Adicionado',
  removedContent: 'Conteúdo Removido',
  modifiedContent: 'Conteúdo Modificado',
  originalJson: 'JSON Original',
  updatedJson: 'JSON Atualizado',
  
  // How to Use Section
  howToUse: {
    title: 'Como Usar o Comparador JSON',
    steps: [
      {
        title: 'Cole os JSONs',
        description: 'Insira seus dois arquivos JSON nos campos "Primeiro JSON" e "Segundo JSON". Podem ser dados de qualquer tamanho e complexidade.'
      },
      {
        title: 'Execute a Comparação',
        description: 'Clique em "Comparar" para analisar as diferenças entre os dois JSONs. O processamento é instantâneo mesmo para arquivos grandes.'
      },
      {
        title: 'Revise as Diferenças',
        description: 'Visualize diferenças destacadas por cores: verde para adições, vermelho para remoções e amarelo para modificações.'
      },
      {
        title: 'Analise os Resultados',
        description: 'Use o guia de diferenças para entender cada mudança e identificar rapidamente o que foi alterado entre as versões.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Perguntas Frequentes',
    items: [
      {
        question: 'Como o comparador detecta diferenças em JSON?',
        answer: 'Nossa ferramenta analisa estruturalmente ambos os JSONs, comparando chaves, valores e tipos de dados. Detecta adições, remoções e modificações em todos os níveis de aninhamento, preservando o contexto hierárquico.'
      },
      {
        question: 'Posso comparar arquivos JSON muito grandes?',
        answer: 'Sim, nosso comparador é otimizado para lidar com arquivos JSON grandes de forma eficiente. Pode processar megabytes de dados rapidamente mantendo precisão na detecção de diferenças.'
      },
      {
        question: 'Como interpreto as cores nas diferenças?',
        answer: 'Verde indica conteúdo adicionado no segundo JSON, vermelho mostra conteúdo removido, e amarelo destaca valores modificados. Esta codificação visual facilita a identificação rápida de mudanças.'
      },
      {
        question: 'O comparador funciona com arrays e objetos aninhados?',
        answer: 'Absolutamente! Nossa ferramenta navega por estruturas JSON complexas, incluindo arrays aninhados, objetos profundos e tipos de dados mistos, mantendo precisão em todos os níveis.'
      },
      {
        question: 'Meus dados estão seguros durante a comparação?',
        answer: 'Sim, toda comparação é feita localmente no seu navegador. Seus dados JSON nunca são enviados para servidores externos, garantindo privacidade e segurança completas.'
      },
      {
        question: 'Posso exportar ou salvar os resultados da comparação?',
        answer: 'Atualmente você pode visualizar e analisar diferenças na interface. Para documentação, recomendamos capturar screenshots dos resultados destacados ou copiar seções específicas.'
      },
      {
        question: 'O que acontece se um dos JSONs for inválido?',
        answer: 'Se algum JSON contiver erros de sintaxe, a ferramenta exibirá mensagens de erro específicas indicando o problema e sua localização para facilitar a correção.'
      },
      {
        question: 'Posso comparar JSONs com estruturas completamente diferentes?',
        answer: 'Sim, nossa ferramenta pode comparar JSONs com estruturas totalmente diferentes. Mostrará todas as diferenças estruturais e de conteúdo de forma clara e organizada.'
      }
    ]
  }
}; 