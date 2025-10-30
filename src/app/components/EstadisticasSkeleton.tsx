export default function EstadisticaSkeleton() {
  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-300 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-96 mx-auto animate-pulse"></div>
        </div>

        {/* Estadísticas Skeleton */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center p-4 bg-gray-100 rounded-lg">
                <div className="h-10 bg-gray-300 rounded w-16 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-20 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Jugadores Skeleton */}
        <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-gray-200 rounded-lg p-4">
                <div className="h-6 bg-gray-200 rounded w-32 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}