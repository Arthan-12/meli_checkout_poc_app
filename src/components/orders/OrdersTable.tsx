import { Order } from '@/models/Order';
import { CheckCircle, ChevronDown, ChevronUp, Trash } from 'lucide-react';
import { useState } from 'react';

interface OrdersTableProps {
  orders: Order[];
  proceedToCheckout: (order: Order) => void;
  cancelOrder: (id: string) => void;
  showOrderDetails: (showDetails: boolean) => void;
}

function OrdersTable({
  orders,
  proceedToCheckout,
  cancelOrder,
  showOrderDetails,
}: OrdersTableProps) {
  const [showDetails, setShowDetails] = useState(false);
  const date = '14/01/2026';

  function toggleDetailsAction() {
    setShowDetails((prev) => {
      const next = !prev;
      showOrderDetails(next);
      return next;
    });
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="hidden md:table-header-group bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Pedido
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Status
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Data do pedido
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Valor total
            </th>
            <th className="px-4 py-3 text-end text-sm font-semibold text-gray-700"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="block md:table-row p-4 md:p-0 hover:bg-gray-50"
            >
              {/* Pedido */}
              <td className="block md:table-cell px-4 py-2">
                <span className="md:hidden text-xs font-semibold text-gray-500">
                  Pedido
                </span>
                <div className="text-sm text-gray-900">{order.id}</div>
              </td>

              {/* Status */}
              <td className="block md:table-cell px-4 py-2">
                <span className="md:hidden text-xs font-semibold text-gray-500">
                  Status
                </span>
                <div className="text-sm text-gray-900">{order.status}</div>
              </td>

              {/* Data do pedido */}
              <td className="block md:table-cell px-4 py-2">
                <span className="md:hidden text-xs font-semibold text-gray-500">
                  Data do pedido
                </span>
                <div className="text-sm text-gray-900">{date}</div>
              </td>

              {/* Valor do pedido */}
              <td className="block md:table-cell px-4 py-2">
                <span className="md:hidden text-xs font-semibold text-gray-500">
                  Valor do pedido
                </span>
                <div className="text-sm text-gray-700 break-all">
                  R$ {order.totalAmount}
                </div>
              </td>

              {/* Actions */}
              <td className="block md:table-cell px-4 py-3">
                <div className="flex gap-2 md:justify-end">
                  <button
                    className="px-3 py-1 text-xs cursor-pointer font-medium rounded bg-blue-100 text-blue-700 hover:bg-blue-200"
                    onClick={toggleDetailsAction}
                  >
                    {showDetails ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  <button
                    title="Realizar checkout"
                    className="px-3 py-1 text-xs cursor-pointer font-medium rounded bg-green-100 text-green-700 hover:bg-green-200"
                    onClick={() => proceedToCheckout(order)}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </button>
                  <button
                    title="Adicionar ao carrinho"
                    className="px-3 py-1 text-xs cursor-pointer font-medium rounded bg-red-100 text-red-700 hover:bg-red-200"
                    onClick={() => cancelOrder(order.id)}
                  >
                    <Trash className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
