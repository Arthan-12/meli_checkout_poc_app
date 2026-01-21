import { User } from 'src/models/User';
import { api } from '../axios';
import { getHeaders } from '@/utils/utils';

const url = '/users';

export class UserService {
  async getAllUsers(): Promise<User[]> {
    const response = await api.get<User[]>(url, { headers: getHeaders() });
    return response.data;
  }

  async getUserById(id: string): Promise<User> {
    const response = await api.get<User>(`${url}/${id}`, {
      headers: getHeaders(),
    });
    return response.data;
  }

  async createUser(user: Partial<User>): Promise<User> {
    const response = await api.post<User>(url, user, { headers: getHeaders() });
    return response.data;
  }

  async updateUser(user: Partial<User>): Promise<User> {
    const response = await api.put<User>(`${url}/${user.id}`, user, {
      headers: getHeaders(),
    });
    return response.data;
  }

  async deleteUser(id: string): Promise<void> {
    await api.delete(`${url}/${id}`, { headers: getHeaders() });
  }
}

export const userService = new UserService();
