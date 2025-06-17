import AlertModal from "@/components/AlertModal";
import { findCuaHangById, updateCuaHang } from "@/service/api/CuaHang";
import React, { useEffect, useState } from "react"

const EditStoreModal = ({ storeId, onClose, onSave }) => {
    const [tenCuaHang, setTenCuaHang] = useState('');
    const [DiaChi, setDiaChi] = useState('');
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState<{
        message: string;
        type: 'success' | 'error';
    } | null>(null);
    const fetchData = async () => {
        try {
            const response = await findCuaHangById(storeId);
            setTenCuaHang(response?.data?.data.tenCuaHang || "");
            setDiaChi(response?.data?.data.diaChi || "");
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [storeId]);
    const handleSave=async(e:React.FormEvent)=>{
        e.preventDefault();
        try {
            setLoading(true);
            const StoreDTO={
                tenCuaHang:tenCuaHang,
                diaChi:DiaChi
            }
            const response=await updateCuaHang(storeId,StoreDTO);
            setAlert({ message: response.data.message, type: response.data.status });
            onSave?.();
            onClose?.();
        } catch (error) {
            setAlert({ message: '❌ cập nhật cửa hàng thất bại', type: 'error' });
            onClose?.();
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
                <div className="bg-white sm:max-w-lg md:max-w-xl lg:max-w-2xl sm:p-8 p-6 rounded-xl w-full max-w-md shadow-lg">
                    <h3 className="text-2xl font-bold mb-6 text-center">✏️ Chỉnh sửa cửa hàng</h3>
                    <form onSubmit={handleSave} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tên Cửa Hàng</label>
                            <input
                                type="text"
                                value={tenCuaHang}
                                onChange={(e) => setTenCuaHang(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
                            <input
                                type="text"
                                value={DiaChi}
                                onChange={(e) => setDiaChi(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
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
export default EditStoreModal;