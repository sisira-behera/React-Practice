import React from "react";
import { Product } from "@/app/models/Product";
import { SWRConfig } from "swr";
import ProductDetailsView from "./product-details-view";
import { productServices } from "@/lib/http-services";

export default async function ProductDetails(context: {
  params: { id: string };
}) {
  const { id } = context.params;

  const product = await productServices.getProductById(id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <SWRConfig
      value={{
        fallback: {
          [`https://dummyjson.com/products/${id}`]: product,
        },
      }}
    >
      <ProductDetailsView />
    </SWRConfig>
  );
}
