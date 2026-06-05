import React from "react";
import { Product } from "@/app/models/Product";
import { SWRConfig } from "swr";
import CategoryChildrenView from "./category-children-view";

// Simulated async data fetch (could be from DB or API)
async function getProducts(slugId: string) {
  const url = `https://dummyjson.com/products/category/${slugId}`;
  console.log('Category Page Child Component:', url);
  const response = await fetch(url, { cache: 'no-store' }); // ensures SSR
  const data = await response.json();
  return data.products as Product[];

  // In real apps, replace with DB query or API call
  // return products; // This is our mock data from lib/db.ts
}

//  Correct Type definition
type ChildProps = {
  slug: string;
};

export default async function CategoryChildrenList({ slug }: ChildProps) {
 console.log('Category Page Child Component Slug::::', slug);

  const products = await getProducts(slug);

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

return (
// Pass the server data into the fallback object using the API URL as the key
    <SWRConfig value={{ fallback: {'https://dummyjson.com/products/category/${slug}': products } }}>
      <CategoryChildrenView  slug = { slug } />
    </SWRConfig>
  );
}