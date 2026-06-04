This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

###########################
# Tasks
############################

# 1. Next.js Project Initialization & App Router Fundamentals

  - Hands-On Tasks:
      - Initialize the project: npx create-next-app@latest ecommerce-app --typescript --tailwind
      - Review the folder structure (app/, public/, components/).
      - Create initial pages: app/page.tsx and app/about/page.tsx.
      - Observe Hot Reload behavior on the development server.
      - Analyze app/layout.tsx to understand the global application shell.
  - Technical Explanation: Introduction to foundational architecture, routing, nested layouts, and server components.
  - Real-World Use Case: Enterprise e-commerce platforms utilize root layouts for global navigation, headers, footers, and localization.
  

# 2. Dynamic Routing & Navigation System

  - Hands-On Tasks:
      - Develop dynamic routes: app/products/[id]/page.tsx.
      - Organize route groups: app/(auth)/login/page.tsx.
      - Build a reusable Breadcrumb component using usePathname().
      - Implement not-found.tsx and error.tsx.
      - Execute programmatic navigation with useRouter().push().
  - Technical Explanation: Focus on scalable navigation, dynamic parameters, and robust error handling strategies.
  - Real-World Use Case: Product Detail Pages (PDPs) utilize dynamic routes, while custom error pages maintain user experience during API failures.

# 3. Server Components vs. Client Components Architecture

  - Hands-On Tasks:
      - Develop a ProductList Server Component.
      - Create a client-side AddToCartButton using the 'use client' directive.
      - Optimize the JavaScript bundle by delegating state management to Client Components and data fetching to Server Components.
      - Configure a global CartContext provider in app/layout.tsx.
  - Technical Explanation: Understanding the hybrid rendering model to reduce client-side JavaScript and enhance performance.
  - Real-World Use Case: Product data is fetched server-side for SEO optimization, while interactive elements remain client-side.

# 4. Data Fetching, Caching & Performance Optimization

  - Hands-On Tasks:
      - Fetch data from the DummyJSON products API. https://dummyjson.com/docs/products
      - Implement loading.tsx with skeleton loaders.
      - Utilize Promise.all() for parallel data fetching.
      - Apply Incremental Static Regeneration (ISR) with revalidation.
      - Implement <Suspense> for partial rendering.
  - Technical Explanation: Focus on streaming UI, parallel execution, and caching strategies.
  - Real-World Use Case: ISR allows product catalogs to update periodically without a full rebuild, reducing infrastructure costs.

# 5. Layout System, SEO & Metadata Management

  - Hands-On Tasks:
      - Create nested layouts for /products with category sidebars.
      - Implement static and dynamic metadata using generateMetadata().
      - Add Open Graph metadata for social sharing.
      - Integrate Google Fonts using next/font/google.
  - Technical Explanation: SEO optimization, dynamic metadata, and font optimization to improve Core Web Vitals.
  - Real-World Use Case: E-commerce sites use dynamic metadata to enhance search rankings and social media visibility.
