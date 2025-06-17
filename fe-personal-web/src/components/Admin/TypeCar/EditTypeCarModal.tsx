import { updateLoaixe } from "@/service/api/TypeCar";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

interface EditTypeCarModalProps {
    TypeCar: any,
    onClose: () => void
}
const EditTypeCarModal: React.FC<EditTypeCarModalProps> = ({ TypeCar, onClose }) => {
    const [name, setName] = useState(TypeCar.tenLoaiXe)
    const popupRef = useRef<HTMLDivElement>(null);
    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();
        try{
            const response=await updateLoaixe(TypeCar.id,name);
            onClose();
            Swal.fire({
                icon: response.status,
                title: response.message,
                showConfirmButton: false,
                timer: 1500,
            });
            window.location.reload();
        }catch(error){
            console.log(error);
        }
    }
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
    }, [onClose])
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <div ref={popupRef} className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">✏️ Chỉnh sửa loại xe</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Tên loại xe</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                            placeholder="Nhập tên loại xe"
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition font-semibold"
                        >
                            Cập nhật
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditTypeCarModal;