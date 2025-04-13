export const converter = {
  title: 'محول JSON',
  seo_title: 'محول JSON متعدد الاستخدامات - تحويل بين XML و YAML و CSV و JSON',
  description: 'تحويل بسهولة بين تنسيقات XML و YAML و CSV و JSON، مع دعم التحويل ثنائي الاتجاه والخيارات المخصصة',
  keywords: 'محول JSON، تحويل JSON إلى XML، تحويل JSON إلى YAML، تحويل XML إلى JSON، تحويل YAML إلى JSON، تحويل CSV إلى JSON، تحويل JSON إلى CSV',
  introduction: 'محول JSON هو أداة شاملة تبسط عملية التحويل بين تنسيقات البيانات الشائعة: JSON و XML و YAML و CSV. صُمِّمت لتوفير الوقت للمطورين ومحللي البيانات والمحررين التقنيين، وتتميز بواجهة مستخدم بديهية تجعل تحويل البيانات عملية سلسة.\n\nمع خيارات التحويل ثنائية الاتجاه، يمكنك بسهولة تحويل أي من هذه التنسيقات إلى أي تنسيق آخر. فقط حدد نوع التحويل المطلوب، والصق البيانات المصدر، وانقر على "تحويل". ستظهر النتيجة فورًا، جاهزة للنسخ أو التنزيل.\n\nميزات رئيسية:\n• تحويل JSON إلى XML و YAML و CSV والعكس\n• معالجة سريعة لملفات البيانات الكبيرة\n• تحويل دقيق يحافظ على البنية الهرمية للبيانات\n• تنسيق مخرجات نظيف وقابل للقراءة\n• خيارات تحويل متقدمة للسيطرة الدقيقة على المخرجات\n\nالمحول مثالي للمطورين الذين يعملون مع واجهات برمجة تطبيقات متعددة، ومديري المحتوى الذين يحتاجون إلى تغيير تنسيقات البيانات، ومحللي البيانات الذين يتعاملون مع مصادر بيانات متنوعة. يتعامل مع أكثر حالات التحويل تعقيدًا مع الحفاظ على سلامة بياناتك.',
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