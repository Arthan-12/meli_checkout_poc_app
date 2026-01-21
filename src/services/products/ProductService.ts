import { getHeaders } from '@/utils/utils';
import { api } from '../axios';
import { Product } from '@/models/Products';

const url = '/products';

export class ProductService {
  async getAllProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>(url, { headers: getHeaders() });
    return response.data;
  }

  async getProductById(id: number): Promise<Product> {
    const response = await api.get<Product>(`${url}/${id}`, {
      headers: getHeaders(),
    });
    return response.data;
  }

  async createProduct(product: Partial<Product>): Promise<Product> {
    const response = await api.post<Product>(url, product, {
      headers: getHeaders(),
    });
    return response.data;
  }

  async updateProduct(product: Partial<Product>): Promise<Product> {
    const response = await api.put<Product>(`${url}/${product.id}`, product, {
      headers: getHeaders(),
    });
    return response.data;
  }

  async deleteProduct(id: number): Promise<void> {
    await api.delete(`${url}/${id}`, { headers: getHeaders() });
  }
}

export const productService = new ProductService();
