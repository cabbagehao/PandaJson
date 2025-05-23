export const converter = {
  title: 'JSON Конвертор',
  seo_title: 'JSON Конвертор – Трансформирај JSON во YAML, XML, CSV и обратно',
  description: 'Конвертирај JSON податоци во други формати (YAML, XML, CSV), или конвертирај други формати во JSON.',
  keywords: 'JSON конвертор,JSON во XML,JSON во YAML,XML во JSON,YAML во JSON,CSV во JSON,JSON во CSV,конверзија на JSON,YAML трансформатор,XML конвертор,конверзија на формати на податоци,конвертирај JSON датотека,конвертирај YAML во JSON,конвертирај XML во JSON,формат на податоци конвертор,JSON трансформатор,JSON извоз,JSON импорт,конверзија на податоци,трансформирај JSON,конвертирај JSON во CSV,преведувач на JSON формат,JSON компатибилност,конверзија на датотеки',
  introduction: 'Нашиот **JSON Конвертор** е моќна алатка што ви овозможува брзо и точно да конвертирате помеѓу JSON и други популарни формати на податоци, вклучувајќи YAML, XML и CSV. Без разлика дали треба да трансформирате конфигурациски фајлови, да миграте податоци или да интегрирате различни системи, нашиот конвертор ги поедноставува овие комплексни задачи.\n\nНашата алатка е дизајнирана за да ги зачува сите аспекти на вашите податоци, правилно ракувајќи со вгнездени структури, различни типови на податоци и специјални знаци. Едноставниот интерфејс ви овозможува да изберете тип на конверзија, да го внесете вашиот извор на податоци и веднаш да добиете резултат во саканиот формат.\n\nБез разлика дали сте девелопер кој работи со API-ја, инженер за податоци кој манипулира со сетови на податоци, или систем администратор кој управува со конфигурации, нашиот JSON конвертор ви заштедува време и ги елиминира грешките при рачната конверзија на формати, обезбедувајќи беспрекорна трансформација меѓу различни претставувања на податоци.',
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