export const converter = {
  title: 'محول JSON',
  description: 'تحويل بيانات JSON إلى تنسيقات أخرى (YAML، XML، CSV)، أو تحويل تنسيقات أخرى إلى JSON.',
  keywords: 'محول JSON، تحويل JSON إلى XML، تحويل JSON إلى YAML، تحويل XML إلى JSON، تحويل YAML إلى JSON، تحويل CSV إلى JSON، تحويل JSON إلى CSV',
  options: {
    title: 'خيارات التحويل',
    conversionType: 'نوع التحويل',
    jsonTo: 'تحويل JSON إلى',
    toJson: 'تحويل إلى JSON',
    jsonToYaml: 'تحويل JSON إلى YAML',
    jsonToXml: 'تحويل JSON إلى XML',
    jsonToCsv: 'تحويل JSON إلى CSV',
    yamlToJson: 'تحويل YAML إلى JSON',
    xmlToJson: 'تحويل XML إلى JSON',
    csvToJson: 'تحويل CSV إلى JSON'
  },
  input: {
    defaultLabel: 'المدخلات',
    jsonLabel: 'مدخلات JSON',
    yamlLabel: 'مدخلات YAML',
    xmlLabel: 'مدخلات XML',
    csvLabel: 'مدخلات CSV',
    defaultPlaceholder: 'الصق البيانات هنا',
    jsonPlaceholder: 'الصق بيانات JSON هنا',
    yamlPlaceholder: 'الصق بيانات YAML هنا',
    xmlPlaceholder: 'الصق بيانات XML هنا',
    csvPlaceholder: 'الصق بيانات CSV هنا'
  },
  output: {
    defaultLabel: 'المخرجات',
    jsonLabel: 'مخرجات JSON',
    yamlLabel: 'مخرجات YAML',
    xmlLabel: 'مخرجات XML',
    csvLabel: 'مخرجات CSV',
    placeholder: 'ستظهر نتيجة التحويل هنا'
  },
  actions: {
    convert: 'تحويل',
    processing: 'جاري المعالجة...',
    copy: 'نسخ',
    download: 'تنزيل',
    clear: 'مسح'
  },
  errors: {
    emptyInput: 'الرجاء إدخال بيانات للتحويل',
    conversionFailed: 'خطأ في التحويل',
    unsupportedConversion: 'نوع تحويل غير مدعوم',
    invalidJson: 'JSON غير صالح',
    invalidYaml: 'YAML غير صالح',
    invalidXml: 'XML غير صالح',
    invalidCsv: 'CSV غير صالح',
    jsonNotArray: 'يجب أن يكون JSON مصفوفة من الكائنات للتحويل إلى CSV',
    unknownError: 'حدث خطأ غير معروف أثناء التحويل'
  },
  alerts: {
    copySuccess: 'تم النسخ إلى الحافظة',
    copyFailed: 'فشل النسخ'
  }
}; 