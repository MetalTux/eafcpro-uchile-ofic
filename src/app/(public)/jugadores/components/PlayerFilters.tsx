'use client'

import { useState } from 'react'

interface PlayerFiltersProps {
  totalPlayers: number
}

export default function PlayerFilters({ totalPlayers }: PlayerFiltersProps) {
  const [search, setSearch] = useState('')
  const [position, setPosition] = useState('')

  const posiciones = ["Todos", "Portero", "Defensa", "Centrocampista", "Delantero"]

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* Filtro por posición */}
          <select 
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {posiciones.map((pos) => (
              <option key={pos} value={pos}>{pos}</option>
            ))}
          </select>

          {/* Búsqueda */}
          <input 
            type="text" 
            placeholder="Buscar jugador..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 w-full md:w-64"
          />
        </div>

        {/* Estadísticas rápidas */}
        <div className="flex gap-6 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">{totalPlayers}</div>
            <div className="text-gray-600">Jugadores</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-600">{posiciones.length - 1}</div>
            <div className="text-gray-600">Posiciones</div>
          </div>
        </div>
      </div>
    </div>
  )
}