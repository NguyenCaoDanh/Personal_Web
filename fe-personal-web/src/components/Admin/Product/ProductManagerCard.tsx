import { Pencil } from "lucide-react";

interface ProductManagerCardProps {
  product: {
    idSanPham: number;
    tenSanPham: string;
    gia: number;
    hinhAnh: string;
    tenDanhMuc?: string;
  };
  onEdit: () => void;
}

const ProductManagerCard = ({ product, onEdit }: ProductManagerCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col group">
      {/* Ảnh sản phẩm */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={product.hinhAnh}
          alt={product.tenSanPham}
          className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Badge danh mục */}
        <div className="absolute top-2 left-2 bg-white text-gray-700 text-xs font-medium px-2 py-1 rounded shadow-sm flex items-center gap-1">
          📂 <span>{product.tenDanhMuc || "Không rõ"}</span>
        </div>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="flex flex-col gap-1 mb-4">
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
          {product.tenSanPham}
        </h3>
        <p className="text-green-600 text-sm font-medium">
          {product.gia.toLocaleString()} VNĐ
        </p>
      </div>

      {/* Nút chỉnh sửa */}
      <button
        onClick={onEdit}
        className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl text-sm font-medium transition"
      >
        <Pencil size={16} /> Chỉnh sửa sản phẩm
      </button>
    </div>
  );
};

export default ProductManagerCard;
