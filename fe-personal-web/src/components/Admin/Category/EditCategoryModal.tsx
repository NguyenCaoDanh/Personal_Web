import React, { useState, useEffect } from "react";
import { updateDanhMuc, getDanhMucById } from "@/service/api/SanPham";

type Props = {
  categoryId: number;
  onClose: () => void;
  onUpdated: () => void;
};

const EditCategoryModal: React.FC<Props> = ({ categoryId, onClose, onUpdated }) => {
  const [tenDanhMuc, setTenDanhMuc] = useState("");
  const [moTa, setMoTa] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await getDanhMucById(categoryId);
        const { tenDanhMuc, moTa } = res.data.data;
        setTenDanhMuc(tenDanhMuc);
        setMoTa(moTa);
      } catch (err) {
        console.error("Lỗi khi lấy danh mục:", err);
      }
    };
    fetchCategory();
  }, [categoryId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateDanhMuc(categoryId, { tenDanhMuc, moTa });
      onUpdated(); // callback reload danh sách
      onClose();
    } catch (error) {
      console.error("Cập nhật thất bại:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
      <div className="bg-white sm:max-w-lg md:max-w-xl lg:max-w-2xl sm:p-8 p-6 rounded-xl w-full max-w-md shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">✏️ Chỉnh sửa danh mục</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tên danh mục</label>
            <input
              type="text"
              value={tenDanhMuc}
              onChange={(e) => setTenDanhMuc(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
            <textarea
              value={moTa}
              onChange={(e) => setMoTa(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium disabled:opacity-60"
            >
              {loading ? "Đang cập nhật..." : "Cập nhật"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategoryModal;
