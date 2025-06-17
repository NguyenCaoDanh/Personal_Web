import { getdshangxe } from "@/service/api/BrandCar";
import { updateCar } from "@/service/api/Car";
import { getdsloaixe } from "@/service/api/TypeCar";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
interface EditCarModalProps {
    car: any,
    onClose: () => void
}
const EditCarModal: React.FC<EditCarModalProps> = ({ car, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [tenXe, setTenXe] = useState(car.tenXe);
    const [moTa, setMota] = useState(car.moTa);
    const [namSanXuat, setNamSanXuat] = useState(car.namSanXuat);
    const [loaixe, setLoaixe] = useState([]);
    const [selectedLoaixe, setSelectedLoaixe] = useState(car.loai_xe_id);
    const [hangxe, setHangxe] = useState([]);
    const [selectedHangxe, setSelectedHangxe] = useState(car.hang_xe_id);
    const fetchHangxe = async () => {
        try {
            const response = await getdshangxe();
            const options = response.data.data.map((option: any) => ({
                value: option.id,
                label: option.tenHangXe
            }))
            setHangxe(options);
        } catch (error) {
            console.log(error)
        }
    }
    const fetchTypeCar = async () => {
        try {
            const response = await getdsloaixe();
            const options = response.data.data.map((option: any) => ({
                value: option.id,
                label: option.tenLoaiXe
            }))
            setLoaixe(options);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchTypeCar();
        fetchHangxe();
    }, [])
    useEffect(() => {
        if (loaixe.length > 0) {
            const selected = loaixe.find(item => item.value === car.loai_xe_id);
            setSelectedLoaixe(selected || null);
        }
        if (hangxe.length > 0) {
            const selected = hangxe.find(item => item.value === car.hang_xe_id);
            setSelectedHangxe(selected || null);
        }
    }, [loaixe, car.loai_xe_id, hangxe, car.hang_xe_id]);

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
    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();
        const CartData={
            tenXe:tenXe,
            namSanXuat:namSanXuat,
            moTa:moTa,
            loai_xe_id:selectedLoaixe?.value,
            hang_xe_id:selectedHangxe?.value
        }
        try{
            const response=await updateCar(car.idThongTinXe,CartData);
            Swal.fire({
                icon: response.status,
                title: response.message,
                showConfirmButton: false,
                timer: 1500,
            });
            onClose();
            setTenXe("");
            setNamSanXuat("");
            setMota("");
            setSelectedHangxe(null);
            setSelectedLoaixe(null);
            window.location.reload();
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <div ref={popupRef} className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl animate-fade-in ">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">✏️ Chỉnh sửa  xe</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Tên xe</label>
                        <input
                            value={tenXe}
                            onChange={(e) => setTenXe(e.target.value)}
                            type="text"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                            placeholder="Nhập tên xe"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Năm sản xuất</label>
                        <input
                            value={namSanXuat}
                            onChange={(e) => setNamSanXuat(e.target.value)}
                            type="number"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                            placeholder="Nhập tên xe"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Mô tả</label>
                        <textarea
                            value={moTa}
                            onChange={(e) => setMota(e.target.value)}
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                            rows={3}
                            placeholder="Nhập mô tả (nếu có)"
                        />
                    </div>
                    <div className="mb-4">
                        <Select
                            value={selectedLoaixe}
                            onChange={(option) => setSelectedLoaixe(option)}
                            options={loaixe}
                            placeholder="Chọn loại xe..."
                            className="react-select-container"
                            classNamePrefix="react-select"
                            isClearable
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Hãng xe</label>
                        <Select
                            value={selectedHangxe}
                            onChange={(option) => setSelectedHangxe(option)}
                            options={hangxe}
                            placeholder="Chọn hãng xe..."
                            className="react-select-container"
                            classNamePrefix="react-select"
                            isClearable
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
export default EditCarModal;