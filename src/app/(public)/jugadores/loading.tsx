export default function Loading() {
  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Encabezado - Skeleton */}
        <div className="text-center mb-12">
          <div className="h-10 bg-primary-400 rounded w-1/4 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-primary-400 rounded w-1/2 mx-auto animate-pulse"></div>
        </div>

        {/* Filtros - Skeleton */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-pulse">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="h-10 bg-gray-200 rounded w-32"></div>
              <div className="h-10 bg-gray-200 rounded w-64"></div>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="h-8 bg-gray-200 rounded w-12 mx-auto mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
              <div className="text-center">
                <div className="h-8 bg-gray-200 rounded w-8 mx-auto mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Jugadores - Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 animate-pulse">
              <div className="h-2 bg-gray-300"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-100 rounded-lg">
                  <div className="h-6 bg-gray-300 rounded"></div>
                  <div className="h-6 bg-gray-300 rounded"></div>
                  <div className="h-6 bg-gray-300 rounded"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-10 bg-gray-300 rounded flex-1"></div>
                  <div className="h-10 bg-gray-300 rounded w-10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}