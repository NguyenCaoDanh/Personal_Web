import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaTags,
  FaTimes,
  FaSignOutAlt
} from 'react-icons/fa';

interface LeftbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Leftbar: React.FC<LeftbarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    {
      label: 'Danh mục đất nước',
      path: '/',
      icon: <FaTags />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login', { replace: true });
  };

  return (
    <div
      className={`fixed md:static top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64 bg-gradient-to-b from-gray-950
      to-gray-800 text-white flex flex-col shadow-xl
      `}
    >
      <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gray-950 shadow-md">
        <span className="text-2xl font-bold">
          🛠️ <span className="text-gray-100">Quản trị</span>
        </span>
        <button onClick={() => setIsOpen(false)} className="md:hidden text-xl">
          <FaTimes />
        </button>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-2">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex items-center gap-4 px-4 py-3 rounded-lg group transition-all duration-200
              ${isActive
                  ? 'bg-indigo-600 text-white'
                  : 'hover:bg-gray-700 text-gray-300 hover:text-white'
                }
            `}
              onClick={() => setIsOpen(false)}
            >
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-1 bg-indigo-400 rounded-r-sm" />
              )}
              <span
                className={`text-xl ${isActive
                  ? 'text-white'
                  : 'text-indigo-400 group-hover:text-white'
                  }`}
              >
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Nút đăng xuất */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
        >
          <FaSignOutAlt />
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>
  );
};

export default Leftbar;
