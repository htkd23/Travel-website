import React from "react";
import footerLogo from "../../assets/logo3.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  { title: "Trang chủ", link: "/#" },
  { title: "Trong nước", link: "/#inside" },
  { title: "Nước ngoài", link: "/#outside" },
  { title: "Tự chọn", link: "/#choice" },
  { title: "Quản lý đặt tour", link: "/#management" },
];
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="text-black py-6 bg-gray-100 mt-auto">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Grid bố cục */}
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Logo & Giới thiệu */}
          <div className="py-2 text-center">
            <h1 className="text-2xl font-bold flex justify-center items-center gap-2">
              <img src={footerLogo} alt="logo" className="w-10" />
              Travel website
            </h1>
            <p className="text-black text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Links */}
          <div className="py-2 text-center">
            <h1 className="text-lg font-semibold">Links</h1>
            <ul className="text-black text-sm space-y-2">
              {FooterLinks.map((link) => (
                <li key={link.title} className="cursor-pointer hover:text-primary">
                  {link.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="py-2 text-center">
            <div className="flex justify-center gap-3 text-black">
              <FaInstagram className="text-xl" />
              <FaFacebook className="text-xl" />
              <FaLinkedin className="text-xl" />
            </div>
            <div className="mt-3 text-black text-sm">
              <p className="flex justify-center items-center gap-2">
                <FaLocationArrow /> Hà Nội, Việt Nam
              </p>
              <p className="flex justify-center items-center gap-2">
                <FaMobileAlt /> +84 123456789
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
