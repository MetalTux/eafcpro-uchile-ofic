export default function ResultadosPage() {
  const resultadosEjemplo = [
    { id: 1, fecha: "2024-03-15", rival: "Real Madrid", competicion: "Liga", resultado: "3-1", posesion: 52, tiros: 15 },
    { id: 2, fecha: "2024-03-08", rival: "Sevilla FC", competicion: "Liga", resultado: "2-0", posesion: 48, tiros: 12 },
    { id: 3, fecha: "2024-03-01", rival: "Valencia CF", competicion: "Copa", resultado: "1-1", posesion: 55, tiros: 18 },
    { id: 4, fecha: "2024-02-23", rival: "Athletic Club", competicion: "Liga", resultado: "4-2", posesion: 60, tiros: 20 }
  ];

  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Resultados</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Historial completo de resultados, tablas de posiciones y análisis post-partido.
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <select className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Todas las competiciones</option>
              <option>Liga Pro Clubs</option>
              <option>Copa Pro Clubs</option>
            </select>
            <select className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Últimos 10 partidos</option>
              <option>Último mes</option>
              <option>Toda la temporada</option>
            </select>
          </div>
        </div>

        {/* Resultados */}
        <div className="space-y-6">
          {resultadosEjemplo.map((resultado) => (
            <div key={resultado.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="h-2 bg-green-500"></div>
              
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {resultado.competicion}
                      </span>
                      <span className="text-gray-600">{resultado.fecha}</span>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">UCH</div>
                        <div className="text-sm text-gray-600">U. de Chile</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-800">{resultado.resultado}</div>
                        <div className="text-sm text-gray-500">Resultado</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">{resultado.rival}</div>
                        <div className="text-sm text-gray-600">{resultado.rival}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-800">{resultado.posesion}%</div>
                      <div className="text-xs text-gray-600">Posesión</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-800">{resultado.tiros}</div>
                      <div className="text-xs text-gray-600">Tiros</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary-600">Ver</div>
                      <div className="text-xs text-gray-600">Detalles</div>
                    </div>
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