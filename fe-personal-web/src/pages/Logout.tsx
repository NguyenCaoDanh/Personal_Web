import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Đảm bảo bạn đã cài react-router-dom

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Xóa token khỏi localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // Đợi một chút để người dùng thấy thông báo
    setTimeout(() => {
      // Chuyển hướng đến trang login
      navigate("/login");
    }, 2000); // Thời gian chờ 2 giây (2000ms)
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F1F5F9] px-4">
      <div className="text-center p-6 sm:p-8 bg-white shadow-md rounded-xl w-full max-w-sm">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Đăng xuất</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4">Đang đăng xuất khỏi hệ thống...</p>
        <div className="flex justify-center">
          <svg
            className="animate-spin h-8 w-8 sm:h-10 sm:w-10 text-blue-500 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" />
            <path d="M4 12a8 8 0 1 0 16 0" />
          </svg>
        </div>
        <p className="mt-4 text-xs sm:text-sm  text-gray-500">Bạn sẽ được chuyển hướng đến trang đăng nhập trong giây lát...</p>
      </div>
    </div>
  );
};

export default Logout;
