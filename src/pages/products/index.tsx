import ProductTable from '@/components/products/ProductTable';
import { useGetProducts } from '@/hooks/products/UseProducts';
import { Product } from '@/models/Products';
import { useState } from 'react';

function Products() {
  const {
    data: products,
    isLoading: isProductsLoading,
    error: productsError,
    refetch: refetchProducts,
  } = useGetProducts();
  const [productData, setProductData] = useState<Partial<Product> | null>(null);

  function addToCartAction(product: Product) {
    console.log(product);
    setProductData(product);
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
