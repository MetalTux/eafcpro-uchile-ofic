export default function ResultadosSkeleton() {
  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-300 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-96 mx-auto animate-pulse"></div>
        </div>

        {/* Filtros Skeleton */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-pulse">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="h-12 bg-gray-200 rounded-lg flex-1"></div>
            <div className="h-12 bg-gray-200 rounded-lg flex-1"></div>
          </div>
        </div>

        {/* Resultados Skeleton */}
        <div className="space-y-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 animate-pulse">
              <div className="h-2 bg-gray-300"></div>
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-4">
                      <div className="h-6 bg-gray-200 rounded w-24"></div>
                      <div className="h-6 bg-gray-200 rounded w-24"></div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="h-8 bg-gray-200 rounded w-16 mx-auto mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
                      </div>
                      <div className="text-center">
                        <div className="h-10 bg-gray-200 rounded w-20 mx-auto mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-24 mx-auto"></div>
                      </div>
                      <div className="text-center">
                        <div className="h-8 bg-gray-200 rounded w-24 mx-auto mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((stat) => (
                      <div key={stat} className="text-center">
                        <div className="h-6 bg-gray-200 rounded w-8 mx-auto mb-1"></div>
                        <div className="h-3 bg-gray-200 rounded w-12 mx-auto"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}