export const diff = {
  title: 'JSON Taqqoslash',
  h1Title: 'Compare JSON Files',
  seo_title: 'JSON Ma\'lumotlar to\'plamini onlayn taqqoslash – Qo\'shimchalar, O\'chirishlar va O\'zgartirishlarni ajratib ko\'rsating',
  description: 'Ikkita JSON ob\'ektini solishtiring va qo\'shimchalar, o\'chirishlar va o\'zgartirishlarni ko\'ring.',
  keywords: 'JSON farq,JSON solishtirish,JSON farqi,JSON taqqoslash,JSON taqqoslovchi,JSON farqlarini topish,JSON o\'zgarishlarini kuzatuvchi,JSON versiyasi taqqoslash,JSON ma\'lumotlar farqi,JSON fayl solishtirish,JSON yonma-yon solishtirish,JSON tuzilishi taqqoslash,JSON farq vositasi,JSON o\'zgarishlarini aniqlash,JSON o\'zgartirishlarini kuzatish,JSON delta,vizual JSON farq,JSON ziddiyatlarini hal qilish',
  introduction: 'Jamoa loyihasi ustida ishlayapsizmi yoki JSON versiyasidagi o\'zgarishlarni kuzatmoqchimisiz? Bizning JSON Diff vositamiz ikkita JSON faylni tezda solishtirish va farqlarni vizualizatsiya qilishga yordam beradi. Biz qo\'shilgan kalitlar, o\'chirilgan yozuvlar va o\'zgartirilgan qiymatlarni bir qarashda farqlarni ko\'rish imkonini beruvchi aniq, rang-kodlangan ko\'rinishda ajratib ko\'rsatamiz.\nQo\'llanilish misollari quyidagilarni o\'z ichiga oladi:\nJSON konfiguratsiyalari bilan so\'rovlarni ko\'rib chiqish\nMa\'lumotlar bazasida ma\'lumotlar versiyalari tarixini kuzatish\nAPI javoblari o\'rtasidagi nomuvofiqliklarni tuzatish\nKod qatorlari orqali aylantirish kerak emas - bizning vositamiz murakkab taqqoslashlarni soddalashtirish uchun ichki ob\'ektlar va massivlarni avtomatik ravishda tahlil qiladi. Ikkita JSON faylni joylashtiring yoki yuklang va json taqqoslash xususiyatimizga nima o\'zgarganligini ko\'rsatishga ruxsat bering. Dasturchilar, QA guruhlari va ma\'lumotlar boshqaruvchilari uchun ideal!',
  leftInput: 'Birinchi JSON',
  rightInput: 'Ikkinchi JSON',
  result: 'Solishtirish Natijasi',
  placeholderLeft: 'Birinchi JSON ma\'lumotlaringizni shu yerga joylashtiring',
  placeholderRight: 'Ikkinchi JSON ma\'lumotlaringizni shu yerga joylashtiring',
  compare: 'Solishtirish',
  clear: 'Tozalash',
  loadExample: 'Misolni Yuklash',
  processing: 'Ishlanmoqda...',
  error: 'Solishtirish xatosi: ',
  unknown: 'Solishtirish paytida noma\'lum xato',
  diffGuide: 'Farqlar Bo\'yicha Qo\'llanma',
  addedContent: 'Qo\'shilgan Kontent',
  removedContent: 'Olib Tashlangan Kontent',
  modifiedContent: 'O\'zgartirilgan Kontent',
  originalJson: 'Asl JSON',
  updatedJson: 'Yangilangan JSON',
  
  // How to Use Section
  howToUse: {
    title: 'JSON Diff vositasi qanday ishlatiladi',
    steps: [
      {
        title: 'Birinchi JSON ni joylashtiring',
        description: 'Asl JSON ma\'lumotlaringizni chap kirish paneliga nusxalaing va joylashtiring. Bu taqqoslash uchun asos sifatida ishlatiladi.'
      },
      {
        title: 'Ikkinchi JSON ni joylashtiring',
        description: 'Yangilangan yoki o\'zgartirilgan JSON ma\'lumotlaringizni asl bilan taqqoslash uchun o\'ng kirish paneliga nusxalaing va joylashtiring.'
      },
      {
        title: 'Avtomatik taqqoslang',
        description: 'Vosita avtomatik ravishda farqlarni aniqlaydi va o\'zgarishlarni rang kodlashi bilan ta\'kidlaydi - qo\'shimchalar uchun yashil, o\'chirishlar uchun qizil va o\'zgartirishlar uchun sariq.'
      },
      {
        title: 'O\'zgarishlarni ko\'rib chiqing',
        description: 'Taqqoslash ko\'rinishidagi ta\'kidlangan farqlarni tekshiring. Nima qo\'shilgan, olib tashlangan yoki o\'zgartirilganini tushunish uchun o\'zgarishlar bo\'ylab navigatsiya qiling.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'JSON Diff vositasi tez-tez so\'raladigan savollar',
    items: [
      {
        question: 'JSON diff vositasi qanday turdagi o\'zgarishlarni aniqlay oladi?',
        answer: 'Bizning JSON diff vositamiz barcha turdagi o\'zgarishlarni aniqlaydi, jumladan qo\'shilgan xususiyatlar, o\'chirilgan xususiyatlar, o\'zgartirilgan qiymatlar, massiv o\'zgarishlari, ichki obyekt farqlari va tuzilmaviy o\'zgarishlar. O\'zgarishlar oson aniqlash uchun rang kodlanadi.'
      },
      {
        question: 'Katta JSON fayllarini taqqoslay olamanmi?',
        answer: 'Ha, bizning diff vositamiz katta JSON fayllarini va murakkab ichki tuzilmalarni samarali boshqaradi. Taqqoslash algoritmi unumdorlik uchun optimallashtirilgan va katta JSON hujjatlarini tezda qayta ishlay oladi.'
      },
      {
        question: 'Ichki obyekt farqlari qanday ko\'rsatiladi?',
        description: 'Ichki farqlar to\'g\'ri chegaralash va ierarxiya saqlanishi bilan aniq ta\'kidlanadi. Ichki JSON tuzilmalarida o\'zgarishlarni kuzatishni osonlashtiruvchi har bir darajadagi ichki joylashish to\'g\'ri vizuallashtiradi.'
      },
      {
        question: 'Bu vositani API javob taqqoslash uchun ishlatishim mumkinmi?',
        answer: 'Albatta! Bu vosita turli versiyalar, muhitlar yoki vaqt davrlari o\'rtasida API javoblarini taqqoslash uchun mukammaldir. Bu ishlab chiquvchilarga API xatti-harakatlari yoki ma\'lumot tuzilmasidagi o\'zgarishlarni tezda aniqlashga yordam beradi.'
      },
      {
        question: 'Agar bir JSON noto\'g\'ri bo\'lsa nima bo\'ladi?',
        answer: 'Agar JSON sintaksis xatolari bo\'lsa, vosita aniq masalalarni ko\'rsatuvchi xato xabarlarini ko\'rsatadi. Aniq taqqoslash natijalari uchun har ikkala JSON ham to\'g\'ri bo\'lishi kerak.'
      },
      {
        question: 'Vosita o\'zgarishlarning aniq joyini ko\'rsatadimi?',
        answer: 'Ha, o\'zgarishlar obyekt yo\'li va xususiyat nomlarini o\'z ichiga olgan aniq joylashuv ma\'lumotlari bilan ko\'rsatiladi, bu esa nima o\'zgarganini aniq topish va tushunishni osonlashtiradi.'
      }
    ]
  }
}; 