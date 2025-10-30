// app/(admin)/layout.tsx
import Link from "next/link";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-heading font-bold text-primary-600">
              Panel de Administración
            </h1>
            <Link
              href="/"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Volver al sitio público
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  )
}