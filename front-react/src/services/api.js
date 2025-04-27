import axios from 'axios';

// Crear una instancia de axios con la URL base
const API = axios.create({
  baseURL: 'http://localhost:3000/api', // Ajusta el puerto según la configuración de tu backend
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para añadir el token de autenticación a las peticiones
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;