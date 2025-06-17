import { useState, useEffect } from "react";
import { FaTimes, FaSave, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getAllDanhMucDichVu,
  getDichVuById,
  updateDichVu,
} from "../../../service/api/DichVu";
import { getDichVuImage } from "@/service/api/imageApi";

const EditServiceCard = ({ serviceId, onClose, onSave }) => {
  const [tenDichVu, setTenDichVu] = useState("");
  const [tieuDe, setTieuDe] = useState(""); // State for Tiêu đề
  const [moTa, setMoTa] = useState("");
  const [gia, setGia] = useState("");
  const [danhMucDichVuId, setDanhMucDichVuId] = useState("");
  const [danhMucs, setDanhMucs] = useState([]);
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [danhMucRes, serviceRes] = await Promise.all([
          getAllDanhMucDichVu(),
          getDichVuById(serviceId),
        ]);

        const danhMucsData = danhMucRes?.data?.data?.content || [];
        setDanhMucs(danhMucsData);

        const service = serviceRes?.data?.data;
        if (service) {
          setTenDichVu(service.tenDichVu || "");
          setTieuDe(service.tieuDe || ""); // Set Tiêu đề
          setMoTa(service.moTa || "");
          setGia(service.gia || "");
          setDanhMucDichVuId(service.danhMucDichVuId || "");

          if (service.hinhAnh) {
            const imagePath = service.hinhAnh.startsWith("/dichvu/")
              ? service.hinhAnh.replace("/dichvu/", "")
              : service.hinhAnh;
            const imageResponse = await getDichVuImage(imagePath);
            const blob = new Blob([imageResponse.data], { type: "image/jpeg" });
            const imageUrl = URL.createObjectURL(blob);
            setPreviewImage(imageUrl);
          }
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu dịch vụ:", error);
      }
    };

    fetchData();

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [serviceId]);

  const handleSave = async () => {
    try {
      const dichVuDTO = {
        idDichVu: serviceId,
        tenDichVu,
        tieuDe, // Include Tiêu đề in the request
        moTa,
        gia,
        danhMucDichVuId,
      };
      await updateDichVu(serviceId, dichVuDTO, file);
      onSave?.();
      onClose?.();
    } catch (error) {
      console.error("Lỗi khi cập nhật dịch vụ:", error);
    }
  };

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreviewImage(URL.createObjectURL(selected));
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreviewImage("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="overflow-y-auto p-8">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200 sticky top-0 bg-white z-10">
            <h3 className="text-3xl font-semibold text-gray-800">Chỉnh sửa dịch vụ</h3>
            <button onClick={onClose} className="text-red-600 hover:text-red-800">
              <FaTimes className="text-2xl" />
            </button>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề</label>
              <input
                type="text"
                value={tieuDe}
                onChange={(e) => setTieuDe(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:outline-none"
                placeholder="Nhập tiêu đề dịch vụ..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tên dịch vụ</label>
              <input
                type="text"
                value={tenDichVu}
                onChange={(e) => setTenDichVu(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:outline-none"
                placeholder="Nhập tên dịch vụ..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Giá</label>
              <input
                type="number"
                value={gia}
                onChange={(e) => setGia(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:outline-none"
                placeholder="Nhập giá dịch vụ..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
              <select
                value={danhMucDichVuId}
                onChange={(e) => setDanhMucDichVuId(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:outline-none"
              >
                <option value="">-- Chọn danh mục --</option>
                {danhMucs.map((dm) => (
                  <option key={dm.id} value={dm.id}>
                    {dm.tenDanhMucDv}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ảnh dịch vụ</label>
              <div className="flex flex-col gap-3">
                {previewImage && (
                  <div className="relative w-fit">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-40 h-40 object-cover rounded-xl border border-gray-300 shadow"
                    />
                    <button
                      onClick={handleRemoveImage}
                      className="absolute -top-2 -right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
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
                    onChange={handleImageChange}
                    className="hidden"
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
                  placeholder="Nhập mô tả dịch vụ..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
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

export default EditServiceCard;
