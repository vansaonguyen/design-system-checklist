export default {
  title: "Bảo trì (Maintenance)",
  description:
    "Design system không có gì khác biệt so với bất kỳ dự án nào mà đội ngũ của bạn có thể đảm nhận. Để xây dựng và duy trì thành công, bạn cần một chiến lược rõ ràng được thực thi tốt hàng ngày, và bạn sẽ cần tạo ra các cơ hội để đồng nghiệp đưa ra phản hồi nhằm cùng nhau chia sẻ và phát triển design system.",

  sections: {
    "m-documentation": {
      title: "Tài liệu (Documentation)",
      description:
        "Tài nguyên tài liệu là một phần cốt lõi của bất kỳ design system nào vì nó giúp tiết kiệm thời gian và công sức cho đội ngũ và tất cả những người sử dụng design system. Nó cho phép mọi người nắm bắt các quy tắc và tìm câu trả lời cho các câu hỏi thường gặp nhất mà không cần phải liên hệ trực tiếp với đội ngũ.",
      checklist: {
        "m-documentation-principles": {
          title: "Nguyên tắc của Design system",
          description:
            "Liệt kê các nguyên tắc cốt lõi của bạn khi xây dựng design system để các designer và developer biết giá trị của bạn là gì và đâu là những yếu tố chính cho việc ra quyết định trong đội của bạn.",
        },
        "m-documentation-start": {
          title: "Bắt đầu (Getting started)",
          description:
            "Hướng dẫn người khác qua các bước đầu tiên để thiết lập và sử dụng design system của bạn, giúp họ có thể xây dựng tính năng hoặc sản phẩm đầu tiên mà không cần liên hệ trực tiếp với bạn.",
        },
        "m-documentation-design": {
          title: "Best practice trong Thiết kế",
          description:
            "Chia sẻ các mẹo về cách thiết kế sản phẩm sử dụng design system một cách có khả năng mở rộng (scalable), tránh các cạm bẫy phổ biến và sử dụng công cụ thiết kế của bạn với tối đa tiềm năng.",
        },
        "m-documentation-dev": {
          title: "Best practice trong Lập trình",
          description:
            "Chia sẻ các mẹo về cách lập trình sản phẩm sử dụng design system, các thư viện phụ thuộc (dependencies) kỹ thuật được đề xuất, và cách tránh các cạm bẫy phổ biến.",
        },
        "m-documentation-anatomy": {
          title: "Cấu trúc Component (Component anatomy)",
          description:
            "Cung cấp cái nhìn tổng quan về cấu trúc thiết kế (anatomy) của các component để giúp mọi người hiểu giới hạn về bố cục của component và những phần nào có thể tùy chỉnh được.",
        },
        "m-documentation-props": {
          title: "Thuộc tính Component (Component properties/Props)",
          description:
            "Viết tài liệu cho các thuộc tính (props) mà component của bạn hỗ trợ trong cả thiết kế và code. Chúng tôi khuyên bạn nên đồng bộ hầu hết các thuộc tính này trên các nền tảng để quy trình chuyển giao thiết kế (design handoff) diễn ra suôn sẻ hơn.",
        },
        "m-documentation-composition": {
          title: "Ví dụ về bố cục Component",
          description:
            "Khi xây dựng các component cấp thấp có hỗ trợ các vùng chứa (slots) để chèn nội dung khác – hãy cung cấp các ví dụ về cách sử dụng chúng để tạo ra các bố cục (compositions) nâng cao hơn.",
        },
        "m-documentation-sandbox": {
          title: "Ví dụ về sản phẩm Sandbox",
          description:
            "Nếu bạn không có cách nào tự kiểm thử các component của mình trên sản phẩm thật, bạn có thể xây dựng một ứng dụng đơn giản mô phỏng các bố cục sản phẩm thực tế để kiểm tra cách component của bạn hoạt động ngoài đời và thử nghiệm các tính năng mới của design system trước khi phát hành chúng.",
        },
        "m-documentation-env": {
          title: "Hỗ trợ Trình duyệt / HĐH (Browser / OS support)",
          description:
            "Xác định mức độ hỗ trợ mà bạn cung cấp cho các hệ điều hành và trình duyệt khác nhau, đồng thời đảm bảo bạn thống nhất với nhóm sản phẩm (product) về chủ đề này.",
        },
        "m-documentation-release": {
          title: "Chu kỳ phát hành (Release cycle)",
          description:
            "Thiết lập và viết tài liệu cho một chu kỳ phát hành có thể dự đoán được đối với các phiên bản lớn (major versions) có chứa những thay đổi mang tính phá vỡ (breaking changes). Bằng cách này, các nhóm sản phẩm có thể lên kế hoạch cho việc migration ở phía họ.",
        },
      },
    },
    "m-local": {
      title: "Thư viện cục bộ (Local libraries)",
      description:
        "Phạm vi của design system thường là xây dựng các pattern cốt lõi lặp đi lặp lại nhằm tăng tốc độ cho các nhóm sản phẩm. Điều đó có nghĩa là bạn sẽ không tự tay thực hiện toàn bộ mọi UI element. Các nhóm sản phẩm vẫn sẽ xây dựng các component cục bộ (local components) sử dụng design system để giải quyết các tình huống cụ thể của họ.",
      checklist: {
        "m-local-when": {
          title: "Khi nào nên xây dựng",
          description:
            "Chia sẻ kỳ vọng của bạn về việc khi nào các nhóm sản phẩm nên xây dựng custom component (component tùy chỉnh) thay vì yêu cầu một tính năng mới trong design system hoặc sử dụng một component có sẵn.",
        },
        "m-local-types": {
          title: "Thư viện ngang và dọc (Horizontal and vertical libraries)",
          description:
            "Chỉ ra sự khác biệt giữa các thư viện ngang (được sử dụng trên nhiều sản phẩm) và các thư viện dọc (chỉ được sử dụng bởi nhóm xây dựng nó).",
        },
        "m-local-expectations": {
          title: "Kỳ vọng về Thư viện",
          description:
            "Ghi lại bộ yêu cầu tối thiểu để ra mắt (shipping) một thư viện cục bộ. Mô tả kỳ vọng của bạn về chất lượng thư viện, tài liệu, và việc bảo trì.",
        },
        "m-local-release": {
          title: "Đồng bộ chu kỳ phát hành",
          description:
            "Đảm bảo rằng các thư viện cục bộ được đồng bộ với chu kỳ phát hành của design system. Chúng phải hỗ trợ các bản phát hành lớn (major releases) mới ra mắt của hệ thống để tránh làm cản trở quá trình cập nhật của sản phẩm.",
        },
      },
    },
    "m-process": {
      title: "Quy trình làm việc nhóm (Team processes)",
      description:
        "Tất cả các đội ngũ đã mở rộng quy mô design system thành công đều làm được điều này bằng cách thiết lập các quy trình vững chắc để làm việc với các bên liên quan và cộng đồng. Khi bạn tiếp tục phát triển hệ thống, chúng sẽ giúp bạn tiết kiệm vô số giờ đồng hồ và tránh phải trả lời đi trả lời lại cùng một câu hỏi.",
      checklist: {
        "m-process-log": {
          title: "Nhật ký ra quyết định (Decision-making log)",
          description:
            "Đối với các chủ đề bạn phải xử lý lặp đi lặp lại – hãy ghi chép lại cách bạn đưa ra những quyết định đó. Bạn sẽ không bỏ lỡ bất kỳ yêu cầu ngữ cảnh nào và sẽ tránh được việc phải có thêm các cuộc họp đồng bộ (alignment meetings).",
        },
        "m-process-roadmap": {
          title: "Lộ trình (Roadmap)",
          description:
            "Cố gắng lập kế hoạch công việc dài hạn của bạn và chỉ phân bổ một phần thời gian cho việc hỗ trợ cộng đồng. Điều này sẽ giúp bạn phát triển hệ thống theo thời gian thay vì chỉ tập trung vào các bản sửa lỗi nhỏ và các yêu cầu tính năng (feature requests).",
        },
        "m-process-stakeholder": {
          title: "Sơ đồ các bên liên quan (Stakeholder mapping)",
          description:
            "Liệt kê các bên liên quan chính trên tất cả các sản phẩm mà bạn đang hỗ trợ. Đó có thể là những người làm việc trong mảng phát triển và thiết kế, nhưng cũng đừng bỏ qua ban lãnh đạo (people leadership), những người có thể giúp bạn thúc đẩy sự đón nhận (adoption).",
        },
        "m-process-analytics": {
          title: "Phân tích dữ liệu (Analytics)",
          description:
            "Xác định một cách để theo dõi mức độ sử dụng và giá trị của các thư viện cũng như bộ công cụ (tooling) mà bạn cung cấp. Bạn có thể bắt đầu bằng các chỉ số dễ thiết lập, như phân tích (analytics) cho trang web tài liệu, khảo sát phản hồi, hoặc phân tích việc sử dụng component trong công cụ thiết kế của bạn.",
        },
        "m-process-shifts": {
          title: 'Các "ca" hỗ trợ liên tục',
          description:
            "Nếu có nhiều người cùng làm việc trên một nền tảng, hãy phân bổ và lên kế hoạch cho công việc hỗ trợ cộng đồng của họ. Điều đó sẽ giúp các thành viên trong nhóm tập trung vào công việc đã lên kế hoạch thay vì bị phân tâm bởi các yêu cầu và câu hỏi.",
        },
        "m-process-sla": {
          title: "Cam kết chất lượng dịch vụ (SLA)",
          description:
            "Xác định các khung thời gian cho việc bạn mất bao lâu để xử lý các yêu cầu gửi đến và các báo cáo lỗi nhằm giúp các nhóm sản phẩm hiểu liệu họ nên chờ đợi bản phát hành của bạn hay tìm một giải pháp thay thế (workaround) tạm thời.",
        },
      },
    },
    "m-community": {
      title: "Hỗ trợ cộng đồng (Community support)",
      description:
        "Việc giúp các product designer và developer làm việc hiệu quả hơn với design system, sửa các lỗi họ tìm thấy trong sản phẩm và giải quyết nhu cầu của họ là vô cùng quan trọng. Để đảm bảo bạn nhận được phản hồi đó – mục tiêu của bạn là làm cho việc chia sẻ các phát hiện của mọi người trở nên dễ dàng và an toàn.",
      checklist: {
        "m-community-channels": {
          title: "Kênh hỗ trợ",
          description:
            "Tạo các kênh hỗ trợ trong các công cụ bạn sử dụng để giao tiếp. Việc tách biệt các kênh theo nền tảng là một ý tưởng hay để tạo sự thoải mái cho mọi người khi chia sẻ chi tiết cụ thể về vấn đề nền tảng của họ.",
        },
        "m-community-template": {
          title: "Biểu mẫu (Templates)",
          description:
            "Chuẩn bị các mẫu (templates) để tạo các yêu cầu tính năng (feature requests) và báo cáo lỗi (bug reports). Sử dụng chúng để yêu cầu các liên kết tái tạo lỗi (reproduction links), đề xuất thiết kế, và các thông tin ngữ cảnh khác mà bạn cần để ra quyết định thay vì phải tìm kiếm thông tin đó theo cách thủ công.",
        },
        "m-community-updates": {
          title: "Cập nhật thường xuyên",
          description:
            "Bạn đang gây rủi ro cho việc đón nhận (adoption) các tính năng mới nếu bạn chỉ tập trung vào việc triển khai (implementation) mà không bao giờ nói về nó với cộng đồng. Việc xác định nhịp độ (cadence) cho các bản cập nhật của bạn giúp xây dựng thói quen cho các nhóm sản phẩm tới kiểm tra xem có gì mới trong hệ thống và cách họ có thể tận dụng nó.",
        },
        "m-community-slots": {
          title: "Giờ mở cửa (Open hours)",
          description:
            "Sẽ có những câu hỏi không thể giải quyết trong một ticket hoặc một cuộc trò chuyện (chat) duy nhất. Hãy giữ một vài lịch trống (bookable slots) trên lịch cho các nhóm khác để nhận tư vấn hoặc thảo luận về việc triển khai tính năng của họ với nhóm của bạn.",
        },
      },
    },
    "m-contribution": {
      title: "Đóng góp (Contribution)",
      description:
        "Việc xây dựng design system là một trò chơi đồng đội. Hãy đảm bảo bao gồm các nhóm sản phẩm vào hành trình này, giúp họ đóng góp vào hệ thống và để họ trở thành người vận động (advocate) cho hệ thống đó trên toàn công ty.",
      checklist: {
        "m-contribution-rules": {
          title: "Quy tắc chung (House rules) cho hệ thống",
          description:
            "Giải thích cho các nhóm sản phẩm hiểu quy trình thiết kế và phát triển của bạn hoạt động như thế nào. Các nhóm design system thường di chuyển chậm hơn các nhóm sản phẩm vì có nhiều trách nhiệm hơn trong việc đưa ra các quyết định có tính mở rộng (scalable) trên các component ảnh hưởng đến toàn bộ sản phẩm.",
        },
        "m-contribution-guidelines": {
          title: "Hướng dẫn đóng góp (Contribution guidelines)",
          description:
            "Giải thích những gì người đóng góp (contributors) cần thiết lập để chuẩn bị môi trường thiết kế và phát triển của họ cho việc thêm và kiểm thử các tính năng mới.",
        },
        "m-contribution-template": {
          title: "Biểu mẫu đề xuất tính năng (Feature proposal template)",
          description:
            "Chuẩn bị một template chuẩn để bắt đầu công việc cho một tính năng mới. Template này phải đảm bảo rằng những thay đổi được đề xuất sẽ được áp dụng trên tất cả các nền tảng và sẽ không phá vỡ cách sử dụng component hiện có trong sản phẩm.",
        },
        "m-contribution-engagement": {
          title: "Sự gắn kết (Engagement)",
          description:
            "Đảm bảo làm nổi bật và khen thưởng công việc của những người đóng góp khi thông báo về các tính năng mới, đồng thời giúp họ nhận được sự ủng hộ từ quản lý của họ khi họ đóng góp.",
        },
      },
    },
  },
};