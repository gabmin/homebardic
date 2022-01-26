import axios from "axios";

// Axios 인스턴스 설정
const api = axios.create({
  baseURL: "https://localhost:3000",
  withCredentials: true,
});

export default api;
