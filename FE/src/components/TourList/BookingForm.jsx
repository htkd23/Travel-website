import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const BookingForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const tour = location.state?.tour;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  if (!tour) {
    return (
      <div className="text-center text-red-500">
        <p>Không tìm thấy tour!</p>
        <button onClick={() => navigate("/inside")} className="mt-4 text-blue-600 underline">
          Quay lại danh sách tour
        </button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const newBooking = {
      id: Date.now(),
      tourId: id,
      tourTitle: tour.title,
      tourLocation: tour.location,
      tourPrice: tour.price,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      customerNote: formData.note,
    };

    // Lưu vào localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existingBookings, newBooking]));

    alert("Gửi yêu cầu thành công!");
    navigate("/management"); // Điều hướng đến trang quản lý đặt tour
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg flex mb-20">
      {/* Bên trái: Thông tin tour */}
      <div className="w-1/2 pr-6">
        <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover rounded-lg" />
        <h2 className="text-xl font-bold text-gray-900 mt-4">{tour.title}</h2>
        <p className="text-sm text-gray-500">{tour.location}</p>
        <p className="text-lg font-semibold text-blue-600 mt-2">{tour.price}</p>
        <p className="text-sm text-gray-700 mt-1">{tour.days}</p>
      </div>

      {/* Bên phải: Form đặt tour */}
      <div className="w-1/2">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Đặt Tour</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-2"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-2"
            required
          />
          <textarea
            name="note"
            placeholder="Ghi chú"
            value={formData.note}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-2"
          ></textarea>

          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded mt-2">
            Gửi yêu cầu
          </button>
        </form>

        <div className="flex justify-end">
          <button onClick={() => navigate(-1)} className="mt-4 text-gray-500 hover:text-gray-900">
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
