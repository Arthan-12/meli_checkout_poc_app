import { useOrders } from '@/contexts/orders';
import { OrderItem } from '@/models/Order';
import { orderKeys } from '@/services/orders/OrderQueries';
import { orderService } from '@/services/orders/OrderService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useGetOrders() {
  return useQuery({
    queryKey: orderKeys.list(),
    queryFn: () => orderService.getAllOrders(),
  });
}

export function useGetProduct(id: string) {
  return useQuery({
    queryKey: orderKeys.detail(id),
    queryFn: () => orderService.getOrderById(id),
    enabled: !!id,
  });
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const { loadOrders } = useOrders();

  return useMutation({
    mutationFn: (order: OrderItem[]) => orderService.createOrder(order),
    onSuccess: () => {
      loadOrders();
    },
  });
}

export function useDeleteOrder() {
  const queryClient = useQueryClient();
  const { loadOrders } = useOrders();

  return useMutation({
    mutationFn: (id: string) => orderService.deleteOrder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: orderKeys.list(),
      });
      loadOrders();
    },
  });
}
