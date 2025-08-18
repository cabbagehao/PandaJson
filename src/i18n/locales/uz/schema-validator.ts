export const schemaValidator = {
  title: 'JSON Sxema tekshirish',
  h1Title: 'Validate JSON Schema',
  seo_title: 'JSON ni Sxema bo\'yicha tekshirish – Ma\'lumotlar tuzilishi yaxlitligini ta\'minlash',
  description: 'JSON ma\'lumotlarini JSON Sxema bilan tekshiring, boy tekshirish qoidalari va batafsil xato xabarlarini qo\'llab-quvvatlaydi.',
  keywords: 'JSON Sxema,JSON tekshirish,Sxema tekshirish,JSON tuzilishini tekshirish,JSON formatini tekshirish,JSON sxema tekshiruvchi,sxema muvofiqlik tekshiruvchi,JSON ma\'lumotlar yaxlitligi,sxemaga qarshi tekshirish,JSON cheklov tekshirish,tur tekshirish,tuzilish tekshirish,naqsh tekshirish,JSON qoidalari tekshirish,majburiy maydonlar tekshiruvchi,JSON format tekshiruvchi,JSON shartnoma tekshiruvchi,API sxema tekshirish',
  introduction: 'JSON ma\'lumotlaringiz ma\'lum bir sxemaga (masalan, API shartnomalariga yoki ma\'lumotlar modellariga) mos kelishini tekshirish kerakmi? Bizning **JSON Sxema Tekshiruvchi** vositamiz JSON ma\'lumotlaringiz belgilangan sxemaga mosligini tekshiradi, maydon turlarini, majburiy kalitlarni va ma\'lumotlar cheklovlarini tekshiradi. Bu jamoa hamkorligi, API hujjatlari va tizimlar bo\'ylab ma\'lumotlar izchilligini ta\'minlash uchun juda muhimdir.\n\nQanday ishlaydi: JSON va sxema faylingizni yuklang (yoki to\'g\'ridan-to\'g\'ri sxemani kiriting), va biz `type`, `enum`, `minimum` va `pattern` kabi xususiyatlarga qarshi tekshiramiz. Xato xabarlari ma\'lumotlar sxemaga mos kelmaydigan joyni aniq ko\'rsatadi, bu muammolarni tezda bartaraf etishga yordam beradi.\n\nXoh siz mikroxizmatlarni ishlab chiqayotgan bo\'ling, foydalanuvchi kiritishlarini tekshirayotgan bo\'ling yoki ma\'lumotlar oqimlarini standartlashtirmoqchi bo\'ling, bizning **json sxemasini tekshirish** vositamiz ma\'lumotlar tuzilmalaringiz ishonchli va mos ekanligini ta\'minlaydi. Bugun bepul sinab ko\'ring!',
  jsonData: 'JSON Ma\'lumotlari',
  jsonSchema: 'JSON Sxema',
  options: 'Parametrlar',
  validate: 'Tekshirish',
  validating: 'Tekshirilmoqda...',
  clear: 'Tozalash',
  loadExample: 'Misol yuklash',
  jsonPlaceholder: 'Bu yerga JSON ma\'lumotlarini kiriting',
  schemaPlaceholder: 'Bu yerga JSON Sxemasini kiriting',
  result: 'Natija',
  valid: 'Yaroqli',
  invalid: 'Yaroqsiz',
  errorDetails: 'Xato tafsilotlari',
  guideTitle: 'JSON Sxema qo\'llanmasi',
  guideDescription: 'JSON Sxema tuzilishni tavsiflash va JSON ma\'lumotlarini tekshirish uchun ishlatiladi.',
  basicTypesTitle: 'Asosiy turlar',
  commonRulesTitle: 'Umumiy qoidalar',
  strictMode: 'Qat\'iy rejim',
  strictModeDescription: 'JSON Schema spetsifikatsiyasida ko\'rsatilmagan qo\'shimcha tekshirish cheklovlarini qo\'llash',
  jsonParseError: 'JSON tahlil qilish xatosi',
  schemaParseError: 'Sxema tahlil qilish xatosi',
  rules: 'Umumiy tekshirish qoidalari',
  
  // How to Use Section
  howToUse: {
    title: 'JSON Schema Validator qanday ishlatiladi',
    steps: [
      {
        title: 'JSON ma\'lumotlaringizni tayyorlang',
        description: 'Tekshirmoqchi bo\'lgan JSON ma\'lumotlaringizni JSON ma\'lumotlar bo\'limiga joylashtiring. Bu sxema qoidalariga qarshi tekshiriladigan ma\'lumotlar.'
      },
      {
        title: 'Sxemangizni belgilang',
        description: 'JSON sxemangizni JSON Schema bo\'limiga kiriting. Sxema JSON ma\'lumotlaringiz amal qilishi kerak bo\'lgan tuzilma, ma\'lumot turlari va tekshirish qoidalarini belgilaydi.'
      },
      {
        title: 'Tekshirishni boshlang',
        description: '"Tekshirish" tugmasini bosing va JSON ma\'lumotlaringizni sxemaga qarshi tekshiring. Validator har ikkala hujjatni qayta ishlaydi va muvofiqlik masalalarini aniqlaydi.'
      },
      {
        title: 'Natijalarni ko\'rib chiqing',
        description: 'Tekshirish natijalarini o\'rganing, ular muvaffaqiyat tasdiqini yoki ma\'lumotlar sxema talablariga javob bermaydigan aniq joylar haqida batafsil xato xabarlarini ko\'rsatadi.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'JSON Schema Validator tez-tez so\'raladigan savollar',
    items: [
      {
        question: 'JSON Schema nima va uni nima uchun ishlatishim kerak?',
        answer: 'JSON Schema - JSON hujjatlarini belgilash va tekshirish imkonini beruvchi lug\'at. U JSON ma\'lumotlari uchun shartnomalarni belgilaydi, API izchilligini ta\'minlaydi, foydalanuvchi kiritgan ma\'lumotlarni tekshiradi va ma\'lumot tuzilmasi talablarining aniq hujjatlarini taqdim etadi.'
      },
      {
        question: 'Qaysi JSON Schema versiyalari qo\'llab-quvvatlanadi?',
        answer: 'Bizning validatorimiz JSON Schema Draft-07, Draft-06, Draft-04 va eng so\'nggi spetsifikatsiyalarni qo\'llab-quvvatlaydi. Validator sxema hujjatizdagi $schema xususiyatiga asoslanib sxema versiyasini avtomatik aniqlaydi.'
      },
      {
        question: 'Sxemalar bilan ichki o\'rnatilgan obyektlar va massivlarni tekshira olamanmi?',
        answer: 'Ha! JSON Schema obyektlar uchun xususiyatlar, massivlar uchun elementlar va shartli, bog\'liqliklar va rekursiv sxema havolalarini o\'z ichiga olgan murakkab tekshirish qoidalari bilan to\'liq ichki tekshirishni qo\'llab-quvvatlaydi.'
      },
      {
        question: 'Tekshirish xato xabarlari qanchalik batafsil?',
        answer: 'Bizning validatorimiz noto\'g\'ri ma\'lumotlarga aniq yo\'l, muvaffaqiyatsiz bo\'lgan aniq tekshirish qoidasi, kutilgan va haqiqiy qiymatlar va masalalarni tuzatish bo\'yicha takliflarni o\'z ichiga olgan keng qamrovli xato xabarlarini taqdim etadi.'
      },
      {
        question: 'Sxemamda maxsus tekshirish kalit so\'zlaridan foydalana olamanmi?',
        answer: 'Validator barcha standart JSON Schema kalit so\'zlarini qo\'llab-quvvatlaydi, jumladan: type, properties, required, pattern, minimum, maximum, enum va boshqalar. Kengaytmalardan maxsus kalit so\'zlari cheklangan qo\'llab-quvvatlashga ega bo\'lishi mumkin.'
      },
      {
        question: 'Bu validator API shartnoma testlari uchun mos keladimi?',
        answer: 'Albatta! JSON Schema tekshiruvi API shartnoma testlari uchun, so\'rov/javob ma\'lumotlarining kutilgan formatlarga mos kelishini ta\'minlash va turli API versiyalari va muhitlar o\'rtasida izchillikni saqlash uchun mukammaldir.'
      }
    ]
  }
}; 