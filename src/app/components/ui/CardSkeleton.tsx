export default function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 animate-pulse">
      <div className="h-2 bg-gray-300"></div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-300 rounded"></div>
          <div className="h-3 bg-gray-300 rounded"></div>
        </div>
        <div className="h-10 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
}