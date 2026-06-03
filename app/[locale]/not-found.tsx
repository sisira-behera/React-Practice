'use client'

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation'
 
export default function NotFoundPage() {

  const t = useTranslations('NotFoundPage');

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
        <Link key="homepage" href="/">
          {t('goBack')}
        </Link>
    </div>
  )
}