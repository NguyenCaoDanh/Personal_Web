import { getdshangxe } from "@/service/api/BrandCar";
import { createCar } from "@/service/api/Car";
import { getdsloaixe } from "@/service/api/TypeCar";
import { useEffect, useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Select from "react-select";
const AddCarButton = () => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);
    const [loaixe, setLoaixe] = useState([]);
    const[namSanXuat,setNamSanXuat]=useState("");
    const[mota,setMota]=useState("");
    const[tenXe,setTenXe]=useState("");
    const [hangxe, setHangxe] = useState([]);
    const [selectedHangxe, setSelectedHangxe] = useState(null);
    const [selectedLoaixe, setSelectedLoaixe] = useState(null);
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
    useEffect(() => {
        fetchTypeCar();
        fetchHangxe();
    }, [])
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
                setShowPopup(false);
            }
        }
        if (showPopup) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showPopup]);
    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();
        const CartData={
            tenXe:tenXe,
            namSanXuat:namSanXuat,
            moTa:mota,
            loai_xe_id:selectedLoaixe?.value,
            hang_xe_id:selectedHangxe?.value
        }
        try{
            const response=await createCar(CartData);
            alert(response.message);
            setShowPopup(false);
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
        <>
            <button onClick={() => setShowPopup(true)} className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md shadow-lg transition duration-200">
                <FaPlusCircle />
                <span>Thêm  xe</span>
            </button>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
                    <div ref={popupRef} className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl animate-fade-in">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">📝 Thêm xe</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium">Tên xe</label>
                                <input
                                    value={tenXe}
                                    onChange={(e)=>setTenXe(e.target.value)}
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
                                    onChange={(e)=>setNamSanXuat(e.target.value)}
                                    type="number"
                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                                    placeholder="Nhập tên xe"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium">Mô tả</label>
                                <textarea
                                    value={mota}
                                    onChange={(e) => setMota(e.target.value)}
                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                                    rows={3}
                                    placeholder="Nhập mô tả (nếu có)"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium">Loại xe</label>
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
                                    onClick={() => setShowPopup(false)}
                                    type="button"
                                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition"
                                >
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition font-semibold"
                                >
                                    Thêm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
export default AddCarButton;