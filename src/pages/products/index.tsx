import ProductTable from '@/components/products/ProductTable';
import { useOrders } from '@/contexts/orders';
import { useCreateOrder } from '@/hooks/orders/UseOrders';
import { useGetProducts } from '@/hooks/products/UseProducts';
import { Order, OrderItem } from '@/models/Order';
import { Product } from '@/models/Products';
import { useState } from 'react';

function Products() {
  const {
    data: products,
    isLoading: isProductsLoading,
    error: productsError,
    refetch: refetchProducts,
  } = useGetProducts();
  const { orders, loadOrders } = useOrders();
  const createOrder = useCreateOrder();
  const [productData, setProductData] = useState<Partial<Product> | null>(null);

  function addToCartAction(product: Product) {
    console.log(product);
    setProductData(product);
    if (orders.length > 0) {
      console.log('alterar pedido');
    } else {
      console.log('criar pedido');
      createOrderAction(product);
    }
  }

  function createOrderAction(product: Product) {
    const orderItem: OrderItem = {
      name: product.name,
      productId: product.id,
      quantity: 1,
      unitPrice: product.price,
    };
    const orderList: OrderItem[] = [orderItem];
    createOrder.mutate(orderList);
  }

  if (isProductsLoading) return <p>Carregando...</p>;
  if (productsError) return <p>Ocorreu um erro ao carregar produtos</p>;
  return (
    <div className="p-6 min-w-full">
      <h1>Lista de Produtos</h1>
      {products && (
        <ProductTable
          products={products}
          addToCart={(product) => addToCartAction(product)}
        />
      )}
    </div>
  );
}

export default Products;
