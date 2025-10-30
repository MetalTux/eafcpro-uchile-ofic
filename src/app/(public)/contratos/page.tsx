export default function ContratosPage() {
  const contratosEjemplo = [
    {
      id: 1,
      jugador: "Juan Pérez",
      posicion: "Delantero",
      salario: "€50,000",
      inicio: "2024-01-01",
      fin: "2026-12-31",
      clausula: "€100,000,000",
      estado: "activo"
    },
    {
      id: 2,
      jugador: "Carlos López",
      posicion: "Centrocampista",
      salario: "€45,000",
      inicio: "2024-01-01",
      fin: "2025-12-31",
      clausula: "€80,000,000",
      estado: "activo"
    },
    {
      id: 3,
      jugador: "Miguel Rodríguez",
      posicion: "Defensa",
      salario: "€40,000",
      inicio: "2023-07-01",
      fin: "2024-06-30",
      clausula: "€60,000,000",
      estado: "por renovar"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Contratos</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Información contractual de los jugadores, duración y términos de los acuerdos.
          </p>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600">3</div>
            <div className="text-gray-600">Contratos Activos</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent-600">1</div>
            <div className="text-gray-600">Por Renovar</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600">€135,000</div>
            <div className="text-gray-600">Salario Mensual Total</div>
          </div>
        </div>

        {/* Lista de Contratos */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Jugador</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Posición</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Salario</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Vigencia</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Cláusula</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Estado</th>
                </tr>
              </thead>
              <tbody>
                {contratosEjemplo.map((contrato) => (
                  <tr key={contrato.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-800">{contrato.jugador}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">{contrato.posicion}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-800">{contrato.salario}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">
                        <div>Desde: {contrato.inicio}</div>
                        <div>Hasta: {contrato.fin}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-primary-600">{contrato.clausula}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        contrato.estado === 'activo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {contrato.estado === 'activo' ? 'Activo' : 'Por renovar'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}