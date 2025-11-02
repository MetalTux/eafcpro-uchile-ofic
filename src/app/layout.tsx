// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'ESPORT - U. de Chile Ofic. - Pro Clubs',
  description: 'Seguimiento de jugadores, partidos y estadísticas del equipo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}