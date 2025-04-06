export const converter = {
  title: 'Trình Chuyển Đổi JSON',
  description: 'Dễ dàng chuyển đổi giữa các định dạng XML, YAML, CSV và JSON, với chuyển đổi hai chiều và tùy chọn tùy chỉnh',
  keywords: 'Trình chuyển đổi JSON,JSON sang XML,JSON sang YAML,XML sang JSON,YAML sang JSON,CSV sang JSON,JSON sang CSV',
  options: {
    title: 'Tùy Chọn Chuyển Đổi',
    conversionType: 'Loại Chuyển Đổi',
    jsonTo: 'JSON sang',
    toJson: 'Sang JSON',
    jsonToYaml: 'JSON sang YAML',
    jsonToXml: 'JSON sang XML',
    jsonToCsv: 'JSON sang CSV',
    yamlToJson: 'YAML sang JSON',
    xmlToJson: 'XML sang JSON',
    csvToJson: 'CSV sang JSON'
  },
  input: {
    defaultLabel: 'Đầu Vào',
    jsonLabel: 'JSON Đầu Vào',
    yamlLabel: 'YAML Đầu Vào',
    xmlLabel: 'XML Đầu Vào',
    csvLabel: 'CSV Đầu Vào',
    defaultPlaceholder: 'Dán dữ liệu tại đây',
    jsonPlaceholder: 'Dán dữ liệu JSON tại đây',
    yamlPlaceholder: 'Dán dữ liệu YAML tại đây',
    xmlPlaceholder: 'Dán dữ liệu XML tại đây',
    csvPlaceholder: 'Dán dữ liệu CSV tại đây'
  },
  output: {
    defaultLabel: 'Đầu Ra',
    jsonLabel: 'JSON Đầu Ra',
    yamlLabel: 'YAML Đầu Ra',
    xmlLabel: 'XML Đầu Ra',
    csvLabel: 'CSV Đầu Ra',
    placeholder: 'Kết quả chuyển đổi sẽ xuất hiện tại đây'
  },
  actions: {
    convert: 'Chuyển Đổi',
    processing: 'Đang Xử Lý...',
    copy: 'Sao Chép',
    download: 'Tải Xuống',
    clear: 'Xóa'
  },
  errors: {
    emptyInput: 'Vui lòng nhập dữ liệu để chuyển đổi',
    conversionFailed: 'Lỗi chuyển đổi',
    unsupportedConversion: 'Loại chuyển đổi không được hỗ trợ',
    invalidJson: 'JSON không hợp lệ',
    invalidYaml: 'YAML không hợp lệ',
    invalidXml: 'XML không hợp lệ',
    invalidCsv: 'CSV không hợp lệ',
    jsonNotArray: 'JSON phải là một mảng các đối tượng để chuyển đổi sang CSV',
    unknownError: 'Đã xảy ra lỗi không xác định trong quá trình chuyển đổi'
  },
  alerts: {
    copySuccess: 'Đã sao chép vào bộ nhớ tạm',
    copyFailed: 'Sao chép thất bại'
  }
}; 