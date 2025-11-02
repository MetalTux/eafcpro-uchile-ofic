// src/app/(public)/jugadores/[id]/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Navegación - Skeleton */}
        <div className="mb-6">
          <div className="h-6 bg-primary-400 rounded w-32 animate-pulse"></div>
        </div>

        {/* Header del Jugador - Skeleton */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 animate-pulse">
          <div className="h-2 bg-gray-300"></div>
          <div className="p-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
              </div>

              {/* Información principal */}
              <div className="flex-1 space-y-4">
                <div className="h-10 bg-gray-300 rounded w-3/4 mx-auto lg:mx-0"></div>
                <div className="h-8 bg-gray-300 rounded w-1/4 mx-auto lg:mx-0"></div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="text-center">
                      <div className="h-6 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </div>
                  ))}
                </div>

                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </div>

              {/* Rating */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gray-300 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de contenido - Skeleton */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Columna izquierda */}
          <div className="xl:col-span-2 space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                <div className="h-8 bg-gray-300 rounded w-1/3 mb-6"></div>
                <div className="space-y-4">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="flex justify-between items-center">
                      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/6"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Columna derecha */}
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                <div className="h-8 bg-gray-300 rounded w-1/2 mb-6"></div>
                <div className="space-y-4">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="space-y-2">
                      <div className="flex justify-between">
                        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/6"></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}