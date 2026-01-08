import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_GATEWAY_URL,
  withCredentials: true, // important if using cookies/JWT
});
