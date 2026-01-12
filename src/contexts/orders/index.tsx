import { Order } from '@/models/Order';
import { orderService } from '@/services/orders/OrderService';
import { createContext, ReactNode, useContext, useState } from 'react';

interface OrdersContextData {
  orders: Order[];
  loading: boolean;
  error: string | null;
  loadOrders: () => Promise<void>;
}

const OrdersContext = createContext<OrdersContextData | undefined>(undefined);

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadOrders = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await orderService.getAllOrders();
      setOrders(data);
    } catch (err) {
      setError('Failed to load orders');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        loading,
        error,
        loadOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
}
