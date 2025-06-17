import axios from 'axios';
import Http from '../http/http';

const API_BASE_URL = '/api/cv';

export const CvApi = {
  nopCv: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return Http.post(`${API_BASE_URL}/nop_cv`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  getAll: async (page: number = 0, size: number = 6) => {
    return Http.get(`${API_BASE_URL}/all`, {
      params: { page, size },
    });
  },

  getById: async (id: number) => {
    return Http.get(`${API_BASE_URL}/${id}`);
  },

  update: async (id: number, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return Http.put(`${API_BASE_URL}/update/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  delete: async (id: number) => {
    return Http.post(`${API_BASE_URL}/delete/${id}`);
  },
  downloadCvFile : async (filename: string) => {
  try {
    const response = await Http.get(`/cv/${filename}`, {
      responseType: "blob", // rất quan trọng để nhận dữ liệu file nhị phân
    });

    // Tạo URL từ blob để tải file
    const blob = new Blob([response.data], { type: response.headers["content-type"] });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename; // tên file khi tải
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Lỗi khi tải file:", error);
    throw error;
  }
},
    getCvBlob: async (filename: string): Promise<{ blob: Blob; contentType: string }> => {
    try {
      const response = await Http.get(`/cv/${filename}`, {
        responseType: "blob",
      });

      const contentType = response.headers["content-type"];
      const blob = new Blob([response.data], { type: contentType });

      return { blob, contentType };
    } catch (error) {
      console.error("Lỗi khi tải file blob:", error);
      throw error;
    }
  },
  getYourCv: async () => {
  try {
    const response = await Http.get(`${API_BASE_URL}/yourCv`);
    return response.data.data; // hoặc trả về response nếu muốn đầy đủ thông tin (status, headers, v.v.)
  } catch (error) {
    console.error("Lỗi khi lấy CV cá nhân:", error);
    throw error;
  }
},
  downloadYourCvFile : async (filename: string) => {
  try {
    const response = await Http.get(`/yourcv/${filename}`, {
      responseType: "blob", // rất quan trọng để nhận dữ liệu file nhị phân
    });

    // Tạo URL từ blob để tải file
    const blob = new Blob([response.data], { type: response.headers["content-type"] });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename; // tên file khi tải
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Lỗi khi tải file:", error);
    throw error;
  }
},
};
