import { Checkout } from '@/models/Checkout';
import { Order } from '@/models/Order';
import { api } from '../axios';

const url = 'checkout/preferences';

export class CheckoutService {
  async createCheckout(order: Order): Promise<Checkout> {
    const response = await api.post<Checkout>(url, order);
    return response.data;
  }
}

export const checkoutService = new CheckoutService();
