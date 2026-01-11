import { Product } from '@/models/Products';
import { Minus, Plus, ShoppingBag, ShoppingCart } from 'lucide-react';

interface ProductTableProps {
  products: Product[];
  addToCart: (item: Product) => void;
}

function ProductTable({ products, addToCart }: ProductTableProps) {
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
              Categoria
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Preço
            </th>
            <th className="px-4 py-3 text-end text-sm font-semibold text-gray-700"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr
              key={product.id}
              className="block md:table-row p-4 md:p-0 hover:bg-gray-50"
            >
              {/* Item */}
              <td className="block md:table-cell px-4 py-2">
                <span className="md:hidden text-xs font-semibold text-gray-500">
                  Item
                </span>
                <div className="text-sm text-gray-900">{product.name}</div>
              </td>

              {/* Categoria */}
              <td className="block md:table-cell px-4 py-2">
                <span className="md:hidden text-xs font-semibold text-gray-500">
                  Categoria
                </span>
                <div className="text-sm text-gray-900">{product.category}</div>
              </td>

              {/* Preço */}
              <td className="block md:table-cell px-4 py-2">
                <span className="md:hidden text-xs font-semibold text-gray-500">
                  Preço
                </span>
                <div className="text-sm text-gray-700 break-all">
                  R$ {product.price}
                </div>
              </td>

              {/* Actions */}
              <td className="block md:table-cell px-4 py-3">
                <div className="flex gap-2 md:justify-end">
                  <button
                    title="Adicionar ao carrinho"
                    className="px-3 py-1 text-xs cursor-pointer font-medium rounded bg-green-100 text-green-700 hover:bg-green-200"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="w-5 h-5 text-green-500" />
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
export default ProductTable;
