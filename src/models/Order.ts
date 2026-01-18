export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
}

export type OrderStatus = 'CREATED' | 'PENDING_PAYMENT' | 'PAID' | 'CANCELLED';

export interface Order {
  id: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  paymentPreferenceId: string;
  createdAt: string;
}

export interface UpdateOrderRequest {
  orderId: string;
  items: OrderItem[];
}
