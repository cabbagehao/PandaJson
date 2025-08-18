export const schemaValidator = {
  title: 'Mthibitishaji wa Muundo wa JSON',
  h1Title: 'Validate JSON Schema',
  seo_title: 'Thibitisha JSON Dhidi ya Muundo – Hakikisha Uthabiti wa Muundo wa Data',
  description: 'Hakiki kufuata data ya JSON kwa maparagrafu ya muundo. Hakikisha mikataba ya API, aina za data na vikwazo vya uwanda vinapatana kikamilifu na mahitaji ya programu yako.',
  keywords: 'Mfumo wa JSON,Uthibitishaji wa JSON,Uthibitishaji wa mfumo,Uthibitishaji wa muundo wa JSON,Uthibitishaji wa fomati ya JSON,Mthibitishaji wa muundo wa JSON,Mchunguzi wa kufuata muundo,Uthabiti wa data ya JSON,thibitisha dhidi ya muundo,uthibitishaji wa vizuizi vya JSON,uthibitishaji wa aina,uthibitishaji wa muundo,uthibitishaji wa mfumo,uthibitishaji wa sheria za JSON,mthibitishaji wa sehemu zinazohitajika,mkaguzi wa fomati ya JSON,mthibitishaji wa mkataba wa JSON,uthibitishaji wa muundo wa API',
  introduction: 'Je, unahitaji kuhakikisha kuwa data yako ya JSON inafanana na muundo maalum (kama vile, mikataba ya API au modeli za data)? **Mthibitishaji wetu wa Muundo wa JSON** hunakili kama JSON yako inafuata muundo uliofafanuliwa, ukithibitisha aina za sehemu, funguo zinazohitajika, na vizuizi vya data. Hii ni muhimu kwa ushirikiano wa timu, nyaraka za API, na kuhakikisha usawa wa data katika mifumo.\n\nJinsi inavyofanya kazi: Pakia faili yako ya JSON na muundo (au bandika muundo moja kwa moja), na tutathibitisha dhidi ya sifa kama `type`, `enum`, `minimum`, na `pattern`. Ujumbe wa hitilafu huonyesha mahali ambapo data haifuati muundo, kikusaidia kurekebisha matatizo haraka.\n\nIwapo unaendeleza huduma ndogo, unathibitisha maingizo ya watumiaji, au unaunda viwango vya mtiririko wa data, **chombo chetu cha thibitisha muundo wa json** kinahakikisha kuwa miundo ya data yako ni ya kuaminika na inafuata kanuni. Jaribu bure leo!',
  jsonData: 'Data ya JSON',
  jsonSchema: 'Mfumo wa JSON',
  options: 'Chaguo',
  validate: 'Thibitisha',
  validating: 'Inathibitisha...',
  clear: 'Futa',
  loadExample: 'Pakia Mfano',
  jsonPlaceholder: 'Ingiza data ya JSON hapa',
  schemaPlaceholder: 'Ingiza Mfumo wa JSON hapa',
  result: 'Matokeo',
  valid: 'Halali',
  invalid: 'Batili',
  errorDetails: 'Maelezo ya Hitilafu',
  guideTitle: 'Mwongozo wa Mfumo wa JSON',
  guideDescription: 'Mfumo wa JSON unatumiwa kuelezea muundo na kuthibitisha data ya JSON.',
  basicTypesTitle: 'Aina za Msingi',
  commonRulesTitle: 'Sheria za Kawaida',
  strictMode: 'Hali Madhubuti',
  strictModeDescription: 'Tekeleza vizuizi vya uthibitishaji vya ziada ambavyo havijabainishwa katika maelezo ya JSON Schema',
  jsonParseError: 'Hitilafu ya Uchanganuzi wa JSON',
  schemaParseError: 'Hitilafu ya Uchanganuzi wa Schema',
  rules: 'Sheria za Kawaida za Uthibitishaji',

  // How to Use Section
  howToUse: {
    title: 'Jinsi ya Kutumia Mthibitishaji wa Muundo wa JSON',
    steps: [
      {
        title: 'Andaa Data',
        description: 'Ingiza data yako ya JSON unayotaka kuthibitisha kwenye kihariri cha kushoto. Hizi zinaweza kuwa majibu ya API, faili za usanidi, au data yoyote ya JSON.'
      },
      {
        title: 'Fafanua Muundo',
        description: 'Ingiza muundo wa JSON kwenye kihariri cha kulia. Muundo hufafanua sheria, aina za data, sehemu zinazohitajika na vizuizi ambavyo data yako ya JSON inapaswa kufuata.'
      },
      {
        title: 'Sanidi Chaguo',
        description: 'Chagua kama unataka kutumia hali madhubuti kwa uthibitishaji wa ziada ambao unaweza kukusaidia kunasa matatizo yanayowezekana.'
      },
      {
        title: 'Thibitisha na Kagua',
        description: 'Bofya "Thibitisha" kuanza ukaguzi. Ikiwa kuna makosa, utapata maelezo ya kina kuhusu kile ambacho hakifuati muundo.'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'Maswali Yanayoulizwa Mara Kwa Mara',
    items: [
      {
        question: 'Muundo wa JSON ni nini na kwa nini ninahitaji?',
        answer: 'Muundo wa JSON ni kiwango cha kuelezea na kuthibitisha muundo wa data ya JSON. Hufafanua ni sehemu gani zinazohitajika, ni aina gani za data zinazoruhusiwa, na ni vizuizi gani vinavyotumika. Hii ni muhimu kwa mikataba ya API, uthibitishaji wa data na kuhakikisha uthabiti.'
      },
      {
        question: 'Ni matoleo gani ya muundo wa JSON yanayosaidika?',
        answer: 'Mthibitishaji wetu unasaidia JSON Schema Draft-07 na matoleo mapya zaidi. Hii inajumuisha usaidizi wa maneno muhimu ya kawaida kama type, properties, required, minimum, maximum, pattern na mengine.'
      },
      {
        question: 'Hali madhubuti inamaanisha nini?',
        answer: 'Hali madhubuti inatekeleza vizuizi vya ziada ambavyo vinaweza kukusaidia kunasa matatizo yanayowezekana. Kwa mfano, inaweza kuripoti sifa zisizojulikana kama makosa, hata ikiwa muundo hauzikatazi kwa uwazi.'
      },
      {
        question: 'Jinsi ya kuunda muundo wa JSON?',
        answer: 'Muundo wa JSON ni nyaraka ya JSON yenyewe inayofafanua sheria. Anza na aina ya msingi (object, array, string, n.k.), ongeza properties kwa vitu, items kwa safu, na tekeleza vizuizi kama required, minimum, pattern kulingana na mahitaji.'
      },
      {
        question: 'Je, naweza kuthibitisha vitu vilivyofungwa ndani na safu?',
        answer: 'Ndio, muundo wa JSON unasaidia kikamilifu uthibitishaji wa miundo iliyofungwa ndani. Unaweza kufafanua muundo kwa vitu ndani ya vitu, safu za vitu, au muundo wowote mgumu kwa kutumia maneno ya properties na items.'
      },
      {
        question: 'Nifanye nini ikiwa nitapata makosa ya uthibitishaji?',
        answer: 'Mthibitishaji hutoa ujumbe wa makosa wa kina unaoonyesha kwa usahihi mahali ambapo data haifuati muundo. Tumia maelezo haya kurekebisha data au kurekebisha muundo kulingana na mahitaji yako.'
      },
      {
        question: 'Je, data na miundu yangu ni salama?',
        answer: 'Kabisa! Uthibitishaji wote unafanywa ndani ya kivinjari chako. Wala data yako ya JSON wala miundu haijawahi kutumwa kwenye seva au kuhifadhiwa nje ya kifaa chako, ikihakikisha faragha kamili.'
      },
      {
        question: 'Je, naweza kutumia miundu mgumu na marejeo?',
        answer: 'Ndio, mthibitishaji unasaidia neno muhimu la $ref kwa kurejelea sehemu nyingine za muundo au miundu ya nje. Hii inakuwezesha kuunda ufafanuzi wa muundo wa modula na unaotumiwa tena.'
      }
    ]
  }
}; 