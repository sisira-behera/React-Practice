"use client";

import { useAuth } from "@/app/[locale]/context/AuthContext";
import { Link } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useAuth(); // Extracted from our global context hook


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log({ email});

    // Simulate API authentication success
     // 1. Simulating an API call authentication
    const fakeFetchedUser = {
      id: 'xyz123',
      name: email.split('@')[0], // email.split('@')[0];
      email: email,
    };

    // 2. Global state dispatching
    loginUser(fakeFetchedUser); 

    // 3. Navigate away to home or dashboard after successful login
    router.push("/");
  };
  return (
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
  );
}

      
      
      
      
