export const converter = {
  title: 'JSON変換ツール',
  description: 'JSONデータを他の形式（YAML、XML、CSV）に変換したり、他の形式をJSONに変換したりします。',
  keywords: 'JSON変換ツール,JSONからXML,JSONからYAML,XMLからJSON,YAMLからJSON,CSVからJSON,JSONからCSV',
  options: {
    title: '変換オプション',
    conversionType: '変換タイプ',
    jsonTo: 'JSONから',
    toJson: 'JSONへ',
    jsonToYaml: 'JSONからYAML',
    jsonToXml: 'JSONからXML',
    jsonToCsv: 'JSONからCSV',
    yamlToJson: 'YAMLからJSON',
    xmlToJson: 'XMLからJSON',
    csvToJson: 'CSVからJSON'
  },
  input: {
    defaultLabel: '入力',
    jsonLabel: 'JSON入力',
    yamlLabel: 'YAML入力',
    xmlLabel: 'XML入力',
    csvLabel: 'CSV入力',
    defaultPlaceholder: 'ここにデータを貼り付けてください',
    jsonPlaceholder: 'ここにJSONデータを貼り付けてください',
    yamlPlaceholder: 'ここにYAMLデータを貼り付けてください',
    xmlPlaceholder: 'ここにXMLデータを貼り付けてください',
    csvPlaceholder: 'ここにCSVデータを貼り付けてください'
  },
  output: {
    defaultLabel: '出力',
    jsonLabel: 'JSON出力',
    yamlLabel: 'YAML出力',
    xmlLabel: 'XML出力',
    csvLabel: 'CSV出力',
    placeholder: '変換結果がここに表示されます'
  },
  actions: {
    convert: '変換',
    processing: '処理中...',
    copy: 'コピー',
    download: 'ダウンロード',
    clear: 'クリア'
  },
  errors: {
    emptyInput: '変換するデータを入力してください',
    conversionFailed: '変換エラー',
    unsupportedConversion: 'サポートされていない変換タイプ',
    invalidJson: '無効なJSON',
    invalidYaml: '無効なYAML',
    invalidXml: '無効なXML',
    invalidCsv: '無効なCSV',
    jsonNotArray: 'CSVに変換するにはJSONはオブジェクトの配列である必要があります',
    unknownError: '変換中に不明なエラーが発生しました'
  },
  alerts: {
    copySuccess: 'クリップボードにコピーしました',
    copyFailed: 'コピーに失敗しました'
  }
}; 