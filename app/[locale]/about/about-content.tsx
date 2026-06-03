'use client';

import { useTranslations } from "next-intl";

export function AboutPageContent() {
  const t = useTranslations('AboutPage');
  
  return (
    <>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        {t('title')}
      </h1>
      <p className="max-w-sm text-lg leading-7 text-gray-600 dark:text-gray-400">
        {t('description')}
      </p>
    </>
  );
}
