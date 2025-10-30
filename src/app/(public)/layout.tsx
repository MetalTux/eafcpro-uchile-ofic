// app/(public)/layout.tsx - versión ajustada
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-primary-700">
      <Header />
      <main className="flex-1"> {/* Removido container y padding aquí */}
        {children}
      </main>
      <Footer />
    </div>
  )
}