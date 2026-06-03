'use client';

import { useTranslations } from 'next-intl';

export function ProductDetailContent({ id }: { id: string }) {
  const t = useTranslations('ProductDetailPage');

  return (
    <>
      <main className="relative pt-20 px-8">
        <h2 className="text-xl font-semibold">
          {t("title")} <strong>{id}</strong>
        </h2>
      </main>
    </>
  );
}
