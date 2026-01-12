import OrdersTable from '@/components/orders/OrdersTable';
import { useOrders } from '@/contexts/orders';
import { useCreateCheckout } from '@/hooks/checkout/UseCheckout';
import { useDeleteOrder } from '@/hooks/orders/UseOrders';
import { Order } from '@/models/Order';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

function Orders() {
  const { orders, loading: isOrdersLoading, error: ordersError } = useOrders();
  const deleteOrder = useDeleteOrder();
  const createCheckout = useCreateCheckout();

  function proceedToCheckout(order: Order) {
    createCheckout.mutate(order);
  }

  function cancelOrder(orderId: string) {
    deleteOrder.mutate(orderId);
  }

  if (isOrdersLoading) return <p>Carregando...</p>;
  if (ordersError) return <p>Ocorreu um erro ao carregar pedidos</p>;
  if (orders.length === 0) return <p>Não há nenhum pedido criado</p>;
  return (
    <div>
      <h1>Meus pedidos</h1>
      {orders.length > 0 && (
        <OrdersTable
          orders={orders}
          proceedToCheckout={(order) => proceedToCheckout(order)}
          cancelOrder={(id) => cancelOrder(id)}
        />
      )}
    </div>
  );
}

export default Orders;
