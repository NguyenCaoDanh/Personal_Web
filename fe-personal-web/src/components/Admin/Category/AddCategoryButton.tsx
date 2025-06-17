import React, { useState, useRef, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { createDanhMuc } from '@/service/api/SanPham';
import AlertModal from '../../AlertModal'; // import modal popup

const AddCategoryButton: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [tenDanhMuc, setTenDanhMuc] = useState('');
  const [moTa, setMoTa] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tenDanhMuc.trim()) {
      setAlert({ message: 'Tên danh mục không được để trống', type: 'error' });
      return;
    }

    try {
      setLoading(true);
      await createDanhMuc({ tenDanhMuc, moTa });

      setAlert({ message: '🎉 Thêm danh mục thành công!', type: 'success' });
      setTenDanhMuc('');
      setMoTa('');
      setShowPopup(false);

      // Gửi sự kiện để reload danh sách bên ngoài
      window.dispatchEvent(new Event('category-added'));
    } catch (error) {
      console.error('Lỗi khi thêm danh mục:', error);
      setAlert({ message: '❌ Thêm danh mục thất bại', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md shadow-lg transition duration-200 text-sm sm:text-base"
      >
        <FaPlusCircle />
        <span>Thêm danh mục</span>
      </button>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div
            ref={popupRef}
            className="bg-white rounded-2xl p-6 w-[90%] sm:w-full max-w-md mx-4 sm:mx-0 shadow-2xl animate-fade-in"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
              📝 Thêm danh mục mới
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Tên danh mục
                </label>
                <input
                  type="text"
                  value={tenDanhMuc}
                  onChange={(e) => setTenDanhMuc(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                  placeholder="Nhập tên danh mục"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Mô tả</label>
                <textarea
                  value={moTa}
                  onChange={(e) => setMoTa(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                  rows={3}
                  placeholder="Nhập mô tả (nếu có)"
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition font-semibold disabled:opacity-50"
                >
                  {loading ? 'Đang thêm...' : 'Thêm'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {alert && (
        <AlertModal
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
    </>
  );
};

export default AddCategoryButton;
