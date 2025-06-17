import { updateBrandCar } from "@/service/api/BrandCar";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

interface EditBrandCarModalProps {
    brandCar: any,
    onClose: () => void
}
const EditBrandCarModal: React.FC<EditBrandCarModalProps> = ({ brandCar, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [name, setName] = useState(brandCar.tenHangXe)
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
    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();
        try{
            const response=await updateBrandCar(brandCar.id,name);
            Swal.fire({
                icon: response.status,
                title: response.message,
                showConfirmButton: false,
                timer: 1500,
            });
            onClose();
            
            window.location.reload();
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <div ref={popupRef} className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">✏️ Chỉnh sửa Hãng xe</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Tên hãng xe</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                            placeholder="Nhập tên hãng xe...."
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
export default EditBrandCarModal;