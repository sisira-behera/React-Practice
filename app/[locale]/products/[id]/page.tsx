import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ProductDetailContent } from '../product-detail-content';
import ProductDetails from '../../components/product/product-details/product-details';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params;
  setRequestLocale(locale as Locale);

  if (id === "0") {
    throw new Error("Simulated product catalog network failure.");
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <ProductDetailContent id={id} /> {/* This component can be used for static content or translations related to the product detail page */}
        <ProductDetails params={{id}} /> {/* This component fetches and displays product details */}
      </div>
    </div>
  );
}
