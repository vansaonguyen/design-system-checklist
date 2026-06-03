export default {
  title: "Nền tảng (Foundations)",
  description:
    "Các tài sản thiết kế (design assets) và token lưu trữ các giá trị cho lớp cơ sở của design system, như màu sắc và kiểu chữ (typography). Chúng được sử dụng trong các component, do đó, những thay đổi ở cấp độ này sẽ lan truyền qua toàn bộ hệ thống.",
  sections: {
    "df-color": {
      title: "Màu sắc (Color)",
      description:
        "Không chỉ là cách hiệu quả để thể hiện thương hiệu mà còn là cách hiệu quả để giao tiếp với người dùng. Bảng màu được tạo ra với mục đích rõ ràng thay vì chỉ chú trọng tính thẩm mỹ có thể giúp bạn phát triển các UI pattern trực quan bằng cách thêm ý nghĩa vào giao diện.",
      checklist: {
        "df-color-a11y": {
          title: "Trợ năng (Accessibility)",
          description:
            "Đảm bảo có sự kết hợp dễ tiếp cận (accessible) giữa các màu chính (primary colors) trong bảng màu của bạn. Quan trọng hơn, đảm bảo rằng màu nền và màu chữ của bạn có tỷ lệ tương phản ít nhất đạt tiêu chuẩn AA.",
        },
        "df-color-semantic": {
          title: "Màu ngữ nghĩa (Semantic colors)",
          description:
            "Bên cạnh màu thương hiệu, hãy đảm bảo có các màu được định nghĩa và tạo thành các biến (variables) cho các chức năng như trạng thái disabled, nền, hành động (actions), và văn bản có độ tương phản cao.",
        },
        "df-color-dark-mode": {
          title: "Chế độ tối (Dark mode)",
          description:
            "Chuẩn bị phiên bản dark mode cho bảng màu sẽ cho phép design system của bạn thích ứng với tùy chọn màu sắc trên hệ điều hành (OS) của người dùng.",
        },
        "df-color-guidelines": {
          title: "Hướng dẫn sử dụng",
          description:
            "Cung cấp hướng dẫn về cách thức và thời điểm sử dụng các màu trong bảng màu, những điều cần lưu ý khi làm việc với chúng, và những cách không nên sử dụng.",
        },
      },
    },
    "df-layout": {
      title: "Bố cục (Layout)",
      description:
        "Một bố cục được cân nhắc kỹ lưỡng sẽ mang lại lợi ích lâu dài. Việc sử dụng nhất quán hệ thống lưới (grid) và khoảng cách (spacing) giúp người dùng dễ dàng quét (scan) giao diện và nắm bắt nội dung.",
      checklist: {
        "df-layout-units": {
          title: "Đơn vị (Units)",
          description:
            "Các đơn vị là những khối xây dựng chi tiết nhất cho bố cục. Việc xác định một bộ giá trị với các bước tăng nhất quán (chẳng hạn như 4, 8, 12, và 16 cho hệ thống 4 điểm) sẽ cung cấp nền tảng để thiết kế các giá trị lưới và khoảng cách của bạn.",
        },
        "df-layout-grid": {
          title: "Hệ thống lưới (Grid)",
          description:
            "Mọi bố cục nên đặt trên một hệ thống lưới nhằm mang lại trật tự và phân cấp cho giao diện. Hãy định nghĩa một grid riêng biệt cho các thiết bị mobile, tablet và desktop với số cột (columns), rãnh (gutters) và lề (margins) để giao diện có thể thích ứng nhanh chóng với mọi nền tảng.",
        },
        "df-layout-breakpoints": {
          title: "Điểm ngắt (Breakpoints)",
          description:
            "Xác định trước các kích thước màn hình và hướng thiết bị mà hệ thống lưới của bạn sẽ thích ứng.",
        },
        "df-layout-spacing": {
          title: "Khoảng cách (Spacing)",
          description:
            "Nhịp điệu ngang và dọc đóng vai trò quan trọng trong một bố cục. Bạn nên cung cấp các phương pháp đơn giản để thêm khoảng trống giữa các element trên giao diện độc lập với hệ thống lưới của mình.",
        },
      },
    },
    "df-typography": {
      title: "Kiểu chữ (Typography)",
      description:
        "Typography là một trong những cách chính để bạn thể hiện nội dung trong sản phẩm. Sự phân cấp rõ ràng và các style tương phản trong thang đo typography (typography scale) sẽ giúp văn bản dễ đọc hơn và hỗ trợ cấu trúc tổng thể của sản phẩm. Đây cũng là cơ hội để hình ảnh hóa đặc tính và sự hiện diện của thương hiệu.",
      checklist: {
        "df-typography-mobile": {
          title: "Responsive",
          description:
            "Thiết bị desktop thường có thể cho phép cỡ chữ lớn hơn so với thiết bị di động. Việc tạo ra một thang đo typography thích ứng với kích thước viewport sẽ giúp mang lại sự phân cấp và bố cục ý nghĩa hơn.",
        },
        "df-typography-grid": {
          title: "Mối liên hệ với lưới (Grid relation)",
          description:
            "Kích thước font chữ và khoảng cách dòng (leading) nên khớp với hệ thống lưới của bạn để cho phép sự kết hợp tốt hơn giữa văn bản và các UI element khác. Một ví dụ điển hình là văn bản đi kèm với các icon có bounding box (hộp giới hạn).",
        },
        "df-typography-readability": {
          title: "Khả năng đọc (Readability)",
          description:
            "Tối ưu hóa khoảng cách chữ (tracking), chiều cao dòng (leading) và độ dài dòng cho thang đo typography sẽ giúp văn bản dễ đọc hơn.",
        },
        "df-typography-performance": {
          title: "Hiệu suất (Performance)",
          description:
            "Các font chữ tùy chỉnh cần được tải xuống trước khi có thể hiển thị, đặc biệt là trên web. Hãy đảm bảo bạn có các font dự phòng (fallbacks) hợp lý và thời gian tải nhanh cho các tài nguyên typography. Việc sử dụng system fonts (font hệ thống) sẽ giải quyết được vấn đề hiệu suất này.",
        },
        "df-typography-guidelines": {
          title: "Hướng dẫn sử dụng",
          description:
            "Cung cấp hướng dẫn về cách thức và thời điểm sử dụng các cặp font trong thang đo typography của bạn, những điều cần lưu ý khi làm việc với chúng, và những cách không nên sử dụng.",
        },
      },
    },
    "df-elevation": {
      title: "Độ cao (Elevation)",
      description:
        "Elevation kiểm soát khoảng cách tương đối giữa hai bề mặt dọc theo trục z (z-axis). Trong light mode, nó thường được làm nổi bật bằng giá trị đổ bóng (shadow) áp dụng cho một bề mặt, trong khi ở dark mode, nó được truyền đạt bằng giá trị màu nền (background color).",
      checklist: {
        "df-elevation-shadows": {
          title: "Đổ bóng (Shadows)",
          description:
            "Cung cấp nhiều giá trị shadow dựa trên các cấp độ elevation được hỗ trợ. Hầu hết thời gian, bạn sẽ cần 3 đến 4 cấp độ elevation trong sản phẩm của mình.",
        },
        "df-elevation-background": {
          title: "Màu nền (Background colors)",
          description:
            "Mỗi giá trị shadow nên được liên kết với một màu nền. Trong light mode, các màu này có thể đều trả về màu trắng vì nó được sử dụng cùng với shadow. Trong dark mode, chúng sẽ được sử dụng thay cho shadow để truyền đạt khoảng cách trục z của một bề mặt.",
        },
        "df-elevation-z": {
          title: "Z-index",
          description:
            "Định nghĩa một hệ thống các giá trị z-index để kiểm soát element nào có mức ưu tiên được render nằm trên các element khác.",
        },
      },
    },
    "df-motion": {
      title: "Chuyển động (Motion)",
      description:
        "Các giá trị motion dùng chung mang lại trải nghiệm người dùng liền mạch hơn và sự đồng bộ tốt hơn với thương hiệu.",
      checklist: {
        "df-motion-easing": {
          title: "Gia tốc (Easing)",
          description:
            "Cung cấp các hàm easing tiêu chuẩn được sử dụng trên toàn hệ thống cho các hiệu ứng chuyển đổi (transitions) của component. Để bắt đầu, bạn có thể sử dụng các hàm chuẩn, tăng tốc (accelerated) và giảm tốc (decelerated) nhằm bao quát các tình huống sử dụng component phổ biến.",
        },
        "df-motion-duration": {
          title: "Thời lượng (Duration)",
          description:
            "Định nghĩa nhiều giá trị cho thời lượng animation của bạn để giữ cho các quá trình transition của component được nhất quán trên toàn bộ sản phẩm.",
        },
        "df-motion-a11y": {
          title: "Trợ năng (Accessibility)",
          description:
            "Chú ý đến tùy chọn giảm chuyển động (reduced motion) của người dùng và làm cho các animation bớt nổi bật hơn hoặc loại bỏ chúng hoàn toàn.",
        },
      },
    },
    "df-iconography": {
      title: "Hệ thống Icon (Iconography)",
      description:
        "Icon là các biểu tượng đại diện cho một chức năng hoặc nội dung. Chúng đặc biệt dễ nhận biết và hữu ích trong giao diện người dùng vì ý nghĩa của chúng có thể được hiểu ngay trong nháy mắt. Mặc dù chúng có thể chỉ được dùng để trang trí, tiềm năng thực sự của chúng sẽ được phát huy khi chúng được sử dụng có ý nghĩa và nhất quán.",
      checklist: {
        "df-iconography-a11y": {
          title: "Trợ năng (Accessibility)",
          description:
            "Đối với các icon truyền tải ý nghĩa hoặc phục vụ một chức năng, hãy cung cấp một nhãn trợ năng mặc định thể hiện chính xác ý nghĩa hoặc chức năng đó. Trình đọc màn hình và các công nghệ hỗ trợ khác có thể sử dụng tên này để định hướng cho người dùng về giao diện. Đối với các icon hoàn toàn mang tính trang trí, tên là không bắt buộc. Nếu design system của bạn xuất ra mã front-end, hãy đảm bảo tên icon được đưa vào, ví dụ: sử dụng aria-label.",
        },
        "df-iconography-style": {
          title: "Phong cách (Style)",
          description:
            "Hãy đảm bảo rằng bộ icon của bạn tạo thành một tổng thể thống nhất về mặt thị giác. Việc chọn phong cách viền (outlined) hoặc tô đặc (filled) và kiên trì sử dụng nó sẽ mang lại sự nhất quán và khả năng dự đoán trực quan tốt hơn.",
        },
        "df-iconography-naming": {
          title: "Đặt tên (Naming)",
          description:
            "Đặt tên cho icon dựa trên mục đích giao tiếp của chúng thay vì vẻ ngoài của chúng. Ví dụ: icon nút play hình tam giác của trình phát đa phương tiện nên được đặt tên là 'play' chứ không phải 'triangle'. Bạn vẫn có thể thêm các từ khóa (keywords) liên quan để cải thiện khả năng tìm kiếm.",
        },
        "df-iconography-grid": {
          title: "Mối liên hệ với lưới (Grid)",
          description:
            "Vẽ icon của bạn trong một hộp giới hạn (bounding box) tương thích tốt với grid của bạn. Điều này giúp cho việc kết hợp với các UI element khác trở nên tốt hơn. Một ví dụ điển hình là các icon có bounding box đi kèm với văn bản.",
        },
        "df-iconography-keywords": {
          title: "Từ khóa (Keywords)",
          description:
            "Việc thêm từ khóa sẽ cải thiện khả năng khám phá (discoverability) của từng icon và cung cấp trải nghiệm tốt hơn cho bất kỳ ai sử dụng hệ thống của bạn.",
        },
        "df-iconography-reserved": {
          title: "Icon đặt trước (Reserved icons)",
          description:
            "Việc 'đặt trước' (độc quyền) các icon đại diện cho các hành động phổ biến sẽ ngăn chặn việc sử dụng chúng trong bất kỳ ngữ cảnh nào khác. Các icon hệ thống dành cho điều hướng hoặc thêm/xóa là những ví dụ điển hình. Điều này dẫn đến trải nghiệm người dùng trực quan hơn.",
        },
        "df-iconography-guidelines": {
          title: "Hướng dẫn sử dụng",
          description:
            "Cung cấp hướng dẫn về cách thức và thời điểm sử dụng icon, những điều cần lưu ý khi làm việc với chúng, và những cách không nên sử dụng.",
        },
      },
    },
  },
};