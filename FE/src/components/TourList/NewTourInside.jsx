import React, { useState, useEffect, useCallback } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import NewTourInside from "./NewTourInside";

const TourCard = ({ tour, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl shadow-lg p-5 hover:shadow-xl transition-all duration-300">
      <div className="overflow-hidden rounded-2xl">
        <img 
          src={tour.image_url} 
          alt={tour.tour_name} 
          className="w-full h-56 object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-4">
        <span className="text-sm text-gray-500">{tour.location}</span>
        <h3 className="text-lg font-bold text-gray-900 mt-1">{tour.tour_name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{tour.description}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-semibold text-blue-600">${tour.price}</span>
          <span className="text-sm text-gray-500">
            {new Date(tour.start_date).toLocaleDateString()} - {new Date(tour.end_date).toLocaleDateString()}
          </span>
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

const TourListInternational = () => {
  const [tours, setTours] = useState([]);
  const [editTour, setEditTour] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    total: 0
  });

  const fetchTours = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosClient.get(`tours?page=${pagination.page}&limit=${pagination.limit}`);
      const filteredTours = response.data.filter(tour => tour.tourType === "international");
      setTours(filteredTours);
      setPagination(prev => ({...prev, total: response.total}));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit]);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  const handleAddTour = useCallback(async (newTour) => {
    try {
      const response = await axiosClient.post("tours/add", newTour);
      setTours(prev => [...prev, response.data]);
      setShowForm(false);
    } catch (error) {
      console.error("❌ Lỗi khi thêm tour:", error);
      throw error;
    }
  }, []);

  const handleUpdateTour = useCallback(async (updatedTour) => {
    try {
      const response = await axiosClient.put(`tours/${updatedTour.id}`, updatedTour);
      setTours(prev => prev.map(t => t.id === updatedTour.id ? response.data : t));
      setShowForm(false);
      setEditTour(null);
    } catch (error) {
      console.error("❌ Lỗi khi cập nhật tour:", error);
      throw error;
    }
  }, []);

  const handleDeleteTour = useCallback(async (id) => {
    try {
      await axiosClient.delete(`tours/${id}`);
      setTours(prev => prev.filter(tour => tour.id !== id));
    } catch (error) {
      console.error("❌ Lỗi khi xóa tour:", error);
    }
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Danh Sách Tour Quốc Tế</h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => { setShowForm(true); setEditTour(null); }}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          + Thêm Mới
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard 
            key={tour.id} 
            tour={tour} 
            onEdit={setEditTour} 
            onDelete={handleDeleteTour} 
          />
        ))}
      </div>

      {showForm && (
        <NewTourInside
          existingTour={editTour}
          onClose={() => { setShowForm(false); setEditTour(null); }}
          onSave={editTour ? handleUpdateTour : handleAddTour}
        />
      )}
    </div>
  );
};

export default React.memo(TourListInternational);