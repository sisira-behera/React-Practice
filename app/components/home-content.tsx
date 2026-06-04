'use client';

import { useTranslations } from 'next-intl';
import ContinueShopping from './share/continue-shopping/continue-shopping';

export default function HomeContent() {
  const t = useTranslations('HomePage');

  return (
    <>
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          {t('title')}
        </h1>
        <p className="max-w-sm text-lg leading-7 text-gray-600 dark:text-gray-400">
          {t('description')}
        </p>
      </div>
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <ContinueShopping>{t('continue')}</ContinueShopping>
        <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </div>
    </>
  );
}
