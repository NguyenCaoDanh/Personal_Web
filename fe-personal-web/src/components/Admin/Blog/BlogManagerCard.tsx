import { BASE_API } from "@/setting/constant/app";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";

interface BlogManagerCardProps {
    blog: {
        id: number;
        tieuDe: string;
        noiDung: string;
        hinhAnh: string;
    };
    onEdit: () => void;
    onDelete: (id: number) => void
}
const BlogManagerCard = ({ blog, onEdit }: BlogManagerCardProps) => {
    
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col group">
            <div className="relative overflow-hidden rounded-xl mb-4">
                <img
              src={BASE_API + blog.hinhAnh}
                    alt={blog.tieuDe}
                    className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-col gap-1 mb-4">
                <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
                    {blog.tieuDe}
                </h3>
            </div>
            <div className="mt-auto flex gap-2">
                <button
                    onClick={onEdit}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl text-sm font-medium transition"
                >
                    <Pencil size={16} /> Chỉnh sửa
                </button>
            </div>
        </div>
    )
}
export default BlogManagerCard;