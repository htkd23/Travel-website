import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8081/api/", // Base URL chung cho toàn bộ API
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;
