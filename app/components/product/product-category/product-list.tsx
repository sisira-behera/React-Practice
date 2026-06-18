import React from "react";
import { Product } from "@/app/models/Product";
import ProductView from "./product-view";
import { SWRConfig } from "swr";
import { productServices } from "@/lib/http-services";

export default async function ProductList() {
  const products = await productServices.getAllProducts();

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <SWRConfig value={{ fallback: { 'https://dummyjson.com/products': products } }}>
      <ProductView id={""} name={""} price={0} />
    </SWRConfig>
  );
}