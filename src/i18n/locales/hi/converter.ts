export const converter = {
  title: 'JSON Converter',
  description: 'XML, YAML, CSV और JSON प्रारूपों के बीच आसानी से कनवर्ट करें, द्विदिशात्मक रूपांतरण और कस्टम विकल्पों के साथ',
  keywords: 'JSON कन्वर्टर, JSON से XML, JSON से YAML, XML से JSON, YAML से JSON, CSV से JSON, JSON से CSV',
  options: {
    title: 'कन्वर्जन विकल्प',
    conversionType: 'कन्वर्जन प्रकार',
    jsonTo: 'JSON से',
    toJson: 'JSON में',
    jsonToYaml: 'JSON से YAML',
    jsonToXml: 'JSON से XML',
    jsonToCsv: 'JSON से CSV',
    yamlToJson: 'YAML से JSON',
    xmlToJson: 'XML से JSON',
    csvToJson: 'CSV से JSON'
  },
  input: {
    defaultLabel: 'इनपुट',
    jsonLabel: 'JSON इनपुट',
    yamlLabel: 'YAML इनपुट',
    xmlLabel: 'XML इनपुट',
    csvLabel: 'CSV इनपुट',
    defaultPlaceholder: 'यहां डेटा पेस्ट करें',
    jsonPlaceholder: 'यहां JSON डेटा पेस्ट करें',
    yamlPlaceholder: 'यहां YAML डेटा पेस्ट करें',
    xmlPlaceholder: 'यहां XML डेटा पेस्ट करें',
    csvPlaceholder: 'यहां CSV डेटा पेस्ट करें'
  },
  output: {
    defaultLabel: 'आउटपुट',
    jsonLabel: 'JSON आउटपुट',
    yamlLabel: 'YAML आउटपुट',
    xmlLabel: 'XML आउटपुट',
    csvLabel: 'CSV आउटपुट',
    placeholder: 'कन्वर्जन परिणाम यहां दिखाई देगा'
  },
  actions: {
    convert: 'कन्वर्ट करें',
    processing: 'प्रोसेसिंग...',
    copy: 'कॉपी करें',
    download: 'डाउनलोड करें',
    clear: 'साफ़ करें'
  },
  errors: {
    emptyInput: 'कृपया कन्वर्ट करने के लिए डेटा दर्ज करें',
    conversionFailed: 'कन्वर्जन त्रुटि',
    unsupportedConversion: 'असमर्थित कन्वर्जन प्रकार',
    invalidJson: 'अवैध JSON',
    invalidYaml: 'अवैध YAML',
    invalidXml: 'अवैध XML',
    invalidCsv: 'अवैध CSV',
    jsonNotArray: 'CSV में कन्वर्ट करने के लिए JSON ऑब्जेक्ट्स की एक एरे होनी चाहिए',
    unknownError: 'कन्वर्जन के दौरान अज्ञात त्रुटि हुई'
  },
  alerts: {
    copySuccess: 'क्लिपबोर्ड पर कॉपी किया गया',
    copyFailed: 'कॉपी विफल'
  }
}; 