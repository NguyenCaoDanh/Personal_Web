import React, { useState, useEffect } from "react";
import { updateDanhMucDichVu, getDanhMucDichVuById } from "@/service/api/DichVu";

type Props = {
  categoryId: number;
  onClose: () => void;
  onUpdated: () => void;
};

const EditServiceCategoryModal: React.FC<Props> = ({ categoryId, onClose, onUpdated }) => {
  const [tenDanhMucDv, setTenDanhMuc] = useState("");
  const [moTa, setMoTa] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await getDanhMucDichVuById(categoryId);
        const { tenDanhMuc, moTa } = res.data.data;
        setTenDanhMuc(tenDanhMuc);
        setMoTa(moTa);
      } catch (err) {
        console.error("Lỗi khi lấy danh mục dịch vụ:", err);
      }
    };
    fetchCategory();
  }, [categoryId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateDanhMucDichVu(categoryId, { tenDanhMucDv, moTa });
      onUpdated(); // callback reload danh sách
      onClose();
    } catch (error) {
      console.error("Cập nhật thất bại:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
        <h3 className="text-xl font-bold mb-4 text-center">✏️ Chỉnh sửa danh mục dịch vụ</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Tên danh mục</label>
            <input
              type="text"
              value={tenDanhMucDv}
              onChange={(e) => setTenDanhMuc(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Mô tả</label>
            <textarea
              value={moTa}
              onChange={(e) => setMoTa(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              rows={3}
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-md"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              {loading ? "Đang cập nhật..." : "Cập nhật"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditServiceCategoryModal;
