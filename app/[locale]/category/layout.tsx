// app/shop/layout.tsx
import CategoryList from "@/app/components/product/product-category/category-list";
import React, { Suspense } from "react";

export default function CategoryListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Updated 12-Column Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Column 1: Takes up ~33% (4 out of 12 columns) on MD and up */}
            <div className="text-center md:text-left md:col-span-2">
              <Suspense fallback={<div>Loading Categories...</div>}>
                <CategoryList />
              </Suspense>
            </div>

            {/* Column 2: Takes up ~66% (8 out of 12 columns) on MD and up */}
            <div className="relative w-full md:col-span-10 rounded-2xl overflow-hidden shadow-2xl">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
