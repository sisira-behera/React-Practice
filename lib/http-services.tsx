import { Product } from '@/app/models/Product';
import { Categories } from '@/app/models/Categories';

const BASE_URL = 'https://dummyjson.com';

// ============================================================================
// HTTP CLIENT UTILITIES
// ============================================================================

interface FetchOptions {
  cache?: RequestCache;
  revalidate?: number;
  headers?: Record<string, string>;
}

const defaultHeaders = {
  'Content-Type': 'application/json',
};

async function httpGet<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  const { cache = 'no-store', headers = {} } = options;

  try {
    const response = await fetch(url, {
      cache,
      headers: { ...defaultHeaders, ...headers },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`[HTTP GET] ${endpoint}:`, data);
    return data as T;
  } catch (error) {
    console.error(`[HTTP ERROR] ${endpoint}:`, error);
    throw error;
  }
}

// ============================================================================
// PRODUCT API SERVICES
// ============================================================================

export const productServices = {
  /**
   * Fetch all products
   * Used in ProductList component
   */
  getAllProducts: async (): Promise<Product[]> => {
    const response = await httpGet<{ products: Product[] }>('/products', {
      cache: 'no-store',
    });
    return response.products;
  },

  /**
   * Fetch single product by ID
   * Used in ProductDetails component (server-side)
   */
  getProductById: async (id: string): Promise<Product> => {
    return httpGet<Product>(`/products/${id}`, {
      cache: 'no-store',
    });
  },

  /**
   * Fetch product by ID (client-side fetcher for SWR)
   * Used in ProductDetailsView component
   */
  getProductByIdFetcher: (url: string): Promise<Product> => {
    return fetch(url, { next: { revalidate: 60 } })
      .then((res) => res.json())
      .then((data: Product) => {
        console.log('Fetched Product Data From PDP:', data);
        return data;
      });
  },

  /**
   * Fetch all products (client-side fetcher for SWR)
   * Used in ProductView component
   */
  getAllProductsFetcher: (url: string): Promise<Product[]> => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched all products:', data.products);
        return data.products;
      });
  },
};

// ============================================================================
// CATEGORY API SERVICES
// ============================================================================

export const categoryServices = {
  /**
   * Fetch all categories
   * Used in CategoryList component (server-side)
   */
  getAllCategories: async (): Promise<Categories> => {
    return httpGet<Categories>('/products/category-list', {
      cache: 'force-cache',
    });
  },

  /**
   * Fetch all categories (client-side fetcher for SWR)
   * Used in CategoryView component
   */
  getAllCategoriesFetcher: (url: string): Promise<Categories> => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched Category data:', data);
        return data;
      });
  },

  /**
   * Fetch products by category
   * Used in CategoryChildrenList component (server-side)
   */
  getProductsByCategory: async (slug: string): Promise<Product[]> => {
    const url = `/products/category/${slug}`;
    console.log('Category Page Child Component:', url);
    const response = await httpGet<{ products: Product[] }>(url, {
      cache: 'no-store',
    });
    return response.products;
  },

  /**
   * Fetch products by category (client-side fetcher for SWR)
   * Used in CategoryChildrenView component
   */
  getProductsByCategoryFetcher: (url: string): Promise<Product[]> => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched category products:', data.products);
        return data.products;
      });
  },
};

// ============================================================================
// EXPORT DEFAULT SERVICE
// ============================================================================

export const httpServices = {
  products: productServices,
  categories: categoryServices,
};

export default httpServices;