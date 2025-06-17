import { Navigate, Outlet } from 'react-router-dom';

export default function AdminRoute() {
  const token = localStorage.getItem('token');

  if (!token) {
    // Nếu chưa đăng nhập, chuyển về trang login
    return <Navigate to="/login" replace />;
  }

  // Nếu đã đăng nhập, cho phép vào trang dashboard
  return <Outlet />;
}
