import React from "react";
import { SWRConfig } from "swr";
import CategoryView from "./category-view";
import { Categories } from "@/app/models/Categories";
import { categoryServices } from "@/lib/http-services";

export default async function CategoryList() {
  const categories = await categoryServices.getAllCategories();

  if (!categories || categories.length === 0) {
    return <p>No categories available.</p>;
  }

  return (
    <SWRConfig value={{ fallback: { 'https://dummyjson.com/products/categories': categories } }}>
      <CategoryView />
    </SWRConfig>
  );
}