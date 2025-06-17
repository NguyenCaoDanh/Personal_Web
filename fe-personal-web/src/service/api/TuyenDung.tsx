import Http from "../http/http";  // Giả sử bạn có http.ts cho Http có token
import HttpnoToken from "../http/httpnoToken"; // Dùng cho các API public nếu cần

// Lưu bài viết tuyển dụng
export const luuBaiVietTuyenDung = async (
  dto: {
    batDau: string;
    hanChot: string;
    title: string;
    type: string;
  },
  file: File,
  image1: File
) => {
  try {
    const formData = new FormData();

    // Các trường cần thiết từ DTO
    formData.append('batDau', dto.batDau);
    formData.append('hanChot', dto.hanChot);
    formData.append('title', dto.title);
    formData.append('type', dto.type);

    // Các file
    formData.append('file', file);
    formData.append('image1', image1);

    const response = await Http.post('/api/tuyen-dung/luu-bai-viet', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Lỗi khi lưu bài viết tuyển dụng:", error);
    throw error;
  }
};


// Lấy danh sách tất cả bài tuyển dụng (có phân trang)
export const getAllTuyenDung = async (page = 0, size = 50) => {
  try {
    const response = await HttpnoToken.get("/api/tuyen-dung/all", {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Lỗi khi gọi API tuyển dụng:", error);
    throw error;
  }
};


// Lấy chi tiết tuyển dụng theo id
export const getTuyenDungById = async (id: number) => {
  try {
    const response = await Http.get(`/api/tuyen-dung/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Lỗi khi lấy chi tiết tuyển dụng:", error);
    throw error;
  }
};

// Cập nhật bài viết tuyển dụng
export const updateTuyenDung = async (
  id: number,
  tddto: any,
  file: File,
  image1: File
) => {
  try {
    const formData = new FormData();

    Object.keys(tddto).forEach((key) => {
      let value = tddto[key];
      if (key === "batDau" || key === "hanChot") {
        value = new Date(value).toISOString();
      }
      formData.append(key, value);
    });

    formData.append("file", file);
    formData.append("image1", image1);

    return await Http.put(`/api/tuyen-dung/update/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.error("Lỗi khi cập nhật tuyển dụng:", error);
    throw error;
  }
};

