import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import CategoryChildrenList from "@/app/components/product/product-category/category-children-list";

export default async function CategoryListPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);
  console.log("From Category page: ", locale, slug);

  return (
    <>
      {/* Product Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="relative w-full md:col-span-12 gap-6">
          <CategoryChildrenList slug={slug} />
        </div>
      </div>
    </>
  );
}
