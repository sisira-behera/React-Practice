"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Split the path into segments and remove empty strings
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {/* Always display the Home link */}
        <li className="inline-flex items-center">
          <Link href="/" className="text-gray-700 hover:text-gray-900 inline-flex items-center">
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          // Build the cumulative path for each nested route segment
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          
          // Check if it's the final segment (the active page)
          const isLast = index === pathSegments.length - 1;

          // Format text (e.g., convert "blog-posts" to "Blog Posts")
          const label = segment
            .replace(/-+/g, " ")
            .replace(/^\w/, (c) => c.toUpperCase());

          return (
            <React.Fragment key={href}>
              {/* Separator Element */}
              <span className="text-gray-400 mx-1" aria-hidden="true">/</span>
              <li>
                {isLast ? (
                  <span className="font-semibold text-gray-900" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-blue-600 transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
