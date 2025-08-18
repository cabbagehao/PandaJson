export const diff = {
  title: 'Trình So Sánh JSON',
  h1Title: 'Compare JSON Files',
  seo_title: 'So Sánh Tập Dữ Liệu JSON Trực Tuyến – Làm Nổi Bật Phần Thêm, Xóa và Thay Đổi',
  description: 'So sánh hai tập dữ liệu JSON, làm nổi bật các phần bổ sung, xóa và sửa đổi',
  keywords: 'so sánh JSON,đối chiếu JSON,khác biệt JSON,so sánh JSON,bộ so sánh JSON,tìm khác biệt JSON,theo dõi thay đổi JSON,so sánh phiên bản JSON,khác biệt dữ liệu JSON,so sánh tệp JSON,so sánh JSON cạnh nhau,so sánh cấu trúc JSON,công cụ so sánh JSON,xác định thay đổi JSON,theo dõi sửa đổi JSON,delta JSON,khác biệt trực quan JSON,giải quyết xung đột JSON',
  introduction: 'Bạn đang làm việc trên một dự án nhóm hoặc theo dõi thay đổi phiên bản JSON? Công cụ JSON Diff của chúng tôi giúp bạn nhanh chóng so sánh hai tệp JSON và trực quan hóa sự khác biệt. Chúng tôi làm nổi bật các khóa được thêm vào, mục đã xóa và giá trị đã sửa đổi trong một chế độ xem rõ ràng, được mã hóa màu, vì vậy bạn có thể phát hiện các thay đổi chỉ trong nháy mắt.\nCác trường hợp sử dụng bao gồm:\nXem xét yêu cầu kéo với cấu hình JSON\nTheo dõi lịch sử phiên bản dữ liệu trong cơ sở dữ liệu\nGỡ lỗi sự không khớp giữa các phản hồi API\nKhông cần phải cuộn qua các dòng mã nữa—công cụ của chúng tôi tự động phân tích các đối tượng và mảng lồng nhau, làm cho việc so sánh phức tạp trở nên đơn giản. Dán hoặc tải lên hai tệp JSON, và để tính năng so sánh json của chúng tôi cho bạn thấy chính xác những gì đã thay đổi. Lý tưởng cho các nhà phát triển, nhóm QA và người quản lý dữ liệu!',
  leftInput: 'JSON Thứ Nhất',
  rightInput: 'JSON Thứ Hai',
  result: 'Kết Quả So Sánh',
  placeholderLeft: 'Dán dữ liệu JSON thứ nhất của bạn vào đây',
  placeholderRight: 'Dán dữ liệu JSON thứ hai của bạn vào đây',
  compare: 'So Sánh',
  clear: 'Xóa',
  loadExample: 'Tải Ví Dụ',
  processing: 'Đang xử lý...',
  error: 'Lỗi so sánh: ',
  unknown: 'Lỗi không xác định trong quá trình so sánh',
  diffGuide: 'Hướng Dẫn So Sánh',
  addedContent: 'Nội Dung Đã Thêm',
  removedContent: 'Nội Dung Đã Xóa',
  modifiedContent: 'Nội Dung Đã Sửa Đổi',
  originalJson: 'JSON Gốc',
  updatedJson: 'JSON Đã Cập Nhật',

  // How to Use Section
  howToUse: {
    title: 'Cách Sử Dụng Trình So Sánh JSON',
    steps: [
      {
        title: 'Dán JSON Đầu Tiên',
        description: 'Sao chép và dán JSON gốc hoặc phiên bản cũ vào khu vực bên trái. Đây sẽ là cơ sở để so sánh với phiên bản thứ hai.'
      },
      {
        title: 'Dán JSON Thứ Hai',
        description: 'Dán JSON đã cập nhật hoặc phiên bản mới vào khu vực bên phải. Công cụ sẽ tự động phát hiện và làm nổi bật tất cả các thay đổi giữa hai phiên bản.'
      },
      {
        title: 'Thực Hiện So Sánh',
        description: 'Nhấp nút "So Sánh" để xem phân tích chi tiết về sự khác biệt. Kết quả hiển thị các thay đổi được mã hóa màu với chú thích rõ ràng.'
      },
      {
        title: 'Phân Tích Kết Quả',
        description: 'Xem xét các thay đổi được làm nổi bật: xanh lá cho nội dung mới được thêm, đỏ cho nội dung đã xóa, và vàng cho các sửa đổi. Mỗi thay đổi hiển thị đường dẫn chính xác.'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'Câu Hỏi Thường Gặp về Trình So Sánh JSON',
    items: [
      {
        question: 'Trình so sánh có thể xử lý các tệp JSON lớn không?',
        answer: 'Có, công cụ so sánh JSON của chúng tôi được tối ưu hóa để xử lý hiệu quả các tệp JSON lớn và cấu trúc phức tạp. Thuật toán so sánh được thiết kế để duy trì hiệu suất ngay cả với các tài liệu JSON có cấu trúc lồng nhau sâu.'
      },
      {
        question: 'Các loại thay đổi nào được phát hiện và hiển thị?',
        answer: 'Công cụ phát hiện tất cả các loại thay đổi: thuộc tính được thêm (màu xanh lá), thuộc tính bị xóa (màu đỏ), giá trị đã sửa đổi (màu vàng), thay đổi kiểu dữ liệu, và thay đổi cấu trúc mảng. Mỗi thay đổi hiển thị đường dẫn JSON chính xác.'
      },
      {
        question: 'Tôi có thể so sánh JSON với thứ tự thuộc tính khác nhau không?',
        answer: 'Có! Trình so sánh của chúng tôi tập trung vào nội dung và cấu trúc thực tế, không phải thứ tự thuộc tính. Các đối tượng với cùng thuộc tính nhưng thứ tự khác nhau sẽ được coi là giống nhau, trừ khi có thay đổi giá trị thực sự.'
      },
      {
        question: 'Làm thế nào để hiểu các đường dẫn thay đổi được hiển thị?',
        answer: 'Đường dẫn sử dụng ký hiệu dot để chỉ ra vị trí chính xác của thay đổi. Ví dụ: "user.address.city" có nghĩa là thay đổi xảy ra trong thuộc tính city, nằm trong address, thuộc về user. Chỉ số mảng được hiển thị trong ngoặc vuông.'
      },
      {
        question: 'Tôi có thể xuất kết quả so sánh không?',
        answer: 'Hiện tại, công cụ hiển thị kết quả so sánh trực quan trong trình duyệt. Bạn có thể sao chép kết quả hoặc chụp màn hình để tài liệu. Chúng tôi đang phát triển tính năng xuất báo cáo chi tiết.'
      },
      {
        question: 'Dữ liệu JSON của tôi có được lưu trữ hoặc gửi đi đâu không?',
        answer: 'Không! Tất cả so sánh được thực hiện hoàn toàn trong trình duyệt của bạn. Dữ liệu JSON không bao giờ được gửi đến máy chủ hoặc lưu trữ ở bất kỳ đâu, đảm bảo bảo mật và quyền riêng tư hoàn toàn cho thông tin nhạy cảm của bạn.'
      }
    ]
  }
}; 