// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Jugadores', href: '/jugadores' },
    { name: 'Partidos', href: '/partidos' },
    { name: 'Estadísticas', href: '/estadisticas' },
    { name: 'Calendario', href: '/calendario' },
    { name: 'Resultados', href: '/resultados' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary-800 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        {/* Primera fila: Logo y controles */}
        <div className="flex items-center justify-between">
          {/* Logo y Nombre */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-bold text-lg">UCH</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold">U DE CHILE OFICIAL</h1>
              <p className="text-sm text-primary-200">Pro Clubs EA FC 26</p>
            </div>
          </div>

          {/* Navegación Desktop - Visible en md y superior */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-primary-200 transition-colors font-medium py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Controles del lado derecho */}
          <div className="flex items-center space-x-4">
            {/* Botón Admin - Visible en md y superior */}
            <div className="hidden md:block">
              <Link 
                href="/admin"
                className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Administrar
              </Link>
            </div>

            {/* Botón Menú Hamburguesa - Visible en móviles */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-primary-700 transition-colors"
              onClick={toggleMenu}
              aria-label="Abrir menú"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menú Móvil - Se despliega hacia abajo */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-2 pb-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-1 px-4 hover:bg-primary-700 rounded-lg transition-colors font-medium border-b border-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Botón Admin en móvil */}
            <div className="pt-1 border-t border-primary-700">
              <Link 
                href="/admin"
                className="block bg-accent-600 hover:bg-accent-700 text-white text-center py-1 px-4 rounded-lg font-semibold transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Panel de Administración
              </Link>
            </div>
          </div>
        </div>

        {/* Nombre en móvil - Debajo del header principal */}
        <div className="md:hidden mt-1 pt-2 border-t border-primary-700">
          <h1 className="text-lg font-heading font-bold">U DE CHILE OFICIAL</h1>
          <p className="text-sm text-primary-200">Pro Clubs EA FC 26</p>
        </div>
      </nav>
    </header>
  );
}