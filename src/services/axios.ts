import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export const api = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: baseUrl,
  withCredentials: true, // important if using cookies/JWT
});
