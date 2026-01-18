import OrdersDetailTable from '@/components/orders/OrdersDetailsTable';
import OrdersTable from '@/components/orders/OrdersTable';
import { useOrders } from '@/contexts/orders';
import { useCreateCheckout } from '@/hooks/checkout/UseCheckout';
import { useDeleteOrder } from '@/hooks/orders/UseOrders';
import { Order, OrderItem } from '@/models/Order';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

function Orders() {
  const {
    orders,
    loading: isOrdersLoading,
    error: ordersError,
    loadOrders,
  } = useOrders();
  const [isOrderDetailsOpen, setOpenOrderDetails] = useState<boolean>(false);
  const deleteOrder = useDeleteOrder();
  const createCheckout = useCreateCheckout();

  function proceedToCheckout(order: Order) {
    createCheckout.mutate(order);
  }

  function cancelOrder(orderId: string) {
    deleteOrder.mutate(orderId);
  }

  function showDetailsAction(showDetails: boolean) {
    setOpenOrderDetails(showDetails);
  }

  function updateOrderItems(items: OrderItem[]) {
    console.log(items);
  }

  useEffect(() => {
    loadOrders();
  }, []);

  if (isOrdersLoading) return <p>Carregando...</p>;
  if (ordersError) return <p>Ocorreu um erro ao carregar pedidos</p>;
  if (orders.length === 0) return <p>Não há nenhum pedido criado</p>;
  return (
    <div>
      <h1>Meus pedidos</h1>
      {orders.length > 0 && (
        <>
          <OrdersTable
            orders={orders}
            proceedToCheckout={(order) => proceedToCheckout(order)}
            cancelOrder={(id) => cancelOrder(id)}
            showOrderDetails={(showDetails) => showDetailsAction(showDetails)}
          />
          {isOrderDetailsOpen && (
            <OrdersDetailTable
              items={orders[0].items}
              updatedItems={(items) => updateOrderItems(items)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Orders;
