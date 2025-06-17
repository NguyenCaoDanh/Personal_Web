import { useState, useEffect } from "react";
import { FaTimes, FaSave, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getSanPhamById,
  updateSanPham,
  getAllDanhMuc,
} from "@/service/api/SanPham";
import { getSanPhamImage } from "@/service/api/imageApi";

const EditProductCard = ({ productId, onClose, onSave }) => {
  const [tenSanPham, setTenSanPham] = useState("");
  const [moTa, setMoTa] = useState("");
  const [gia, setGia] = useState("");
  const [danhMucId, setDanhMucId] = useState("");
  const [file, setFile] = useState(null);
  const [danhMucs, setDanhMucs] = useState([]);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [danhMucRes, sanPhamRes] = await Promise.all([
          getAllDanhMuc(),
          getSanPhamById(productId),
        ]);

        const danhMucsData = danhMucRes?.data?.data?.content ?? [];
        setDanhMucs(danhMucsData);

        const sanPham = sanPhamRes?.data?.data;
        setTenSanPham(sanPham.tenSanPham);
        setMoTa(sanPham.moTa);
        setGia(sanPham.gia);
        setDanhMucId(sanPham.danhMucId);

        if (sanPham.hinhAnh) {
          const imagePath = sanPham.hinhAnh.replace(/^\/?sanpham\//, "");
          const imageResponse = await getSanPhamImage(imagePath);
          const imageBlob = imageResponse.data;
          const imageObjectURL = URL.createObjectURL(imageBlob);
          setPreviewImage(imageObjectURL);
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu sản phẩm", error);
      }
    };

    fetchInitialData();
  }, [productId]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSave = async () => {
    const sanPhamDTO = {
      idSanPham: productId,
      tenSanPham,
      moTa,
      gia,
      danhMucId,
    };

    try {
      await updateSanPham(productId, sanPhamDTO, file);
      onSave();
      onClose();
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
        <div className="overflow-y-auto p-8">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200 sticky top-0 bg-white z-10">
            <h3 className="text-3xl font-semibold text-gray-800">Chỉnh sửa sản phẩm</h3>
            <button onClick={onClose} className="text-red-600 hover:text-red-800">
              <FaTimes className="text-2xl" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên sản phẩm
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:outline-none"
                value={tenSanPham}
                onChange={(e) => setTenSanPham(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Giá</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:outline-none"
                value={gia}
                onChange={(e) => setGia(e.target.value)}
              />
            </div>

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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ảnh sản phẩm</label>
              <div className="flex flex-col gap-3">
                {(file || previewImage) && (
                  <div className="relative w-fit">
                    <img
                      src={file ? URL.createObjectURL(file) : previewImage}
                      alt="Preview"
                      className="w-40 h-40 object-cover rounded-xl border border-gray-300 shadow"
                    />
                    <button
                      className="absolute -top-2 -right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                      onClick={() => {
                        setFile(null);
                        setPreviewImage("");
                      }}
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

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
              <div className="mt-1 border border-gray-300 rounded-xl overflow-hidden">
                <ReactQuill
                  value={moTa}
                  onChange={setMoTa}
                  className="h-[250px] [&>.ql-container]:h-[200px]"
                  placeholder="Nhập mô tả sản phẩm..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 flex justify-end gap-4 border-t border-gray-200">
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
            <FaSave /> Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductCard;
