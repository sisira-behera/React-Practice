"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";
import logo from "@/assets/next.svg"; // Static image in the assets folder
import logoGlobe from "@/assets/globe.svg"; // Static image in the assets folder

import React, { useState } from "react";
import ThemeSelector from "./themeselector";
import LanguageSwitcher from "../../share/locale-selector/LanguageSwitcher";
import Cart from "../../Cart";
// import { useAuth } from "@/app/[locale]/context/AuthContext";

export default function Navbar() {
  // const { user, logoutUser } = useAuth();
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const pathname = usePathname();

  // Extract locale from pathname (e.g., /en/about -> en)
  const locale = pathname.split("/")[1] || "en";

  const [isOpen, setIsOpen] = useState(false);

  const productId = "1"; // We can set in the props as well
  const catId = "beauty"; // We can set in the props as well

  const handleSignOut = async () => {
    await signOut({ callbackUrl: `/${locale}` });
  };

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
            <span className="ml-4 text-gray-600 dark:text-gray-400">
              | 
            </span>
            <LanguageSwitcher />
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
              key={catId}
              href={{ pathname: "/category/[slug]", params: { slug: catId } }}
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Category
            </Link>
            {/* <Link
              key="plp"
              href="/plp"
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              PLP
            </Link> */}
            <Link
              key={productId}
              href={{ pathname: "/products/[id]", params: { id: productId } }}
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              PDP
            </Link>
           
            <span className="p-1"> | </span>
            {/* Language Switcher and Auth Links */}
            {/* {user ? (
              <div className="flex gap-4">
                <span>Welcome, {user.name}!</span>
                <button onClick={logoutUser} className="text-red-500">
                  Logout
                </button>
              </div>
            ) : (
              <Link
                key="login"
                href="/login"
                className="text-sm/6 font-semibold text-gray-900 text-indigo-600"
              >
                Login
              </Link>
            )} */}
             {session && (
              <Link
                href="/myaccount"
                className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
              >
                My Account
              </Link>
            )}
            {isLoading ? (
              <span>Loading...</span>
            ) : session ? (
              <div className="flex items-center space-x-4">
                {session.user?.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span>Hi, {session.user?.name?.split(" ")[0] || "User"}!</span>
                <button 
                                onClick={() => handleSignOut()} 
                                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
                            >
                                Sign Out
                            </button>
                {/* <Link
                  key="signout"
                  href="/"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
                >
                  Sign Out
                </Link> */}
              </div>
            ) : (
              <Link
                key="login"
                href="/login"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
              >
                Sign In
              </Link>
            )}
            <span className="p-1"> | </span>
            <Cart />
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
            key={catId}
            href={{ pathname: "/category/[slug]", params: { slug: catId } }}
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Category
          </Link>
          {/* <Link
            key="plp"
            href="/plp"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            PLP
          </Link> */}
          <Link
            key={productId}
            href={{ pathname: "/products/[id]", params: { id: productId } }}
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            PDP
          </Link>
          
          <hr />
          <div className="flex flex-col space-y-2">
          {session && (
              <Link
                href="/myaccount"
                className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
              >
                My Account
              </Link>
            )}
            {isLoading ? (
              <span>Loading...</span>
            ) : session ? (
              <div className="flex items-center space-x-4">
                {session.user?.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span>Hi, {session.user?.name?.split(" ")[0] || "User"}!</span>
                <button 
                                onClick={() => handleSignOut()} 
                                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
                            >
                                Sign Out
                            </button>
                {/* <Link
                  key="signout"
                  href="/"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
                >
                  Sign Out
                </Link> */}
              </div>
            ) : (
              <Link
                key="login"
                href="/login"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
              >
                Sign In
              </Link>
            )}
            <Cart />
          <ThemeSelector />
          </div>
        </div>
      )}
    </nav>
  );
}
