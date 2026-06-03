'use client';
import Image from 'next/image';
import file from '@/assets/file.svg'; // Static image in the assets folder
import useSWR from 'swr';
import AddToCartButton from '../../share/addtocart/addtocart';
import { Link } from '@/i18n/navigation';
import { Product } from '@/app/models/Product';


const fetcherProducts = (url: string) => fetch(url).then((res) => res.json()).then((data) => {
    console.log('Fetched data:', data.products); // Log the raw response data
    return data.products;
});

export default function ProductView() {
  // SWR automatically uses the pre-fetched server data on initial mount
  const { data, error } = useSWR('https://dummyjson.com/products', fetcherProducts);


  if (error) return <div>Failed to load.</div>;
  if (!data) return <div>Loading...</div>;

 return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Container */}
        {/* Mobile: 1 col | Tablet: 2 cols | Small Desktop: 3 cols | Large Desktop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          
          {data?.map((product: Product) => (
            <div 
              key={product.id} 
              className="group relative flex flex-col justify-between bg-white rounded-2xl border border-gray-100 p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              
              {/* Image Box */}
              <div className="relative w-full h-64 overflow-hidden rounded-xl bg-gray-100">
                <Image 
                  src={product.thumbnail}
                  alt="{product.title || 'Product Image'}"
                  width={200} height={200}
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
                  <Link key={product.id} href={`/products/${product.id}` as any} className="relative inline-block">
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
                  <AddToCartButton productId={product.id} />
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
 
}