"use client";

import { Product } from "@/app/models/Product";
import { useParams } from "next/navigation";
import useSWR from "swr";
import React, { useState } from "react";

const getProduct = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data: Product) => {
      console.log("Fetched Product Data From PDP:", data); // Log the raw response data
      return data;
    });

export default function ProductDetailsView() {
  const params = useParams();
  const locale = params.locale as string;
  const id = params.id as string;

  // SWR automatically uses the pre-fetched server data on initial mount
  const { data, error } = useSWR(
    `https://dummyjson.com/products/${id}`,
    getProduct,
  );

  // Sample product data configuration
  /* const data = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: 99,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "BEA-ESS-ESS-001",
    weight: 4,
    dimensions: {
      width: 15.14,
      height: 13.08,
      depth: 22.99,
    },
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 3,
        comment: "Would not recommend!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Eleanor Collins",
        reviewerEmail: "eleanor.collins@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Lucas Gordon",
        reviewerEmail: "lucas.gordon@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Eleanor Collins",
        reviewerEmail: "eleanor.collins@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 48,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5784719087687",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  }; */

  // State managers for interactive UI elements
  const [activeImage, setActiveImage] = useState(data?.images?.[0]);
  const [quantity, setQuantity] = useState(1);

  if (error) return <div>Failed to load.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Product Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
          {/* LEFT COLUMN: Interactive Media Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnail Navigation */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto justify-start">
              {data?.images?.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === img
                      ? "border-indigo-600 ring-2 ring-indigo-600/20"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Active Display Image */}
            <div className="flex-1 aspect-square rounded-2xl bg-gray-50 overflow-hidden border border-gray-100">
              <img
                src={activeImage}
                alt={data?.title}
                className="w-full h-full object-cover object-center transition-duration-300"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Buying and Configuration Panel */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Brand and Title */}
              <p className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">
                {data?.brand}
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-1 sm:text-4xl">
                {data?.title}
              </h1>

              {/* Ratings and Review Indicators */}
              <div className="flex items-center mt-3">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-600">
                  {data?.rating} ({data?.reviews?.length} reviews)
                </span>
              </div>

              {/* Pricing Display */}
              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-3xl font-bold tracking-tight text-gray-900">
                  ${data?.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${data?.price}
                </span>
              </div>

              {/* Product Brief Description */}
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                {data?.description}
              </p>
            </div>

            {/* Quantity Selector and Action Buttons */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* Quantity Adjustment Counter */}
                <div className="flex items-center border border-gray-300 rounded-lg bg-white h-12 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-50 font-bold transition-colors h-full rounded-l-lg"
                  >
                    -
                  </button>
                  <span className="px-4 font-medium text-gray-900 select-none text-center min-w-[40px]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-50 font-bold transition-colors h-full rounded-r-lg"
                  >
                    +
                  </button>
                </div>

                {/* Primary Add To Cart CTA Button */}
                <button className="flex-1 w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
