import axios from "axios";

const API = axios.create({
  baseURL: "https://invoice-management-system-g0tb.onrender.com",
});

export default API;
