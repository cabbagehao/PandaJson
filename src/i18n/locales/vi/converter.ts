export const converter = {
  title: 'Trình Chuyển Đổi JSON',
  h1Title: 'Convert JSON Format',
  seo_title: 'Trình Chuyển Đổi JSON – Chuyển Đổi JSON Từ/Sang YAML, XML, CSV và Nhiều Hơn Nữa',
  description: 'Dễ dàng chuyển đổi giữa các định dạng XML, YAML, CSV và JSON, với chuyển đổi hai chiều và tùy chọn tùy chỉnh',
  keywords: 'Trình chuyển đổi JSON,JSON sang XML,JSON sang YAML,XML sang JSON,YAML sang JSON,CSV sang JSON,JSON sang CSV,chuyển đổi JSON,chuyển đổi định dạng dữ liệu,xuất JSON,chuyển đổi định dạng dữ liệu,chuyển đổi dữ liệu JSON,công cụ chuyển đổi định dạng,chuyển đổi hai chiều,định dạng trao đổi dữ liệu,chuyển đổi JSON trực tuyến,trình dịch định dạng dữ liệu,chuyển đổi định dạng tệp,nhập xuất JSON,công cụ di chuyển JSON',
  introduction: 'Trình Chuyển Đổi JSON là giải pháp tất cả trong một để chuyển đổi liền mạch dữ liệu giữa JSON và các định dạng phổ biến khác. Cho dù bạn cần chuyển đổi JSON sang YAML cho tệp cấu hình, chuyển đổi JSON sang XML cho hệ thống cũ, hoặc xuất JSON sang CSV để phân tích dữ liệu, công cụ của chúng tôi xử lý các chuyển đổi này với độ chính xác và dễ dàng.\n\nTrình chuyển đổi của chúng tôi duy trì tính toàn vẹn dữ liệu trong quá trình chuyển đổi, bảo toàn mối quan hệ phân cấp, kiểu dữ liệu và các yếu tố cấu trúc. Giao diện trực quan cho phép bạn dán hoặc tải lên dữ liệu nguồn, chọn định dạng đích và ngay lập tức xem kết quả chuyển đổi.\n\nCác tính năng chính bao gồm:\n• Chuyển đổi hai chiều giữa JSON và YAML, XML, CSV và TSV\n• Bảo toàn cấu trúc lồng nhau và kiểu dữ liệu khi được hỗ trợ\n• Tùy chọn tùy chỉnh cho mỗi chuyển đổi định dạng\n• Xem trước kết quả chuyển đổi theo thời gian thực\n• Chức năng sao chép vào clipboard hoặc tải xuống\n• Hỗ trợ cho bộ dữ liệu lớn\n\nChỉ cần dán dữ liệu của bạn, chọn định dạng đích và để trình chuyển đổi của chúng tôi xử lý phần còn lại—tiết kiệm thời gian và công sức quý báu trong quy trình làm việc phát triển của bạn.',
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