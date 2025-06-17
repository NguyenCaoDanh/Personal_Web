import Http from '../http/http';

// ✅ Lấy ảnh sản phẩm (không cần token)
export const getSanPhamImage = (filename: string) => {
  return Http.get(filename, {
    responseType: 'blob',
    skipAuth: true,
  });
};

export const getDichVuImage = (filename: string) => {
  return Http.get(filename, {
    responseType: 'blob',
    skipAuth: true,
  });
};

export const getXeImage = (filename: string) => {
  return Http.get(`/uploads/xe/${filename}`, {
    responseType: 'blob',
    skipAuth: true,
  });
};