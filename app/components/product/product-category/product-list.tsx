import React from "react";
import { Product } from "@/app/models/Product";
import ProductView from "./product-view";
import { SWRConfig } from "swr";

// Simulated async data fetch (could be from DB or API)
async function getProducts() {
  const response = await fetch('https://dummyjson.com/products', { cache: 'no-store' }); // ensures SSR
  const data = await response.json();
  return data.products as Product[];

  // In real apps, replace with DB query or API call
  // return products; // This is our mock data from lib/db.ts
}


export default async function ProductList() {
  const products = await getProducts();

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

return (
// Pass the server data into the fallback object using the API URL as the key
    <SWRConfig value={{ fallback: { 'https://dummyjson.com/products': products } }}>
      <ProductView />
    </SWRConfig>
  );
}