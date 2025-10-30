// components/layout/Header.tsx
export default function Header() {
  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Jugadores', href: '/jugadores' },
    { name: 'Partidos', href: '/partidos' },
    { name: 'Estadísticas', href: '/estadisticas' },
    { name: 'Calendario', href: '/calendario' },
    { name: 'Resultados', href: '/resultados' },
  ]

  return (
    <header className="bg-primary-800 text-white shadow-lg"> {/* Azul más oscuro */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y Nombre */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-bold text-lg">UCH</span>
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold">U DE CHILE OFICIAL</h1>
              <p className="text-sm text-primary-200">Pro Clubs EA FC 26</p> {/* Texto más claro */}
            </div>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-primary-200 transition-colors font-medium py-2" /* Hover más claro */
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Botón Admin */}
          <div className="hidden md:block">
            <a 
              href="/admin"
              className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Administrar
            </a>
          </div>
        </div>

        {/* Navegación Mobile */}
        <div className="md:hidden mt-4">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm hover:text-primary-200 transition-colors whitespace-nowrap py-1"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}