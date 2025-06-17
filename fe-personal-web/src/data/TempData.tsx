// tempdata.ts

export const mockCategories = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    tenDanhMuc: `Danh mục ${i + 1}`,
    moTa: `Mô tả danh mục sản phẩm ${i + 1}`,
  }));
  
  export const mockProducts = mockCategories.flatMap((category) =>
    Array.from({ length: 5 }, (_, j) => ({
      idSanPham: category.id * 10 + j,
      tenSanPham: `Sản phẩm ${category.id}-${j + 1}`,
      gia: 100000 + (category.id * 50000) + j * 10000,
      hinhAnh: `https://thuany.vn/upload/images/phu-kien-o-to-gom-nhung-gi-1.jpg`,
      moTa: `Mô tả sản phẩm ${category.id}-${j + 1}`,
      danhMucId: category.id,
    }))
  );
  
  export const mockServiceCategories = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    tenDanhMucDv: `Danh mục dịch vụ ${i + 1}`,
    moTa: `Mô tả danh mục dịch vụ ${i + 1}`,
  }));
  
  export const mockServices = mockServiceCategories.flatMap((category) =>
    Array.from({ length: 5 }, (_, j) => ({
      id: category.id * 10 + j,
      tenDichVu: `Dịch vụ ${category.id}-${j + 1}`,
      gia: 200000 + (category.id * 30000) + j * 15000,
      hinhAnh: `https://thuany.vn/upload/images/phu-kien-o-to-gom-nhung-gi-1.jpg`,
      moTa: `Mô tả dịch vụ ${category.id}-${j + 1}`,
      danhMucDichVuId: category.id,
    }))
  );
  