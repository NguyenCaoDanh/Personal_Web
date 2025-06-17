import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username: email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.data.token); // Lưu token
        navigate(from || '/', { replace: true });  // Chuyển hướng sau khi đăng nhập thành công
      } else {
        alert(data.message || 'Đăng nhập thất bại');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Lỗi kết nối đến server');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1c1f] text-white">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-[#2d2f34] p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">
            Đăng nhập
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-[#1e1f23] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Mật khẩu
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-[#1e1f23] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-cyan-500" />
                Ghi nhớ đăng nhập
              </label>
              <a href="#" className="text-cyan-400 hover:underline">
                Quên mật khẩu?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg"
            >
              Đăng nhập
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              Bạn chưa có tài khoản?{' '}
              <a href="#" className="text-cyan-400 hover:underline">
                Đăng ký ngay
              </a>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
