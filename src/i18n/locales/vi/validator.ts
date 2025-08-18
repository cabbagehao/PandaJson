export const validator = {
  title: 'Trình Xác Thực JSON',
  h1Title: 'Validate JSON Syntax',
  seo_title: 'Trình Xác Thực JSON Trực Tuyến - Kiểm Tra Lỗi Cú Pháp & Sửa Mã JSON',
  description: 'Phát hiện lỗi cú pháp JSON ngay lập tức với phản hồi chính xác theo dòng. Thiết yếu cho debug phản hồi API và đảm bảo tính toàn vẹn dữ liệu trong ứng dụng.',
  keywords: 'Trình xác thực JSON,Xác thực JSON,Kiểm tra định dạng JSON,Kiểm tra cú pháp JSON,Định vị lỗi JSON,Trình xác thực JSON trực tuyến,Sửa lỗi JSON',
  introduction: 'Trình Xác Thực JSON giúp bạn nhanh chóng xác định lỗi cú pháp và vấn đề cấu trúc trong dữ liệu JSON của mình. Cho dù bạn đang gỡ lỗi API web, làm việc với tệp cấu hình, hoặc xử lý nguồn dữ liệu, công cụ của chúng tôi cung cấp phản hồi tức thì về tính hợp lệ của JSON.\n\nKhi phát hiện lỗi, trình xác thực xác định chính xác vị trí vấn đề và cung cấp hướng dẫn rõ ràng, hành động được để sửa chữa. Mỗi lỗi được làm nổi bật với thông tin dòng và cột, làm cho việc khắc phục sự cố trở nên hiệu quả và đơn giản.\n\nTính năng chính bao gồm:\n• Xác thực cú pháp tức thì theo tiêu chuẩn JSON\n• Vị trí lỗi chính xác với số dòng và cột\n• Mô tả lỗi chi tiết để giải quyết vấn đề nhanh chóng\n• Hỗ trợ tài liệu JSON lớn\n• Giao diện sạch, trực quan với phản hồi thời gian thực\n• Xác thực một cú nhấp chuột với kết quả toàn diện\n\nChỉ cần dán JSON của bạn và để trình xác thực kiểm tra lỗi, đảm bảo dữ liệu của bạn được định dạng đúng trước khi sử dụng trong ứng dụng.',
  input: 'JSON Đầu Vào',
  validate: 'Xác Thực JSON',
  validJson: 'JSON Hợp Lệ',
  invalidJson: 'JSON Không Hợp Lệ',
  errorDetails: 'Chi Tiết Lỗi',
  errorAt: 'Lỗi ở dòng {line}, cột {column}',
  expectedToken: 'Token mong đợi: {token}',
  unexpectedToken: 'Token không mong đợi: {token}',
  missingComma: 'Thiếu dấu phẩy hoặc dấu ngoặc không khớp',
  extraComma: 'Dấu phẩy thừa',
  unclosedString: 'Chuỗi chưa đóng',
  unclosedObject: 'Đối tượng chưa đóng',
  unclosedArray: 'Mảng chưa đóng',
  invalidProperty: 'Tên thuộc tính không hợp lệ',
  duplicateKey: 'Khóa trùng lặp',
  extraData: 'Dữ liệu thừa sau khi kết thúc JSON',
  missingValue: 'Thiếu giá trị',
  missingColon: 'Thiếu dấu hai chấm',
  repairSuggestion: 'Đề Xuất Sửa Chữa',
  errorType: 'Loại Lỗi',
  errorMessage: 'Thông Báo Lỗi',
  position: 'Vị Trí',
  contextLine: 'Dòng Ngữ Cảnh',
  placeholder: 'Nhập JSON để xác thực tại đây',
  jsonStructure: 'Cấu Trúc JSON',
  jsonSyntaxError: 'Lỗi Cú Pháp JSON',
  parseSuccess: 'Phân tích thành công, chứa {count} nút dữ liệu.',
  unknownError: 'Lỗi không xác định',
  
  // How to Use Section
  howToUse: {
    title: 'Cách Sử Dụng Trình Xác Thực JSON',
    steps: [
      {
        title: 'Dán JSON Của Bạn',
        description: 'Sao chép và dán dữ liệu JSON vào trình soạn thảo xác thực. Công cụ chấp nhận JSON từ mọi nguồn - phản hồi API, tệp cấu hình hoặc dữ liệu xuất.'
      },
      {
        title: 'Xác Thực Tức Thì',
        description: 'Trình xác thực của chúng tôi tự động kiểm tra cú pháp JSON khi bạn nhập hoặc dán. Lỗi được làm nổi bật ngay lập tức với thông tin vị trí chính xác.'
      },
      {
        title: 'Xem Chi Tiết Lỗi',
        description: 'Nếu phát hiện lỗi, thông báo lỗi chi tiết hiển thị số dòng chính xác, vị trí ký tự và các vấn đề cụ thể với gợi ý sửa chữa hữu ích.'
      },
      {
        title: 'Sửa và Xác Thực Lại',
        description: 'Thực hiện các sửa đổi dựa trên hướng dẫn lỗi và xem kết quả xác thực cập nhật theo thời gian thực. Tiếp tục cho đến khi JSON của bạn vượt qua xác thực.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'Câu Hỏi Thường Gặp về Trình Xác Thực JSON',
    items: [
      {
        question: 'Trình xác thực này có thể phát hiện những loại lỗi JSON nào?',
        answer: 'Trình xác thực của chúng tôi phát hiện tất cả các lỗi cú pháp JSON phổ biến bao gồm thiếu dấu phẩy, chuỗi chưa đóng, dấu ngoặc không khớp, khóa trùng lặp, tên thuộc tính không hợp lệ, dấu phẩy thừa ở cuối, và các vấn đề cấu trúc. Nó cung cấp thông báo lỗi cụ thể để xác định và giải quyết nhanh chóng.'
      },
      {
        question: 'Độ chính xác của báo cáo vị trí lỗi như thế nào?',
        answer: 'Rất chính xác! Trình xác thực của chúng tôi xác định lỗi đến số dòng chính xác và vị trí ký tự, cho bạn thấy chính xác nơi xảy ra vấn đề. Điều này loại bỏ việc đoán mò và tăng tốc đáng kể quá trình gỡ lỗi.'
      },
      {
        question: 'Tôi có thể xác thực các tệp JSON lớn không?',
        answer: 'Có, trình xác thực JSON của chúng tôi xử lý hiệu quả các tệp lớn và cấu trúc lồng nhau phức tạp. Công cụ xác thực được tối ưu hóa về hiệu suất và có thể xử lý các tài liệu JSON rộng lớn mà không bị chậm.'
      },
      {
        question: 'Điều gì xảy ra sau khi xác thực thành công?',
        answer: 'Khi JSON của bạn hợp lệ, bạn sẽ thấy thông báo thành công với thống kê về cấu trúc dữ liệu của bạn, bao gồm số lượng đối tượng, mảng và tổng số nút dữ liệu. Sau đó bạn có thể an toàn sử dụng JSON trong các ứng dụng của mình.'
      },
      {
        question: 'Dữ liệu JSON của tôi có an toàn khi sử dụng trình xác thực này không?',
        answer: 'Hoàn toàn! Tất cả xác thực xảy ra cục bộ trong trình duyệt của bạn bằng xử lý phía máy khách. Dữ liệu JSON của bạn không bao giờ rời khỏi thiết bị hoặc được gửi đến máy chủ của chúng tôi, đảm bảo sự riêng tư và bảo mật hoàn toàn.'
      },
      {
        question: 'Trình xác thực có thể tự động sửa lỗi JSON không?',
        answer: 'Mặc dù trình xác thực của chúng tôi không tự động sửa lỗi, nhưng nó cung cấp gợi ý chi tiết cho từng loại lỗi. Những gợi ý này hướng dẫn bạn chính xác những gì cần thay đổi, làm cho việc sửa chữa thủ công trở nên nhanh chóng và đơn giản.'
      }
    ]
  }
}; 