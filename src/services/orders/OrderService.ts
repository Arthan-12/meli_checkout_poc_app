import { Order, OrderItem, UpdateOrderRequest } from '@/models/Order';
import { api } from '../axios';
import { Checkout } from '@/models/Checkout';
import { getHeaders } from '@/utils/utils';

const url = '/orders';

export class OrderService {
  async getAllOrders(): Promise<Order[]> {
    const response = await api.get<Order[]>(url, { headers: getHeaders() });
    return response.data;
  }

  async getOrderById(id: string): Promise<Order> {
    const response = await api.get<Order>(`${url}/${id}`, {
      headers: getHeaders(),
    });
    return response.data;
  }

  async createOrder(order: OrderItem[]) {
    const response = await api.post<OrderItem>(url, order, {
      headers: getHeaders(),
    });
    return response.data;
  }

  async updateOrder(updateOrderRequest: UpdateOrderRequest): Promise<Order> {
    const response = await api.put<Order>(
      `${url}/${updateOrderRequest.orderId}`,
      updateOrderRequest.items,
      { headers: getHeaders() },
    );
    return response.data;
  }

  async deleteOrder(id: string): Promise<void> {
    await api.delete(`${url}/${id}`, { headers: getHeaders() });
  }
}

export const orderService = new OrderService();
