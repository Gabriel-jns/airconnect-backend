import { Pasajero } from './pasajero.entity';

export class Reserva {
  id: number;
  codigoReserva: string;
  fechaReserva: Date;
  estado: string;
  pasajero: Pasajero;
  vueloId: number;

  constructor(
    id: number,
    codigoReserva: string,
    fechaReserva: Date,
    estado: string,
    pasajero: Pasajero,
    vueloId: number,
  ) {
    this.id = id;
    this.codigoReserva = codigoReserva;
    this.fechaReserva = fechaReserva;
    this.estado = estado;
    this.pasajero = pasajero;
    this.vueloId = vueloId;
  }
}
