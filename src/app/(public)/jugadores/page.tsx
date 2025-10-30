import Link from "next/link";

export default function JugadoresPage() {
  // Datos de ejemplo - luego vendrán de la BD
  const jugadoresEjemplo = [
    {
      id: 1,
      nombre: "Juan Pérez",
      posicion: "Delantero",
      numero: 9,
      equipo: "U DE CHILE OFICIAL",
      nacionalidad: "Chileno",
      edad: 25,
      imagen: "/images/jugadores/jugador1.jpg",
      estadisticas: {
        partidos: 15,
        goles: 12,
        asistencias: 5,
        rating: 8.7
      }
    },
    {
      id: 2,
      nombre: "Carlos López",
      posicion: "Centrocampista",
      numero: 8,
      equipo: "U DE CHILE OFICIAL", 
      nacionalidad: "Argentino",
      edad: 27,
      imagen: "/images/jugadores/jugador2.jpg",
      estadisticas: {
        partidos: 14,
        goles: 3,
        asistencias: 9,
        rating: 8.2
      }
    },
    {
      id: 3,
      nombre: "Miguel Rodríguez",
      posicion: "Defensa",
      numero: 4,
      equipo: "U DE CHILE OFICIAL",
      nacionalidad: "Chileno", 
      edad: 26,
      imagen: "/images/jugadores/jugador3.jpg",
      estadisticas: {
        partidos: 13,
        goles: 1,
        asistencias: 2,
        rating: 7.9
      }
    },
    {
      id: 4,
      nombre: "Andrés Silva",
      posicion: "Portero",
      numero: 1,
      equipo: "U DE CHILE OFICIAL",
      nacionalidad: "Chileno",
      edad: 29,
      imagen: "/images/jugadores/jugador4.jpg",
      estadisticas: {
        partidos: 12,
        goles: 0,
        asistencias: 0,
        rating: 8.5
      }
    }
  ];

  const posiciones = ["Todos", "Portero", "Defensa", "Centrocampista", "Delantero"];

  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Encabezado de la página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Plantel de Jugadores</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Conoce a los jugadores que forman parte de nuestro equipo. Cada uno aporta su talento y dedicación para lograr los objetivos.
          </p>
        </div>

        {/* Filtros y Búsqueda */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Filtro por posición */}
              <select className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                {posiciones.map((pos) => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>

              {/* Búsqueda */}
              <input 
                type="text" 
                placeholder="Buscar jugador..." 
                className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 w-full md:w-64"
              />
            </div>

            {/* Estadísticas rápidas */}
            <div className="flex gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{jugadoresEjemplo.length}</div>
                <div className="text-gray-600">Jugadores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600">4</div>
                <div className="text-gray-600">Posiciones</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Jugadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jugadoresEjemplo.map((jugador) => (
            <div key={jugador.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
              {/* Header con color según posición */}
              <div className={`h-2 ${
                jugador.posicion === "Portero" ? "bg-yellow-500" :
                jugador.posicion === "Defensa" ? "bg-blue-500" :
                jugador.posicion === "Centrocampista" ? "bg-green-500" : "bg-red-500"
              }`}></div>
              
              {/* Contenido de la tarjeta */}
              <div className="p-6">
                {/* Avatar e información básica */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {jugador.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold text-gray-800">{jugador.nombre}</h3>
                    <p className="text-primary-600 font-semibold">{jugador.posicion}</p>
                    <p className="text-gray-500 text-sm">#{jugador.numero}</p>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Edad:</span>
                    <span className="font-semibold">{jugador.edad} años</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Nacionalidad:</span>
                    <span className="font-semibold">{jugador.nacionalidad}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Partidos:</span>
                    <span className="font-semibold">{jugador.estadisticas.partidos}</span>
                  </div>
                </div>

                {/* Estadísticas rápidas */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">{jugador.estadisticas.goles}</div>
                    <div className="text-xs text-gray-600">Goles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">{jugador.estadisticas.asistencias}</div>
                    <div className="text-xs text-gray-600">Asist.</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-600">{jugador.estadisticas.rating}</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex gap-2">
                  <Link 
                    href={`/jugadores/${jugador.id}`}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Ver Perfil
                  </Link>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-lg transition-colors duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay jugadores */}
        {jugadoresEjemplo.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">👤</div>
              <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">No hay jugadores</h3>
              <p className="text-gray-600 mb-4">No se encontraron jugadores con los filtros aplicados.</p>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                Ver todos los jugadores
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}