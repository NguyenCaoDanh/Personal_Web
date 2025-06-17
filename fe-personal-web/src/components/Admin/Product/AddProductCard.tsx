import { useState, useEffect } from 'react';
import { FaTimes, FaSave, FaTrash } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createSanPham, getAllDanhMuc } from '@/service/api/SanPham';

const AddProductCard = ({ onClose, onSave }) => {
  const [tenSanPham, setTenSanPham] = useState('');
  const [moTa, setMoTa] = useState('');
  const [gia, setGia] = useState('');
  const [danhMucId, setDanhMucId] = useState('');
  const [file, setFile] = useState(null);
  const [danhMucs, setDanhMucs] = useState([]);

  useEffect(() => {
    const fetchDanhMucs = async () => {
      try {
        const response = await getAllDanhMuc();
        const content = response?.data?.data?.content ?? [];
        setDanhMucs(content);
      } catch (error) {
        console.error('Lỗi khi tải danh mục', error);
        setDanhMucs([]);
      }
    };

    fetchDanhMucs();
  }, []);

  const handleSave = async () => {
    const sanPhamDTO = {
      tenSanPham,
      moTa,
      gia,
      danhMucId,
    };

    try {
      await createSanPham(sanPhamDTO, file);
      onSave({ sanPhamDTO, file });
      onClose();
    } catch (error) {
      console.error('Lỗi khi tạo sản phẩm', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-screen overflow-y-auto p-8">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h3 className="text-3xl font-semibold text-gray-800">Thêm sản phẩm</h3>
          <button onClick={onClose} className="text-red-600 hover:text-red-800">
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Tên sản phẩm */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tên sản phẩm</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:outline-none"
              value={tenSanPham}
              onChange={(e) => setTenSanPham(e.target.value)}
              placeholder="Nhập tên sản phẩm..."
            />
          </div>

          {/* Giá */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Giá</label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:outline-none"
              value={gia}
              onChange={(e) => setGia(e.target.value)}
              placeholder="VD: 100000"
            />
          </div>

          {/* Danh mục */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:outline-none"
              value={danhMucId}
              onChange={(e) => setDanhMucId(e.target.value)}
            >
              <option value="">-- Chọn danh mục --</option>
              {danhMucs.map((dm) => (
                <option key={dm.id} value={dm.id}>
                  {dm.tenDanhMuc}
                </option>
              ))}
            </select>
          </div>

          {/* Ảnh sản phẩm */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ảnh sản phẩm</label>
            <div className="flex flex-col gap-3">
              {file && (
                <div className="relative w-fit">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    className="w-40 h-40 object-cover rounded-xl border border-gray-300 shadow"
                  />
                  <button
                    className="absolute -top-2 -right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                    onClick={() => setFile(null)}
                    title="Xóa ảnh"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              )}
              <label className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200 w-fit">
                Chọn ảnh
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
            </div>
          </div>

          {/* Mô tả */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
            <div className="mt-1 border border-gray-300 rounded-xl overflow-hidden">
              <ReactQuill
                value={moTa}
                onChange={setMoTa}
                className="h-[250px]"
                placeholder="Nhập mô tả sản phẩm..."
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex justify-end gap-4 sticky bottom-0 bg-white pt-6 pb-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all shadow"
          >
            Hủy
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all shadow flex items-center gap-2"
          >
            <FaSave /> Lưu sản phẩm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductCard;
