export const converter = {
  title: 'JSON Конвертор',
  description: 'Конвертирај JSON податоци во други формати (YAML, XML, CSV), или конвертирај други формати во JSON.',
  keywords: 'JSON конвертор,JSON во XML,JSON во YAML,XML во JSON,YAML во JSON,CSV во JSON,JSON во CSV',
  options: {
    title: 'Опции за конверзија',
    conversionType: 'Тип на конверзија',
    jsonTo: 'JSON во',
    toJson: 'Во JSON',
    jsonToYaml: 'JSON во YAML',
    jsonToXml: 'JSON во XML',
    jsonToCsv: 'JSON во CSV',
    yamlToJson: 'YAML во JSON',
    xmlToJson: 'XML во JSON',
    csvToJson: 'CSV во JSON'
  },
  input: {
    defaultLabel: 'Влез',
    jsonLabel: 'JSON влез',
    yamlLabel: 'YAML влез',
    xmlLabel: 'XML влез',
    csvLabel: 'CSV влез',
    defaultPlaceholder: 'Залепете податоци тука',
    jsonPlaceholder: 'Залепете JSON податоци тука',
    yamlPlaceholder: 'Залепете YAML податоци тука',
    xmlPlaceholder: 'Залепете XML податоци тука',
    csvPlaceholder: 'Залепете CSV податоци тука'
  },
  output: {
    defaultLabel: 'Излез',
    jsonLabel: 'JSON излез',
    yamlLabel: 'YAML излез',
    xmlLabel: 'XML излез',
    csvLabel: 'CSV излез',
    placeholder: 'Резултатот од конверзијата ќе се појави тука'
  },
  actions: {
    convert: 'Конвертирај',
    processing: 'Обработка...',
    copy: 'Копирај',
    download: 'Преземи',
    clear: 'Исчисти'
  },
  errors: {
    emptyInput: 'Ве молиме внесете податоци за конверзија',
    conversionFailed: 'Грешка при конверзија',
    unsupportedConversion: 'Неподдржан тип на конверзија',
    invalidJson: 'Невалиден JSON',
    invalidYaml: 'Невалиден YAML',
    invalidXml: 'Невалиден XML',
    invalidCsv: 'Невалиден CSV',
    jsonNotArray: 'JSON мора да биде низа од објекти за конверзија во CSV',
    unknownError: 'Се случи непозната грешка при конверзијата'
  },
  alerts: {
    copySuccess: 'Копирано во клипборд',
    copyFailed: 'Копирањето не успеа'
  }
}; 