// src/data/jobsData.ts
export interface JobDetail {
    fromDate: string;
    id: number;
    title: string;
    type: "full-time" | "part-time";
    date: string;
    imageUrl: string;
    summary: string;
    description: string;
}

export const jobsData: JobDetail[] = [
    {
        id: 1,
        title: "Kỹ thuật viên bảo dưỡng ô tô",
        type: "full-time",
        date: "15/03/2025",
        imageUrl:
            "/img/photo-1621072156002-e2fccdc0b176.jpg",
        summary: "Quản lý và thực hiện công việc bảo dưỡng ô tô, đảm bảo quy trình bảo dưỡng được thực hiện đúng cách và hoàn thành đúng thời gian.",
        description: `
      <div class="job-section">
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Bảo dưỡng xe ô tô là một trong những dịch vụ cần thiết cho tất cả các dòng xe. Hiện nay, không chỉ có dịch vụ bảo dưỡng tại garage mà các trung tâm, gara cũng ngày càng mở rộng tình hình...</p>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Mô tả công việc</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Quản lý tổ bảo dưỡng, đảm bảo thực hiện đúng quy trình bảo dưỡng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tiếp nhận lên kế hoạch bảo dưỡng và thực hiện bảo dưỡng ô tô
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Dựng các bản báo cáo bảo dưỡng và hoàn thành đúng thời gian
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Quản lý trang thiết bị bảo dưỡng trong tổ bảo dưỡng
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Yêu cầu ứng viên</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tốt nghiệp Trung cấp trở lên
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có bằng B2, thành thạo lái xe
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có ít nhất 2-3 năm kinh nghiệm bảo dưỡng ô tô
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có khả năng làm việc nhóm
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Quyền lợi</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Hưởng đầy đủ các chế độ luật lao động hiện hành
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thời gian làm việc</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Từ thứ 2 đến thứ 7
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Chủ nhật nghỉ theo ca
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Mức lương</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Thỏa thuận theo kinh nghiệm và năng lực</p>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thông tin liên hệ</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">ANT CENTER - Trung tâm bảo dưỡng và chăm sóc xe ô tô chuyên nghiệp</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">313E Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Hotline: 0971.717.479 / 0855.033.033</p>
      </div>
    `,
    },
    {
        id: 2,
        title: "Nhân viên phụ tùng",
        type: "part-time",
        date: "14/03/2025",
        imageUrl:
            "/img/photo-1599256872237-5dcc0fbe9668.jpg",
        summary: "Quản lý kho phụ tùng xe máy, kiểm kê hàng hóa, đặt hàng và phục vụ khách hàng mua phụ tùng.",
        description: `
      <div class="job-section">
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Quản lý kho phụ tùng xe máy, kiểm kê hàng hóa, đặt hàng và phục vụ khách hàng mua phụ tùng.</p>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Mô tả công việc</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Quản lý kho phụ tùng xe máy
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm kê hàng hóa định kỳ
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Đặt hàng và nhập kho phụ tùng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Phục vụ khách hàng mua phụ tùng
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Yêu cầu ứng viên</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tốt nghiệp THPT trở lên
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có kinh nghiệm quản lý kho
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có kiến thức về phụ tùng xe máy
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kỹ năng giao tiếp tốt
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Quyền lợi</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Hưởng đầy đủ các chế độ luật lao động hiện hành
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thời gian làm việc</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Từ thứ 2 đến thứ 7
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Chủ nhật nghỉ theo ca
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Mức lương</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Thỏa thuận theo kinh nghiệm và năng lực</p>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thông tin liên hệ</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">ANT CENTER - Trung tâm bảo dưỡng và chăm sóc xe máy chuyên nghiệp</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">313B Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Hotline: 0971.717.479 / 0855.933.033</p>
      </div>
    `,
    },
    {
        id: 3,
        title: "Nhân viên tư vấn",
        type: "full-time",
        date: "13/03/2025",
        imageUrl:
            "/img/photo-1573497620053-ea5300f94f21.jpg",
        summary: "Tư vấn khách hàng về dịch vụ sửa chữa xe máy, giới thiệu sản phẩm và hỗ trợ khách hàng trong suốt quá trình sử dụng dịch vụ.",
        description: `
      <div class="job-section">
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Tư vấn khách hàng về dịch vụ sửa chữa xe máy, giới thiệu sản phẩm và dịch vụ của trung tâm.</p>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Mô tả công việc</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tư vấn khách hàng về dịch vụ sửa chữa xe máy
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Giới thiệu sản phẩm và dịch vụ của trung tâm
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Hỗ trợ khách hàng trong quá trình sử dụng dịch vụ
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Theo dõi và chăm sóc khách hàng sau khi sử dụng dịch vụ
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Yêu cầu ứng viên</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tốt nghiệp THPT trở lên
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có kinh nghiệm tư vấn khách hàng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có kiến thức về xe máy
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kỹ năng giao tiếp tốt
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Quyền lợi</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Hưởng đầy đủ các chế độ luật lao động hiện hành
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thời gian làm việc</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Từ thứ 2 đến thứ 7
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Chủ nhật nghỉ theo ca
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Mức lương</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Thỏa thuận theo kinh nghiệm và năng lực</p>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thông tin liên hệ</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">ANT CENTER - Trung tâm bảo dưỡng và chăm sóc xe máy chuyên nghiệp</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">313B Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Hotline: 0971.717.479 / 0855.933.033</p>
      </div>
    `,
    },
    {
        id: 4,
        title: "Chuyên viên chẩn đoán",
        type: "full-time",
        date: "12/03/2025",
        imageUrl:
            "/img/photo-1600861195091-690c92f1d2cc.jpg",
        summary: "Chẩn đoán lỗi xe máy bằng máy móc chuyên dụng, phân tích và đưa ra phương án sửa chữa, hỗ trợ kỹ thuật viên và theo dõi chất lượng sửa chữa.",
        description: `
      <div class="job-section">
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Chẩn đoán lỗi xe máy bằng máy móc chuyên dụng, phân tích và đề xuất phương án sửa chữa.</p>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Mô tả công việc</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Chẩn đoán lỗi xe máy bằng máy móc chuyên dụng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Phân tích và đề xuất phương án sửa chữa
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Hỗ trợ kỹ thuật viên trong quá trình sửa chữa
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Theo dõi và đánh giá kết quả sửa chữa
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Yêu cầu ứng viên</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tốt nghiệp Trung cấp trở lên
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có kinh nghiệm chẩn đoán lỗi xe máy
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có kiến thức về máy móc chuyên dụng
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kỹ năng phân tích và giải quyết vấn đề tốt
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Quyền lợi</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Hưởng đầy đủ các chế độ luật lao động hiện hành
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thời gian làm việc</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Từ thứ 2 đến thứ 7
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Chủ nhật nghỉ theo ca
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Mức lương</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Thỏa thuận theo kinh nghiệm và năng lực</p>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thông tin liên hệ</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">ANT CENTER - Trung tâm bảo dưỡng và chăm sóc xe máy chuyên nghiệp</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">313B Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Hotline: 0971.717.479 / 0855.933.033</p>
      </div>
    `,
    },
    {
        id: 5,
        title: "Thợ sơn xe",
        type: "part-time",
        date: "11/03/2025",
        imageUrl:
            "/img/photo-1573497620053-ea5300f94f21.jpg",
        summary: "Thực hiện công việc sơn xe máy, bao gồm chuẩn bị bề mặt và sơn phun chuyên nghiệp, kiểm tra chất lượng sơn sau khi hoàn thành.",
        description: `
      <div class="job-section">
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Thực hiện công việc sơn xe máy, yêu cầu kỹ năng sơn phun chuyên nghiệp và tỉ mỉ.</p>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Mô tả công việc</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Thực hiện công việc sơn xe máy
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Chuẩn bị bề mặt xe trước khi sơn
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Sơn phun chuyên nghiệp và tỉ mỉ
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kiểm tra chất lượng sơn sau khi hoàn thành
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Yêu cầu ứng viên</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có kinh nghiệm sơn xe máy
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có kỹ năng sơn phun chuyên nghiệp
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tỉ mỉ và cẩn thận trong công việc
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có khả năng làm việc độc lập
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Quyền lợi</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Hưởng đầy đủ các chế độ luật lao động hiện hành
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thời gian làm việc</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Từ thứ 2 đến thứ 7
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Chủ nhật nghỉ theo ca
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Mức lương</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Thỏa thuận theo kinh nghiệm và năng lực</p>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thông tin liên hệ</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">ANT CENTER - Trung tâm bảo dưỡng và chăm sóc xe máy chuyên nghiệp</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">313B Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Hotline: 0971.717.479 / 0855.933.033</p>
      </div>
    `,
    },
    {
        id: 6,
        title: "Quản lý dịch vụ",
        type: "full-time",
        date: "10/03/2025",
        imageUrl:
            "/img/photo-1507679799987-c73779587ccf.jpg",
        summary: "Quản lý hoạt động dịch vụ sửa chữa xe, điều phối nhân sự, đảm bảo chất lượng dịch vụ và giải quyết các vấn đề phát sinh.",
        description: `
      <div class="job-section">
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Quản lý hoạt động dịch vụ sửa chữa xe, điều phối nhân sự và đảm bảo chất lượng dịch vụ.</p>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Mô tả công việc</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Quản lý hoạt động dịch vụ sửa chữa xe
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Điều phối nhân sự trong trung tâm
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Đảm bảo chất lượng dịch vụ
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Giải quyết các vấn đề phát sinh
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Yêu cầu ứng viên</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Tốt nghiệp Đại học trở lên
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có kinh nghiệm quản lý dịch vụ
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Có kiến thức về sửa chữa xe máy
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Kỹ năng lãnh đạo và quản lý nhân sự tốt
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Quyền lợi</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Hưởng đầy đủ các chế độ luật lao động hiện hành
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thời gian làm việc</h3>
        <ul class="section-list">
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Từ thứ 2 đến thứ 7
          </li>
          <li style="color: #D1D5DB; position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem;">
            <span class="bullet" style="position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #22C55E; border-radius: 50%;"></span>
            Chủ nhật nghỉ theo ca
          </li>
        </ul>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Mức lương</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Thỏa thuận theo kinh nghiệm và năng lực</p>
      </div>
      <div class="job-section">
        <h3 style="color: #00E8F8; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Thông tin liên hệ</h3>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">ANT CENTER - Trung tâm bảo dưỡng và chăm sóc xe máy chuyên nghiệp</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">313B Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM</p>
        <p style="color: #D1D5DB; margin-bottom: 1rem;">Hotline: 0971.717.479 / 0855.933.033</p>
      </div>
    `,
    },
];
