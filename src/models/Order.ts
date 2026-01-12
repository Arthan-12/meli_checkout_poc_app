export interface OrderItem {
  productId: number;
  name: string;
  quantity: number;
  unitPrice: number;
}

export type OrderStatus = 'CREATED' | 'PENDING_PAYMENT' | 'PAID' | 'CANCELLED';

export interface Order {
  id: string;
  items: OrderItem[];
  totalAmount: number;
  orderStatus: OrderStatus;
  paymentPreferenceId: string;
  createdAt: string;
}
