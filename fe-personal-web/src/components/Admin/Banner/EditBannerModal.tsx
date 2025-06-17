import { getById, updateBanner } from "@/service/api/Banner";
import { BASE_API } from "@/setting/constant/app";
import React, { useEffect, useRef, useState } from "react";
import { FaSave, FaTimes, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill";
import Swal from "sweetalert2";
const EditBannerModal = ({ idBanner, onSave, onClose }) => {
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getById(idBanner);
                const banner = response?.data?.data;
                setLink(banner.path);
                setDescription(banner.mota);
                setPreviewImage(BASE_API + banner.image)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, [idBanner])
    const popupRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);
    const handleSave=async()=>{
        const BannerDTO={
            mota:description,
            path:link
        }
        try{
            await updateBanner(BannerDTO,file,idBanner);
            onSave();
            onClose();
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
                <div className="overflow-y-auto p-8">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200 sticky top-0 bg-white z-10">
                        <h3 className="text-3xl font-semibold text-gray-800">Chỉnh sửa biển quảng cáo</h3>
                        <button onClick={onClose} className="text-red-600 hover:text-red-800">
                            <FaTimes className="text-2xl" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Ảnh biển quảng cáo</label>
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
                                    value={description}
                                    onChange={setDescription}
                                    className="h-[250px]"
                                    placeholder="Nhập mô tả sản phẩm..."
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Đường dẫn</label>
                            <input
                                type="number"
                                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:outline-none"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                placeholder="VD: 100000"
                            />
                        </div>

                    </div>
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
                            <FaSave /> Lưu bản quảng cáo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditBannerModal;