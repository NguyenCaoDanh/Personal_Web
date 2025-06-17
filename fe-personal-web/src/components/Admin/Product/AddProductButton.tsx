import React, { useEffect, useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const AddProductButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFile(file);
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        } else {
            setPreviewImage(null);
        }
    }
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
            <button onClick={() => setShowPopup(true)} className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md shadow-lg transition duration-200">
                <FaPlusCircle />
                <span>Thêm sản phẩm</span>
            </button>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
                    <div
                        ref={popupRef}
                        className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl animate-fade-in"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">📝 Thêm sản phẩm mới</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium">Tên sản phẩm</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                                    placeholder="Nhập tên sản phẩm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium">Giá sản phẩm</label>
                                <input
                                    type="number"
                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                                    placeholder="Nhập giá sản phẩm"
                                />
                            </div>
                           
                           
                                <div className="mb-4">
                                <label className="block text-gray-700 font-medium">Hình ảnh sản phẩm</label>
                                    <input
                                        onChange={handleImageChange}
                                        accept="image/*"
                                        type="file"
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                                    file:text-sm file:font-semibold
                                file:bg-indigo-50 file:text-indigo-700
                                hover:file:bg-indigo-100
                                transition"
                                    />
                                    {previewImage && (
                                        <div className="mt-2">
                                            <img
                                                src={previewImage}
                                                alt="Preview"
                                                className="max-h-40 rounded-lg border border-gray-30"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="mb-4">
                                <label className="block text-gray-700 font-medium">Mô tả</label>
                                <textarea
                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                                    rows={3}
                                    placeholder="Nhập mô tả (nếu có)"
                                />
                                </div>
                          
                        </form>
                    </div>
                </div>
            )}
        </>
    )

}
export default AddProductButton;