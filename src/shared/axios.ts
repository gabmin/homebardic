import axios from "axios";

// Axios 인스턴스 설정
const api = axios.create({
  baseURL: "http://3.35.4.6:3000/",
  // baseURL: "http://localhost:3000", 개발용
});

axios.defaults.withCredentials = true;

export default api;
