import { api } from '../axios';
import { Product } from '@/models/Products';

const url = '/products';

export class ProductService {
  async getAllProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>(url);
    return response.data;
  }

  async getProductById(id: number): Promise<Product> {
    const response = await api.get<Product>(`${url}/${id}`);
    return response.data;
  }

  async createProduct(product: Partial<Product>): Promise<Product> {
    const response = await api.post<Product>(url, product);
    return response.data;
  }

  async updateProduct(product: Partial<Product>): Promise<Product> {
    const response = await api.put<Product>(`${url}/${product.id}`, product);
    return response.data;
  }

  async deleteProduct(id: number): Promise<void> {
    await api.delete(`${url}/${id}`);
  }
}

export const productService = new ProductService();
