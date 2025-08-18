export const treeEditor = {
  title: 'Editor de Árvore JSON',
  h1Title: 'Edit JSON Tree',
  seo_title: 'Editor Visual de JSON – Edite Dados JSON Complexos com uma Visualização em Árvore Interativa',
  description: 'Edite JSON complexo aninhado através de interface de árvore intuitiva. Navegue e modifique estruturas de dados profundas sem erros de sintaxe. Perfeito para configurações.',
  keywords: 'Editor JSON,Edição de árvore JSON,Visualização JSON,Editor de nós JSON,Estrutura de árvore JSON,Editor JSON interativo,Editor JSON aninhado,Visualizador de estrutura JSON,Editor de dados visual,Visualizador de hierarquia JSON,Editor JSON complexo,Ferramenta de visualização JSON,Navegador JSON',
  introduction: 'O Editor Visual de Árvore JSON transforma dados JSON complexos em uma estrutura em árvore interativa que você pode manipular com facilidade. Ideal para lidar com estruturas de dados profundamente aninhadas sem se perder em chaves e sintaxe.\n\nNossa interface intuitiva permite que você expanda e recolha nós, adicione novas propriedades e arrays, modifique valores ou exclua itens indesejados com simples cliques. O layout de visualização dupla mostra tanto a árvore editável quanto a saída JSON formatada em tempo real.\n\nEsta ferramenta é perfeita para:\n• Desenvolvedores de API trabalhando com respostas JSON complexas\n• Analistas de dados explorando conjuntos de dados intrincados\n• Gerentes de conteúdo atualizando configurações baseadas em JSON\n• Qualquer pessoa que ache a edição de JSON bruto propensa a erros\n\nAs alterações são validadas instantaneamente, evitando erros de sintaxe enquanto você trabalha. Quando terminar, exporte seu JSON perfeitamente formatado com um único clique.',
  viewOptions: 'Opções de Visualização',
  copyJsonResult: 'Copiar',
  copySuccessful: 'Copiado para a área de transferência!',
  downloadJsonResult: 'Baixar',
  clearJsonData: 'Limpar',
  jsonParsingError: 'Erro de análise JSON: ',
  validationError: 'Erro de validação: ',
  enterValidJson: 'Por favor, insira dados JSON válidos',
  treeLabel: 'Visualização em Árvore',
  treeView: 'Visualização em Árvore',
  jsonLabel: 'Saída JSON',
  placeholderText: 'Cole seus dados JSON aqui...',
  loadExample: 'Carregar Exemplo',
  textView: 'Visualização de Texto',
  jsonText: 'Texto JSON',
  jsonTree: 'Estrutura em Árvore JSON',
  placeholder: 'Digite ou cole dados JSON aqui',
  copy: 'Copiar',
  download: 'Baixar',
  clear: 'Limpar',
  copied: 'Copiado para a área de transferência',
  copyFailed: 'Falha ao copiar',
  parseError: 'Erro de análise',
  unknownError: 'Erro desconhecido durante a análise',
  updateError: 'Erro de atualização',
  emptyInputMessage: 'Por favor, insira um JSON válido no editor de texto primeiro',
  // Traduções específicas para o editor de árvore
  addItem: 'Adicionar Item',
  addProperty: 'Adicionar Propriedade',
  key: 'Chave',
  keyName: 'Nome da Chave',
  value: 'Valor',
  type: 'Tipo',
  expand: 'Expandir Tudo',
  collapse: 'Recolher Tudo',
  ok: 'OK',
  cancel: 'Cancelar',
  emptyArray: 'Array Vazio',
  emptyObject: 'Objeto Vazio',
  deleteItem: 'Excluir',
  editItem: 'Editar',
  undoChange: 'Desfazer',
  redoChange: 'Refazer',
  enterValidPropertyName: 'Por favor, insira um nome de propriedade válido',
  add: 'Adicionar',
  empty: 'Vazio',
  keyNameEmpty: 'O nome da chave não pode estar vazio',
  addFailed: 'Falha ao adicionar',
  invalidValue: 'Valor inválido',
  save: 'Salvar',
  
  // How to Use Section
  howToUse: {
    title: 'Como Usar o Editor de Árvore JSON',
    steps: [
      {
        title: 'Cole seu JSON',
        description: 'Insira dados JSON na área de texto. O editor aceita JSON de qualquer complexidade e automaticamente o converte em uma estrutura de árvore navegável.'
      },
      {
        title: 'Navegue pela Árvore',
        description: 'Use a visualização em árvore para expandir/recolher nós, navegar por estruturas aninhadas e encontrar rapidamente os dados que deseja editar.'
      },
      {
        title: 'Edite Interativamente',
        description: 'Clique em qualquer valor para editá-lo, adicione novas propriedades com o botão "Adicionar", ou remova itens indesejados com o botão "Excluir".'
      },
      {
        title: 'Exporte o Resultado',
        description: 'Suas edições são refletidas em tempo real no JSON de saída. Use "Copiar" ou "Baixar" para salvar o JSON editado.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Perguntas Frequentes',
    items: [
      {
        question: 'Como adiciono novas propriedades ao JSON?',
        answer: 'Clique no botão "Adicionar Propriedade" próximo a qualquer objeto. Digite o nome da chave e valor, selecione o tipo de dados e confirme. A nova propriedade aparecerá imediatamente na árvore.'
      },
      {
        question: 'Posso editar arrays complexos?',
        answer: 'Sim! Arrays são totalmente suportados. Adicione novos itens com "Adicionar Item", edite valores existentes clicando neles, ou remova itens com o botão "Excluir". Arrays aninhados e objetos dentro de arrays são suportados.'
      },
      {
        question: 'Como desfazer alterações que fiz acidentalmente?',
        answer: 'Use os botões "Desfazer" e "Refazer" para navegar pelo histórico de edições. Você também pode recarregar o JSON original para começar novamente.'
      },
      {
        question: 'Que tipos de dados posso usar nos valores?',
        answer: 'O editor suporta todos os tipos JSON padrão: string, number, boolean, null, object e array. Selecione o tipo apropriado ao adicionar ou editar valores para garantir formatação correta.'
      },
      {
        question: 'O editor funciona com JSON muito grande?',
        answer: 'Sim, mas para arquivos JSON extremamente grandes, o desempenho pode ser afetado na visualização em árvore. Para arquivos muito grandes, considere usar o formatador ou validador JSON primeiro.'
      },
      {
        question: 'Como salvo meu JSON editado?',
        answer: 'Use o botão "Copiar" para copiar o JSON para a área de transferência, ou "Baixar" para salvar como arquivo .json. O JSON de saída é automaticamente formatado e valid.'
      },
      {
        question: 'Posso editar JSON inválido?',
        answer: 'O editor requer JSON válido como entrada. Se seu JSON tem erros de sintaxe, use primeiro o Validador JSON para identificar e corrigir problemas, depois use o editor de árvore.'
      },
      {
        question: 'Como navego por estruturas JSON profundamente aninhadas?',
        answer: 'Use os botões "Expandir Tudo" e "Recolher Tudo" para controlar a visualização, ou clique em nós individuais para expandir/recolher seções específicas conforme necessário.'
      }
    ]
  }
}; 