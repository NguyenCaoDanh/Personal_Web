import { Pencil, Trash2 } from "lucide-react";

interface ServiceManagerCardProps {
  service: {
    idDichVu: number;
    tenDichVu: string;
    gia: number;
    moTa: string;
    tieuDe:string;
    tenDanhMucDv?: string;
    hinhAnh: string;
  };
  onEdit: () => void;
  onDelete: (id: number) => void;
}

const ServiceManagerCard = ({ service, onEdit }: ServiceManagerCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col group">
      {/* Ảnh dịch vụ */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={service.hinhAnh}
          alt={service.tenDichVu}
          className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Badge danh mục */}
        <div className="absolute top-2 left-2 bg-white text-gray-700 text-xs font-medium px-2 py-1 rounded shadow-sm flex items-center gap-1">
          📂 <span>{service.tenDanhMucDv || "Không rõ"}</span>
        </div>
      </div>

      {/* Thông tin dịch vụ */}
      <div className="flex flex-col gap-1 mb-4">
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
          {service.tenDichVu}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2">{service.tieuDe}</p>
        <p className="text-green-600 text-sm font-medium">
          {service.gia.toLocaleString()} VNĐ
        </p>
      </div>

      {/* Nút chỉnh sửa và xóa */}
      <div className="mt-auto flex gap-2">
        <button
          onClick={onEdit}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl text-sm font-medium transition"
        >
          <Pencil size={16} /> Chỉnh sửa
        </button>
      </div>
    </div>
  );
};

export default ServiceManagerCard;
