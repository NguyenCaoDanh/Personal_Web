import React, { useState } from 'react';
import { login } from '../service/api/Authenticate';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      alert('Đăng nhập thành công!');
      console.log(response);

      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('role', response.data.data.role);

      // Luôn chuyển về trang chủ sau khi đăng nhập
      navigate('/', { replace: true });

    } catch (error) {
      alert('Đăng nhập thất bại!');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 sm:px-6 md:px-12">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-md sm:max-w-lg md:max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#17212E]">Đăng nhập</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tên đăng nhập</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E8F8]"
              placeholder="Nhập tên đăng nhập"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E8F8]"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#00E8F8] hover:bg-[#00d6e4] text-[#17212E] font-semibold">
            Đăng nhập
          </Button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Chưa có tài khoản? </span>
          <Link to="/register" className="text-sm font-medium text-[#7A47E0] hover:underline">
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
