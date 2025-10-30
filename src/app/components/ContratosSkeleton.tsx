export default function ContratosLoading() {
  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-300 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-96 mx-auto animate-pulse"></div>
        </div>

        {/* Resumen Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-lg p-6 text-center animate-pulse">
              <div className="h-10 bg-gray-200 rounded w-16 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-24 mx-auto"></div>
            </div>
          ))}
        </div>

        {/* Tabla Skeleton */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
          <div className="p-6 border-b border-gray-200">
            <div className="h-6 bg-gray-200 rounded w-32"></div>
          </div>
          <div className="p-6 space-y-4">
            {[1, 2, 3].map((row) => (
              <div key={row} className="flex gap-4">
                <div className="h-4 bg-gray-200 rounded flex-1"></div>
                <div className="h-4 bg-gray-200 rounded flex-1"></div>
                <div className="h-4 bg-gray-200 rounded flex-1"></div>
                <div className="h-4 bg-gray-200 rounded flex-1"></div>
                <div className="h-4 bg-gray-200 rounded flex-1"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}