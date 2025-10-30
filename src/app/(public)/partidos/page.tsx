import Link from 'next/link';

export default function PartidosPage() {
  const partidosEjemplo = [
    {
      id: 1,
      fecha: "2024-03-15",
      hora: "20:00",
      rival: "Real Madrid",
      competicion: "Liga Pro Clubs",
      resultado: "3-1",
      estado: "finalizado",
      golesFavor: 3,
      golesContra: 1,
      posesion: 52,
      tiros: 15,
      tirosPuerta: 8
    },
    {
      id: 2,
      fecha: "2024-03-22",
      hora: "21:30",
      rival: "FC Barcelona",
      competicion: "Liga Pro Clubs",
      resultado: "-",
      estado: "programado",
      golesFavor: 0,
      golesContra: 0,
      posesion: 0,
      tiros: 0,
      tirosPuerta: 0
    },
    {
      id: 3,
      fecha: "2024-03-29",
      hora: "19:45",
      rival: "Atlético Madrid",
      competicion: "Copa Pro Clubs",
      resultado: "2-2",
      estado: "finalizado",
      golesFavor: 2,
      golesContra: 2,
      posesion: 48,
      tiros: 12,
      tirosPuerta: 6
    }
  ];

  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Partidos</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Sigue todos los encuentros del equipo, resultados en tiempo real y análisis de cada partido.
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <select className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Todos los partidos</option>
                <option>Liga Pro Clubs</option>
                <option>Copa Pro Clubs</option>
                <option>Amistosos</option>
              </select>
              <select className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Todos los estados</option>
                <option>Programados</option>
                <option>En vivo</option>
                <option>Finalizados</option>
              </select>
            </div>
            <div className="flex gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">15</div>
                <div className="text-gray-600">Partidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600">10</div>
                <div className="text-gray-600">Victorias</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Partidos */}
        <div className="space-y-6">
          {partidosEjemplo.map((partido) => (
            <div key={partido.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className={`h-2 ${
                partido.estado === 'finalizado' ? 'bg-green-500' :
                partido.estado === 'programado' ? 'bg-blue-500' : 'bg-red-500'
              }`}></div>
              
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* Información básica */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {partido.competicion}
                      </span>
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        partido.estado === 'finalizado' ? 'bg-green-100 text-green-800' :
                        partido.estado === 'programado' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {partido.estado === 'finalizado' ? 'Finalizado' : 
                         partido.estado === 'programado' ? 'Programado' : 'En vivo'}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">UCH</div>
                        <div className="text-sm text-gray-600">U. de Chile</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-800">{partido.resultado}</div>
                        <div className="text-sm text-gray-500">{partido.fecha} - {partido.hora}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">{partido.rival}</div>
                        <div className="text-sm text-gray-600">{partido.rival}</div>
                      </div>
                    </div>
                  </div>

                  {/* Estadísticas rápidas */}
                  {partido.estado === 'finalizado' && (
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-gray-800">{partido.posesion}%</div>
                        <div className="text-xs text-gray-600">Posesión</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-800">{partido.tiros}</div>
                        <div className="text-xs text-gray-600">Tiros</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-800">{partido.tirosPuerta}</div>
                        <div className="text-xs text-gray-600">Tiros a puerta</div>
                      </div>
                    </div>
                  )}

                  {/* Acciones */}
                  <div className="flex gap-2">
                    <Link 
                      href={`/partidos/${partido.id}`}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Ver Detalles
                    </Link>
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