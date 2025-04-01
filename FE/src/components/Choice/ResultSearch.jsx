import React from "react";

const ResultSearch = ({ weatherData, selectedDate }) => {
    // Kiểm tra nếu không có dữ liệu hợp lệ
    if (!weatherData?.forecast?.forecastday?.length) {
        return <p className="text-center text-white">Không có dữ liệu thời tiết.</p>;
    }

    // Lấy địa điểm từ dữ liệu thời tiết
    const locationName = weatherData?.location?.name || "Không xác định";

    return (
        <div className="bg-white rounded-md p-4 mt-4">
            {/* Cập nhật tiêu đề với địa điểm */}
            <h2 className="text-xl font-bold mb-2">
                Dự báo thời tiết tại {locationName} trong 7 ngày tiếp theo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {weatherData.forecast.forecastday.map((day, index) => (
                    <div key={index} className="border p-3 rounded-md shadow-md bg-gray-100">
                        <p>Nhiệt độ: {day?.day?.avgtemp_c ?? "Không có dữ liệu"}°C</p>
                        <p>Trạng thái: {day?.day?.condition?.text ?? "Không có dữ liệu"}</p>
                        <img src={day?.day?.condition?.icon ?? ""} alt="Thời tiết" className="w-12 h-12 mx-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultSearch;
