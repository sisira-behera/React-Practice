"use client";

import Image from 'next/image'; 
import { Product } from "@/app/models/Product";
import { useParams } from "next/navigation";
import useSWR from "swr";
import React, { useState } from "react";
import AddToCartButton from "../../share/addtocart/addtocart";
import { productServices } from "@/lib/http-services";

export default function ProductDetailsView() {
  
  const params = useParams();
  const locale = params.locale as string;
  const id = params.id as string;

  // SWR automatically uses the pre-fetched server data on initial mount
  const { data, error } = useSWR(
    `https://dummyjson.com/products/${id}`,
    productServices.getProductByIdFetcher,
  );

  // State managers for interactive UI elements
  const [activeImage, setActiveImage] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);

 // Set activeImage to the first image when data is available
  // Avoid setting state inside effect; derive displayed image from state or data
  const displayedImage: string = activeImage ?? data?.images?.[0] ?? "";

 
  if (error) return <div>Failed to load.</div>;
  if (!data) return <div>Loading...</div>;

   // You would ideally provide a tiny, 20px-wide version of the image for the base64 blurDataURL
  const tinyBlurBase64 = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";


  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Product Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
          {/* LEFT COLUMN: Interactive Media Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnail Navigation */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto justify-start">
              {data?.images?.map((pimg: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(pimg)}
                  className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === pimg
                      ? "border-indigo-600 ring-2 ring-indigo-600/20"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={pimg}
                    alt={`View ${idx + 1}`}
                    width={80}
                    height={80}
                    /* sizes="(max-width: 768px) 100vw 100vw, (max-width: 1200px) 200vw, 200vw" */
                    placeholder="blur"
                    blurDataURL={tinyBlurBase64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Active Display Image */}
            <div className="flex-1 aspect-square rounded-2xl bg-gray-50 overflow-hidden border border-gray-100">
              
              <Image
                    src={displayedImage}
                    alt={data?.title}
                    width={500}
                    height={500}
                    /* sizes="(max-width: 768px) 100vw 100vw, (max-width: 1200px) 200vw, 200vw" */
                    priority={true} // High priority for above-the-fold LCP
                    placeholder="blur"
                    blurDataURL={tinyBlurBase64}
                    className="w-full h-full object-cover"
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
                <AddToCartButton
                  id={data.id}
                  name={data.title}
                  price={Number(data.price)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
