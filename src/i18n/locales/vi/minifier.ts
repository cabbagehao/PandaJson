export const minifier = {
  title: 'Trình Thu Nhỏ JSON',
  h1Title: 'Minify JSON Data',
  seo_title: 'Trình Thu Nhỏ JSON – Nén & Giảm Kích Thước Tệp JSON Bằng Cách Loại Bỏ Khoảng Trắng',
  description: 'Nén và thu nhỏ kích thước tệp JSON bằng cách loại bỏ khoảng trắng và ký hiệu định dạng, cải thiện hiệu quả truyền tải',
  keywords: 'Trình thu nhỏ JSON,Thu nhỏ JSON,Tối ưu hóa kích thước JSON,Loại bỏ khoảng trắng JSON,Trình nén JSON,giảm kích thước JSON,JSON nhỏ gọn,công cụ nén JSON,tối ưu hóa chuyển JSON,giảm băng thông JSON,hiệu quả truyền JSON,thu nhỏ JSON trực tuyến,công cụ giảm kích thước JSON,trình tối ưu hóa JSON,JSON nhẹ,giảm tải JSON',
  introduction: 'Trình Thu Nhỏ JSON của chúng tôi là một công cụ trực tuyến miễn phí giúp bạn nén dữ liệu JSON bằng cách loại bỏ các khoảng trắng và ký tự định dạng không cần thiết. Việc thu nhỏ JSON làm giảm kích thước tệp, tối ưu hóa băng thông và cải thiện tốc độ truyền tải. Công cụ này đặc biệt hữu ích cho các nhà phát triển web, API và các dịch vụ web muốn tối ưu hóa hiệu suất. Sử dụng trình thu nhỏ JSON để giảm đáng kể kích thước dữ liệu JSON mà không làm thay đổi cấu trúc hoặc nội dung của dữ liệu.',
  input: 'JSON Đầu Vào',
  output: 'Kết Quả Thu Nhỏ',
  placeholder: 'Dán dữ liệu JSON của bạn tại đây để thu nhỏ',
  minify: 'Thu Nhỏ JSON',
  copy: 'Sao Chép',
  download: 'Tải Xuống',
  clear: 'Xóa Tất Cả',
  error: 'Dữ liệu JSON không hợp lệ, vui lòng kiểm tra cú pháp',
  copied: 'Đã sao chép vào bộ nhớ tạm',
  copyFailed: 'Sao chép thất bại',
  compressionResult: 'Kết Quả Nén',
  originalSize: 'Kích Thước Ban Đầu',
  compressedSize: 'Kích Thước Đã Nén',
  compressionRatio: 'Tỷ Lệ Nén',

  // How to Use Section
  howToUse: {
    title: 'Cách Sử Dụng Trình Thu Nhỏ JSON',
    steps: [
      {
        title: 'Dán JSON Cần Thu Nhỏ',
        description: 'Sao chép và dán dữ liệu JSON có định dạng vào khu vực đầu vào. Công cụ chấp nhận JSON với bất kỳ mức độ thụt lề và khoảng trắng nào, từ các tệp được định dạng đẹp đến dữ liệu có cấu trúc phức tạp.'
      },
      {
        title: 'Thực Hiện Thu Nhỏ',
        description: 'Nhấp nút "Thu Nhỏ JSON" để loại bỏ tất cả khoảng trắng, xuống dòng và ký tự định dạng không cần thiết. Quá trình thu nhỏ diễn ra tức thì và bảo toàn hoàn toàn cấu trúc dữ liệu.'
      },
      {
        title: 'Xem Thống Kê Nén',
        description: 'Kiểm tra kết quả nén hiển thị kích thước ban đầu, kích thước đã nén và tỷ lệ tiết kiệm. Thông tin này giúp bạn hiểu mức độ tối ưu hóa đạt được cho dữ liệu của mình.'
      },
      {
        title: 'Sao Chép hoặc Tải Xuống',
        description: 'Sử dụng nút sao chép để lưu JSON thu nhỏ vào clipboard hoặc tải xuống dưới dạng tệp. JSON đã thu nhỏ sẵn sàng để sử dụng trong ứng dụng, API hoặc lưu trữ.'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'Câu Hỏi Thường Gặp về Trình Thu Nhỏ JSON',
    items: [
      {
        question: 'Thu nhỏ JSON có ảnh hưởng đến cấu trúc dữ liệu không?',
        answer: 'Không! Thu nhỏ JSON chỉ loại bỏ khoảng trắng, xuống dòng và ký tự định dạng không cần thiết. Cấu trúc dữ liệu, giá trị và tính hợp lệ của JSON được bảo toàn hoàn toàn, chỉ có kích thước tệp được giảm.'
      },
      {
        question: 'Tôi có thể tiết kiệm được bao nhiêu dung lượng khi thu nhỏ JSON?',
        answer: 'Mức độ tiết kiệm phụ thuộc vào định dạng JSON ban đầu. JSON được định dạng đẹp với nhiều thụt lề có thể tiết kiệm 20-60% dung lượng. JSON đã được định dạng ít sẽ có mức tiết kiệm thấp hơn, nhưng vẫn có thể giảm 10-20%.'
      },
      {
        question: 'Thu nhỏ JSON có ảnh hưởng đến khả năng đọc không?',
        answer: 'Có, JSON thu nhỏ trở nên khó đọc cho con người do không có khoảng trắng và xuống dòng. Tuy nhiên, điều này không ảnh hưởng đến việc phân tích bởi các ứng dụng và API. Bạn luôn có thể sử dụng công cụ định dạng để làm đẹp JSON khi cần.'
      },
      {
        question: 'Khi nào tôi nên thu nhỏ JSON?',
        answer: 'Thu nhỏ JSON hữu ích khi truyền tải qua mạng (API responses), lưu trữ trong cơ sở dữ liệu để tiết kiệm không gian, hoặc khi cần tối ưu hóa băng thông. Đặc biệt quan trọng cho các ứng dụng web và mobile cần tốc độ tải nhanh.'
      },
      {
        question: 'Có các công cụ nào khác để tối ưu hóa JSON không?',
        answer: 'Ngoài thu nhỏ, bạn có thể sử dụng nén gzip/brotli trên máy chủ web, caching, hoặc tối ưu hóa cấu trúc dữ liệu. Thu nhỏ là bước đầu tiên và quan trọng trong quá trình tối ưu hóa JSON.'
      },
      {
        question: 'JSON thu nhỏ có thể được định dạng đẹp lại không?',
        answer: 'Có! Quá trình thu nhỏ có thể đảo ngược hoàn toàn. Bạn có thể sử dụng công cụ JSON Formatter để thêm lại khoảng trắng, thụt lề và xuống dòng, làm cho JSON dễ đọc trở lại mà không mất dữ liệu.'
      }
    ]
  }
}; 