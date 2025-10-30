export default function EstadisticasPage() {
  const estadisticasEjemplo = {
    equipo: {
      partidosJugados: 15,
      partidosGanados: 10,
      partidosEmpatados: 3,
      partidosPerdidos: 2,
      golesFavor: 35,
      golesContra: 18,
      diferenciaGoles: 17,
      puntos: 33
    },
    jugadoresDestacados: [
      { nombre: "Juan Pérez", goles: 12, asistencias: 5, rating: 8.7 },
      { nombre: "Carlos López", goles: 8, asistencias: 9, rating: 8.2 },
      { nombre: "Miguel Rodríguez", goles: 5, asistencias: 7, rating: 7.9 }
    ]
  };

  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Estadísticas</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Métricas detalladas, comparativas entre jugadores y evolución del equipo.
          </p>
        </div>

        {/* Estadísticas del Equipo */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">Estadísticas del Equipo</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">{estadisticasEjemplo.equipo.partidosGanados}</div>
              <div className="text-gray-600">Victorias</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600">{estadisticasEjemplo.equipo.partidosEmpatados}</div>
              <div className="text-gray-600">Empates</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600">{estadisticasEjemplo.equipo.partidosPerdidos}</div>
              <div className="text-gray-600">Derrotas</div>
            </div>
            <div className="text-center p-4 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600">{estadisticasEjemplo.equipo.puntos}</div>
              <div className="text-gray-600">Puntos</div>
            </div>
          </div>
        </div>

        {/* Jugadores Destacados */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">Jugadores Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {estadisticasEjemplo.jugadoresDestacados.map((jugador, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{jugador.nombre}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Goles:</span>
                    <span className="font-semibold">{jugador.goles}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Asistencias:</span>
                    <span className="font-semibold">{jugador.asistencias}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-semibold text-primary-600">{jugador.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}