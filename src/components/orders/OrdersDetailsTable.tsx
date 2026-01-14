import { OrderItem } from '@/models/Order';
import { formatCurrency } from '@/utils/utils';
import { MinusCircle, PlusCircle } from 'lucide-react';
import { useState } from 'react';

interface OrdersDetailTableProps {
  items: OrderItem[];
  updatedItems: (items: OrderItem[]) => void;
}

function OrdersDetailTable({ items, updatedItems }: OrdersDetailTableProps) {
  const [orderItems, setOrderItems] = useState<OrderItem[]>(items);
  const countValue = 1;

  function addItemAction(item: OrderItem) {
    const addedItems = items.map((i) => {
      if (i.productId === item.productId) {
        i.quantity = i.quantity + countValue;
      }
      return i;
    });
    setOrderItems(addedItems);
    updatedItems(addedItems);
  }

  function removeItemAction(item: OrderItem) {
    const removedItems = items.map((i) => {
      if (i.productId === item.productId) {
        i.quantity = i.quantity - countValue;
      }
      return i;
    });
    setOrderItems(removedItems);
    updatedItems(removedItems);
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        {/* Header (hidden on mobile) */}
        <thead className="hidden md:table-header-group bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Item
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Preço Unitário
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 flex justify-end">
              Quantidade
            </th>
            <th className="px-4 py-3 text-end text-sm font-semibold text-gray-700"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {orderItems.map((item) => (
            <tr
              key={item.productId}
              className="block md:table-row p-4 md:p-0 hover:bg-gray-50"
            >
              {/* Item */}
              <td className="block md:table-cell px-4 py-2">
                <span className="md:hidden text-xs font-semibold text-gray-500">
                  Item
                </span>
                <div className="text-sm text-gray-900">{item.name}</div>
              </td>

              {/* Preço Unitário*/}
              <td className="block md:table-cell px-4 py-2">
                <span className="md:hidden text-xs font-semibold text-gray-500">
                  Preço Unitário
                </span>
                <div className="text-sm text-gray-700 break-all">
                  {formatCurrency(item.unitPrice)}
                </div>
              </td>

              {/* Categoria */}
              <td className="block md:table-cell px-4 py-2 flex justify-end">
                <span className="md:hidden text-xs font-semibold text-gray-500">
                  Quantidade
                </span>
                <div className="text-sm text-gray-900 flex justify-end gap-2">
                  <button
                    className="px-3 py-1 text-xs cursor-pointer font-medium rounded bg-green-100 text-green-700 hover:bg-green-200"
                    onClick={() => addItemAction(item)}
                  >
                    <PlusCircle />
                  </button>
                  <div className="w-min-[24px] flex justify-center items-center">
                    {item.quantity}
                  </div>
                  <button
                    disabled={item.quantity < 1}
                    className="px-3 py-1 text-xs cursor-pointer font-medium rounded bg-red-100 text-red-700 hover:bg-red-200 disabled:bg-gray-100 disabled:text-gray-700 disabled:cursor-not-allowed"
                    onClick={() => removeItemAction(item)}
                  >
                    <MinusCircle />
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
export default OrdersDetailTable;
