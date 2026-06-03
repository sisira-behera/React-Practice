import { Link } from "@/i18n/navigation";
import Image from "next/image";
import logoGlobe from "@/assets/globe.svg"; // Static image in the assets folder

export default function AuthNavbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              <Link key="homepage" href="/" className="flex items-center gap-3">
                <span className="sr-only">Next Commerce</span>
                <Image
                  src={logoGlobe.src}
                  alt="Next Commerce"
                  width={50}
                  height={50}
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold">Next Commerce</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
