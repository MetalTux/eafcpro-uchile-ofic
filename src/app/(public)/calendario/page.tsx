export default function CalendarioPage() {
  const eventosEjemplo = [
    { id: 1, fecha: "2024-03-15", rival: "Real Madrid", competicion: "Liga", hora: "20:00", tipo: "partido" },
    { id: 2, fecha: "2024-03-18", descripcion: "Entrenamiento técnico", tipo: "entrenamiento" },
    { id: 3, fecha: "2024-03-22", rival: "FC Barcelona", competicion: "Liga", hora: "21:30", tipo: "partido" },
    { id: 4, fecha: "2024-03-25", descripcion: "Análisis táctico", tipo: "reunion" },
    { id: 5, fecha: "2024-03-29", rival: "Atlético Madrid", competicion: "Copa", hora: "19:45", tipo: "partido" }
  ];

  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Calendario</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Planificación completa de la temporada, fechas importantes y próximos enfrentamientos.
          </p>
        </div>

        {/* Vista de Calendario */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-heading font-bold text-gray-800">Marzo 2024</h2>
            <div className="flex gap-2">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-colors">
                Mes anterior
              </button>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                Mes siguiente
              </button>
            </div>
          </div>

          {/* Lista de Eventos */}
          <div className="space-y-4">
            {eventosEjemplo.map((evento) => (
              <div key={evento.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-3 h-12 rounded ${
                  evento.tipo === 'partido' ? 'bg-red-500' :
                  evento.tipo === 'entrenamiento' ? 'bg-blue-500' : 'bg-green-500'
                }`}></div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-gray-800">
                      {new Date(evento.fecha).getDate()} de Marzo
                    </span>
                    {evento.hora && (
                      <span className="text-gray-600">{evento.hora}</span>
                    )}
                  </div>
                  
                  {evento.tipo === 'partido' ? (
                    <div>
                      <span className="text-gray-800 font-medium">U. de Chile vs {evento.rival}</span>
                      <span className="text-gray-600 ml-2">- {evento.competicion}</span>
                    </div>
                  ) : (
                    <span className="text-gray-800">{evento.descripcion}</span>
                  )}
                </div>

                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  evento.tipo === 'partido' ? 'bg-red-100 text-red-800' :
                  evento.tipo === 'entrenamiento' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }`}>
                  {evento.tipo === 'partido' ? 'Partido' : 
                   evento.tipo === 'entrenamiento' ? 'Entrenamiento' : 'Reunión'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}