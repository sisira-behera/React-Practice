import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { AboutPageContent } from "./about-content";

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <AboutPageContent />
      </div>
    </div>
  );
}
