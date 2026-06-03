"use client";
import { Category } from "@/app/models/Categories";
import useSWR from "swr";


const fetcherCategories = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched Category data:", data); // Log the raw response data
      return data;
    });

export default function CategoryView() {
  // SWR automatically uses the pre-fetched server data on initial mount
  const { data, error } = useSWR(
    "https://dummyjson.com/products/categories",
    fetcherCategories,
  );

  if (error) return <div>Failed to load.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Container */}
        {/* Mobile: 1 col | Tablet: 2 cols | Small Desktop: 3 cols | Large Desktop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          <ul>
            {/* 2. Map through the array and render each string */}
            {data?.map((category: Category) => (
              <li key={category.slug}>{category.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
