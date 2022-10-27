// setup axios for the project
import axios from "axios";
import { getToken } from "./auth.js";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios.interceptors.response.use(
//   async (res) => {
//     const response = await res.json();
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default instance;
