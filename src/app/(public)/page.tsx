// app/(public)/page.tsx
import Link from "next/link";

export default function Home() {
  const sections = [
    {
      id: 1,
      title: "Jugadores",
      description: "Consulta el plantel completo, perfiles individuales, estadísticas y información detallada de cada jugador del equipo.",
      href: "/jugadores",
      icon: "👥",
      stats: "25 Jugadores",
      color: "bg-primary-500"
    },
    {
      id: 2,
      title: "Partidos",
      description: "Sigue todos los encuentros del equipo, resultados en tiempo real, formaciones y análisis de cada partido.",
      href: "/partidos", 
      icon: "⚽",
      stats: "12 Partidos",
      color: "bg-accent-500"
    },
    {
      id: 3,
      title: "Estadísticas",
      description: "Métricas detalladas, comparativas entre jugadores, evolución del equipo y registros históricos.",
      href: "/estadisticas",
      icon: "📊",
      stats: "15+ Métricas",
      color: "bg-primary-600"
    },
    {
      id: 4,
      title: "Calendario",
      description: "Planificación completa de la temporada, fechas importantes y próximos enfrentamientos.",
      href: "/calendario",
      icon: "📅",
      stats: "Próximos 8 partidos",
      color: "bg-accent-600"
    },
    {
      id: 5, 
      title: "Resultados",
      description: "Historial completo de resultados, tablas de posiciones y análisis post-partido.",
      href: "/resultados",
      icon: "🏆",
      stats: "8 Victorias",
      color: "bg-primary-500"
    },
    {
      id: 6,
      title: "Contratos",
      description: "Información contractual de los jugadores, duración y términos de los acuerdos.",
      href: "/contratos",
      icon: "📝",
      stats: "5 Renovaciones",
      color: "bg-accent-500"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-500">
      {/* Hero Section - Simple y limpia */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              U DE CHILE OFICIAL
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-primary-100">
              Pro Clubs EA FC 26 - Temporada 2024
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <div className="bg-primary-600 rounded-lg px-6 py-3"> {/* Cambiado a 600 */}
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm text-primary-100">Victorias</div>
              </div>
              <div className="bg-primary-600 rounded-lg px-6 py-3"> {/* Cambiado a 600 */}
                <div className="text-2xl font-bold">25</div>
                <div className="text-sm text-primary-100">Jugadores</div>
              </div>
              <div className="bg-primary-600 rounded-lg px-6 py-3"> {/* Cambiado a 600 */}
                <div className="text-2xl font-bold">82%</div>
                <div className="text-sm text-primary-100">Efectividad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Explora Nuestro Club
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto text-lg">
              Accede a toda la información del equipo, desde perfiles de jugadores hasta 
              estadísticas detalladas y resultados en tiempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div 
                key={section.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
              >
                {/* Header de la tarjeta con color sólido */}
                <div className={`${section.color} h-4`}></div>
                
                {/* Contenido de la tarjeta */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{section.icon}</span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {section.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-gray-800 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  
                  <Link 
                    href={section.href}
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <span>Acceder</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Simple */}
      <section className="py-12 bg-primary-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              ¿Listo para seguir al equipo?
            </h2>
            <p className="text-primary-100 mb-8 text-lg">
              Mantente actualizado con toda la información del Club Deportivo U. de Chile.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/partidos"
                className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Ver Próximos Partidos
              </Link>
              <Link 
                href="/jugadores"
                className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Conocer Jugadores
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
