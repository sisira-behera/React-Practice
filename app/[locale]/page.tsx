import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import Image from "next/image";
import HomeContent from '../components/home-content';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = await params;
  setRequestLocale(locale as Locale);
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <HomeContent />
      </main>
    </div>
  );
}
