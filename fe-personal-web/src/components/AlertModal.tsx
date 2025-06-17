import React, { useEffect } from "react";

type Props = {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
};

const AlertModal: React.FC<Props> = ({ message, type = "success", onClose }) => {
  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";
  const icon = type === "success" ? "✅" : "❌";

  // Tự đóng sau 3 giây
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className={`rounded-xl shadow-xl p-6 w-full max-w-sm ${bgColor} animate-fade-in`}>
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <div
              className={`w-16 h-16 rounded-full border-4 border-dashed ${
                type === "success" ? "border-green-400" : "border-red-400"
              } flex items-center justify-center animate-spin-slow`}
            >
              <div className={`text-2xl ${textColor}`}>{icon}</div>
            </div>
          </div>
          <div className={`text-lg font-semibold ${textColor}`}>{message}</div>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
