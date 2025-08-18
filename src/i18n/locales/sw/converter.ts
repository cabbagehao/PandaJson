export const converter = {
  title: 'Mbadilishaji wa JSON',
  h1Title: 'Convert JSON Format',
  seo_title: 'Mbadilishaji wa JSON – Badilisha JSON kwenda/kutoka YAML, XML, CSV na Zaidi',
  description: 'Badilisha JSON kwa YAML, XML, CSV na kinyume chake kwa ulaini. Bora kwa uhamishaji wa data, usimamizi wa mpangilio na mtiririko wa kazi za kubadilishana data katika majukwaa tofauti.',
  keywords: 'Kigeuzaji cha JSON,JSON kwenda XML,JSON kwenda YAML,XML kwenda JSON,YAML kwenda JSON,CSV kwenda JSON,JSON kwenda CSV,Ubadilishaji wa JSON,kigeuzaji cha fomati ya data,kuhamisha JSON,ubadilishaji wa fomati za data,ubadilishaji wa data ya JSON,zana ya ubadilishaji wa fomati,ubadilishaji wa pande mbili,fomati za kubadilishana data,badilisha JSON mtandaoni,mtafsiri wa fomati ya data,ubadilishaji wa fomati ya faili,kuagiza na kutoa JSON,zana ya uhamishaji wa JSON',
  introduction: 'Mbadilishaji wa JSON ni suluhisho lako la kila kitu kwa kubadilisha kwa urahisi data kati ya JSON na fomati zingine zinazotumika sana. Iwapo unahitaji kubadilisha JSON kwenda YAML kwa faili za usanidi, kubadilisha JSON kwenda XML kwa mifumo ya zamani, au kutoa JSON kwenda CSV kwa uchambuzi wa data, zana yetu inashughulikia ubadilishaji huu kwa usahihi na urahisi.\n\nMbadilishaji wetu hudumisha uthabiti wa data wakati wa ubadilishaji, ukihifadhi uhusiano wa kihierarkia, aina za data, na vipengele vya kimuundo. Kiolesura rahisi hukuruhusu kubandika au kupakia data yako ya chanzo, kuchagua fomati yako lengwa, na mara moja kuona matokeo yaliyobadilishwa.\n\nVipengele muhimu ni pamoja na:\n• Ubadilishaji wa pande mbili kati ya JSON na YAML, XML, CSV, na TSV\n• Uhifadhi wa miundo iliyofungwa ndani na aina za data pale zinapotumika\n• Chaguo zinazorekebishwa kwa kila ubadilishaji wa fomati\n• Hakiki ya mara moja ya matokeo yaliyobadilishwa\n• Nakili kwenye ubao wa kunakili au utendaji wa kupakua\n• Usaidizi wa seti kubwa za data\n\nBandika tu data yako, chagua fomati yako lengwa, na wacha mbadilishaji wetu ashughulikie sehemu iliyobaki—akikuokoa muda na juhudi muhimu katika mtiririko wako wa kazi wa maendeleo.',
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
  },

  // How to Use Section
  howToUse: {
    title: 'Jinsi ya Kutumia Mbadilishaji wa JSON',
    steps: [
      {
        title: 'Chagua Aina ya Ubadilishaji',
        description: 'Chagua aina ya ubadilishaji unayotaka kutoka kwenye menyu kunjuzi: JSON kwenda YAML/XML/CSV au kinyume chake. Chombo kinasaidia ubadilishaji wa pande mbili kati ya fomati zote.'
      },
      {
        title: 'Bandika Data Yako',
        description: 'Nakili na ubandike data ya chanzo kwenye kihariri cha kushoto. Chombo kitakagua fomati kiotomatiki na kufanya uthibitishaji unaofaa.'
      },
      {
        title: 'Geuza',
        description: 'Bofya kitufe cha "Geuza" kuanza ubadilishaji. Matokeo yataonekana mara moja kwenye kihariri cha kulia na ufanyaji unaofaa.'
      },
      {
        title: 'Nakili au Pakua',
        description: 'Tumia vitufe vya "Nakili" au "Pakua" kuhifadhi matokeo yaliyobadilishwa. Faili itapakuliwa na kiendelezi kinachofaa kwa fomati.'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'Maswali Yanayoulizwa Mara Kwa Mara',
    items: [
      {
        question: 'Ni fomati gani mbadilishaji unazisaidia?',
        answer: 'Mbadilishaji wetu unasaidia ubadilishaji wa pande mbili kati ya JSON, YAML, XML, na CSV. Unaweza kubadilisha kutoka kwa mojawapo ya fomati hizi kwenda nyingine yoyote, kulingana na mahitaji yako.'
      },
      {
        question: 'Je, miundo ngumu iliyofungwa ndani inasalimishwa wakati wa ubadilishaji?',
        answer: 'Ndio, mbadilishaji wetu umeundwa kuhifadhi miundo ngumu ya data, ikiwemo vitu vilivyofungwa ndani, safu, na aina mbalimbali za data. Chombo kinaramsha miundo kwa uangalifu ili kuhakikisha usahihi.'
      },
      {
        question: 'Kwa nini siwezi kubadilisha JSON kwenda CSV?',
        answer: 'Ili kubadilisha JSON kwenda CSV, JSON yako lazima iwe safu ya vitu ambapo kila kitu kina sifa zinazofanana. Fomati ya CSV ni ya jedwali na haiwezi kuwakilisha miundo ya JSON isiyoaminika moja kwa moja.'
      },
      {
        question: 'Vigeu vya kipekee vinashughulikiwa vipi wakati wa ubadilishaji?',
        answer: 'Mbadilishaji unashughulikia vigeu vya kipekee, maandishi ya Unicode, na mfuatano wa kukimbia kwa usahihi kwa fomati zote zinazotumika. Msimbo unahifadhiwa ili kuhakikisha uthabiti wa data.'
      },
      {
        question: 'Je, data yangu ni salama wakati wa kutumia mbadilishaji?',
        answer: 'Kabisa! Ubadilishaji wote unafanywa ndani ya kivinjari chako. Data yako haijawahi kutumwa kwenye seva au kuhifadhiwa nje ya kifaa chako, ikihakikisha faragha kamili.'
      },
      {
        question: 'Je, naweza kubadilisha faili kubwa?',
        answer: 'Ndio, mbadilishaji unaweza kushughulikia faili za ukubwa wa kiwasani. Hata hivyo, faili kubwa sana zinaweza kusababisha matatizo ya utendaji katika kivinjari, kwa hiyo tunapendekeza kujaribu na sampuli ndogo kwanza.'
      },
      {
        question: 'Nifanye nini ikiwa nitapata kosa wakati wa ubadilishaji?',
        answer: 'Ikiwa utapata kosa, kwanza kagua ikiwa chanzo chako cha data ni halali kwa fomati uliyochagua. Mbadilishaji hutoa ujumbe wa kina wa makosa ili kukusaidia kutambua na kurekebisha tatizo.'
      },
      {
        question: 'Je, mbadilishaji unasaidia XML na sifa?',
        answer: 'Ndio, mbadilishaji unaweza kushughulikia XML iliyo na sifa. Wakati wa kubadilisha kutoka XML kwenda JSON, sifa zinawakiliwa kama sifa za kipekee na kiambishi cha @, ikifuata miongozo ya kawaida.'
      }
    ]
  }
}; 