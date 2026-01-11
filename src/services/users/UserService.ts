import { User } from 'src/models/User';
import { api } from '../axios';

const url = '/users';

export class UserService {
  async getAllUsers(): Promise<User[]> {
    const response = await api.get<User[]>(url);
    return response.data;
  }

  async getUserById(id: number): Promise<User> {
    const response = await api.get<User>(`${url}/${id}`);
    return response.data;
  }

  async createUser(user: Partial<User>): Promise<User> {
    const response = await api.post<User>(url, user);
    return response.data;
  }

  async updateUser(user: Partial<User>): Promise<User> {
    const response = await api.put<User>(`${url}/${user.id}`, user);
    return response.data;
  }

  async deleteUser(id: number): Promise<void> {
    await api.delete(`${url}/${id}`);
  }
}

export const userService = new UserService();
