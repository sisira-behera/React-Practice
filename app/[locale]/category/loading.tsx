import CardSkeleton from "../components/product/product-category/card-skeleton";

export default function Loading() {
  return (
    <main className="p-8">
      {/* Updated 12-Column Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Column 1: Takes up ~33% (4 out of 12 columns) on MD and up */}
        <div className="text-center md:text-left md:col-span-2"></div>

        {/* Column 2: Takes up ~66% (8 out of 12 columns) on MD and up */}
        <div className="relative w-full md:col-span-10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Render multiple skeletons to mimic a grid layout */}
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </div>
    </main>
  );
}
