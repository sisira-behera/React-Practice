"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function ProductSizeColors() {
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

  // State managers for interactive UI elements
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <>
      {/* Variant Picker: Sizes */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">Size</h3>
          <a
            href="#sizing"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Size guide
          </a>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 px-4 text-sm font-medium rounded-lg border text-center transition-all uppercase ${
                selectedSize === size
                  ? "border-indigo-600 bg-indigo-50 text-indigo-600 font-semibold"
                  : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      {/* Variant Picker: Colors */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-900">
          Color: <span className="text-gray-500">{selectedColor}</span>
        </h3>
        <div className="flex items-center gap-3 mt-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                selectedColor === color.name
                  ? "ring-2 ring-indigo-600 ring-offset-2"
                  : "border-gray-300"
              } ${color.class}`}
              title={color.name}
            >
              {selectedColor === color.name && (
                <div
                  className={`w-2 h-2 rounded-full ${color.name === "Chalk White" ? "bg-black" : "bg-white"}`}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
