export const converter = {
  title: 'JSON Converter',
  description: 'Легко конвертируйте между форматами XML, YAML, CSV и JSON, с двунаправленным преобразованием и настраиваемыми параметрами',
  keywords: 'Конвертер JSON,JSON в XML,JSON в YAML,XML в JSON,YAML в JSON,CSV в JSON,JSON в CSV',
  options: {
    title: 'Параметры Конвертации',
    conversionType: 'Тип Конвертации',
    jsonTo: 'JSON в',
    toJson: 'В JSON',
    jsonToYaml: 'JSON в YAML',
    jsonToXml: 'JSON в XML',
    jsonToCsv: 'JSON в CSV',
    yamlToJson: 'YAML в JSON',
    xmlToJson: 'XML в JSON',
    csvToJson: 'CSV в JSON'
  },
  input: {
    defaultLabel: 'Ввод',
    jsonLabel: 'Ввод JSON',
    yamlLabel: 'Ввод YAML',
    xmlLabel: 'Ввод XML',
    csvLabel: 'Ввод CSV',
    defaultPlaceholder: 'Вставьте данные здесь',
    jsonPlaceholder: 'Вставьте данные JSON здесь',
    yamlPlaceholder: 'Вставьте данные YAML здесь',
    xmlPlaceholder: 'Вставьте данные XML здесь',
    csvPlaceholder: 'Вставьте данные CSV здесь'
  },
  output: {
    defaultLabel: 'Вывод',
    jsonLabel: 'Вывод JSON',
    yamlLabel: 'Вывод YAML',
    xmlLabel: 'Вывод XML',
    csvLabel: 'Вывод CSV',
    placeholder: 'Результат конвертации появится здесь'
  },
  actions: {
    convert: 'Конвертировать',
    processing: 'Обработка...',
    copy: 'Копировать',
    download: 'Скачать',
    clear: 'Очистить'
  },
  errors: {
    emptyInput: 'Пожалуйста, введите данные для конвертации',
    conversionFailed: 'Ошибка конвертации',
    unsupportedConversion: 'Неподдерживаемый тип конвертации',
    invalidJson: 'Недействительный JSON',
    invalidYaml: 'Недействительный YAML',
    invalidXml: 'Недействительный XML',
    invalidCsv: 'Недействительный CSV',
    jsonNotArray: 'JSON должен быть массивом объектов для конвертации в CSV',
    unknownError: 'Неизвестная ошибка произошла во время конвертации'
  },
  alerts: {
    copySuccess: 'Скопировано в буфер обмена',
    copyFailed: 'Не удалось скопировать'
  }
}; 