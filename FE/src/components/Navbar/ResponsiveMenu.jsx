import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { Menu } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const handleLogout = () => {
    alert("Đăng xuất thành công!");
    setShowMenu(false); // Đóng menu sau khi đăng xuất
    // Thêm logic đăng xuất thực tế ở đây (ví dụ: xóa token, điều hướng về login)
  };

  return (
    <>
      {/* Menu chính */}
      <div
        className={`${showMenu ? "left-0" : "-left-full"}
        fixed top-0 z-20 flex h-auto w-[50%] max-w-[250px]
        flex-col bg-white dark:bg-gray-800 dark:text-white
        px-6 py-4 text-black transition-all duration-200
        md:hidden rounded-r-lg shadow-lg`}
      >
        {/* Phần User */}
        <div className="flex items-center gap-3 border-b pb-4">
          <FaUserCircle size={40} className="text-gray-500" />
          <div>
            <h1 className="text-base font-semibold">Hello User</h1>
            <h2 className="text-sm text-gray-500">Premium user</h2>
          </div>
        </div>

        {/* Danh sách Menu */}
        <ul className="mt-2 space-y-2 text-[16px] font-medium">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="hover:text-primary duration-200 block p-2"
                onClick={() => setShowMenu(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Nút Đăng xuất */}
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white text-center py-2 rounded-md font-semibold hover:bg-red-600 transition"
        >
          Đăng xuất
        </button>
      </div>
    </>
  );
};

export default ResponsiveMenu;
