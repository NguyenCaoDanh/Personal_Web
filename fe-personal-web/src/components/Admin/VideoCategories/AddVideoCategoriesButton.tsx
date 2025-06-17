import { createCategoryVideo } from "@/service/api/CategoryVideo";
import React, { useEffect, useRef, useState } from "react"
import { FaPlusCircle } from "react-icons/fa";

const AddVideoCategoriesButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);
    const[name,setname]=useState("");
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
        }
    }, [showPopup]);
    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();
        try{
            const response=await createCategoryVideo(name);
            alert(response.message);
            setShowPopup(false);
            setname("");
            window.location.reload();
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
            <button onClick={() => setShowPopup(true)} className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md shadow-lg transition duration-200">
                <FaPlusCircle />
                <span>Thêm danh mục video</span>
            </button>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
                    <div ref={popupRef} className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl animate-fade-in">
                        <h3 className="text-2xl font-bold text-gray-800 text-center">📝 Thêm danh mục video</h3>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700 font-medium">Tên danh mục</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e)=>setname(e.target.value)}
                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                                    placeholder="Nhập tên danh mục"
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
export default AddVideoCategoriesButton;