import { User } from 'src/models/User';
import axios from 'axios';

const url = 'http://localhost:8080/api/users';

export class UserService {
  async getAllUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(url);
    return response.data;
  }

  async getUserById(id: number): Promise<User> {
    const response = await axios.get<User>(`${url}/${id}`);
    return response.data;
  }

  async createUser(user: Partial<User>): Promise<User> {
    const response = await axios.post<User>(url, user);
    return response.data;
  }

  async updateUser(user: User): Promise<User> {
    const response = await axios.put<User>(`${url}/${user.id}`, user);
    return response.data;
  }

  async deleteUser(id: number): Promise<void> {
    await axios.delete(`${url}/${id}`);
  }
}

export const userService = new UserService();
