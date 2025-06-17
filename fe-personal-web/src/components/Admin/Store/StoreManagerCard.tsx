import { Pencil } from "lucide-react";
import { FaEdit, FaFolderOpen } from "react-icons/fa";

interface StoreManagerCardProps {
    store: {
        id: number;
        tenCuaHang: string;
        diaChi: string;
    };
    onEdit: () => void;

}
const StoreManagerCar = ({ store, onEdit }: StoreManagerCardProps) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col group">
            <div className="flex items-start gap-4">
                <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full">
                    <FaFolderOpen size={20} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {store.tenCuaHang}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                        {store.diaChi}
                    </p>
                </div>
            </div>
            <div className="mt-4 flex justify-end gap-3">
                <button
                    onClick={onEdit}
                    className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800"
                    title="Chỉnh sửa"
                >
                    <FaEdit /> Chỉnh sửa
                </button>
            </div>
        </div>
    )
}
export default StoreManagerCar;