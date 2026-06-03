import React from "react";
import { Product } from "@/app/models/Product";
import { SWRConfig } from "swr";
import ProductDetailsView from "./product-details-view";

// Simulated async data fetch (could be from DB or API)
async function getProductDetails(pid: string) {
  const response = await fetch(`https://dummyjson.com/products/${pid}`, {
    cache: "no-store",
  }); // ensures SSR
  const product = await response.json();
  return product as Product;

  // In real apps, replace with DB query or API call
  // return products; // This is our mock data from lib/db.ts
}

export default async function ProductDetails(context: {
  params: { id: string };
}) {
  const { id } = context.params; // Captures the ID from /products/123

  const product = await getProductDetails(id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    // Pass the server data into the fallback object using the API URL as the key
    <SWRConfig
      value={{ fallback: { "https://dummyjson.com/products/${pid}": product } }}
    >
      <ProductDetailsView />
    </SWRConfig>
  );
}
