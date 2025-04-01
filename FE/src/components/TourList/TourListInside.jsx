import React, { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";  // Import axiosClient
import NewTourInside from "./NewTourInside";

const TourCard = ({ tour, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl shadow-lg p-5 hover:shadow-xl transition-all duration-300">
      <div className="overflow-hidden rounded-2xl">
        <img src={tour.image} alt={tour.title} className="w-full h-56 object-cover" />
      </div>

      <div className="mt-4">
        <span className="text-sm text-gray-500">{tour.location}</span>
        <h3 className="text-lg font-bold text-gray-900 mt-1">{tour.title}</h3>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-semibold text-blue-600">{tour.price}</span>
          <span className="text-sm text-gray-500">{tour.days}</span>
        </div>

        <div className="flex gap-2 mt-4 items-center">
          <button
            onClick={() => navigate(`/booking/${tour.id}`, { state: { tour } })}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-full hover:scale-105 transition-all">
            Đặt Ngay
          </button>
          <button
            onClick={() => onEdit(tour)}
            className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition">
            <Pencil size={20} />
          </button>
          <button
            onClick={() => onDelete(tour.id)}
            className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition">
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const TourListInside = () => {
  const [tours, setTours] = useState([]);
  const [editTour, setEditTour] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axiosClient.get("tours")
      .then((response) => {
        const filteredTours = response.data.filter(tour => tour.tourType === "domestic");
        setTours(filteredTours);
      })
      .catch((error) => {
        console.error("❌ Lỗi khi lấy danh sách tour:", error);
      });
  }, []);  

  // Xử lý xóa tour
  const handleDeleteTour = (id) => {
    axiosClient.delete(`tours/${id}`)
      .then(() => {
        setTours(tours.filter(tour => tour.id !== id));
      })
      .catch((error) => {
        console.error("Lỗi khi xóa tour:", error);
      });
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Danh Sách Tour Du Lịch</h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => { setShowForm(true); setEditTour(null); }}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          + Thêm Mới
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} onEdit={setEditTour} onDelete={handleDeleteTour} />
        ))}
      </div>

      {showForm && (
        <NewTourInside
          existingTour={editTour}
          onClose={() => { setShowForm(false); setEditTour(null); }}
          onSave={(updatedTour) => {
            if (editTour) {
              setTours(tours.map(t => t.id === updatedTour.id ? updatedTour : t));
            } else {
              setTours([...tours, { ...updatedTour, id: tours.length + 1 }]);
            }
            setShowForm(false);
            setEditTour(null);
          }}
        />
      )}
    </div>
  );
};

export default TourListInside;
