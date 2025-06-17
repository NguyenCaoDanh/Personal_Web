import Http from '../http/http';

// ✅ Tạo danh mục dịch vụ
export const createDanhMucDichVu = (danhMucDTO) => {
  return Http.post('/api/danh-muc-dich-vu/create', danhMucDTO);
};

// ✅ Cập nhật danh mục dịch vụ
export const updateDanhMucDichVu = (id, danhMucDTO) => {
  return Http.put(`/api/danh-muc-dich-vu/update/${id}`, danhMucDTO);
};
// ✅ lấy danh sách dịch vụ không phân trang
export const getDichVu=()=>{
  return Http.get(`/api/dich-vu/danh-sach`,{
    skipAuth:true
  })
}

// ✅ Xoá danh mục dịch vụ
export const deleteDanhMucDichVu = (id) => {
  return Http.delete(`/api/danh-muc-dich-vu/delete/${id}`);
};

// ✅ Lấy danh mục dịch vụ theo ID
export const getDanhMucDichVuById = (id) => {
  return Http.get(`/api/danh-muc-dich-vu/${id}`, { skipAuth: true });
};

// ✅ Lấy tất cả danh mục dịch vụ (phân trang)
export const getAllDanhMucDichVu = (page = 0, size = 10) => {
  return Http.get(`/api/danh-muc-dich-vu/all?page=${page}&size=${size}`, {
    skipAuth: true,
  });
};

// ✅ Tạo dịch vụ mới
export const createDichVu = async (dichVuDTO, file) => {
  const formData = new FormData();

  formData.append('tenDichVu', dichVuDTO.tenDichVu);
  formData.append('moTa', dichVuDTO.moTa);
  formData.append('gia', dichVuDTO.gia);
  formData.append('tieuDe', dichVuDTO.tieuDe);
  formData.append('danhMucDichVuId', dichVuDTO.danhMucDichVuId);

  if (file) {
    formData.append('file', file);
  }

  return await Http.post('/api/dich-vu/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// ✅ Cập nhật dịch vụ
export const updateDichVu = (id, dichVuDTO, file) => {
  const formData = new FormData();

  formData.append('idDichVu', dichVuDTO.idDichVu);
  formData.append('tenDichVu', dichVuDTO.tenDichVu);
  formData.append('moTa', dichVuDTO.moTa);
  formData.append('tieuDe', dichVuDTO.tieuDe);
  formData.append('gia', dichVuDTO.gia);
  formData.append('danhMucDichVuId', dichVuDTO.danhMucDichVuId);

  if (file) {
    formData.append('file', file);
  }

  return Http.put(`/api/dich-vu/update/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

// ✅ Xoá dịch vụ
export const deleteDichVu = (id) => {
  return Http.delete(`/api/dich-vu/delete/${id}`);
};

// ✅ Lấy dịch vụ theo ID
export const getDichVuById = (id) => {
  return Http.get(`/api/dich-vu/${id}`, { skipAuth: true });
};

// ✅ Lấy danh sách dịch vụ (phân trang + tìm kiếm + lọc danh mục)
export const getAllDichVu = (
  page = 0,
  size = 10,
  searchTerm: string = '',
  danhMucDichVuId: string = ''
) => {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('size', size.toString());

  if (searchTerm) params.append('tenDichVu', searchTerm);
  if (danhMucDichVuId && danhMucDichVuId !== 'all') {
    params.append('danhMucDichVuId', danhMucDichVuId);
  }

  return Http.get(`/api/dich-vu/all?${params.toString()}`, { skipAuth: true });
};
