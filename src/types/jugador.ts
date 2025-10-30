// types/jugador.ts
export interface JugadorDetalle {
  id: number;
  nombre: string;
  posicion: string;
  numero: number;
  equipo: string;
  nacionalidad: string;
  edad: number;
  altura: string;
  peso: string;
  piePreferido: string;
  fechaNacimiento: string;
  valorMercado: string;
  imagen?: string;
  biografia: string;
  
  estadisticas: {
    partidos: number;
    goles: number;
    asistencias: number;
    rating: number;
    minutosJugados: number;
    tarjetasAmarillas: number;
    tarjetasRojas: number;
    promedioPases: number;
    precisionPases: number;
    promedioTiros: number;
    precisionTiros: number;
    promedioRegates: number;
    exitosoRegates: number;
    promedioTackles: number;
    exitosoTackles: number;
    promedioIntercepciones: number;
  };

  contrato: {
    salario: string;
    fechaInicio: string;
    fechaFin: string;
    clausula: string;
  };

  historialPartidos: Array<{
    id: number;
    fecha: string;
    rival: string;
    resultado: string;
    goles: number;
    asistencias: number;
    rating: number;
  }>;
}

export interface FiltrosJugadores {
  posicion: string;
  busqueda: string;
}