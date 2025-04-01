import React, { useState } from "react";
import axios from "axios";
import ResultSearch from "./ResultSearch"; // Import component hiển thị kết quả

const HeroChoice = ({ setWeatherData, weatherData }) => {
    const [destination, setDestination] = useState(""); // 🟢 Địa điểm người dùng nhập
    const [selectedDate, setSelectedDate] = useState(""); // 🟢 Ngày đi người dùng chọn
    const [priceValue, setPriceValue] = useState(40);
    const [tripType, setTripType] = useState("domestic");
    const [loading, setLoading] = useState(false);

    const API_KEY = "83c8c8bee6eb4b6c97c201931251803"; // API Key của bạn

    const handleSearch = async () => {
        if (!destination) {
            alert("Vui lòng nhập địa điểm!");
            return;
        }
    
        setLoading(true);
        try {
            const response = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json`, {
                    params: {
                        key: API_KEY,
                        q: destination,
                        days: 7,  // 🔥 Lấy 7 ngày (hôm nay + 6 ngày tới)
                        lang: "vi",
                    }
                }
            );
    
            console.log(response.data); // Kiểm tra dữ liệu API trả về
    
            if (response.data && response.data.forecast && response.data.forecast.forecastday) {
                setWeatherData(response.data); // 🔥 Lưu dữ liệu 7 ngày vào state
            } else {
                setWeatherData(null);
            }
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu thời tiết:", error);
            setWeatherData(null);
            alert("Không tìm thấy dữ liệu thời tiết cho địa điểm này.");
        } finally {
            setLoading(false);
        }
    };
    
    

    return (
        <div className="bg-black/20 h-full">
            <div className="h-full flex justify-center items-center p-4 bg-primary/10">
                <div className="container grid grid-cols-1 gap-4">
                    <div className="text-white">
                        <p className="font-bold text-3xl">
                            Tìm kiếm chuyến đi lý tưởng của bạn
                        </p>
                    </div>

                    <div className="space-y-4 bg-white rounded-md p-4 relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-3">
                            <div>
                                <label htmlFor="destination" className="opacity-70">Địa điểm</label>
                                <input type="text"
                                    id="destination"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="Hà Nội, Đà Nẵng..."
                                    className="w-full bg-gray-100 my-2 rounded-full p-2" />
                            </div>

                            <div>
                                <label htmlFor="date" className="opacity-70">Ngày đi</label>
                                <input type="date"
                                    id="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="w-full bg-gray-100 my-2 rounded-full p-2" />
                            </div>

                            <div>
                                <label htmlFor="tripType" className="opacity-70">Loại chuyến đi</label>
                                <select
                                    id="tripType"
                                    value={tripType}
                                    onChange={(e) => setTripType(e.target.value)}
                                    className="w-full bg-gray-100 my-2 rounded-full p-2"
                                >
                                    <option value="domestic">Trong nước</option>
                                    <option value="international">Ngoài nước</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="price" className="opacity-70 block">
                                    <div className="w-full flex justify-between items-center">
                                        <p>Giá</p>
                                        <p className="font-bold text-xl">${priceValue}</p>
                                    </div>
                                </label>
                                <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                                    <input type="range"
                                        id="price"
                                        className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                                        min={150}
                                        max={1000}
                                        value={priceValue}
                                        step={10}
                                        onChange={(e) => setPriceValue(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <button onClick={handleSearch}
                            className="bg-gradient-to-r from-primary to-secondary text-white
                            hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2
                            -translate-x-1/2">
                            {loading ? "Đang tìm..." : "Tìm kiếm ngay"}
                        </button>
                    </div>

                    {/* Hiển thị kết quả tìm kiếm */}
                    {weatherData && <ResultSearch weatherData={weatherData} selectedDate={selectedDate} />}
                </div>
            </div>
        </div>
    );
};

export default HeroChoice;
