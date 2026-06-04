"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function ProductColors() {
  const params = useParams();
  const locale = params.locale as string;

  // Sample product data configuration
  const product = {
    brand: "Electronics",
    name: "UltraLight Wireless Gaming Mouse",
    rating: 4.8,
    reviewCount: 142,
    price: 89.99,
    originalPrice: 119.99,
    description:
      "Elevate your competitive play with ultra-low latency wireless connectivity, an ergonomic 62g lightweight chassis, and our advanced optical sensor calibrated for pixel-perfect tracking accuracy.",
    colors: [
      { name: "Matte Black", class: "bg-black" },
      { name: "Chalk White", class: "bg-gray-100" },
      { name: "Cyber Pink", class: "bg-pink-500" },
    ],
    sizes: ["Standard", "Mini"],
    specs: [
      { name: "Sensor Type", value: "ApexTrack Optical" },
      { name: "Battery Life", value: "Up to 90 Hours" },
      { name: "Weight", value: "62 grams" },
      { name: "Connectivity", value: "2.4GHz Wireless / USB-C" },
    ],
    images: [
      "https://unsplash.com",
      "https://unsplash.com",
      "https://unsplash.com",
    ],
  };

  return (
    <>
      {/* Technical Product Specifications Table */}
      <div className="mt-16 border-t border-gray-200 pt-10">
        <h3 className="text-lg font-bold text-gray-900">
          Technical Specifications
        </h3>
        <div className="mt-4 border-t border-gray-100 divide-y divide-gray-100">
          {product.specs.map((spec) => (
            <div
              key={spec.name}
              className="grid grid-cols-1 sm:grid-cols-3 py-4 text-sm"
            >
              <dt className="font-medium text-gray-500">{spec.name}</dt>
              <dd className="mt-1 sm:mt-0 sm:col-span-2 text-gray-900 font-semibold">
                {spec.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
