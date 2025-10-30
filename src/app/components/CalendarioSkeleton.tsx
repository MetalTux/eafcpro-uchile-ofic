export default function CalendarioSkeleton() {
  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-300 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-96 mx-auto animate-pulse"></div>
        </div>

        {/* Calendario Skeleton */}
        <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
          <div className="flex justify-between items-center mb-6">
            <div className="h-8 bg-gray-200 rounded w-32"></div>
            <div className="flex gap-2">
              <div className="h-10 bg-gray-200 rounded w-24"></div>
              <div className="h-10 bg-gray-200 rounded w-24"></div>
            </div>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="w-3 h-12 bg-gray-300 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 rounded w-48"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-20"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}