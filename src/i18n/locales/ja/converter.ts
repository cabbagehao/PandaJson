export const converter = {
  title: 'JSONをYAML、XML、CSVに変換 - 無料データフォーマット変換ツール',
  h1Title: 'JSONをあらゆる形式に変換',
  seo_title: 'JSONをYAML、XML、CSVに変換 - 無料データフォーマット変換ツール',
  description: 'JSON、YAML、XML、CSV間で双方向フォーマット変換。',
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
  },
  
  // How to Use Section
  howToUse: {
    title: 'JSON変換ツールの使い方',
    steps: [
      {
        title: '変換タイプを選択',
        description: 'ドロップダウンメニューから希望の変換を選択します：JSON to YAML、JSON to XML、JSON to CSV、またはその逆変換。'
      },
      {
        title: 'データを貼り付け',
        description: 'ソースデータを入力エディタにコピー＆ペーストします。変換ツールは選択した変換タイプに応じてJSON、YAML、XML、またはCSVを受け入れます。'
      },
      {
        title: '瞬時に変換',
        description: '「変換」ボタンをクリックしてデータを変換します。変換は即座に行われ、リアルタイムでエラーチェックと検証が実行されます。'
      },
      {
        title: 'コピーまたはダウンロード',
        description: 'コピーボタンを使用して変換されたデータをクリップボードにコピーするか、プロジェクトで後で使用するためにファイルとしてダウンロードします。'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'JSON変換ツール FAQ',
    items: [
      {
        question: 'どの形式から/への変換が可能ですか？',
        answer: '私たちの変換ツールは、JSON、YAML、XML、CSV形式間の双方向変換をサポートしています。JSONをこれらの形式のいずれかに変換したり、YAML、XML、またはCSVをJSONに戻すことができ、データ変換の完全な柔軟性を提供します。'
      },
      {
        question: 'JSON to CSV変換はどのように動作しますか？',
        answer: 'JSON to CSV変換は、一貫したプロパティを持つオブジェクトを含むJSON配列で最適に動作します。各オブジェクトが行になり、オブジェクトプロパティが列になります。ネストしたオブジェクトの場合、変換ツールは構造を平坦化してCSV互換形式を作成します。'
      },
      {
        question: '変換中にネストしたJSON構造は保持されますか？',
        answer: 'ネスト構造の保持は対象形式によって異なります。YAMLとXMLは完全にネストしたデータをサポートします。CSV変換の場合、ネスト構造はドット記法（例：user.name）で平坦化され、データ関係を維持します。'
      },
      {
        question: '属性と名前空間を持つXMLを変換できますか？',
        answer: 'はい、私たちのXML変換ツールは属性、名前空間、複雑なXML構造を処理します。XMLをJSONに変換する際、属性は特別な記法で保持され、逆変換は適切なXML構造を維持します。'
      },
      {
        question: 'データに変換エラーが発生した場合はどうなりますか？',
        answer: '変換エラーが発生した場合、何が問題で、どこで発生したかを正確に示す詳細なエラーメッセージが表示されます。一般的な問題には、無効なJSON構文、サポートされていないXML構造、またはCSVフォーマットの問題があります。'
      },
      {
        question: '変換されたデータは元のデータと同じですか？',
        answer: '私たちはフォーマットの制限を尊重しながら高い忠実性の変換を目指しています。一部のデータ型情報は失われる場合がありますが（例：CSVでの数値vs文字列）、構造とコンテンツの整合性は変換プロセス全体を通じて維持されます。'
      },
      {
        question: '大きなデータセットを変換できますか？',
        answer: 'はい、私たちの変換ツールはパフォーマンスに最適化されており、大きなデータセットを効率的に処理できます。変換プロセスは合理化されており、ブラウザのパフォーマンス問題なしに大量のデータで動作します。'
      },
      {
        question: 'ファイルサイズに制限はありますか？',
        answer: 'ハードなファイルサイズ制限はありませんが、非常に大きなファイル（10MB以上）はデバイスの性能に応じて処理が遅くなる場合があります。最適なパフォーマンスのために、極めて大きなファイルは小さなチャンクで処理することをお勧めします。'
      }
    ]
  }
}; 