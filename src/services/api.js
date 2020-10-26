import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: { accept: 'application/json', 'content-type': 'application/json' },
});

api.interceptors.request.use(async config => {
  const headers = { ...config.headers };

  const token = localStorage.getItem('@RestCountries/token');

  if (token) {
    headers.Authorization = `Bearer ${token}`;
    headers.Accept = 'application/json';
  }

  return { ...config, headers };
});

export default api;
