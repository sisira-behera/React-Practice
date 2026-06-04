import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { AboutPageContent } from "./about-content";

import type { Metadata } from 'next';

// Export a static configuration object
export const metadata: Metadata = {
  title: 'About Us | Next Commerce',
  description: 'Welcome to our e-commerce site! We offer a wide range of products to cater to all your needs',
  openGraph: {
    title: 'About Us | Next Commerce',
    description: 'Welcome to our e-commerce site! We offer a wide range of products to cater to all your needs',
    type: 'website',
  },
};

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <AboutPageContent />
      </div>
    </div>
    </div>
  );
}
