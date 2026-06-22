export default function CardSkeleton() {
  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow animate-pulse">
      {/* Image Placeholder */}
      <div className="h-48 bg-gray-200 rounded-md mb-4" />
      
      {/* Title Placeholder */}
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
      
      {/* Text Placeholders */}
      <div className="space-y-2 mt-4">
        <div className="h-4 bg-gray-200 rounded" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  );
}