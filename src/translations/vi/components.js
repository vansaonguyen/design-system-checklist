export default {
  title: "Thành phần cốt lõi (Core components)",
  description:
    "Các component (thành phần) là những khối xây dựng chính cho giao diện người dùng. Việc xây dựng một thư viện component tái sử dụng giúp nâng cao quy trình phát triển sản phẩm của bạn bằng cách giảm thiểu nợ thiết kế (design debt), nợ kỹ thuật (tech debt) và đẩy nhanh tiến độ. Các component cốt lõi không thể bị chia nhỏ thành các phần chi tiết hơn mà không làm mất đi ý nghĩa của chúng.",
  sections: {
    "c-accordion": {
      title: "Accordion",
      description:
        "Accordion giúp ẩn/hiện các vùng nội dung khi người dùng nhấn vào thành phần kích hoạt (trigger element).",
      checklist: {
        "c-accordion-active": {
          title: "Trạng thái Active",
          description:
            "Accordion có hai trạng thái để chuyển đổi khả năng hiển thị nội dung của nó. Nếu một trigger của accordion hiển thị icon, icon đó cần có sự khác biệt rõ ràng về mặt thị giác giữa các trạng thái.",
        },
        "c-accordion-composition": {
          title: "Bố cục (Composition)",
          description:
            "Vùng nội dung cần đủ linh hoạt để hỗ trợ nhiều loại nội dung khác nhau, bao gồm cả các component khác.",
        },
        "c-accordion-transition": {
          title: "Hiệu ứng chuyển đổi (Toggle transition)",
          description:
            "Thêm một hiệu ứng chuyển động (animation) tinh tế để giúp người dùng hiểu và theo dõi hành vi của component khi chuyển đổi giữa các trạng thái.",
        },
        "c-accordion-a11y-relation": {
          title: "Mối liên hệ giữa nội dung và trigger",
          description:
            "Khi focus vào vùng nội dung bằng các công nghệ hỗ trợ (assistive technologies), hệ thống cần đọc thêm thông tin ngữ cảnh từ thành phần kích hoạt.",
        },
      },
    },
    "c-alert": {
      title: "Alert (Thông báo)",
      description:
        "Alert hiển thị một thông báo nổi bật liên quan đến toàn bộ trang hoặc một khu vực cụ thể trên trang.",
      checklist: {
        "c-alert-colors": {
          title: "Màu sắc",
          description:
            "Điều quan trọng là phải phân biệt giao diện của alert dựa trên vai trò của nó. Nếu bạn sử dụng màu nền để phân biệt vai trò, hãy đảm bảo có đủ độ tương phản với nội dung hiển thị bên trong alert.",
        },
        "c-alert-title": {
          title: "Hỗ trợ tiêu đề",
          description:
            "Hỗ trợ tiêu đề có thể giúp người dùng hiểu ngữ cảnh của thông báo nhanh hơn đối với các thông báo dài.",
        },
        "c-alert-icon": {
          title: "Hỗ trợ Icon",
          description:
            "Icon minh họa vai trò của alert và cung cấp thêm gợi ý trực quan cho người mù màu.",
        },
        "c-alert-actions": {
          title: "Hành động phụ trợ (Supplementary actions)",
          description:
            "Các hành động (actions) trong alert nên liên quan đến nội dung văn bản và cung cấp cho người dùng một cách để phản hồi lại thông báo.",
        },
        "c-alert-responsive": {
          title: "Responsive",
          description:
            "Alert có thể thích ứng với kích thước màn hình (viewport), thường trở thành full-width (tràn viền) trên thiết bị di động để tiết kiệm không gian.",
        },
        "c-alert-a11y-roles": {
          title: "Vai trò trợ năng (Accessibility roles)",
          description:
            "Khi sử dụng các công nghệ hỗ trợ, alert cần khai báo chính xác vai trò trợ năng của chúng.",
        },
      },
    },
    "c-avatar": {
      title: "Avatar (Ảnh đại diện)",
      description:
        "Ảnh thu nhỏ của người dùng, tổ chức hoặc đại diện trực quan cho các loại nội dung khác.",
      checklist: {
        "c-avatar-image": {
          title: "Hình ảnh",
          description:
            "Avatar cần mask (che) hình ảnh theo hình dáng của nó và hoạt động tốt với mọi kích thước ảnh vì chúng có thể nhận ảnh từ các nguồn dữ liệu không xác định.",
        },
        "c-avatar-image-fallback": {
          title: "Ảnh dự phòng (Image fallback)",
          description:
            "Khi không có ảnh được truyền vào hoặc có lỗi tải ảnh, avatar phải có khả năng hiển thị trạng thái fallback bằng một hình ảnh, icon hoặc chữ cái đầu (initials) khác.",
        },
        "c-avatar-sizes": {
          title: "Kích thước",
          description:
            "Có nhiều ngữ cảnh sử dụng avatar, đòi hỏi các kích thước component khác nhau. Hãy sử dụng ít nhất 2-3 kích thước khác nhau cho các dự án thông thường và đảm bảo luôn có ít nhất một kích thước nhỏ (small size).",
        },
        "c-avatar-colors": {
          title: "Màu sắc",
          description:
            "Nên áp dụng màu nền cho hình dáng của avatar khi sử dụng mà không có ảnh. Đảm bảo rằng icon và văn bản có đủ độ tương phản với nền theo tiêu chuẩn WCAG AA.",
        },
        "c-avatar-shape": {
          title: "Hình dáng (Shape)",
          description:
            "Avatar có thể hỗ trợ nhiều hình dáng, như hình vuông hoặc hình tròn, tùy thuộc vào khu vực chúng được sử dụng.",
        },
        "c-avatar-group": {
          title: "Nhóm Avatar",
          description:
            "Nhiều avatar có thể được xếp chồng lên nhau để đại diện cho một nhóm người dùng.",
        },
        "c-avatar-a11y-label": {
          title: "Nhãn trợ năng (Accessibility label)",
          description:
            "Avatar cần cung cấp một nhãn trợ năng (accessibility label) khi được sử dụng cho các hình ảnh không mang tính trang trí (non-decorative) và không có văn bản đại diện cho nội dung của nó.",
        },
      },
    },
    "c-badge": {
      title: "Badge (Huy hiệu/Nhãn)",
      description:
        "Thành phần nhỏ gọn thể hiện trạng thái của một đối tượng hoặc dữ liệu đầu vào của người dùng.",
      checklist: {
        "c-badge-colors": {
          title: "Màu sắc",
          description:
            "Badge có thể đóng nhiều vai trò trong sản phẩm của bạn và việc có màu sắc định sẵn cho mỗi vai trò sẽ giúp người dùng hiểu ý nghĩa của chúng. Khi thay đổi màu sắc, hãy đảm bảo văn bản có đủ độ tương phản với nền theo tiêu chuẩn WCAG AA.",
        },
        "c-badge-variants": {
          title: "Biến thể (Variants)",
          description:
            "Dựa trên vị trí badge được render trong sản phẩm, bạn có thể cần hỗ trợ nhiều biến thể component. Ví dụ: bạn có thể sử dụng nền nhạt (faded background) cho một số badge để tránh thu hút quá nhiều sự chú ý.",
        },
        "c-badge-sizes": {
          title: "Kích thước",
          description:
            "Badge có thể có nhiều kích thước tùy thuộc vào vị trí sử dụng. Ví dụ: bạn có thể sử dụng kích thước lớn cho các trang marketing.",
        },
        "c-badge-icon-support": {
          title: "Hỗ trợ Icon",
          description:
            "Để minh họa rõ hơn ý nghĩa của badge, bạn có thể hiển thị một icon bên cạnh văn bản. Đảm bảo rằng đối với các badge nhỏ, nội dung icon vẫn có thể nhận diện được.",
        },
        "c-badge-dismiss": {
          title: "Hành động đóng (Dismissible action)",
          description:
            "Badge có thể được sử dụng như một cách động để hiển thị các giá trị đã chọn và cần có cách để đóng/xóa (dismiss) chúng.",
        },
        "c-badge-empty": {
          title: "Trạng thái rỗng (Empty state)",
          description:
            "Badge có thể được sử dụng mà không có bất kỳ nội dung văn bản nào bên trong. Điều này thường yêu cầu thay đổi style của chúng để giữ được hình dáng chính xác.",
        },
        "c-badge-positioning": {
          title: "Định vị (Positioning)",
          description:
            "Khi được sử dụng làm badge trạng thái, như đèn báo thông báo (notification indicator) – bạn phải có khả năng định vị nó tương đối với các element đó.",
        },
      },
    },
    "c-button": {
      title: "Button (Nút)",
      description: "Thành phần tương tác được sử dụng cho các hành động đơn bước (single-step).",
      checklist: {
        "c-button-colors": {
          title: "Màu sắc",
          description:
            "Button có thể đóng nhiều vai trò trong sản phẩm của bạn và việc có màu sắc định sẵn cho mỗi vai trò sẽ giúp người dùng hiểu ý nghĩa của chúng. Khi thay đổi màu sắc, hãy đảm bảo văn bản có đủ độ tương phản với nền theo tiêu chuẩn WCAG AA.",
        },
        "c-button-variants": {
          title: "Biến thể (Variants)",
          description:
            "Khi sử dụng nhiều button, cần có cách để phân biệt giữa hành động chính (primary) và phụ (secondary). Button có thể đóng các vai trò khác nhau hoặc được sử dụng trên các bề mặt khác nhau, và chúng phải thay đổi diện mạo cho phù hợp.",
        },
        "c-button-sizes": {
          title: "Kích thước",
          description:
            "Tùy thuộc vào vị trí sử dụng, button có thể có nhiều kích thước. Ví dụ: bạn có thể dùng kích thước nhỏ cho các khu vực có mật độ nội dung dày đặc (dense areas).",
        },
        "c-button-icon": {
          title: "Hỗ trợ Icon",
          description:
            "Icon dễ dàng truyền đạt mục đích của button khi được sử dụng cạnh nhãn (label) hoặc có thể được sử dụng không cần văn bản khi không có đủ không gian. Đảm bảo cung cấp nhãn trợ năng (accessibility label) khi chỉ sử dụng icon.",
        },
        "c-button-hover": {
          title: "Trạng thái Hover",
          description:
            "Hiển thị rõ ràng rằng button có thể tương tác được khi rê chuột qua (hover).",
        },
        "c-button-active": {
          title: "Trạng thái Active",
          description:
            "Cung cấp tín hiệu trực quan khi button được nhấn, dùng để chọn một giá trị, hoặc toggle (bật/tắt) các element khác trên trang.",
        },
        "c-button-loading": {
          title: "Trạng thái Loading",
          description:
            "Cho biết khi người dùng phải chờ kết quả hành động của họ sau khi nhấn nút. Nếu sử dụng spinner (vòng xoay) để hiển thị trạng thái này, đảm bảo nó không làm thay đổi chiều rộng hoặc chiều cao gốc của button.",
        },
        "c-button-disabled": {
          title: "Trạng thái Disabled (Vô hiệu hóa)",
          description:
            "Hiển thị trực quan rằng button không thể tương tác và ngăn không cho nó được nhấn.",
        },
        "c-button-a11y-role": {
          title: "Vai trò trợ năng (Accessibility role)",
          description:
            "Button cần khai báo chính xác vai trò trợ năng là 'button' hoặc 'link' và tự động xử lý dựa trên các thuộc tính (properties) được truyền vào nó.",
        },
        "c-button-a11y-focus": {
          title: "Chỉ báo Focus",
          description:
            "Button phải có vòng chỉ báo focus hiển thị rõ ràng khi nó được focus bằng bàn phím hoặc công nghệ hỗ trợ.",
        },
      },
    },
    "c-breadcrumbs": {
      title: "Breadcrumbs (Đường dẫn điều hướng)",
      description:
        "Điều hướng cấp cao nhất giúp người dùng hiểu vị trí của trang hiện tại và điều hướng trở lại các trang cha.",
      checklist: {
        "c-breadcrumbs-icon": {
          title: "Hỗ trợ Icon",
          description:
            "Icon giúp truyền đạt vai trò của các trang mà các mục breadcrumbs liên kết đến. Hầu hết các trường hợp, bạn muốn đảm bảo chúng được sử dụng nhất quán, chứ không chỉ cho các mục ngẫu nhiên trong danh sách.",
        },
        "c-breadcrumbs-disabled": {
          title: "Trạng thái Disabled",
          description:
            "Mỗi item trong danh sách có thể bị vô hiệu hóa riêng biệt để ngăn người dùng điều hướng đến trang đó.",
        },
        "c-breadcrumbs-collapsed": {
          title: "Trạng thái thu gọn (Collapsed)",
          description:
            "Nếu các item của breadcrumbs không vừa với container cha, danh sách cần hỗ trợ thu gọn (collapse) các item để chỉ giữ lại những item liên quan hiển thị cho người dùng.",
        },
        "c-breadcrumbs-separator": {
          title: "Dấu phân cách tùy chỉnh (Custom separator)",
          description:
            "Tùy thuộc vào ngữ cảnh sử dụng, các item trong danh sách breadcrumbs có thể sử dụng các kiểu dấu phân cách khác nhau.",
        },
      },
    },
    "c-calendar": {
      title: "Lịch (Calendar)",
      description:
        "Lưới hiển thị các ngày trong một hoặc nhiều tháng và cho phép người dùng chọn một ngày hoặc một khoảng thời gian (date range).",
      checklist: {
        "c-calendar-modes": {
          title: "Chế độ hiển thị",
          description:
            "Calendar có thể được sử dụng ở nhiều khu vực và kích thước màn hình khác nhau. Đảm bảo hỗ trợ các chế độ hiển thị khác nhau để render nhiều hơn một tháng hoặc bố cục theo chiều dọc.",
        },
        "c-calendar-selected": {
          title: "Trạng thái Selected (Đã chọn)",
          description:
            "Calendar nên hỗ trợ chọn một ngày đơn lẻ và một khoảng thời gian (range). Các ngày được chọn nên được làm nổi bật về mặt thị giác và khoảng thời gian giữa các ngày được chọn phải hiển thị rõ cho người dùng.",
        },
        "c-calendar-month-selection": {
          title: "Chọn tháng",
          description:
            "Để giúp người dùng điều hướng các khoảng thời gian dài, calendar cần cung cấp một cách dễ dàng để chuyển đổi các tháng đang hiển thị.",
        },
        "c-calendar-day-names": {
          title: "Tên ngày",
          description:
            "Cung cấp các nhãn viết tắt cho tên các ngày trong tuần bên cạnh các số ngày để người dùng dễ dàng điều hướng chọn ngày hơn.",
        },
        "c-calendar-i18n": {
          title: "Quốc tế hóa (i18n)",
          description:
            "Calendar cần được bản địa hóa cho tất cả các khu vực quốc gia mà sản phẩm hỗ trợ. Điều này bao gồm định dạng ngày tháng và thứ tự đúng của các ngày trong tuần.",
        },
        "c-calendar-a11y-keyboard": {
          title: "Điều hướng bằng bàn phím",
          description:
            "Các ngày trong lịch cần có thể focus được bằng bàn phím và công nghệ hỗ trợ. Việc điều hướng tiếp theo trên các ngày phải diễn ra bằng phím mũi tên hoặc trình đọc màn hình và hỗ trợ chuyển tháng bằng cách điều hướng ra khỏi một cột hoặc một hàng.",
        },
        "c-calendar-a11y-state": {
          title: "Khai báo trạng thái",
          description:
            "Các ngày được chọn (selected) cần được các công nghệ hỗ trợ đọc lên khi chúng được focus.",
        },
      },
    },
    "c-card": {
      title: "Card (Thẻ)",
      description:
        "Container để nhóm các thông tin về các chủ đề và các hành động liên quan của chúng.",
      checklist: {
        "c-card-composition": {
          title: "Bố cục nội dung",
          description:
            "Vùng nội dung cần đủ linh hoạt để hỗ trợ nhiều loại nội dung khác nhau, bao gồm cả các component khác.",
        },
        "c-card-media-sections": {
          title: "Khu vực đa phương tiện (Media)",
          description:
            "Card thường được sử dụng với nội dung media. Các tùy chọn phổ biến nhất là có một khu vực full-width (tràn viền) ở trên cùng của nội dung hoặc một khu vực ở một trong các bên của card.",
        },
        "c-card-actions": {
          title: "Hành động phụ trợ",
          description:
            "Card có thể được sử dụng với các hành động (actions) thường đặt ở cuối card, hoặc bản thân card có thể bấm được (tappable) và đại diện cho một hành động.",
        },
        "c-card-responsive": {
          title: "Responsive",
          description:
            "Trên màn hình di động, card thường tràn viền (full-width) để tiết kiệm không gian cho nội dung.",
        },
        "c-card-groups": {
          title: "Nhóm Card",
          description:
            "Nhiều card có thể được nhóm lại thành một danh sách duy nhất các phần nội dung.",
        },
      },
    },
    "c-carousel": {
      title: "Carousel (Băng chuyền)",
      description:
        "Các khu vực có thể cuộn theo chiều ngang dùng để hiển thị nội dung được nhóm lại.",
      checklist: {
        "c-carousel-navigation": {
          title: "Điều khiển điều hướng",
          description:
            "Carousel cần có khả năng truy cập để điều hướng nội dung trên các thiết bị hoạt động bằng chuột thay vì các sự kiện cảm ứng (touch).",
        },
        "c-carousel-composition": {
          title: "Bố cục Item",
          description:
            "Vùng nội dung của các item trong carousel cần đủ linh hoạt để hỗ trợ nhiều loại nội dung khác nhau, bao gồm cả các component khác.",
        },
        "c-carousel-item-size": {
          title: "Kích thước Item",
          description:
            "Bố cục của các item cần linh hoạt để hỗ trợ các loại nội dung khác nhau. Đối với thiết bị di động, đảm bảo hiển thị một phần của item carousel không vừa với viewport để báo hiệu đây là một khu vực có thể cuộn (scrollable area).",
        },
        "c-carousel-touch": {
          title: "Điều hướng cảm ứng (Touch)",
          description:
            "Nội dung của carousel nên được render bên trong một khu vực có thể cuộn để hỗ trợ các sự kiện cảm ứng.",
        },
        "c-carousel-responsive": {
          title: "Responsive",
          description:
            "Bố cục của các item trong carousel có thể yêu cầu điều chỉnh dựa trên không gian có sẵn.",
        },
        "c-carousel-a11y-keyboard-navigation": {
          title: "Điều hướng bằng bàn phím",
          description:
            "Người dùng bàn phím và công nghệ hỗ trợ cần có thể điều hướng nội dung carousel mà không cần nhấp vào các nút điều khiển.",
        },
      },
    },
    "c-checkbox": {
      title: "Checkbox (Hộp kiểm)",
      description:
        "Trường biểu mẫu (form field) dùng để chọn một hoặc nhiều giá trị từ danh sách.",
      checklist: {
        "c-checkbox-label": {
          title: "Nhãn (Label)",
          description:
            "Cần có một nhãn văn bản liên kết với trường checkbox. Việc nhấp vào nhãn cũng sẽ kích hoạt thao tác chọn checkbox. Nếu nhãn không được render trên trang, các công nghệ hỗ trợ vẫn phải đọc được nó.",
        },
        "c-checkbox-checked": {
          title: "Trạng thái Checked",
          description:
            "Hiển thị khi checkbox được chọn và được sử dụng cho việc submit form.",
        },
        "c-checkbox-error": {
          title: "Trạng thái Error (Lỗi)",
          description:
            "Sử dụng trạng thái lỗi cho validation form khi lỗi liên quan đến trường checkbox. Luôn sử dụng văn bản lỗi cùng với màu sắc trường (field color) khác biệt.",
        },
        "c-checkbox-disabled": {
          title: "Trạng thái Disabled",
          description:
            "Sử dụng trạng thái disabled để ngăn tương tác với checkbox và loại bỏ giá trị của nó khỏi các giá trị form được submit.",
        },
        "c-checkbox-indeterminate": {
          title: "Trạng thái Indeterminate (Bán chọn)",
          description:
            "Hiển thị trực quan khi checkbox có các phần tử con có thể chọn và chỉ một số được chọn.",
        },
        "c-checkbox-group": {
          title: "Nhóm Checkbox",
          description:
            "Checkbox có thể được nhóm lại để xử lý nhiều giá trị cùng lúc.",
        },
        "c-checkbox-a11y-keyboard": {
          title: "Hỗ trợ bàn phím",
          description:
            "Việc chọn checkbox cần được kích hoạt bằng bàn phím. Sử dụng các thẻ HTML gốc (native elements) cho việc này sẽ tự động cung cấp tương tác đó.",
        },
      },
    },
    "c-divider": {
      title: "Divider (Đường phân cách)",
      description: "Element dùng để phân tách nội dung về mặt trực quan.",
      checklist: {
        "c-divider-direction": {
          title: "Hướng (Direction)",
          description:
            "Divider nên phân tách cả danh sách nội dung theo chiều ngang và chiều dọc.",
        },
        "c-divider-a11y-role": {
          title: "Vai trò trợ năng",
          description:
            "Nếu divider đóng một vai trò không mang tính trang trí trong bố cục, vai trò của nó cần được các công nghệ hỗ trợ thông báo.",
        },
      },
    },
    "c-dropdown": {
      title: "Dropdown (Menu thả xuống)",
      description: "Danh sách các hành động theo ngữ cảnh mà người dùng có thể kích hoạt.",
      checklist: {
        "c-dropdown-composition": {
          title: "Bố cục nội dung",
          description:
            "Dropdown có thể được sử dụng cho menu ngữ cảnh (context menus), điều hướng sản phẩm, và các mục đích khác. Khu vực nội dung của chúng cần đủ linh hoạt để hỗ trợ nhiều loại nội dung khác nhau, bao gồm cả các component khác.",
        },
        "c-dropdown-hover": {
          title: "Kích hoạt bằng Hover",
          description:
            "Dropdown nên hỗ trợ hiển thị nội dung của nó khi có sự kiện hover. Hành vi tương tự nên diễn ra đối với người dùng bàn phím khi phần tử trigger của nó được focus.",
        },
        "c-dropdown-positioning": {
          title: "Định vị động (Dynamic positioning)",
          description:
            "Nội dung dropdown nên được hiển thị dựa trên vị trí hiện tại của thành phần kích hoạt (trigger) trên màn hình và luôn nằm trong khu vực người dùng có thể nhìn thấy.",
        },
        "c-dropdown-responsive": {
          title: "Responsive",
          description:
            "Nội dung dropdown nên được điều chỉnh nếu nó không vừa với màn hình trên thiết bị di động theo cách giống như trên desktop.",
        },
        "c-dropdown-a11y-focus": {
          title: "Bẫy Focus (Focus trapping)",
          description:
            "Khi nội dung dropdown được mở, vòng focus (focus ring) phải di chuyển vào bên trong khu vực nội dung của nó và quay trở lại element trigger khi đóng.",
        },
        "c-dropdown-a11y-keyboard": {
          title: "Điều hướng bằng bàn phím",
          description:
            "Dropdown cần có khả năng truy cập đối với người dùng bàn phím và công nghệ hỗ trợ. Người dùng phải có thể đóng dropdown bằng một thao tác đóng (close) riêng biệt, hoặc ngay khi họ tab ra ngoài khu vực nội dung.",
        },
      },
    },
    "c-icon": {
      title: "Icon (Biểu tượng)",
      description: "Thành phần bọc (Wrapper) cho các file SVG để kiểm soát giao diện của chúng",
      checklist: {
        "c-icon-colors": {
          title: "Màu sắc",
          description:
            "Icon cần hỗ trợ các giá trị màu sắc có sẵn trong các design token của design system. Ngoài ra, hỗ trợ kế thừa màu từ element cha cũng là một best practice.",
        },
        "c-icon-sizes": {
          title: "Kích thước",
          description:
            "Icon cần có một vài kích thước được định nghĩa sẵn để mang lại trải nghiệm toàn diện trên toàn bộ sản phẩm. Có thể sử dụng các cặp Typography cho các giá trị kích thước này để đảm bảo chúng căn chỉnh tốt với kích thước văn bản.",
        },
        "c-icon-a11y-decoration": {
          title: "Khả năng tương tác",
          description:
            "Icon hầu hết được sử dụng làm yếu tố trang trí. Nếu một icon được thiết kế để tương tác – tính năng đó nên được đưa vào bằng cách sử dụng button, link hoặc các component tương tác khác.",
        },
      },
    },
    "c-image": {
      title: "Image (Hình ảnh)",
      description:
        "Tiện ích (Utility) dùng để hiển thị hình ảnh và kiểm soát hành vi của chúng.",
      checklist: {
        "c-image-sizes": {
          title: "Kích thước",
          description:
            "Image cần linh hoạt về các kích thước hỗ trợ. Bên cạnh việc chỉ hỗ trợ chiều rộng (width) và chiều cao (height) – hãy thêm hỗ trợ tỷ lệ khung hình (aspect ratio) để thu phóng linh hoạt tỷ lệ của nó dựa trên element cha.",
        },
        "c-image-fallback": {
          title: "Ảnh dự phòng (Image fallback)",
          description:
            "Hiển thị fallback khi URL hình ảnh bị sai hoặc undefined (không xác định). Đó có thể là một hộp rỗng có màu nền, một icon hoặc một hình ảnh placeholder tĩnh.",
        },
        "c-image-density": {
          title: "Hỗ trợ mật độ màn hình (Screen density)",
          description:
            "Tùy thuộc vào mật độ màn hình (screen density), bạn nên hỗ trợ tải nhiều file ảnh với các kích thước khác nhau và phân phối file phù hợp nhất cho người dùng.",
        },
        "c-image-a11y-alt": {
          title: "Văn bản thay thế (Alt text)",
          description:
            "Khi hình ảnh không mang tính trang trí (non-decorative), nó cần cung cấp một alt text mô tả nội dung bức ảnh.",
        },
      },
    },
    "c-link": {
      title: "Link (Liên kết)",
      description:
        "Phần tử văn bản có tính tương tác dùng để điều hướng trong các đoạn văn (paragraphs).",
      checklist: {
        "c-link-icon": {
          title: "Hỗ trợ Icon",
          description:
            "Có thể sử dụng một icon bên cạnh link để truyền đạt mục đích của link. Không nên dùng icon bên trong link mà không có nhãn văn bản (text label).",
        },
        "c-link-colors": {
          title: "Màu sắc",
          description:
            "Link có thể đóng nhiều vai trò trong sản phẩm của bạn và việc có màu sắc định sẵn cho mỗi vai trò sẽ giúp người dùng hiểu ý nghĩa của chúng. Vì link là một element văn bản, nó phải có khả năng tự động kế thừa màu được định nghĩa bởi element cha, giống như các nội dung text khác.",
        },
        "c-link-disabled": {
          title: "Trạng thái Disabled",
          description:
            "Hiển thị trực quan rằng link không thể tương tác và ngăn không cho nó được nhấn.",
        },
        "c-link-font-inheritance": {
          title: "Kế thừa Font",
          description:
            "Link cần có khả năng kế thừa các typography style khi được sử dụng như một phần của element văn bản.",
        },
        "c-link-multiline": {
          title: "Hiển thị nhiều dòng",
          description:
            "Khi được sử dụng bên trong một đoạn văn bản, link cần hỗ trợ hiển thị trên nhiều dòng mà không phá vỡ luồng chảy (flow) của văn bản.",
        },
        "c-link-a11y-role": {
          title: "Vai trò trợ năng",
          description:
            "Link cần thông báo chính xác vai trò trợ năng là 'button' hoặc 'link' và tự động phân giải vai trò đó dựa trên các properties được truyền cho nó.",
        },
      },
    },
    "c-list": {
      title: "List (Danh sách)",
      description: "List được sử dụng để hiển thị một danh sách các mục (items).",
      checklist: {
        "c-list-order": {
          title: "Thứ tự (Order)",
          description:
            "Các item trong danh sách có thể sử dụng kiểu dấu đầu dòng (bulleted), đánh số (numbered) và các kiểu cũng như loại thứ tự khác.",
        },
        "c-list-composition": {
          title: "Bố cục nội dung",
          description:
            "Khu vực nội dung của item trong danh sách cần đủ linh hoạt để hỗ trợ nhiều loại nội dung khác nhau, bao gồm cả các component khác.",
        },
        "c-list-a11y-role": {
          title: "Vai trò trợ năng",
          description:
            "Các công nghệ hỗ trợ cần đọc danh sách với vai trò chính xác và số lượng item được hiển thị.",
        },
      },
    },
    "c-loading-indicator": {
      title: "Chỉ báo tải (Loading indicator)",
      description:
        "Element dạng animation dùng để truyền đạt tiến trình mà không cho biết quá trình sẽ mất bao lâu.",
      checklist: {
        "c-loading-indicator-colors": {
          title: "Màu sắc",
          description:
            "Các loading indicator có thể được sử dụng bên trong các element với nhiều vai trò khác nhau và cần tuân theo color scheme (phối màu) của chúng.",
        },
        "c-loading-indicators-sizes": {
          title: "Kích thước",
          description:
            "Loading indicator có thể cung cấp nhiều kích thước, tùy thuộc vào kích thước của khu vực mà nó được render.",
        },
        "c-loading-indicator-time": {
          title: "Thời lượng tải",
          description:
            "Trong một số trường hợp, thời gian chờ không thể xác định được. Loading indicator nên được hiển thị cho đến khi tải xong hoặc xảy ra lỗi. Trong các trường hợp khác, tốt hơn là nên cho biết thời gian còn lại cho đến khi quá trình tải hoàn tất.",
        },
        "c-loading-indicator-a11y-reduced-motion": {
          title: "Giảm chuyển động (Reduced motion)",
          description:
            "Loading indicator cần đồng bộ với các cài đặt chuyển động của hệ thống và giảm tốc độ animation khi cài đặt reduced motion (giảm chuyển động) được bật.",
        },
        "c-loading-indicator-a11y-label": {
          title: "Nhãn trợ năng (Accessibility label)",
          description:
            "Nếu loading indicator đứng độc lập (standalone) – hãy cung cấp nhãn trợ năng cho khu vực nội dung mà nó đang tải.",
        },
      },
    },
    "c-modal": {
      title: "Modal (Hộp thoại)",
      description:
        "Container xuất hiện đè lên nội dung chính (nằm phía trước) để cung cấp thông tin quan trọng hoặc một đoạn nội dung có chứa các thao tác (actionable).",
      checklist: {
        "c-modal-composition": {
          title: "Bố cục nội dung",
          description:
            "Khu vực nội dung chính cần đủ linh hoạt để hỗ trợ nhiều loại nội dung khác nhau, bao gồm cả các component khác.",
        },
        "c-modal-actions": {
          title: "Hành động phụ trợ",
          description:
            "Vì nội dung trong modal có thể mang tính thao tác, điều quan trọng là phải có một khu vực cho các element hành động (actions). Khu vực này thường nằm ở dưới cùng của container modal.",
        },
        "c-modal-close": {
          title: "Hành động đóng (Close action)",
          description:
            "Modal cần cung cấp một cách đóng dễ dàng và trực tiếp, vì chúng chặn nội dung khi mở. Đây có thể là một nút đóng (close button) riêng biệt hoặc một trong các hành động phụ trợ.",
        },
        "c-modal-positioning": {
          title: "Định vị (Positioning)",
          description:
            "Modal có thể được định vị ở trung tâm màn hình hoặc hiển thị dưới dạng sliding sheet trượt từ một trong hai bên màn hình.",
        },
        "c-modal-sizes": {
          title: "Kích thước",
          description:
            "Cung cấp hỗ trợ thay đổi chiều cao và chiều rộng của modal dựa trên nội dung bạn hiển thị.",
        },
        "c-modal-a11y-focus": {
          title: "Bẫy Focus (Focus trapping)",
          description:
            "Khi modal mở ra, focus của người dùng sẽ di chuyển đến element đầu tiên có thể focus và bị giữ lại (trapped) bên trong modal. Khi modal đóng, focus sẽ trở về element hoạt động cuối cùng trước đó.",
        },
        "c-modal-a11y-keyboard": {
          title: "Điều hướng bằng bàn phím",
          description:
            "Phải có thể đóng modal bằng cách nhấn phím Esc và tất cả các element có thể focus bên trong container của modal phải có khả năng truy cập bằng điều hướng bàn phím.",
        },
        "c-modal-a11y-labels": {
          title: "Gắn nhãn Tiêu đề và Phụ đề",
          description:
            "Modal cần sử dụng đúng vai trò trợ năng (accessibility role) và chúng cần được gắn nhãn bởi element tiêu đề (title) và phụ đề (subtitle). Nếu không có tiêu đề hoặc phụ đề hiển thị, có thể sử dụng accessibility label thay thế.",
        },
      },
    },
    "c-pagination": {
      title: "Pagination (Phân trang)",
      description: "Pagination cho phép lựa chọn từ một loạt các trang.",
      checklist: {
        "c-pagination-selected": {
          title: "Trạng thái trang Selected",
          description:
            "Làm nổi bật trực quan trang đã chọn trong danh sách và làm cho nó không thể tương tác (non-interactive).",
        },
        "c-pagination-ranges": {
          title: "Khoảng trang hiển thị (Display ranges)",
          description:
            "Định nghĩa các khoảng trang (ranges) được render xung quanh trang đã chọn. Điều này giúp chỉ render một số lượng trang giới hạn nhưng cho phép người dùng điều hướng nhanh hơn so với việc di chuyển từng trang một.",
        },
        "c-pagination-amount": {
          title: "Số lượng item mỗi trang",
          description:
            "Cung cấp một tùy chọn để chọn số lượng item được phân trang (paginated items) hiển thị trên mỗi trang.",
        },
        "c-pagination-indeterminate": {
          title: "Số lượng trang không xác định",
          description:
            "Khi bạn không biết trước tổng số trang khả dụng, hãy sử dụng chế độ hiển thị khác để điều hướng các trang một cách độc lập.",
        },
        "c-pagination-a11y-label": {
          title: "Thông báo nhãn toàn trang (Full page label)",
          description:
            "Pagination cần cung cấp nhãn rõ ràng, linh động cho từng trang đối với các công nghệ hỗ trợ thay vì chỉ đọc mỗi con số mà không có ngữ cảnh.",
        },
        "c-pagination-a11y-state": {
          title: "Thông báo trạng thái",
          description:
            "Pagination cần thông báo khi một trang được chọn được focus.",
        },
      },
    },
    "c-progress": {
      title: "Thanh tiến trình (Progress bar)",
      description:
        "Thanh hiển thị tiến trình cho một tác vụ mất nhiều thời gian hoặc bao gồm nhiều bước.",
      checklist: {
        "c-progress-label": {
          title: "Nhãn (Label)",
          description:
            "Hỗ trợ hiển thị trực quan một nhãn giải thích thanh tiến trình (progress bar) đó dùng để làm gì.",
        },
        "c-progress-sizes": {
          title: "Kích thước",
          description:
            "Loading indicator có thể cung cấp nhiều kích thước, tùy thuộc vào kích thước của khu vực mà nó được render.",
        },
        "c-progress-duration": {
          title: "Thời lượng (Duration)",
          description:
            "Trong một số trường hợp, thời gian chờ không thể xác định được. Loading indicator nên được hiển thị cho đến khi tải xong hoặc xảy ra lỗi. Trong các trường hợp khác, tốt hơn là nên cho biết thời gian còn lại cho đến khi quá trình tải hoàn tất.",
        },
        "c-progress-a11y-label": {
          title: "Nhãn trợ năng (Accessibility label)",
          description:
            "Hỗ trợ thêm nhãn trợ năng trong trường hợp bạn không thể hiển thị nhãn trên giao diện.",
        },
      },
    },
    "c-radio": {
      title: "Input radio (Nút chọn một)",
      description:
        "Radio là một element biểu mẫu (form) dùng để chọn duy nhất một tùy chọn từ một danh sách.",
      checklist: {
        "c-radio-label": {
          title: "Nhãn (Label)",
          description:
            "Cần có một nhãn văn bản liên kết với trường radio. Việc nhấp vào nhãn cũng sẽ kích hoạt thao tác chọn checkbox. Nếu nhãn không được render trên trang, các công nghệ hỗ trợ vẫn phải đọc được nó.",
        },
        "c-radio-checked": {
          title: "Trạng thái Checked",
          description:
            "Hiển thị khi radio được chọn và được sử dụng cho việc submit form.",
        },
        "c-radio-error": {
          title: "Trạng thái Error (Lỗi)",
          description:
            "Sử dụng trạng thái lỗi cho validation form khi lỗi liên quan đến trường radio. Luôn sử dụng văn bản lỗi cùng với màu sắc trường khác biệt.",
        },
        "c-radio-disabled": {
          title: "Trạng thái Disabled",
          description:
            "Sử dụng trạng thái disabled để ngăn tương tác với radio và loại bỏ giá trị của nó khỏi các giá trị form được submit.",
        },
        "c-radio-group": {
          title: "Nhóm Radio",
          description:
            "Các nút radio luôn được sử dụng như một nhóm để tránh tình trạng khóa lựa chọn (locking the selection) sau khi một trong các nút radio được check.",
        },
        "c-radio-a11y-keyboard": {
          title: "Hỗ trợ bàn phím",
          description:
            "Việc chọn radio cần được kích hoạt bằng bàn phím. Sử dụng các thẻ HTML gốc (native elements) cho việc này sẽ tự động cung cấp tương tác đó.",
        },
      },
    },
    "c-select": {
      title: "Select (Hộp chọn)",
      description:
        "Select cho phép bạn chọn một giá trị duy nhất từ một danh sách các tùy chọn.",
      checklist: {
        "c-select-label": {
          title: "Nhãn (Label)",
          description:
            "Các nhãn văn bản liên kết với trường Select có thể cung cấp cho người dùng thêm ngữ cảnh. Nhấp vào nhãn cũng nên kích hoạt select dropdown.",
        },
        "c-select-error": {
          title: "Trạng thái Error (Lỗi)",
          description:
            "Sử dụng trạng thái lỗi cho validation form khi lỗi chỉ liên quan đến Select. Hiển thị thêm icon lỗi để hỗ trợ accessibility tốt hơn.",
        },
        "c-select-disabled": {
          title: "Trạng thái Disabled",
          description:
            "Sử dụng trạng thái disabled để ngăn tương tác với Select và loại bỏ giá trị của nó khỏi các giá trị form được submit.",
        },
        "c-select-placeholder": {
          title: "Placeholder (Văn bản giữ chỗ)",
          description:
            "Khi không có giá trị nào được chọn – hãy hiển thị một giá trị placeholder. Bạn có thể sử dụng cùng giá trị placeholder đó để cho phép người dùng reset giá trị Select về mặc định.",
        },
        "c-select-helper": {
          title: "Helper text (Văn bản hỗ trợ)",
          description:
            "Cung cấp cho người dùng ngữ cảnh bổ sung về mục đích của Select và các yêu cầu đối với việc lựa chọn.",
        },
        "c-select-icon": {
          title: "Hỗ trợ Icon",
          description:
            "Thêm khu vực để hiển thị icon ở đầu trường (field) để truyền đạt mục đích của Select dưới dạng component hoặc giá trị được chọn.",
        },
        "c-select-prefix": {
          title: "Tiền tố (Prefix)",
          description:
            "Thêm khu vực cho nội dung tùy chỉnh để làm cho lựa chọn mang tính ngữ cảnh hơn đối với người dùng. Ví dụ: bạn có thể hiển thị cờ quốc gia trong phần chọn mã quốc gia.",
        },
        "c-select-sizes": {
          title: "Kích thước",
          description:
            "Tùy thuộc vào vị trí Select sẽ được sử dụng, nó có thể có nhiều kích thước. Ví dụ: bạn có thể dùng kích thước nhỏ cho các khu vực có mật độ dày đặc của ứng dụng.",
        },
        "c-select-a11y-label": {
          title: "Nhãn trợ năng",
          description:
            "Trong trường hợp bạn không cung cấp nhãn văn bản hiển thị cho select, hãy đảm bảo vẫn cung cấp nhãn trợ năng (accessibility label) mô tả mục đích của component.",
        },
      },
    },
    "c-skeleton": {
      title: "Skeleton (Khung tải trang)",
      description:
        "Placeholder (khung giữ chỗ) thay thế các element trên trang trong khi dữ liệu của chúng đang tải.",
      checklist: {
        "c-skeleton-sizes": {
          title: "Kích thước",
          description:
            "Skeleton cần có khả năng khớp (match) với các component có kích thước khác nhau trong design system của bạn để tránh tình trạng layout shift (bố cục bị nhảy) không cần thiết khi dữ liệu đã tải xong.",
        },
        "c-skeleton-shapes": {
          title: "Hình dáng (Shapes)",
          description:
            "Skeleton cần có khả năng khớp với các hình dạng khác nhau của component trong design system của bạn để giữ cho trạng thái tải (loading state) đồng bộ với bố cục thực tế của các component đó.",
        },
        "c-skeleton-composition": {
          title: "Bố cục (Composition)",
          description:
            "Bạn có thể kết hợp các skeleton đơn giản thành các bố cục phức tạp hơn. Bạn không cần phải thiết kế map skeleton 1:1 với giao diện ứng dụng của mình.",
        },
        "c-skeleton-a11y-motion": {
          title: "Giảm chuyển động (Reduced motion)",
          description:
            "Giảm hoặc loại bỏ hoàn toàn animation khi có tùy chọn người dùng reduced motion (giảm chuyển động).",
        },
      },
    },
    "c-switch": {
      title: "Switch (Công tắc)",
      description:
        "Nút bật/tắt (toggle) dùng để thay đổi ngay lập tức trạng thái của một mục duy nhất.",
      checklist: {
        "c-switch-label": {
          title: "Nhãn (Label)",
          description:
            "Cần có nhãn văn bản liên kết với switch. Việc nhấp vào nhãn cũng sẽ kích hoạt trạng thái của switch. Nếu nhãn không được render trên trang, các công nghệ hỗ trợ vẫn phải đọc được nó.",
        },
        "c-switch-checked": {
          title: "Trạng thái Checked",
          description:
            "Hiển thị khi switch được chọn và kích hoạt chức năng bên dưới. Thông thường, một switch được sử dụng để cập nhật dữ liệu ngay lập tức sau khi nó được chọn.",
        },
        "c-switch-disabled": {
          title: "Trạng thái Disabled",
          description: "Sử dụng trạng thái disabled để ngăn tương tác với switch.",
        },
        "c-switch-a11y-keyboard": {
          title: "Điều hướng bằng bàn phím",
          description:
            "Việc chọn switch cần được kích hoạt bằng bàn phím. Sử dụng các thẻ HTML gốc (native elements) cho việc này sẽ tự động cung cấp tương tác đó.",
        },
        "c-switch-a11y-label": {
          title: "Nhãn trợ năng",
          description:
            "Trong trường hợp bạn không cung cấp nhãn văn bản hiển thị cho Switch, hãy đảm bảo vẫn cung cấp nhãn trợ năng mô tả mục đích của component.",
        },
      },
    },
    "c-tabs": {
      title: "Tabs (Thẻ điều hướng)",
      description: "Điều hướng giữa nhiều trang hoặc các phần nội dung khác nhau.",
      checklist: {
        "c-tabs-composition": {
          title: "Bố cục nội dung",
          description:
            "Khu vực nội dung cần đủ linh hoạt để hỗ trợ nhiều loại nội dung khác nhau, bao gồm cả các component khác.",
        },
        "c-tabs-variants": {
          title: "Biến thể (Variants)",
          description:
            "Để hỗ trợ các ngữ cảnh render khác nhau, tab có thể hỗ trợ nhiều biến thể. Ví dụ: chúng có thể được render dưới dạng viên thuốc (pills) khi sử dụng trực tiếp trên trang, trong khi sử dụng biến thể gạch chân (underlined) cho các tab render bên trong card.",
        },
        "c-tabs-selected": {
          title: "Trạng thái Selected",
          description:
            "Vì các tab luôn hiển thị nội dung từ một trong các bảng điều khiển (panels) của chúng, một trong các tab trigger phải luôn ở trạng thái được chọn (selected) và được đánh dấu rõ ràng về mặt thị giác.",
        },
        "c-tabs-disabled": {
          title: "Trạng thái Disabled",
          description:
            "Các tab trigger có thể bị vô hiệu hóa (disabled) để ngăn người dùng chuyển sang một tab panel cụ thể.",
        },
        "c-tabs-icon": {
          title: "Hỗ trợ Icon",
          description:
            "Để minh họa rõ hơn ý nghĩa của từng tab, bạn có thể hiển thị một icon bên cạnh văn bản của tab trigger.",
        },
        "c-tabs-equal": {
          title: "Bố cục chiều rộng bằng nhau (Equal width)",
          description:
            "Khi được sử dụng để lấp đầy toàn bộ chiều rộng của container cha, các tab trigger có thể được kéo giãn để chiếm không gian ngang bằng nhau.",
        },
        "c-tabs-a11y-keyboard": {
          title: "Hỗ trợ bàn phím",
          description:
            "Khi tương tác với các tab bằng bàn phím, chúng cần hỗ trợ điều hướng bằng mũi tên để chuyển giữa các panel trước và sau. Các phím Home và End cũng nên di chuyển selection đến panel đầu tiên và cuối cùng tương ứng.",
        },
      },
    },
    "c-text-area": {
      title: "Vùng văn bản (Text area)",
      description: "Trường biểu mẫu (Form field) để nhập và chỉnh sửa văn bản nhiều dòng.",
      checklist: {
        "c-text-area-label": {
          title: "Nhãn (Label)",
          description:
            "Các nhãn văn bản liên kết với text area có thể cung cấp cho người dùng thêm ngữ cảnh. Nhấp vào nhãn sẽ di chuyển focus tới trường nhập liệu đó.",
        },
        "c-text-area-error": {
          title: "Trạng thái Error (Lỗi)",
          description:
            "Sử dụng trạng thái lỗi cho validation form khi lỗi chỉ liên quan đến Text area.",
        },
        "c-text-area-disabled": {
          title: "Trạng thái Disabled",
          description:
            "Sử dụng trạng thái disabled để ngăn tương tác với text area và loại bỏ giá trị của nó khỏi các giá trị form được submit.",
        },
        "c-text-area-placeholder": {
          title: "Placeholder (Văn bản giữ chỗ)",
          description:
            "Khi giá trị của text area trống – hãy hiển thị một giá trị placeholder. Đảm bảo rằng nó không được sử dụng thay thế cho label.",
        },
        "c-text-area-helper": {
          title: "Helper text (Văn bản hỗ trợ)",
          description:
            "Cung cấp cho người dùng ngữ cảnh bổ sung về mục đích của Text area và các yêu cầu cho giá trị mong đợi.",
        },
        "c-text-area-sizes": {
          title: "Kích thước",
          description:
            "Tùy thuộc vào vị trí text area sẽ được sử dụng, nó có thể có nhiều kích thước. Ví dụ: bạn có thể sử dụng kích thước lớn cho các form trên các trang marketing.",
        },
        "c-text-area-a11y-label": {
          title: "Nhãn trợ năng",
          description:
            "Trong trường hợp bạn không cung cấp nhãn văn bản hiển thị cho text area, hãy đảm bảo vẫn cung cấp nhãn trợ năng mô tả mục đích của component.",
        },
      },
    },
    "c-text-field": {
      title: "Trường văn bản (Text field)",
      description: "Trường biểu mẫu (Form field) để nhập và chỉnh sửa văn bản một dòng.",
      checklist: {
        "c-text-field-label": {
          title: "Nhãn (Label)",
          description:
            "Các nhãn văn bản liên kết với text field có thể cung cấp cho người dùng thêm ngữ cảnh. Nhấp vào nhãn sẽ di chuyển focus tới trường nhập liệu đó.",
        },
        "c-text-field-error": {
          title: "Trạng thái Error (Lỗi)",
          description:
            "Sử dụng trạng thái lỗi cho validation form khi lỗi chỉ liên quan đến text field.",
        },
        "c-text-field-disabled": {
          title: "Trạng thái Disabled",
          description:
            "Sử dụng trạng thái disabled để ngăn tương tác với text field và loại bỏ giá trị của nó khỏi các giá trị form được submit.",
        },
        "c-text-field-placeholder": {
          title: "Placeholder",
          description:
            "Khi giá trị của text field trống – hãy hiển thị một giá trị placeholder. Đảm bảo rằng nó không được sử dụng thay thế cho label.",
        },
        "c-text-field-helper": {
          title: "Helper text (Văn bản hỗ trợ)",
          description:
            "Cung cấp cho người dùng ngữ cảnh bổ sung về mục đích của text field và các yêu cầu cho giá trị mong đợi.",
        },
        "c-text-field-icon": {
          title: "Hỗ trợ Icon",
          description:
            "Thêm khu vực để hiển thị icon ở đầu trường (field) để truyền đạt mục đích của text field dưới dạng component hoặc giá trị của trường đó.",
        },
        "c-text-field-affix": {
          title: "Tiền tố / Hậu tố (Prefix / Suffix)",
          description:
            "Thêm khu vực cho nội dung tùy chỉnh để làm cho lựa chọn mang tính ngữ cảnh hơn đối với người dùng. Ví dụ: bạn có thể hiển thị các nhà cung cấp dịch vụ thanh toán (payment providers) trong text field nhập số thẻ tín dụng.",
        },
        "c-text-field-sizes": {
          title: "Kích thước",
          description:
            "Tùy thuộc vào vị trí text field sẽ được sử dụng, nó có thể có nhiều kích thước. Ví dụ: bạn có thể sử dụng kích thước lớn cho các form trên các trang marketing.",
        },
        "c-text-field-a11y-label": {
          title: "Nhãn trợ năng",
          description:
            "Trong trường hợp bạn không cung cấp nhãn văn bản hiển thị cho text field, hãy đảm bảo vẫn cung cấp nhãn trợ năng mô tả mục đích của component.",
        },
      },
    },
    "c-toast": {
      title: "Toast (Thông báo nổi)",
      description:
        "Tin nhắn thông báo hoặc một mẩu thông tin hiển thị bên trên (nổi lên) các nội dung trang.",
      checklist: {
        "c-toast-composition": {
          title: "Bố cục nội dung",
          description:
            "Khu vực nội dung cần đủ linh hoạt để hỗ trợ nhiều loại nội dung khác nhau, bao gồm cả các component khác.",
        },
        "c-toast-colors": {
          title: "Màu sắc",
          description:
            "Tùy thuộc vào vai trò của thông báo hiển thị trong toast, nó có thể có nhiều màu sắc khác nhau. Ví dụ: nó có thể có màu đỏ đối với các thông báo lỗi.",
        },
        "c-toast-icon": {
          title: "Hỗ trợ Icon",
          description:
            "Thêm khu vực để hiển thị icon ở phần đầu của toast để truyền đạt mục đích của thông báo.",
        },
        "c-toast-timeout": {
          title: "Thời gian chờ (Timeout)",
          description:
            "Các toast thường tự động biến mất (dismiss) sau một khoảng thời gian (timeout). Đảm bảo cung cấp thời gian chờ đủ dài để người dùng kịp đọc tin nhắn. Nếu không có timeout – hãy cung cấp một nút để đóng thông báo.",
        },
        "c-toast-stacking": {
          title: "Xếp chồng (Stacking)",
          description:
            "Khi có nhiều toast được kích hoạt, hãy xếp chồng chúng lên nhau để tránh làm rối màn hình.",
        },
        "c-toast-action": {
          title: "Hành động phụ trợ",
          description:
            "Các hành động trong thông báo nên mang tính ngữ cảnh theo mục đích thông báo. Ví dụ: nếu bạn thông báo cho người dùng về việc xóa nội dung, một action element có thể giúp họ hoàn tác (undo) thao tác này.",
        },
        "c-toast-a11y-focus": {
          title: "Quản lý Focus (Focus management)",
          description:
            "Khi toast có các action, người dùng phải có khả năng focus chúng bằng bàn phím để kích hoạt. Khi focus đang nằm bên trong container của toast – timeout (thời gian tự đóng) sẽ bị vô hiệu hóa.",
        },
        "c-toast-a11y-motion": {
          title: "Giảm chuyển động (Reduced motion)",
          description:
            "Giảm hoặc loại bỏ hoàn toàn animation khi có tùy chọn người dùng reduced motion (giảm chuyển động).",
        },
      },
    },
    "c-tooltip": {
      title: "Tooltip (Chú giải công cụ)",
      description:
        "Hiển thị thông tin văn bản theo ngữ cảnh khi hover hoặc focus vào một element.",
      checklist: {
        "c-tooltip-positioning": {
          title: "Định vị (Positioning)",
          description:
            "Khi vị trí mặc định của tooltip không cho phép nó nằm gọn trong màn hình (viewport) – hãy đảm bảo tự động chuyển đổi (dynamically switch) vị trí của nó sang một giá trị khác.",
        },
        "c-tooltip-timeout": {
          title: "Thời gian chờ (Timeout)",
          description:
            "Đợi một thời gian ngắn trước khi mở Tooltip để đảm bảo chúng không bị mở lên liên tục khi người dùng di chuyển con trỏ chuột quanh màn hình.",
        },
        "c-tooltip-a11y-keyboard": {
          title: "Hỗ trợ bàn phím",
          description:
            "Các tooltip phải có thể truy cập được không chỉ khi hover chuột mà còn khi element trigger được focus.",
        },
      },
    },
  },
};