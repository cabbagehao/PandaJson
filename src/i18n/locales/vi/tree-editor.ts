export const treeEditor = {
  title: 'Trình Chỉnh Sửa Cây JSON',
  h1Title: 'Edit JSON Tree',
  seo_title: 'Trình Chỉnh Sửa JSON Trực Quan – Chỉnh Sửa Dữ Liệu JSON Phức Tạp Với Cấu Trúc Cây Tương Tác',
  description: 'Trực quan hóa, chỉnh sửa và phân tích các đối tượng JSON phức tạp thông qua cấu trúc cây, cung cấp các thao tác trực quan trực quan',
  keywords: 'Trình chỉnh sửa JSON,Chỉnh sửa cây JSON,Trực quan hóa JSON,Trình chỉnh sửa nút JSON,Cấu trúc cây JSON,Trình chỉnh sửa JSON tương tác,Trình chỉnh sửa JSON lồng nhau,Công cụ xem cấu trúc JSON,Trình soạn thảo dữ liệu trực quan,Công cụ xem phân cấp JSON,Trình chỉnh sửa JSON phức tạp,Công cụ trực quan hóa JSON,Trình duyệt JSON',
  introduction: 'Trình Chỉnh Sửa Cây JSON Trực Quan chuyển đổi dữ liệu JSON phức tạp thành cấu trúc cây tương tác mà bạn có thể dễ dàng thao tác. Lý tưởng để xử lý cấu trúc dữ liệu lồng nhau sâu mà không bị lạc trong các dấu ngoặc và cú pháp.\n\nGiao diện trực quan của chúng tôi cho phép bạn mở rộng và thu gọn các nút, thêm thuộc tính và mảng mới, sửa đổi giá trị hoặc xóa các mục không mong muốn chỉ bằng vài cú nhấp chuột. Bố cục hiển thị kép cho thấy cả cây có thể chỉnh sửa và đầu ra JSON được định dạng theo thời gian thực.\n\nCông cụ này hoàn hảo cho:\n• Nhà phát triển API làm việc với phản hồi JSON phức tạp\n• Nhà phân tích dữ liệu khám phá các bộ dữ liệu phức tạp\n• Người quản lý nội dung cập nhật cấu hình dựa trên JSON\n• Bất kỳ ai cảm thấy chỉnh sửa JSON thô dễ gây lỗi\n\nCác thay đổi được xác thực ngay lập tức, tránh lỗi cú pháp trong khi bạn làm việc. Khi hoàn thành, xuất JSON được định dạng hoàn hảo của bạn chỉ với một cú nhấp chuột.',
  viewOptions: 'Tùy Chọn Hiển Thị',
  copyJsonResult: 'Sao Chép',
  copySuccessful: 'Đã sao chép vào bộ nhớ tạm!',
  downloadJsonResult: 'Tải Xuống',
  clearJsonData: 'Xóa',
  jsonParsingError: 'Lỗi phân tích JSON: ',
  validationError: 'Lỗi xác thực: ',
  enterValidJson: 'Vui lòng nhập dữ liệu JSON hợp lệ',
  treeLabel: 'Chế Độ Xem Cây',
  textView: 'Chế độ văn bản',
  treeView: 'Chế độ cây',
  jsonText: 'Văn bản JSON',
  jsonTree: 'Cấu trúc cây JSON',
  jsonLabel: 'Nhãn JSON',
  placeholder: 'Nhập hoặc dán dữ liệu JSON vào đây',
  placeholderText: 'Nhập hoặc dán dữ liệu JSON vào đây',
  loadExample: 'Tải Ví Dụ',
  copy: 'Sao chép',
  download: 'Tải xuống',
  clear: 'Xóa',
  copied: 'Đã sao chép vào bộ nhớ tạm',
  copyFailed: 'Sao chép thất bại',
  parseError: 'Lỗi phân tích',
  unknownError: 'Lỗi không xác định trong quá trình phân tích',
  updateError: 'Lỗi cập nhật',
  emptyInputMessage: 'Vui lòng nhập JSON hợp lệ vào trình soạn thảo văn bản trước',
  // Các bản dịch dành riêng cho trình soạn thảo cây
  addItem: 'Thêm mục',
  addProperty: 'Thêm thuộc tính',
  key: 'Khóa',
  keyName: 'Tên khóa',
  value: 'Giá trị',
  type: 'Loại',
  expand: 'Mở Rộng Tất Cả',
  collapse: 'Thu Gọn Tất Cả',
  ok: 'OK',
  cancel: 'Hủy',
  emptyArray: 'Mảng Trống',
  emptyObject: 'Đối Tượng Trống',
  deleteItem: 'Xóa',
  editItem: 'Chỉnh Sửa',
  undoChange: 'Hoàn Tác',
  redoChange: 'Làm Lại',
  enterValidPropertyName: 'Vui lòng nhập tên thuộc tính hợp lệ',
  add: 'Thêm',
  empty: 'Trống',
  keyNameEmpty: 'Tên khóa không thể để trống',
  addFailed: 'Thêm thất bại',
  invalidValue: 'Giá trị không hợp lệ',
  save: 'Lưu',

  // How to Use Section
  howToUse: {
    title: 'Cách Sử Dụng Trình Chỉnh Sửa Cây JSON',
    steps: [
      {
        title: 'Nhập Dữ Liệu JSON',
        description: 'Dán dữ liệu JSON vào khu vực văn bản hoặc nhấp "Tải Ví Dụ" để bắt đầu. JSON sẽ được tự động phân tích và hiển thị dưới dạng cấu trúc cây tương tác có thể chỉnh sửa.'
      },
      {
        title: 'Điều Hướng và Chỉnh Sửa Cây',
        description: 'Sử dụng giao diện cây trực quan để mở rộng/thu gọn nút, thêm thuộc tính mới, chỉnh sửa giá trị hoặc xóa các mục. Mỗi thao tác được xác thực ngay lập tức để tránh lỗi cú pháp.'
      },
      {
        title: 'Thêm và Sửa Đổi Nội Dung',
        description: 'Nhấp các nút hành động để thêm đối tượng, mảng hoặc thuộc tính mới. Chỉnh sửa giá trị trực tiếp trong cây hoặc thay đổi kiểu dữ liệu bằng các điều khiển thả xuống.'
      },
      {
        title: 'Xuất JSON Đã Chỉnh Sửa',
        description: 'Các thay đổi được phản ánh tức thì trong chế độ xem JSON được định dạng. Sử dụng các nút sao chép hoặc tải xuống để lưu kết quả cuối cùng cho ứng dụng của bạn.'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'Câu Hỏi Thường Gặp về Trình Chỉnh Sửa Cây JSON',
    items: [
      {
        question: 'Tôi có thể chỉnh sửa JSON có cấu trúc lồng nhau sâu không?',
        answer: 'Có! Trình chỉnh sửa cây được thiết kế đặc biệt để xử lý các cấu trúc JSON phức tạp và lồng nhau sâu. Giao diện cây cho phép bạn dễ dàng điều hướng và chỉnh sửa ở bất kỳ cấp độ nào mà không bị lạc trong cú pháp.'
      },
      {
        question: 'Các thay đổi có được xác thực ngay lập tức không?',
        answer: 'Có, mọi chỉnh sửa được xác thực theo thời gian thực để đảm bảo JSON của bạn luôn hợp lệ. Công cụ ngăn chặn các hành động có thể tạo ra cú pháp không hợp lệ và cung cấp phản hồi tức thì về bất kỳ vấn đề nào.'
      },
      {
        question: 'Tôi có thể hoàn tác các thay đổi nếu mắc lỗi không?',
        answer: 'Có, trình chỉnh sửa bao gồm chức năng hoàn tác/làm lại cho phép bạn quay lại các trạng thái trước đó. Bạn có thể tự tin thử nghiệm với dữ liệu JSON của mình, biết rằng bạn có thể dễ dàng đảo ngược các thay đổi.'
      },
      {
        question: 'Những kiểu dữ liệu nào được hỗ trợ trong trình chỉnh sửa?',
        answer: 'Trình chỉnh sửa hỗ trợ tất cả các kiểu dữ liệu JSON tiêu chuẩn: chuỗi, số, boolean, null, đối tượng và mảng. Bạn có thể dễ dàng chuyển đổi giữa các kiểu và công cụ sẽ xử lý định dạng phù hợp.'
      },
      {
        question: 'Trình chỉnh sửa có thể xử lý các tệp JSON lớn không?',
        answer: 'Có, trình chỉnh sửa cây được tối ưu hóa hiệu suất và có thể xử lý các tệp JSON lớn. Giao diện cây cung cấp khả năng mở rộng/thu gọn hiệu quả để quản lý các bộ dữ liệu lớn mà không ảnh hưởng đến hiệu suất.'
      },
      {
        question: 'Tôi có thể sao chép một phần cụ thể của cây JSON không?',
        answer: 'Hiện tại, chức năng sao chép xuất toàn bộ JSON đã chỉnh sửa. Tuy nhiên, bạn có thể sử dụng chế độ xem văn bản để chọn và sao chép các phần cụ thể, hoặc tạo một JSON mới chỉ chứa dữ liệu bạn cần.'
      }
    ]
  }
}; 