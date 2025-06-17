import AlertModal from "@/components/AlertModal";
import { createCuaHang } from "@/service/api/CuaHang";
import React, { useEffect, useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
interface AddStoreButtonProps {
    onStoreAdded?: () => void
}
const AddStoreButton: React.FC<AddStoreButtonProps> = ({ onStoreAdded }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [showPopup, setShowPopup] = useState(false);
    const [tenCuaHang, setTenCuaHange] = useState('');
    const [loading, setLoading] = useState(false);
    const [diaChi, setDiaChi] = useState('');
    const [alert, setAlert] = useState<{
        message: string;
        type: 'success' | 'error';
    } | null>(null);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await createCuaHang({ tenCuaHang, diaChi });
            setAlert({ message: response.data.message, type: response.data.status });
            setTenCuaHange('');
            setDiaChi('');
            if (onStoreAdded) {
                onStoreAdded();
            }
            setShowPopup(false);
            window.dispatchEvent(new Event('store-added'));
        } catch (error) {
            setAlert({ message: '❌ Thêm cửa hàng thất bại', type: 'error' });
        } finally {
            setLoading(false);
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
            <button
                onClick={() => setShowPopup(true)}
                className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md shadow-lg transition duration-200 text-sm sm:text-base"
            >
                <FaPlusCircle />
                <span>Thêm cửa hàng</span>
            </button>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
                    <div
                        ref={popupRef}
                        className="bg-white rounded-2xl p-6 w-[90%] sm:w-full max-w-md mx-4 sm:mx-0 shadow-2xl animate-fade-in"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                            📝 Thêm cửa hàng mới
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium">
                                    Tên cửa hàng
                                </label>
                                <input
                                    type="text"
                                    value={tenCuaHang}
                                    onChange={(e) => setTenCuaHange(e.target.value)}
                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                                    placeholder="Nhập tên cửa hàng"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Địa chỉ</label>
                                <input
                                    type="text"
                                    value={diaChi}
                                    onChange={(e) => setDiaChi(e.target.value)}
                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                                    placeholder="Nhập Địa chỉ"
                                    required
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
    )
}
export default AddStoreButton;