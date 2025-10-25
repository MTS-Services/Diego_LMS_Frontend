import axios from 'axios';
import APP_CONFIG from '../config/appConfig';

const api = axios.create({
  baseURL: APP_CONFIG.apiBaseUrl, // centralized API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (attach token)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // or use redux
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor (handle errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default api;
