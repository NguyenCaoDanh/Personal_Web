import React, { useState, useCallback } from "react";
import { luuBaiVietTuyenDung } from "@/service/api/TuyenDung";
import { zonedTimeToUtc } from "date-fns-tz";

type Props = {
  onClose: () => void;
  onSave: () => void;
};

const AddTuyenDungModal: React.FC<Props> = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("full-time");
  const [batDau, setBatDau] = useState("");
  const [hanChot, setHanChot] = useState("");
  const [htmlFile, setHtmlFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const TIMEZONE = "Asia/Ho_Chi_Minh";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!htmlFile || !imageFile) {
      alert("Vui lòng chọn đầy đủ file HTML và ảnh.");
      return;
    }

    try {
      setLoading(true);

      const batDauDate = zonedTimeToUtc(batDau, TIMEZONE);
      const hanChotDate = zonedTimeToUtc(hanChot, TIMEZONE);

      const dto = {
        title,
        type,
        batDau: batDauDate.toISOString(),
        hanChot: hanChotDate.toISOString(),
      };

      await luuBaiVietTuyenDung(dto, htmlFile, imageFile);
      onSave?.();
      onClose?.();
    } catch (error) {
      console.error("❌ Thêm bài viết thất bại:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleHtmlUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "text/html") {
      setHtmlFile(file);
    } else {
      alert("Vui lòng chọn một file HTML hợp lệ.");
      e.target.value = "";
    }
  }, []);

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
        <h3 className="text-xl font-bold mb-4 text-center">📝 Thêm bài viết tuyển dụng</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Tiêu đề</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Loại công việc</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            >
              <option value="full-time">Toàn thời gian</option>
              <option value="part-time">Bán thời gian</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">File nội dung tuyển dụng (HTML)</label>
            <input
              type="file"
              accept="text/html"
              onChange={handleHtmlUpload}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Ngày bắt đầu</label>
            <input
              type="datetime-local"
              value={batDau}
              onChange={(e) => setBatDau(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Hạn chót</label>
            <input
              type="datetime-local"
              value={hanChot}
              onChange={(e) => setHanChot(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Ảnh minh họa</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="preview"
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>
            )}
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
              className="px-4 py-2 bg-green-600 text-white rounded-md"
            >
              {loading ? "Đang lưu..." : "Lưu bài viết"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTuyenDungModal;
