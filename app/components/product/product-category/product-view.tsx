'use client';
import Image from 'next/image';
import file from '@/assets/file.svg'; // Static image in the assets folder
import useSWR from 'swr';
import AddToCartButton from '../../share/addtocart/addtocart';
import { Link } from '@/i18n/navigation';
import { Product } from '@/app/models/Product';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';


import { productServices } from '@/lib/http-services';

export default function ProductView({ id, name, price }: { id: string; name: string; price: number }) {
  
  
  // SWR automatically uses the pre-fetched server data on initial mount
  const { data, error } = useSWR(
    "https://dummyjson.com/products",
    productServices.getAllProductsFetcher,
  );

  if (error) return <div>Failed to load.</div>;
  if (!data) return <div>Loading...</div>;

  // You would ideally provide a tiny, 20px-wide version of the image for the base64 blurDataURL
  const tinyBlurBase64 = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-4 sm:px-6 lg:px-8">
        {data?.map((product: Product) => (
          <div key={product.id} className="bg-gray-100 p-4 shadow rounded-lg">
            {/* Image Box */}
            <div className="relative w-full h-64 overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={product.thumbnail}
                alt="{product.title || 'Product Image'}"
               /*  width={200}
                height={200} */
                fill
                /* sizes="(max-width: 768px) 100vw 100vw, (max-width: 1200px) 200vw, 200vw" */
                placeholder="blur"
                blurDataURL={tinyBlurBase64}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Optional "New" Badge overlay */}
              {product.isNew && (
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  New
                </span>
              )}
            </div>

            {/* Product Info Content Box */}
            <div className="flex-1 flex flex-col pt-4 pb-2 px-1">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                {product.category}
              </p>

              {/* line-clamp-2 fixes container breaking if name stretches across multiple lines */}
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[2.5rem] group-hover:text-blue-600 transition-colors">
                <Link
                  key={product.id}
                  href={{ pathname: "/products/[id]", params: { id: product.id } }}
                  className="relative inline-block text-indigo-600"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.title}
                </Link>
              </h3>

              {/* Price and Action Section */}
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-50">
                <span className="text-lg font-bold text-gray-900">
                  {product.price}
                </span>

                {/* Add add to cart Button */}
                <AddToCartButton
                  id={product?.id}
                  name={product?.title}
                  price={Number(product?.price)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}