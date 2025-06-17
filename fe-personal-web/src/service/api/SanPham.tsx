import Http from '../http/http';

// ✅ Tạo danh mục mới
export const createDanhMuc = (danhMucDTO) => {
  return Http.post('/api/danh-muc/create', danhMucDTO);
};

// ✅ Cập nhật danh mục
export const updateDanhMuc = (id, danhMucDTO) => {
  return Http.put(`/api/danh-muc/update/${id}`, danhMucDTO);
};

// ✅ Lấy danh mục theo ID
export const getDanhMucById = (id) => {
  return Http.get(`/api/danh-muc/${id}`, { skipAuth: true });
};
//✅ Lấy danh sách sản phẩm không trang
export const getSanPham=()=>{
return Http.get(`/api/san-pham/danh-sach`,{skipAuth:true})
}
// ✅ Lấy danh sách danh mục (phân trang)
export const getAllDanhMuc = (page = 0, size = 10) => {
  return Http.get(`/api/danh-muc/all?page=${page}&size=${size}`, {
    skipAuth: true,
  });
};

export const createSanPham = async (sanPhamDTO, file) => {
  const formData = new FormData();

  // Thêm các field vào formData
  formData.append('tenSanPham', sanPhamDTO.tenSanPham);
  formData.append('moTa', sanPhamDTO.moTa);
  formData.append('gia', sanPhamDTO.gia);
  formData.append('danhMucId', sanPhamDTO.danhMucId);

  if (file) {
    formData.append('file', file);
  }

  return await Http.post('/api/san-pham/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// ✅ Cập nhật sản phẩm
export const updateSanPham = (id, sanPhamDTO, file) => {
  const formData = new FormData();

  // Thêm các field vào formData
  formData.append('idSanPham', sanPhamDTO.idSanPham);
  formData.append('tenSanPham', sanPhamDTO.tenSanPham);
  formData.append('moTa', sanPhamDTO.moTa);
  formData.append('gia', sanPhamDTO.gia);
  formData.append('danhMucId', sanPhamDTO.danhMucId);

  if (file) {
    formData.append('file', file);
  }

  return Http.put(`/api/san-pham/update/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

// ✅ Lấy sản phẩm theo ID
export const getSanPhamById = (id) => {
  return Http.get(`/api/san-pham/${id}`, { skipAuth: true });
};
export const likeSp=(id)=>{
  return Http.post(`/api/san-pham/${id}/like`,{skipAuth: true});
}
export const getAllSanPham = (
  page = 0,
  size = 10,
  searchTerm: string = '',
  danhMucId?: string
) => {
  const params = new URLSearchParams();

  params.append('page', page.toString());
  params.append('size', size.toString());

  if (searchTerm) params.append('tenSanPham', searchTerm);
  if (danhMucId && danhMucId !== 'all') params.append('danhMucId', danhMucId);

  return Http.get(`/api/san-pham/all?${params.toString()}`, { skipAuth: true });
};
