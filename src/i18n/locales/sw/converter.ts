export const converter = {
  title: 'Kigeuzaji cha JSON',
  description: 'Badilisha data za JSON kwenda fomati zingine (YAML, XML, CSV), au badilisha fomati zingine kwenda JSON.',
  keywords: 'Kigeuzaji cha JSON,JSON kwenda XML,JSON kwenda YAML,XML kwenda JSON,YAML kwenda JSON,CSV kwenda JSON,JSON kwenda CSV',
  options: {
    title: 'Chaguo za Ubadilishaji',
    conversionType: 'Aina ya Ubadilishaji',
    jsonTo: 'JSON kwenda',
    toJson: 'Kwenda JSON',
    jsonToYaml: 'JSON kwenda YAML',
    jsonToXml: 'JSON kwenda XML',
    jsonToCsv: 'JSON kwenda CSV',
    yamlToJson: 'YAML kwenda JSON',
    xmlToJson: 'XML kwenda JSON',
    csvToJson: 'CSV kwenda JSON'
  },
  input: {
    defaultLabel: 'Ingizo',
    jsonLabel: 'Ingizo la JSON',
    yamlLabel: 'Ingizo la YAML',
    xmlLabel: 'Ingizo la XML',
    csvLabel: 'Ingizo la CSV',
    defaultPlaceholder: 'Bandika data hapa',
    jsonPlaceholder: 'Bandika data za JSON hapa',
    yamlPlaceholder: 'Bandika data za YAML hapa',
    xmlPlaceholder: 'Bandika data za XML hapa',
    csvPlaceholder: 'Bandika data za CSV hapa'
  },
  output: {
    defaultLabel: 'Tokeo',
    jsonLabel: 'Tokeo la JSON',
    yamlLabel: 'Tokeo la YAML',
    xmlLabel: 'Tokeo la XML',
    csvLabel: 'Tokeo la CSV',
    placeholder: 'Matokeo ya ubadilishaji yataonekana hapa'
  },
  actions: {
    convert: 'Geuza',
    processing: 'Inachakata...',
    copy: 'Nakili',
    download: 'Pakua',
    clear: 'Futa'
  },
  errors: {
    emptyInput: 'Tafadhali ingiza data za kubadilisha',
    conversionFailed: 'Kosa la ubadilishaji',
    unsupportedConversion: 'Aina ya ubadilishaji isiyotumika',
    invalidJson: 'JSON batili',
    invalidYaml: 'YAML batili',
    invalidXml: 'XML batili',
    invalidCsv: 'CSV batili',
    jsonNotArray: 'JSON lazima iwe safu ya vitu ili kubadilisha kwenda CSV',
    unknownError: 'Kosa lisilojulikana limetokea wakati wa ubadilishaji'
  },
  alerts: {
    copySuccess: 'Imenakiliwa kwenye ubao wa kunakili',
    copyFailed: 'Kunakili kumeshindikana'
  }
}; 