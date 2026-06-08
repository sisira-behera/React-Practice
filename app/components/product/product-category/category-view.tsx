"use client";
import { Category } from "@/app/models/Categories";
import { Link } from "@/i18n/navigation";
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
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid">
          {/* 2. Map through the array and render each string */}
          <ul className="nav-list">
            {data?.map((category: Category, index: number) => (
              <li className="w-full items-center inline-flex" key={index}>
                <Link
                  key={category.slug}
                  href={{
                    pathname: "/category/[slug]",
                    params: { slug: category.slug },
                  }}
                  className="inline-flex items-center gap-2 text-black-600 hover:text-indigo-800 hover:underline"
                >
                  {category.name}
                  
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
