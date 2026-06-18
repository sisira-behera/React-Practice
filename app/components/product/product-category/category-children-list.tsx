import React from "react";
import { Product } from "@/app/models/Product";
import { SWRConfig } from "swr";
import CategoryChildrenView from "./category-children-view";
import { categoryServices } from "@/lib/http-services";

type ChildProps = {
  slug: string;
};

export default async function CategoryChildrenList({ slug }: ChildProps) {
  console.log('Category Page Child Component Slug::::', slug);

  const products = await categoryServices.getProductsByCategory(slug);

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <SWRConfig
      value={{
        fallback: {
          [`https://dummyjson.com/products/category/${slug}`]: products,
        },
      }}
    >
      <CategoryChildrenView slug={slug} />
    </SWRConfig>
  );
}