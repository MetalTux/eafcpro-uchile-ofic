import Link from "next/link";

export default function JugadorPerfilPage({ params }: { params: { id: string } }) {
  // Datos de ejemplo - luego vendrán de la BD
  const jugador = {
    id: parseInt(params.id),
    nombre: "Juan Pérez",
    posicion: "Delantero",
    numero: 9,
    equipo: "U DE CHILE OFICIAL",
    nacionalidad: "Chileno",
    edad: 25,
    altura: "180 cm",
    peso: "75 kg",
    piePreferido: "Derecho",
    fechaNacimiento: "1999-05-15",
    valorMercado: "€5.000.000",
    imagen: "/images/jugadores/jugador1.jpg",
    biografia: "Delantero destacado por su gran capacidad goleadora y velocidad. Llegó al club en 2023 y rápidamente se convirtió en pieza fundamental del equipo.",
    
    estadisticas: {
      partidos: 15,
      goles: 12,
      asistencias: 5,
      rating: 8.7,
      minutosJugados: 1250,
      tarjetasAmarillas: 2,
      tarjetasRojas: 0,
      promedioPases: 45.2,
      precisionPases: 85.5,
      promedioTiros: 3.8,
      precisionTiros: 60.2,
      promedioRegates: 2.5,
      exitosoRegates: 70.4,
      promedioTackles: 1.2,
      exitosoTackles: 80.0,
      promedioIntercepciones: 1.8,
    },

    contrato: {
      salario: "€50,000",
      fechaInicio: "2024-01-01",
      fechaFin: "2026-12-31",
      clausula: "€100,000,000"
    },

    historialPartidos: [
      { id: 1, fecha: "2024-01-10", rival: "Real Madrid", resultado: "3-1", goles: 2, asistencias: 1, rating: 9.2 },
      { id: 2, fecha: "2024-01-17", rival: "FC Barcelona", resultado: "2-2", goles: 1, asistencias: 0, rating: 7.8 },
      { id: 3, fecha: "2024-01-24", rival: "Atlético Madrid", resultado: "1-0", goles: 0, asistencias: 0, rating: 6.9 },
      { id: 4, fecha: "2024-02-01", rival: "Sevilla FC", resultado: "4-2", goles: 3, asistencias: 1, rating: 9.8 },
    ]
  };

  // Función para determinar el color de la posición
  const colorPosicion = (posicion: string) => {
    return posicion === "Portero" ? "bg-yellow-500" :
           posicion === "Defensa" ? "bg-blue-500" :
           posicion === "Centrocampista" ? "bg-green-500" : "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Navegación */}
        <nav className="mb-6">
          <Link 
            href="/jugadores" 
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al plantel
          </Link>
        </nav>

        {/* Header del Jugador */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className={`h-2 ${colorPosicion(jugador.posicion)}`}></div>
          <div className="p-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Avatar y número */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-6xl">
                  {jugador.numero}
                </div>
              </div>

              {/* Información principal */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl font-heading font-bold text-gray-800 mb-2">{jugador.nombre}</h1>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-4">
                  <span className={`px-4 py-2 rounded-full text-white text-lg font-semibold ${colorPosicion(jugador.posicion)}`}>
                    {jugador.posicion}
                  </span>
                  <span className="text-3xl font-bold text-primary-600">#{jugador.numero}</span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Edad</div>
                    <div className="text-lg font-semibold">{jugador.edad} años</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Nacionalidad</div>
                    <div className="text-lg font-semibold">{jugador.nacionalidad}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Altura</div>
                    <div className="text-lg font-semibold">{jugador.altura}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Peso</div>
                    <div className="text-lg font-semibold">{jugador.peso}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{jugador.biografia}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>Pie preferido: <strong>{jugador.piePreferido}</strong></span>
                  <span>Valor de mercado: <strong>{jugador.valorMercado}</strong></span>
                </div>
              </div>

              {/* Rating destacado */}
              <div className="flex-shrink-0">
                <div className="text-center bg-primary-50 rounded-2xl p-6">
                  <div className="text-5xl font-bold text-primary-600 mb-2">{jugador.estadisticas.rating}</div>
                  <div className="text-gray-600 font-semibold">Rating Promedio</div>
                  <div className="text-sm text-gray-500 mt-2">Temporada 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Columna izquierda: Estadísticas principales */}
          <div className="xl:col-span-2 space-y-8">
            {/* Estadísticas principales */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">Estadísticas Principales</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">{jugador.estadisticas.partidos}</div>
                  <div className="text-gray-600">Partidos</div>
                </div>
                <div className="text-center p-4 bg-accent-50 rounded-lg">
                  <div className="text-3xl font-bold text-accent-600">{jugador.estadisticas.goles}</div>
                  <div className="text-gray-600">Goles</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{jugador.estadisticas.asistencias}</div>
                  <div className="text-gray-600">Asistencias</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">{jugador.estadisticas.rating}</div>
                  <div className="text-gray-600">Rating</div>
                </div>
              </div>
            </div>

            {/* Estadísticas detalladas */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">Estadísticas Detalladas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Ataque</h3>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Goles por partido</span>
                    <span className="font-semibold">{(jugador.estadisticas.goles / jugador.estadisticas.partidos).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Asistencias por partido</span>
                    <span className="font-semibold">{(jugador.estadisticas.asistencias / jugador.estadisticas.partidos).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Tiros por partido</span>
                    <span className="font-semibold">{jugador.estadisticas.promedioTiros}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Precisión de tiros</span>
                    <span className="font-semibold">{jugador.estadisticas.precisionTiros}%</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Posesión</h3>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Pases por partido</span>
                    <span className="font-semibold">{jugador.estadisticas.promedioPases}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Precisión de pases</span>
                    <span className="font-semibold">{jugador.estadisticas.precisionPases}%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Regates por partido</span>
                    <span className="font-semibold">{jugador.estadisticas.promedioRegates}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Regates exitosos</span>
                    <span className="font-semibold">{jugador.estadisticas.exitosoRegates}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Últimos partidos */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">Últimos Partidos</h2>
              <div className="space-y-4">
                {jugador.historialPartidos.map((partido) => (
                  <div key={partido.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-sm text-gray-500">{partido.fecha}</span>
                        <span className="text-lg font-semibold text-gray-800">{partido.rival}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-600">Resultado: <strong>{partido.resultado}</strong></span>
                        <span className="text-green-600">Goles: <strong>{partido.goles}</strong></span>
                        <span className="text-blue-600">Asistencias: <strong>{partido.asistencias}</strong></span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">{partido.rating}</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha: Información adicional */}
          <div className="space-y-8">
            {/* Información del contrato */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">Información del Contrato</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Salario</span>
                  <span className="font-semibold">{jugador.contrato.salario}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Fecha de inicio</span>
                  <span className="font-semibold">{jugador.contrato.fechaInicio}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Fecha de fin</span>
                  <span className="font-semibold">{jugador.contrato.fechaFin}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Cláusula de rescisión</span>
                  <span className="font-semibold">{jugador.contrato.clausula}</span>
                </div>
              </div>
            </div>

            {/* Características del jugador */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">Características</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Velocidad</span>
                    <span className="font-semibold">88</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Disparo</span>
                    <span className="font-semibold">85</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Pase</span>
                    <span className="font-semibold">78</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Regate</span>
                    <span className="font-semibold">82</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Defensa</span>
                    <span className="font-semibold">45</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Físico</span>
                    <span className="font-semibold">75</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Acciones rápidas */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">Acciones</h2>
              <div className="space-y-3">
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                  Editar Perfil
                </button>
                <button className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                  Ver Estadísticas Completas
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Descargar Reporte
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}