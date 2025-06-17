import React, { useState } from 'react';
import Leftbar from '../Leftbar';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const AdminLayout: React.FC = () => {
  const [siderOpen, setSiderOpen] = useState(false);
  return (
    <div className='flex h-screen overflow-hidden'>
      <Leftbar isOpen={siderOpen} setIsOpen={setSiderOpen} />
      <div className='flex-1 flex flex-col'>
        <div className='md:hidden bg-white shadow px-4 py-3 flex items-center justify-between'>
          <button onClick={() => setSiderOpen(!siderOpen)} className='text-xl'>
            <FaBars />
          </button>
          <h1 className="text-lg font-semibold">Quản trị</h1>
        </div>
        <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
