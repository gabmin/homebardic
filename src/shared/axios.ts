import axios from "axios";

// Axios 인스턴스 설정
const api = axios.create({
  baseURL: "http://localhost:3000",
});

axios.defaults.withCredentials = true;

export default api;
