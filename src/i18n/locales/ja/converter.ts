export const converter = {
  title: 'JSONをYAML、XML、CSVに変換 - 無料データフォーマット変換ツール',
  seo_title: 'JSONをYAML、XML、CSVに変換 - 無料データフォーマット変換ツール',
  description: '無料オンライン変換ツールでJSONをYAML、XML、CSVに変換、およびその逆変換。構造とデータ型を保持しながらフォーマット間でデータを即座に変換。',
  keywords: 'JSON変換ツール,JSONをYAMLに,JSONをXMLに,JSONをCSVに,JSONトランスフォーメーション,データフォーマット変換ツール,JSONエクスポート,YAMLをJSONに,XMLをJSONに,CSVをJSONに,データフォーマット変換,JSONデータ変換,フォーマット変換ツール,双方向変換,データ交換フォーマット,JSONオンライン変換,データフォーマット翻訳,ファイルフォーマット変換,JSONインポートエクスポート,JSONマイグレーションツール',
  introduction: 'JSON変換ツールは、一般的なデータ形式（JSON、XML、YAML、CSV）間の変換プロセスを簡素化する包括的なツールです。開発者、データアナリスト、技術文書作成者の時間を節約するために設計され、直感的なユーザーインターフェースでデータ変換をシームレスに行えます。\n\n双方向変換オプションにより、これらのフォーマット間を簡単に変換できます。必要な変換タイプを選択し、ソースデータを貼り付け、「変換」をクリックするだけです。結果はすぐに表示され、コピーまたはダウンロードする準備が整います。\n\n主な機能：\n• JSONとXML、YAML、CSV間の双方向変換\n• 大規模データファイルの高速処理\n• データの階層構造を保持する正確な変換\n• クリーンで読みやすい出力フォーマット\n• 出力を細かく制御するための高度な変換オプション\n\nこの変換ツールは、複数のAPIを扱う開発者、データ形式を変更する必要があるコンテンツ管理者、さまざまなデータソースを扱うデータアナリストに最適です。データの整合性を保ちながら、最も複雑な変換ケースも処理します。',
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