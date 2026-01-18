import { SignUpRequest } from '@/models/requests/SignUpRequest';
import { api } from '../axios';
import { AuthResponse } from '@/models/responses/AuthResponse';
import { LoginRequest } from '@/models/requests/LoginRequest';

const path = '/auth';

export const authApi = {
  async signUp(data: SignUpRequest) {
    const response = await api.post<AuthResponse>(`${path}/signup`, data);
    return response.data;
  },

  async login(data: LoginRequest) {
    const response = await api.post<AuthResponse>(`${path}/login`, data);
    return response.data;
  },
};
