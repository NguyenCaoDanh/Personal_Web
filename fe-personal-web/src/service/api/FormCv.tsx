// src/api/formCvApi.ts
import axios from "axios";
import Http from "../http/http";

const API_BASE_URL = "/api/form-cv";

export interface FormCvDTO {
  id?: number;
  hoTen: string;
  ngaySinh: string; // ISO format: "YYYY-MM-DD"
  soDienThoai: string;
  trinhDo: string;
  kyNang: string;
  accountId:number;
}

export const formCvApi = {
  submitCv: async (cv: FormCvDTO) => {
    const response = await Http.post(`${API_BASE_URL}/cv`, cv);
    return response.data;
  },

  getAll: async (page: number = 0, size: number = 6) => {
    const response = await Http.get(`${API_BASE_URL}/all`, {
      params: { page, size },
    });
    return response.data;
  },

  getById: async (id: number) => {
    const response = await Http.get(`${API_BASE_URL}/${id}`);
    return response.data.data;
  },

  deleteCv: async (id: number) => {
    const response = await Http.post(`${API_BASE_URL}/delete/${id}`);
    return response.data;
  },

  updateCv: async (id: number, updatedCv: FormCvDTO) => {
    const response = await Http.put(`${API_BASE_URL}/update/${id}`, updatedCv);
    return response.data;
  },
  getYourFormCv: async () => {
  try {
    const response = await Http.get(`${API_BASE_URL}/yourFormCv`);
    return response.data.data; // hoặc `response.data.data` nếu backend trả về theo cấu trúc { data: ..., message: ... }
  } catch (error) {
    console.error("Lỗi khi lấy CV điền form cá nhân:", error);
    throw error;
  }
},
};
