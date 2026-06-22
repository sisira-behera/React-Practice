import CardSkeleton from "@/app/components/product/product-category/card-skeleton";

export default function Loading() {
  return (
    <main className="p-8">
      {/* Updated 12-Column Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        {/* Column 2: Takes up ~66% (8 out of 12 columns) on MD and up */}
        <div className="relative w-full md:col-span-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
