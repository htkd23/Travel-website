import React, { useState, useEffect } from "react";

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <div className="max-w-6xl mx-auto mt-24 mb-20 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Quản lý Đặt Tour</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Khách hàng</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Số điện thoại</th>
            <th className="border border-gray-300 px-4 py-2">Tour</th>
            <th className="border border-gray-300 px-4 py-2">Giá</th>
            <th className="border border-gray-300 px-4 py-2">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4">
                Chưa có yêu cầu đặt tour nào.
              </td>
            </tr>
          ) : (
            bookings.map((booking) => (
              <tr key={booking.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{booking.customerName}</td>
                <td className="border border-gray-300 px-4 py-2">{booking.customerEmail}</td>
                <td className="border border-gray-300 px-4 py-2">{booking.customerPhone}</td>
                <td className="border border-gray-300 px-4 py-2">{booking.tourTitle} ({booking.tourLocation})</td>
                <td className="border border-gray-300 px-4 py-2">{booking.tourPrice}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button onClick={() => handleDelete(booking.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                    Xoá
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingManagement;
