"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/navigation";
import router from "next/router";
import AuthNavbar from "../../components/layout/header/auth-navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log({ email, password, rememberMe });
    // Simulate login — in a real app, call your auth API here
    router.push("/");
  };

  return (
    <>
      <AuthNavbar />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 py-20 font-sans dark:bg-black">
        <div className="w-full max-w-md space-y-8">
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-950">
              Login
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                key="signup"
                href="/signup"
                className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
              >
                Sign up for free
              </Link>
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 border border-gray-200 rounded-2xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-950 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                />
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Link
                    key="forgot-password"
                    href="/forgot-password"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-950 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 bg-white"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-600 select-none"
                >
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-sm transition-all"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
