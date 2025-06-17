// src/data/servicesData.ts
export interface ServiceDetail {
    id: number;
    title: string;
    imageUrl: string;
    summary: string;
    description: string;

}

export const servicesData: ServiceDetail[] = [
    {
        id: 1,
        title: "Sửa Chữa Động Cơ",
        imageUrl:
            "/img/photo-1562240020-ce31ccb0fa7d.jpg",
        summary: "Sửa chữa động cơ xe chuyên nghiệp, chẩn đoán và thay thế phụ tùng chính hãng để đảm bảo hiệu suất động cơ ổn định.",
        description: `
      <div class="service-section">
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Dịch vụ sửa chữa động cơ chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm, đảm bảo xe của bạn hoạt động tốt nhất.</p>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Tính Năng Dịch Vụ</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Chẩn đoán và sửa chữa các vấn đề về động cơ
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Thay thế phụ tùng chính hãng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Bảo dưỡng định kỳ theo tiêu chuẩn nhà sản xuất
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra và sửa chữa hệ thống nhiên liệu
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Lợi Ích</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Động cơ hoạt động ổn định, êm ái
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tiết kiệm nhiên liệu
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kéo dài tuổi thọ động cơ
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Giảm khí thải, thân thiện với môi trường
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Quy Trình Thực Hiện</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tiếp nhận xe và chẩn đoán ban đầu
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tư vấn và báo giá chi tiết
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Thực hiện sửa chữa theo quy trình chuẩn
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra chất lượng sau sửa chữa
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Bàn giao xe và tư vấn bảo dưỡng
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Báo Giá</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Liên hệ để được tư vấn và báo giá chi tiết</p>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thông Tin Liên Hệ</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">ANT CENTER - Trung tâm bảo dưỡng & chăm sóc xe ô tô chuyên nghiệp</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">313E Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Hotline: 0971.717.479 / 0855.033.033</p>
      </div>
    `

    },
    {
        id: 2,
        title: "Hệ Thống Điện",
        imageUrl:
            "/img/photo-1619642751034-765dfdf7c58e.jpg",
        summary: "Kiểm tra và sửa chữa hệ thống điện xe, bao gồm hệ thống đèn, điều hòa và các thiết bị điện quan trọng khác.",
        description: `
      <div class="service-section">
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Kiểm tra và sửa chữa toàn bộ hệ thống điện xe với thiết bị chẩn đoán hiện đại, giúp phát hiện và khắc phục sự cố nhanh chóng.</p>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Tính Năng Dịch Vụ</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Chẩn đoán và sửa chữa các vấn đề về hệ thống điện
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Thay thế phụ tùng chính hãng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra và sửa chữa hệ thống đèn
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra và sửa chữa hệ thống điều hòa
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Lợi Ích</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Hệ thống điện hoạt động ổn định
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tăng độ an toàn khi lái xe
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kéo dài tuổi thọ các thiết bị điện
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tiết kiệm chi phí sửa chữa lớn về sau
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Quy Trình Thực Hiện</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tiếp nhận xe và chẩn đoán ban đầu
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tư vấn và báo giá chi tiết
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Thực hiện sửa chữa theo quy trình chuẩn
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra chất lượng sau sửa chữa
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Bàn giao xe và tư vấn bảo dưỡng
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Báo Giá</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Liên hệ để được tư vấn và báo giá chi tiết</p>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thông Tin Liên Hệ</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">ANT CENTER - Trung tâm bảo dưỡng & chăm sóc xe ô tô chuyên nghiệp</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">313E Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Hotline: 0971.717.479 / 0855.033.033</p>
      </div>
    `,
    },
    {
        id: 3,
        title: "Sơn & Dọn Xe",
        imageUrl:
            "/img/photo-1635774855317-edf3ee4463db.jpg",
        summary: "Dịch vụ sơn xe và dọn nội thất, phục hồi vết xước, đánh bóng và bảo vệ lớp sơn khỏi tác động môi trường.",
        description: `
      <div class="service-section">
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Dịch vụ sơn và dọn xe chuyên nghiệp, mang lại diện mạo mới cho xe của bạn với chất lượng cao và độ bền màu tốt nhất.</p>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Tính Năng Dịch Vụ</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Sơn xe theo yêu cầu
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Phục hồi vết xước và móp méo
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Đánh bóng và phủ ceramic
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Vệ sinh nội thất chuyên sâu
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Lợi Ích</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Xe có diện mạo mới
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Bảo vệ lớp sơn khỏi tác động môi trường
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tăng giá trị xe
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Dễ dàng vệ sinh và bảo dưỡng
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Quy Trình Thực Hiện</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tiếp nhận xe và đánh giá tình trạng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tư vấn và báo giá chi tiết
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Thực hiện công việc theo quy trình chuẩn
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra chất lượng sau khi hoàn thành
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Bàn giao xe và tư vấn bảo dưỡng
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Báo Giá</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Liên hệ để được tư vấn và báo giá chi tiết</p>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thông Tin Liên Hệ</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">ANT CENTER - Trung tâm bảo dưỡng & chăm sóc xe ô tô chuyên nghiệp</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">313E Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Hotline: 0971.717.479 / 0855.033.033</p>
      </div>
    `,
    },
    {
        id: 4,
        title: "Chẩn Đoán Kỹ Thuật",
        imageUrl:
            "/img/photo-1619642751034-765dfdf7c58e.jpg",
        summary: "Chẩn đoán lỗi xe bằng máy chuyên dụng và kiểm tra toàn diện các hệ thống, giúp phát hiện sớm các vấn đề tiềm ẩn.",
        description: `
      <div class="service-section">
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Chẩn đoán toàn diện tình trạng xe với thiết bị hiện đại, giúp phát hiện sớm các vấn đề tiềm ẩn và đưa ra giải pháp tối ưu.</p>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Tính Năng Dịch Vụ</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Chẩn đoán lỗi bằng máy chuyên dụng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra toàn diện các hệ thống
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Phát hiện sớm các vấn đề tiềm ẩn
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tư vấn giải pháp khắc phục
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Lợi Ích</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Phát hiện sớm các vấn đề
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tiết kiệm chi phí sửa chữa lớn
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tăng độ an toàn khi lái xe
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kéo dài tuổi thọ xe
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Quy Trình Thực Hiện</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tiếp nhận xe và thông tin từ khách hàng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Chẩn đoán bằng máy chuyên dụng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra thủ công các hệ thống
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Báo cáo kết quả và tư vấn giải pháp
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Thực hiện sửa chữa nếu khách hàng đồng ý
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Báo Giá</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Liên hệ để được tư vấn và báo giá chi tiết</p>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thông Tin Liên Hệ</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">ANT CENTER - Trung tâm bảo dưỡng & chăm sóc xe ô tô chuyên nghiệp</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">313E Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Hotline: 0971.717.479 / 0855.033.033</p>
      </div>
    `,
    },
    {
        id: 5,
        title: "Bảo Dưỡng Định Kỳ",
        imageUrl:
            "/img/photo-1560438718-eb61ede255eb.jpg",
        summary: "Bảo dưỡng xe định kỳ theo tiêu chuẩn nhà sản xuất, thay dầu, kiểm tra hệ thống phanh, treo và làm mát.",
        description: `
      <div class="service-section">
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Dịch vụ bảo dưỡng định kỳ theo tiêu chuẩn nhà sản xuất, giúp xe luôn trong tình trạng tốt nhất và kéo dài tuổi thọ.</p>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Tính Năng Dịch Vụ</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Thay dầu và các loại lọc
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra và bảo dưỡng hệ thống phanh
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra và bảo dưỡng hệ thống treo
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra và bảo dưỡng hệ thống làm mát
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Lợi Ích</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Xe luôn trong tình trạng tốt nhất
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tiết kiệm nhiên liệu
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Giảm chi phí sửa chữa lớn
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tăng độ an toàn khi lái xe
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Quy Trình Thực Hiện</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tiếp nhận xe và kiểm tra tổng quát
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Thực hiện các hạng mục bảo dưỡng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra chất lượng sau bảo dưỡng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Bàn giao xe và tư vấn lịch bảo dưỡng tiếp theo
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Báo Giá</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Liên hệ để được tư vấn và báo giá chi tiết</p>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thông Tin Liên Hệ</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">ANT CENTER - Trung tâm bảo dưỡng & chăm sóc xe ô tô chuyên nghiệp</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">313E Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Hotline: 0971.717.479 / 0855.033.033</p>
      </div>
    `,
    },
    {
        id: 6,
        title: "Phụ Tùng Chính Hãng",
        imageUrl:
            "/img/photo-1599256872237-5dcc0fbe9668.jpg",
        summary: "Cung cấp phụ tùng chính hãng cho các loại xe, bảo đảm chất lượng, độ bền và bảo hành theo tiêu chuẩn nhà sản xuất.",
        description: `
      <div class="service-section">
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Cung cấp phụ tùng chính hãng cho tất cả các loại xe, đảm bảo chất lượng và độ bền cao nhất cho xe của bạn.</p>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Tính Năng Dịch Vụ</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Phụ tùng chính hãng cho tất cả các loại xe
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Đảm bảo nguồn gốc và chất lượng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Bảo hành theo tiêu chuẩn nhà sản xuất
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tư vấn lựa chọn phụ tùng phù hợp
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Lợi Ích</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Đảm bảo chất lượng và độ bền
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tương thích hoàn hảo với xe
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Giảm nguy cơ hỏng hóc
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Giữ giá trị xe
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Quy Trình Thực Hiện</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tiếp nhận thông tin và yêu cầu
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tư vấn và báo giá chi tiết
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Đặt hàng và nhập phụ tùng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra chất lượng trước khi giao
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Lắp đặt và kiểm tra hoạt động
          </li>
        </ul>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Báo Giá</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Liên hệ để được tư vấn và báo giá chi tiết</p>
      </div>
      <div class="service-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thông Tin Liên Hệ</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">ANT CENTER - Trung tâm bảo dưỡng & chăm sóc xe ô tô chuyên nghiệp</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">313E Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Hotline: 0971.717.479 / 0855.033.033</p>
      </div>
    `,
    },
];

