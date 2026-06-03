import { Link } from "@/i18n/navigation";
import Image from "next/image";
import logo from "@/assets/next.svg"; // Static image in the assets folder
import logoGlobe from "@/assets/globe.svg"; // Static image in the assets folder

import React, { useState } from "react";
import ThemeSelector from "./themeselector";
import LanguageSwitcher from "../../share/locale-selector/LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const productId = "1"; // We can set in the props as well

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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              key="about"
              href="/about"
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              About
            </Link>
            <Link
              key="category"
              href="/category"
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Category
            </Link>
            <Link
              key="plp"
              href="/plp"
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              PLP
            </Link>
            <Link
              key={productId}
              href={{ pathname: "/products/[id]", params: { id: productId } }}
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              PDP
            </Link>
            <span className="p-1"> | </span>
            {/* Language Switcher and Auth Links */}
            <Link
              key="login"
              href="/login"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              LOG IN
            </Link>
            <span className="p-1"> | </span>
            <LanguageSwitcher />
            {/* Dark Mode Toggle */}
            {/* <ThemeSelector /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-200 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          <hr />
          <Link
            key="about"
            href="/about"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            About
          </Link>
          <Link
            key="category"
            href="/category"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Category
          </Link>
          <Link
            key="plp"
            href="/plp"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            PLP
          </Link>
          <Link
            key={productId}
            href={{ pathname: "/products/[id]", params: { id: productId } }}
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            PDP
          </Link>
          <Link
            key="login"
            href="/login"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500 font-semibold"
          >
            LOG IN
          </Link>
          <hr />
          <LanguageSwitcher /> <span className="p-1"> | </span> <ThemeSelector />
        </div>
      )}
    </nav>
  );
}
