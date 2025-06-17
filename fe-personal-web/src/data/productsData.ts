export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  category: string;
  description: string;
  generalInfo?: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Michelin Pilot Street 2",
    price: 1250000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Lốp xe",
    description:
      "Lốp Michelin Pilot Street 2 được thiết kế đặc biệt cho các dòng xe tay côn và xe có phân khối trung bình. Với công nghệ gai lốp tiên tiến, sản phẩm giúp tăng độ bám đường trong mọi điều kiện thời tiết. Thiết kế kết hợp giữa hiệu quả và độ bền, mang lại độ bền cao khi vào cua. Lốp có tuổi thọ cao và mô hình thiết kế phù hợp với điều kiện đường sá tại Việt Nam.<br><br>Liên hệ ngay với ANT CENTER để được tư vấn và đặt hàng: <strong>0971.717.479 / 0855.033.033</strong>",
    generalInfo:
      "<div class='space-y-4'><div class='flex items-start'><div class='flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] my-2 mr-2'></div><div class='ml-2'><h3 class='font-semibold text-[#00E8F8]'>Miễn phí vận chuyển trong 10km</h3><p class='text-gray-300'>Áp dụng cho tất cả đơn hàng trong khu vực</p></div></div><div class='flex items-start'><div class='flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] my-2 mr-2'></div><div class='ml-2'><h3 class='font-semibold text-[#00E8F8]'>Bảo hành chính hãng 12 tháng</h3><p class='text-gray-300'>Đảm bảo chất lượng sản phẩm từ nhà sản xuất</p></div></div><div class='flex items-start'><div class='flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] my-2 mr-2'></div><div class='ml-2'><h3 class='font-semibold text-[#00E8F8]'>Đổi trả trong vòng 7 ngày</h3><p class='text-gray-300'>Nếu sản phẩm có lỗi từ nhà sản xuất</p></div></div></div>",
  },
  {
    id: 2,
    name: "Michelin City Pro",
    price: 950000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Lốp xe",
    description:
      "Lốp Michelin City Pro được thiết kế cho các dòng xe số phổ thông, mang lại độ bền cao và khả năng bám đường tốt trong điều kiện đường phố đô thị.",
    generalInfo:
      "<div class='space-y-4'><div class='flex items-start'><div class='flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] my-2 mr-2'></div><div class='ml-2'><h3 class='font-semibold text-[#00E8F8]'>Phù hợp với xe số phổ thông</h3><p class='text-gray-300'>Thiết kế đặc biệt cho các dòng xe số thông dụng tại Việt Nam</p></div></div><div class='flex items-start'><div class='flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] my-2 mr-2'></div><div class='ml-2'><h3 class='font-semibold text-[#00E8F8]'>Bảo hành 12 tháng</h3><p class='text-gray-300'>Chính hãng Michelin với chất lượng đảm bảo</p></div></div><div class='flex items-start'><div class='flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] my-2 mr-2'></div><div class='ml-2'><h3 class='font-semibold text-[#00E8F8]'>Tiết kiệm nhiên liệu</h3><p class='text-gray-300'>Giảm ma sát, tối ưu hiệu suất sử dụng</p></div></div></div>",
  },
  {
    id: 3,
    name: "Dunlop D102",
    price: 1150000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Lốp xe",
    description:
      "Lốp Dunlop D102 với thiết kế gai lốp đặc biệt, tăng độ bám đường trong mọi điều kiện thời tiết. Chất liệu cao su bền bỉ, chống mài mòn và đảm bảo an toàn khi vận hành.",
    generalInfo:
      "<div class='space-y-4'><div class='flex items-start'><div class='flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] my-2 mr-2'></div><div class='ml-2'><h3 class='font-semibold text-[#00E8F8]'>Công nghệ gai lốp tiên tiến</h3><p class='text-gray-300'>Tăng độ bám đường trong mọi điều kiện thời tiết</p></div></div><div class='flex items-start'><div class='flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] my-2 mr-2'></div><div class='ml-2'><h3 class='font-semibold text-[#00E8F8]'>Chống mài mòn vượt trội</h3><p class='text-gray-300'>Tuổi thọ cao hơn 20% so với lốp thông thường</p></div></div><div class='flex items-start'><div class='flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] my-2 mr-2'></div><div class='ml-2'><h3 class='font-semibold text-[#00E8F8]'>Vận hành êm ái</h3><p class='text-gray-300'>Giảm tiếng ồn và độ rung khi di chuyển</p></div></div></div>",
  },
  {
    id: 4,
    name: "Pirelli Diablo Rosso",
    price: 1450000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Lốp xe",
    description:
      "Lốp Pirelli Diablo Rosso với công nghệ tiên tiến từ Ý, mang lại cảm giác lái thể thao và độ bám đường tuyệt vời. Lý tưởng cho các dòng xe phân khối lớn và người đam mê tốc độ.",
    generalInfo:
      "<div class='space-y-4'><div class='flex items-start'><div class='flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] my-2 mr-2'></div><div class='ml-2'><h3 class='font-semibold text-[#00E8F8]'>Công nghệ từ đường đua</h3><p class='text-gray-300'>Áp dụng kinh nghiệm từ các giải đua MotoGP</p></div></div><div class='flex items-start'><div class='flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] my-2 mr-2'></div><div class='ml-2'><h3 class='font-semibold text-[#00E8F8]'>Độ bám đường tuyệt vời</h3><p class='text-gray-300'>Tối ưu hiệu suất khi vào cua và tăng tốc</p></div></div><div class='flex items-start'><div class='flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] my-2 mr-2'></div><div class='ml-2'><h3 class='font-semibold text-[#00E8F8]'>Thiết kế thể thao</h3><p class='text-gray-300'>Nâng tầm vẻ đẹp cho xe phân khối lớn</p></div></div></div>",
  },
  {
    id: 5,
    name: "Metzeler ME 7",
    price: 1350000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Lốp xe",
    description:
      "Lốp Metzeler ME 7 với thiết kế đặc biệt cho hiệu suất cao trên đường khô và ướt. Công nghệ cao su tiên tiến giúp tăng tuổi thọ và độ an toàn khi vận hành.",
  },
  {
    id: 6,
    name: "Dầu Động Cơ Cao Cấp",
    price: 350000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Dầu nhớt",
    description:
      "Dầu động cơ cao cấp giúp bảo vệ động cơ xe máy của bạn trong mọi điều kiện vận hành. Công thức tiên tiến giúp kéo dài tuổi thọ động cơ và tối ưu hiệu suất.",
  },
  {
    id: 7,
    name: "Bộ Phanh Đĩa",
    price: 850000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Phanh",
    description:
      "Bộ phanh đĩa chất lượng cao, đảm bảo an toàn tối đa khi vận hành. Được sản xuất từ vật liệu bền bỉ, chống mài mòn và hoạt động hiệu quả trong mọi điều kiện thời tiết.",
  },
  {
    id: 8,
    name: "Bộ Nhông Sên Đĩa",
    price: 750000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Truyền động",
    description:
      "Bộ nhông sên đĩa chính hãng, đảm bảo độ bền cao và vận hành êm ái. Thiết kế tối ưu giúp tăng tuổi thọ và hiệu suất truyền động cho xe máy của bạn.",
  },
  {
    id: 9,
    name: "Lốp Xe Cao Cấp",
    price: 1200000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Lốp xe",
    description:
      "Lốp xe cao cấp với thiết kế gai lốp đặc biệt, tăng độ bám đường trong mọi điều kiện thời tiết. Chất liệu cao su bền bỉ, chống mài mòn và đảm bảo an toàn khi vận hành.",
  },
  {
    id: 10,
    name: "Ắc Quy Chính Hãng",
    price: 900000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Điện",
    description:
      "Ắc quy chính hãng với công nghệ tiên tiến, đảm bảo khởi động nhanh và duy trì điện áp ổn định. Thiết kế không cần bảo dưỡng, tuổi thọ cao và khả năng chịu nhiệt tốt.",
  },
  {
    id: 11,
    name: "Bugi Cao Cấp",
    price: 250000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Điện",
    description:
      "Bugi cao cấp với điện cực bằng hợp kim đặc biệt, đảm bảo tia lửa mạnh và ổn định. Giúp tối ưu hóa quá trình đốt cháy, tiết kiệm nhiên liệu và tăng công suất động cơ.",
  },
  {
    id: 12,
    name: "Bộ Lọc Gió Hiệu Suất Cao",
    price: 320000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Lọc",
    description:
      "Bộ lọc gió hiệu suất cao giúp động cơ hít thở tốt hơn, tăng công suất và tiết kiệm nhiên liệu. Chất liệu lọc cao cấp đảm bảo loại bỏ tối đa bụi bẩn và tạp chất.",
  },
  {
    id: 13,
    name: "Dây Curoa Chính Hãng",
    price: 450000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Truyền động",
    description:
      "Dây curoa chính hãng với chất liệu cao su bền bỉ, chịu lực tốt và độ đàn hồi cao. Đảm bảo truyền động êm ái và ổn định trong mọi điều kiện vận hành.",
  },
  {
    id: 14,
    name: "Bộ Côn Tay Racing",
    price: 1500000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Điều khiển",
    description:
      "Bộ côn tay racing cao cấp, thiết kế công thái học giúp tăng cảm giác và độ chính xác khi điều khiển. Chất liệu hợp kim nhôm CNC, nhẹ và bền bỉ.",
  },
  {
    id: 15,
    name: "Bình Xăng Con Chính Hãng",
    price: 550000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Nhiên liệu",
    description:
      "Bình xăng con chính hãng với thiết kế tối ưu, đảm bảo cung cấp nhiên liệu ổn định cho động cơ. Chất liệu cao cấp, chống ăn mòn và bền bỉ theo thời gian.",
  },
  {
    id: 16,
    name: "Bộ Nhông Sên Đĩa Racing",
    price: 1200000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Truyền động",
    description:
      "Bộ nhông sên đĩa racing với thiết kế đặc biệt, tăng tốc độ và hiệu suất truyền động. Chất liệu hợp kim đặc biệt, nhẹ và bền bỉ hơn so với bộ tiêu chuẩn.",
  },
  {
    id: 17,
    name: "Phuộc YSS Cao Cấp",
    price: 2500000,
    imageUrls: [
      "/img/photo-1582639510494-c80b5de9f148.jpg",
      "/img/photo-1582639510494-c80b5de9f148.jpg",
    ],
    category: "Giảm xóc",
    description:
      "Phuộc YSS cao cấp với công nghệ giảm xóc tiên tiến, tăng độ êm ái và ổn định khi vận hành. Thiết kế tùy chỉnh được độ nén và đàn hồi, phù hợp với nhiều điều kiện đường sá.",
  },
];
