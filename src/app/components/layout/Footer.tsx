// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} U DE CHILE OFICIAL - EA FC 26 Pro Clubs
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Sitio no oficial para seguimiento de estadísticas y partidos
          </p>
        </div>
      </div>
    </footer>
  )
}