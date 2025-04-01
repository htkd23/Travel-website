import React, { useState } from "react";
import Logo from "../../assets/logo3.png";
import { Link } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";

export const Menu = [
  { id: 1, name: "Trang chủ", link: "/#" },
  { id: 2, name: "Trong nước", link: "/inside" },
  { id: 3, name: "Nước ngoài", link: "/outside" },
  { id: 4, name: "Tự chọn", link: "/choice" },
  { id: 5, name: "Quản lý đặt tour", link: "/management" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleLogout = () => {
    alert("Đăng xuất thành công!"); 
    // Thêm logic đăng xuất ở đây (ví dụ: xóa token, điều hướng về trang login)
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white shadow-md fixed top-0 w-full z-50">
      <div className="container flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <a href="/#" className="font-bold text-2xl sm:text-3xl flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10" />
          Travel Website 
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className="hover:text-primary transition">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Icon & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Book Now Button */}
          <Link
            to="/choice"
            className="hidden md:block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 
            rounded-full shadow-md hover:shadow-lg transition"
          >
            Book Now
          </Link>

          {/* User Icon */}
          <div className="relative hidden md:block">
            <button onClick={toggleUserMenu} className="flex items-center">
              <FaUserCircle size={30} className="text-gray-600 dark:text-white cursor-pointer" />
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2">
                <p className="px-4 py-2 text-gray-700 font-medium">Hello, User</p>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden block text-gray-800 dark:text-white" onClick={toggleMenu}>
            {showMenu ? <HiMenuAlt1 size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Responsive Menu */}
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
