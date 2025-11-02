// src/app/(public)/jugadores/page.tsx
import { getPlayers } from '@/lib/data/players'
import PlayerGrid from './components/PlayerGrid'
import PlayerFilters from './components/PlayerFilters'

export default async function JugadoresPage() {
  const players = await getPlayers()
  
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

        <PlayerFilters totalPlayers={players.length} />
        <PlayerGrid players={players} />
      </div>
    </div>
  )
}