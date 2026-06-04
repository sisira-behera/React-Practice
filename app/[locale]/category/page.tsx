import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import ProductList from "../../components/product/product-category/product-list";
import CategoryList from "../../components/product/product-category/category-list";
import { Suspense } from "react";

export default async function CategoryListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
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
            <Suspense fallback={<div>Loading Products...</div>}>
              <ProductList />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
