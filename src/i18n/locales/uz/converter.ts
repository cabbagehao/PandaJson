export const converter = {
  title: 'JSON Aylantirish',
  h1Title: 'Convert JSON Format',
  seo_title: 'JSON Konverter – JSON ni YAML, XML, CSV va boshqalarga o\'zgartiring',
  description: 'JSON ma\'lumotlarini boshqa formatlarga (YAML, XML, CSV) o\'zgartiring, yoki boshqa formatlarni JSON ga o\'zgartiring.',
  keywords: 'JSON konverter,JSON dan XML ga,JSON dan YAML ga,XML dan JSON ga,YAML dan JSON ga,CSV dan JSON ga,JSON dan CSV ga,JSON transformatsiyasi,ma\'lumotlar formati konverteri,JSON eksport,ma\'lumotlar formati konversiyasi,JSON ma\'lumotlar transformatsiyasi,format konversiya vositasi,ikki tomonlama konversiya,ma\'lumotlar almashinuvi formatlari,JSON ni onlayn konverterlash,ma\'lumotlar formati tarjimoni,fayl formati konversiyasi,JSON import-eksport,JSON migratsiya vositasi',
  introduction: 'JSON Konverter JSON va boshqa ommabop formatlar o\'rtasida ma\'lumotlarni uzluksiz o\'zgartirish uchun universal yechimingizdir. Xoh sizga konfiguratsiya fayllari uchun JSON ni YAML ga o\'zgartirish kerak bo\'lsin, eski tizimlar uchun JSON ni XML ga aylantirish kerak bo\'lsin yoki ma\'lumotlarni tahlil qilish uchun JSON dan CSV formatiga eksport qilish kerak bo\'lsin, bizning vositamiz bu konversiyalarni aniqlik va osonlik bilan bajaradi.\n\nBizning konverterimiz o\'zgartirish jarayonida ma\'lumotlar yaxlitligini saqlab qoladi, ierarxik munosabatlar, ma\'lumotlar turlari va tuzilmaviy elementlarni saqlaydi. Intuitiv interfeys manba ma\'lumotlaringizni joylashtirish yoki yuklash, maqsadli formatni tanlash va tezda konvertirlangan natijani ko\'rish imkonini beradi.\n\nAsosiy xususiyatlarga quyidagilar kiradi:\n• JSON va YAML, XML, CSV va TSV o\'rtasida ikki tomonlama konversiya\n• Qo\'llab-quvvatlanadigan joylarda ichki tuzilmalar va ma\'lumotlar turlarini saqlash\n• Har bir format konversiyasi uchun sozlanuvchi parametrlar\n• Konvertirlangan natijaning jonli ko\'rinishi\n• Klipbordga nusxalash yoki yuklab olish funksionalligi\n• Katta ma\'lumotlar to\'plamlari uchun qo\'llab-quvvatlash\n\nShunchaki ma\'lumotlaringizni joylashtiring, maqsadli formatni tanlang va qolganini konverterimizga qo\'ying - bu sizning dasturiy ta\'minot ishlab chiqish jarayonlarida qimmatli vaqt va harakatlaringizni tejaydi.',
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