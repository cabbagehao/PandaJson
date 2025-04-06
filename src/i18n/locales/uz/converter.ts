export const converter = {
  title: 'JSON konverter',
  description: 'JSON ma\'lumotlarini boshqa formatlarga (YAML, XML, CSV) o\'zgartiring, yoki boshqa formatlarni JSON ga o\'zgartiring.',
  keywords: 'JSON konverter,JSON dan XML ga,JSON dan YAML ga,XML dan JSON ga,YAML dan JSON ga,CSV dan JSON ga,JSON dan CSV ga',
  options: {
    title: 'Konversiya parametrlari',
    conversionType: 'Konversiya turi',
    jsonTo: 'JSON dan',
    toJson: 'JSON ga',
    jsonToYaml: 'JSON dan YAML ga',
    jsonToXml: 'JSON dan XML ga',
    jsonToCsv: 'JSON dan CSV ga',
    yamlToJson: 'YAML dan JSON ga',
    xmlToJson: 'XML dan JSON ga',
    csvToJson: 'CSV dan JSON ga'
  },
  input: {
    defaultLabel: 'Kirish',
    jsonLabel: 'JSON kirish',
    yamlLabel: 'YAML kirish',
    xmlLabel: 'XML kirish',
    csvLabel: 'CSV kirish',
    defaultPlaceholder: 'Ma\'lumotlarni bu yerga joylashtiring',
    jsonPlaceholder: 'JSON ma\'lumotlarini bu yerga joylashtiring',
    yamlPlaceholder: 'YAML ma\'lumotlarini bu yerga joylashtiring',
    xmlPlaceholder: 'XML ma\'lumotlarini bu yerga joylashtiring',
    csvPlaceholder: 'CSV ma\'lumotlarini bu yerga joylashtiring'
  },
  output: {
    defaultLabel: 'Chiqish',
    jsonLabel: 'JSON chiqish',
    yamlLabel: 'YAML chiqish',
    xmlLabel: 'XML chiqish',
    csvLabel: 'CSV chiqish',
    placeholder: 'Konversiya natijasi shu yerda ko\'rsatiladi'
  },
  actions: {
    convert: 'O\'zgartirish',
    processing: 'Ishlov berilmoqda...',
    copy: 'Nusxalash',
    download: 'Yuklab olish',
    clear: 'Tozalash'
  },
  errors: {
    emptyInput: 'Iltimos, o\'zgartirish uchun ma\'lumot kiriting',
    conversionFailed: 'Konversiya xatosi',
    unsupportedConversion: 'Qo\'llab-quvvatlanmaydigan konversiya turi',
    invalidJson: 'Noto\'g\'ri JSON',
    invalidYaml: 'Noto\'g\'ri YAML',
    invalidXml: 'Noto\'g\'ri XML',
    invalidCsv: 'Noto\'g\'ri CSV',
    jsonNotArray: 'CSV ga o\'zgartirish uchun JSON obyektlar qatori bo\'lishi kerak',
    unknownError: 'Konversiya paytida noma\'lum xato yuz berdi'
  },
  alerts: {
    copySuccess: 'Klipbordga nusxalandi',
    copyFailed: 'Nusxalash muvaffaqiyatsiz bo\'ldi'
  }
}; 