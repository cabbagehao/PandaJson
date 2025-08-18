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
  },

  // How to Use Section
  howToUse: {
    title: 'Cách Sử Dụng Trình Chuyển Đổi JSON',
    steps: [
      {
        title: 'Chọn Loại Chuyển Đổi',
        description: 'Chọn loại chuyển đổi bạn cần từ menu thả xuống - JSON sang YAML, XML, CSV hoặc ngược lại. Mỗi loại chuyển đổi được tối ưu hóa cho định dạng cụ thể.'
      },
      {
        title: 'Dán Dữ Liệu Nguồn',
        description: 'Sao chép và dán dữ liệu của bạn vào khu vực đầu vào. Trình chuyển đổi hỗ trợ cả dữ liệu đơn giản và cấu trúc phức tạp lồng nhau với xác thực tức thì.'
      },
      {
        title: 'Thực Hiện Chuyển Đổi',
        description: 'Nhấp vào nút "Chuyển Đổi" để chuyển đổi dữ liệu của bạn. Kết quả sẽ xuất hiện trong khu vực đầu ra với định dạng được tối ưu hóa và cấu trúc được bảo toàn.'
      },
      {
        title: 'Sao Chép hoặc Tải Xuống',
        description: 'Sử dụng nút sao chép để lưu kết quả vào clipboard hoặc tải xuống dưới dạng tệp. Dữ liệu đã chuyển đổi sẵn sàng sử dụng trong các ứng dụng của bạn.'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'Câu Hỏi Thường Gặp về Trình Chuyển Đổi JSON',
    items: [
      {
        question: 'Những định dạng nào được hỗ trợ chuyển đổi?',
        answer: 'Trình chuyển đổi của chúng tôi hỗ trợ chuyển đổi hai chiều giữa JSON và YAML, XML, CSV, TSV. Bạn có thể chuyển đổi từ JSON sang bất kỳ định dạng nào và ngược lại, với xử lý chuyên biệt cho từng loại dữ liệu.'
      },
      {
        question: 'Dữ liệu lồng nhau có được bảo toàn trong quá trình chuyển đổi không?',
        answer: 'Có! Trình chuyển đổi của chúng tôi duy trì cấu trúc phân cấp và các mối quan hệ lồng nhau khi định dạng đích hỗ trợ. Đối với CSV, dữ liệu lồng nhau được làm phẳng một cách thông minh để phù hợp với cấu trúc bảng.'
      },
      {
        question: 'Tôi có thể chuyển đổi các tệp JSON lớn không?',
        answer: 'Có, trình chuyển đổi của chúng tôi được tối ưu hóa để xử lý các tệp dữ liệu lớn một cách hiệu quả. Tuy nhiên, đối với các tệp cực lớn, quá trình chuyển đổi có thể mất một chút thời gian để đảm bảo độ chính xác.'
      },
      {
        question: 'Điều gì xảy ra với kiểu dữ liệu trong quá trình chuyển đổi?',
        answer: 'Trình chuyển đổi của chúng tôi cố gắng bảo toàn các kiểu dữ liệu khi có thể. Số, boolean và chuỗi được xử lý phù hợp cho từng định dạng đích, với logic chuyển đổi thông minh để tối thiểu hóa mất dữ liệu.'
      },
      {
        question: 'Làm thế nào để xử lý các ký tự đặc biệt trong chuyển đổi?',
        answer: 'Các ký tự đặc biệt, dấu phẩy, dấu ngoặc kép và ký tự Unicode được xử lý tự động với mã hóa và thoát ký tự phù hợp cho từng định dạng đích. Điều này đảm bảo tính toàn vẹn dữ liệu.'
      },
      {
        question: 'Tôi có thể hoàn tác chuyển đổi để quay lại định dạng gốc không?',
        answer: 'Có! Hầu hết các chuyển đổi là có thể đảo ngược. Bạn có thể lấy đầu ra đã chuyển đổi và chuyển đổi ngược lại định dạng gốc. Tuy nhiên, một số thông tin định dạng nhỏ có thể bị mất trong quá trình này.'
      }
    ]
  }
}; 