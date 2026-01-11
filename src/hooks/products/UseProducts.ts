import { productKeys } from '@/services/products/ProductQueries';
import { productService } from '@/services/products/ProductService';
import { useQuery } from '@tanstack/react-query';

/* GET ALL USERS */
export function useGetProducts() {
  return useQuery({
    queryKey: productKeys.list(),
    queryFn: () => productService.getAllProducts(),
  });
}

/* GET USER BY ID */
export function useGetProduct(id: number) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => productService.getProductById(id),
    enabled: !!id,
  });
}
