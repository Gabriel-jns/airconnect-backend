import { Aeropuerto } from './arepuerto.entity';

export class Vuelo {
  id: number;
  numeroVuelo: string;
  fechaSalida: Date;
  duracionEstimada: number;
  origen: Aeropuerto;
  destino: Aeropuerto;
  estado: string;

  constructor(
    id: number,
    numeroVuelo: string,
    fechaSalida: Date,
    duracionEstimada: number,
    origen: Aeropuerto,
    destino: Aeropuerto,
    estado: string,
  ) {
    this.id = id;
    this.numeroVuelo = numeroVuelo;
    this.fechaSalida = fechaSalida;
    this.duracionEstimada = duracionEstimada;
    this.origen = origen;
    this.destino = destino;
    this.estado = estado;
  }
}
