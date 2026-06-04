'use client'

import React, { useState, useEffect } from "react";


export default function ThemeSelector() {

  // Safely access localStorage only in browser
  const getThemeFromStorage = () => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("theme") === "dark";
  };

  const [darkMode, setDarkMode] = useState<boolean>(getThemeFromStorage());

  // Apply theme on mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      if (typeof window !== "undefined") window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      if (typeof window !== "undefined") window.localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {darkMode ? "DM" : "LM"}
    </button>
  );
}