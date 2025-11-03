// src/app/(public)/jugadores/[id]/components/ContractInfo/ContractInfo.tsx
import { contracts } from '@/generated/prisma/client'

interface ContractInfoProps {
  contratoActual: contracts | undefined
  formatCurrency: (amount: number | null, currency?: string) => string
}

export function ContractInfo({ contratoActual, formatCurrency }: ContractInfoProps) {
  if (!contratoActual) {
    return null
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">Información del Contrato</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
          <span className="text-gray-600">Salario</span>
          <span className="font-semibold">
            {formatCurrency(contratoActual.salary ? contratoActual.salary.toNumber(): 0, contratoActual.currency || 'EUR')}
          </span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
          <span className="text-gray-600">Fecha de inicio</span>
          <span className="font-semibold">
            {new Date(contratoActual.start_date).toLocaleDateString('es-ES')}
          </span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
          <span className="text-gray-600">Fecha de fin</span>
          <span className="font-semibold">
            {new Date(contratoActual.end_date).toLocaleDateString('es-ES')}
          </span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
          <span className="text-gray-600">Tipo de contrato</span>
          <span className="font-semibold">{contratoActual.contract_type || 'No especificado'}</span>
        </div>
      </div>
    </div>
  )
}