'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

const CATEGORIES = [
  { label: 'Beauty', value: 'beauty' },
  { label: 'Fragrances', value: 'fragrances' },
  { label: 'Furniture', value: 'furniture' },
];

export default function ProductFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Helper function to update parameters safely
  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    // startTransition keeps the UI responsive while server rerenders the data
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  const currentCategory = searchParams.get('category') || '';
  const currentSort = searchParams.get('sort') || '';

  console.log('Current Category', currentCategory);
  console.log('Current Sort', currentSort);


  return (
    <div className={`space-y-6 ${isPending ? 'opacity-60' : ''}`}>
      {/* Category Section */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input
              type="radio"
              name="category"
              checked={currentCategory === ''}
              onChange={() => updateFilter('category', null)}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span>All Categories</span>
          </label>
          
          {CATEGORIES.map((cat) => (
            <label key={cat.value} className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="radio"
                name="category"
                checked={currentCategory === cat.value}
                onChange={() => updateFilter('category', cat.value)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sorting Section */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Sort By</h4>
        <select
          value={currentSort}
          onChange={(e) => updateFilter('sort', e.target.value || null)}
          className="w-full border p-2 rounded-md bg-white text-sm focus:outline-blue-500"
        >
          <option value="">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Clear Filters Button */}
      {(currentCategory || currentSort) && (
        <button
          onClick={() => router.push(pathname)}
          className="w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs py-2 rounded font-medium transition"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}
