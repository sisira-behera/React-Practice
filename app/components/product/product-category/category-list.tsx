import React from "react";
import { SWRConfig } from "swr";
import CategoryView from "./category-view";
import { Categories } from "@/app/models/Categories";

// Simulated async data fetch (could be from DB or API)
async function getCategories() {
  const response = await fetch('https://dummyjson.com/products/category-list', { cache: 'force-cache' }); // ensures SSR
  const data = await response.json();
  return data as Categories;

  // In real apps, replace with DB query or API call
  // return products; // This is our mock data from lib/db.ts
}


export default async function CategoryList() {
  const categories = await getCategories();

  if (!categories || categories.length === 0) {
    return <p>No categories available.</p>;
  }

return (
// Pass the server data into the fallback object using the API URL as the key
    <SWRConfig value={{ fallback: { 'https://dummyjson.com/products/categories': categories } }}>
      <CategoryView />
    </SWRConfig>
  );
}