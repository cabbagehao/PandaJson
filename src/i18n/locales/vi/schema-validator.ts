export const schemaValidator = {
  title: 'Trình Xác Thực Lược Đồ JSON',
  h1Title: 'Validate JSON Schema',
  seo_title: 'Trình Xác Thực JSON Schema Trực Tuyến - Kiểm Tra Cấu Trúc & Định Dạng Dữ Liệu',
  description: 'Xác thực dữ liệu JSON dựa trên đặc điểm kỹ thuật Schema, kiểm tra tính toàn vẹn và hợp lệ của cấu trúc dữ liệu',
  keywords: 'JSON Schema,Xác thực JSON,Xác thực lược đồ,Xác thực cấu trúc JSON,Xác thực định dạng JSON',
  introduction: 'Trình Xác Thực JSON Schema là công cụ mạnh mẽ để đảm bảo dữ liệu JSON của bạn tuân thủ các quy tắc và ràng buộc cụ thể. Bằng cách sử dụng JSON Schema, bạn có thể định nghĩa cấu trúc mong đợi, kiểu dữ liệu, ràng buộc giá trị và quy tắc xác thực cho dữ liệu JSON.\n\nCông cụ này đặc biệt hữu ích cho:\n• Xác thực dữ liệu API trước khi xử lý\n• Đảm bảo tính nhất quán trong cấu trúc dữ liệu\n• Kiểm tra tính hợp lệ của tệp cấu hình\n• Xác thực đầu vào người dùng theo quy tắc nghiệp vụ\n• Đảm bảo chất lượng dữ liệu trong ứng dụng\n\nTrình xác thực hỗ trợ đầy đủ đặc tả JSON Schema với báo cáo lỗi chi tiết, giúp bạn nhanh chóng xác định và khắc phục các vấn đề không tuân thủ. Kết quả xác thực bao gồm thông tin vị trí chính xác và hướng dẫn sửa chữa cụ thể.',
  jsonData: 'Dữ Liệu JSON',
  jsonSchema: 'Lược Đồ JSON',
  options: 'Tùy Chọn Xác Thực',
  validate: 'Xác Thực',
  validating: 'Đang Xác Thực...',
  clear: 'Xóa',
  loadExample: 'Tải Ví Dụ',
  jsonPlaceholder: 'Nhập hoặc dán dữ liệu JSON để xác thực',
  schemaPlaceholder: 'Nhập hoặc dán Lược Đồ JSON',
  result: 'Kết Quả Xác Thực',
  valid: 'Hợp Lệ',
  invalid: 'Không Hợp Lệ',
  errorDetails: 'Chi Tiết Lỗi',
  guideTitle: 'Hướng Dẫn JSON Schema',
  guideDescription: 'JSON Schema là một tiêu chuẩn mô tả và xác thực cấu trúc dữ liệu JSON. Dưới đây là một số quy tắc xác thực phổ biến:',
  basicTypesTitle: 'Xác Thực Kiểu Cơ Bản',
  commonRulesTitle: 'Quy Tắc Xác Thực Phổ Biến',
  strictMode: 'Chế Độ Nghiêm Ngặt',
  strictModeDescription: 'Áp dụng các ràng buộc xác thực bổ sung không được chỉ định trong đặc tả JSON Schema',
  jsonParseError: 'Lỗi Phân Tích JSON',
  schemaParseError: 'Lỗi Phân Tích Lược Đồ',
  rules: 'Quy Tắc Xác Thực Phổ Biến',

  // How to Use Section
  howToUse: {
    title: 'Cách Sử Dụng Trình Xác Thực JSON Schema',
    steps: [
      {
        title: 'Nhập Dữ Liệu JSON',
        description: 'Dán dữ liệu JSON cần xác thực vào khu vực bên trái. Đây có thể là phản hồi API, tệp cấu hình, hoặc bất kỳ dữ liệu JSON nào mà bạn muốn xác thực theo một định dạng cụ thể.'
      },
      {
        title: 'Cung Cấp JSON Schema',
        description: 'Nhập hoặc dán JSON Schema vào khu vực bên phải. Schema định nghĩa cấu trúc, kiểu dữ liệu và ràng buộc mà JSON của bạn phải tuân thủ. Bạn có thể tải ví dụ để bắt đầu.'
      },
      {
        title: 'Chọn Tùy Chọn Xác Thực',
        description: 'Cấu hình các tùy chọn xác thực như chế độ nghiêm ngặt nếu cần. Các tùy chọn này ảnh hưởng đến mức độ nghiêm khắc của quá trình xác thực và loại lỗi được báo cáo.'
      },
      {
        title: 'Thực Hiện Xác Thực',
        description: 'Nhấp nút "Xác Thực" để kiểm tra JSON của bạn so với schema. Kết quả sẽ hiển thị trạng thái hợp lệ hoặc danh sách chi tiết các lỗi và vị trí cần sửa.'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'Câu Hỏi Thường Gặp về JSON Schema Validator',
    items: [
      {
        question: 'JSON Schema là gì và tại sao cần sử dụng?',
        answer: 'JSON Schema là một tiêu chuẩn để mô tả và xác thực cấu trúc dữ liệu JSON. Nó định nghĩa các quy tắc về kiểu dữ liệu, định dạng, ràng buộc và cấu trúc mà JSON phải tuân theo. Điều này đảm bảo tính nhất quán và độ tin cậy của dữ liệu.'
      },
      {
        question: 'Những ràng buộc nào có thể được định nghĩa trong JSON Schema?',
        answer: 'JSON Schema hỗ trợ nhiều ràng buộc bao gồm: kiểu dữ liệu (string, number, boolean, array, object), độ dài tối thiểu/tối đa, mẫu regex, giá trị enum, thuộc tính bắt buộc, ràng buộc số (minimum, maximum), và nhiều ràng buộc phức tạp khác.'
      },
      {
        question: 'Chế độ nghiêm ngặt có ý nghĩa gì?',
        answer: 'Chế độ nghiêm ngặt áp dụng các ràng buộc xác thực bổ sung không được chỉ định trong đặc tả JSON Schema chuẩn. Điều này có thể bao gồm việc từ chối thuộc tính không được định nghĩa trong schema hoặc áp dụng các quy tắc xác thực nghiêm khắc hơn.'
      },
      {
        question: 'Làm thế nào để hiểu thông báo lỗi xác thực?',
        answer: 'Thông báo lỗi bao gồm đường dẫn chính xác đến vị trí lỗi trong JSON, mô tả lỗi cụ thể và ràng buộc schema bị vi phạm. Đường dẫn sử dụng ký hiệu dot (như "user.profile.age") để chỉ ra vị trí chính xác cần sửa.'
      },
      {
        question: 'Tôi có thể xác thực JSON lồng nhau phức tạp không?',
        answer: 'Có! Trình xác thực hỗ trợ đầy đủ các cấu trúc JSON lồng nhau và schema phức tạp. Bạn có thể định nghĩa schema cho các đối tượng lồng nhau, mảng của đối tượng, và các cấu trúc dữ liệu phức tạp khác.'
      },
      {
        question: 'Tôi có thể sử dụng schema có sẵn từ internet không?',
        answer: 'Có, bạn có thể sử dụng bất kỳ JSON Schema hợp lệ nào, bao gồm cả những schema có sẵn từ các API công cộng hoặc thư viện schema. Chỉ cần đảm bảo schema tuân thủ đặc tả JSON Schema (Draft 7 hoặc mới hơn).'
      }
    ]
  }
}; 