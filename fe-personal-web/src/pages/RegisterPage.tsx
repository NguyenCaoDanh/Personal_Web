import React, { useState } from 'react';
import { RegisUser } from '../../src/service/api/Authenticate';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Gọi API đăng ký đơn giản
      const response = await RegisUser(username, password);
      alert('Đăng ký thành công!');
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      alert('Đăng ký thất bại!');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 sm:px-6 md:px-12">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#17212E]">
          Đăng ký tài khoản
        </h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tên đăng nhập</label>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E8F8]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E8F8]"
            />
          </div>
          <Button type="submit" className="w-full bg-[#7A47E0] hover:bg-[#6A37D0] text-white font-semibold">
            Đăng ký
          </Button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Đã có tài khoản? </span>
          <a href="/login" className="text-sm font-medium text-[#00E8F8] hover:underline">
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
