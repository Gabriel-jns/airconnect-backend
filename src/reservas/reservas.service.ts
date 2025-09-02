import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { VuelosService } from 'src/vuelos/vuelos.service';
import { PasajerosService } from 'src/pasajeros/pasajeros.service';
import { Reserva } from 'src/entities/reserva.entity';

@Injectable()
export class ReservasService {
  reservas: Reserva[] = [];

  constructor(
    private readonly vuelosService: VuelosService,
    private readonly pasajerosService: PasajerosService,
  ) {}

  create(createReservaDto: CreateReservaDto): Reserva {
    const vuelo = this.vuelosService.findOne(createReservaDto.vueloId);
    if (!vuelo) {
      throw new NotFoundException(
        `Vuelo con id: ${createReservaDto.vueloId} no encontrado`,
      );
    }
    const pasajero = this.pasajerosService.findOne(
      createReservaDto.pasajero.id,
    );
    if (!pasajero) {
      throw new NotFoundException(
        `Pasajero con id: ${createReservaDto.pasajero.id} no encontrado`,
      );
    }
    const reserva = this.reservas.find(
      (reserva: Reserva) =>
        reserva.codigoReserva === createReservaDto.codigoReserva,
    );
    if (reserva) {
      throw new BadRequestException(
        `La reserva con codigo: ${createReservaDto.codigoReserva} ya fue registrada`,
      );
    }
    const nuevaReserva = new Reserva(
      this.reservas.length + 1,
      createReservaDto.codigoReserva,
      new Date(),
      createReservaDto.estado,
      createReservaDto.pasajero,
      createReservaDto.vueloId,
    );
    this.reservas.push(nuevaReserva);
    return nuevaReserva;
  }

  findAll(pasajeroId?: number): Reserva[] {
    if (pasajeroId) {
      const reservasPasajero = this.reservas.filter(
        (reserva: Reserva) => reserva.pasajero.id === pasajeroId,
      );
      console.log(reservasPasajero);
      return reservasPasajero;
    }
    return this.reservas;
  }

  findOne(idReserva: number): Reserva {
    const reserva = this.reservas.find(
      (reserva: Reserva) => reserva.id === idReserva,
    );
    if (!reserva) {
      throw new NotFoundException(
        `La reserva con id: ${idReserva} no fue encontrada`,
      );
    }
    return reserva;
  }

  update(idReserva: number, updateReservaDto: UpdateReservaDto): Reserva {
    const reserva = this.findOne(idReserva);
    if (!reserva) {
      throw new NotFoundException(
        `La reserva con id: ${idReserva} no fue encontrada`,
      );
    }
    reserva.estado = updateReservaDto.estado;
    return reserva;
  }

  remove(idReserva: number) {
    const reserva = this.findOne(idReserva);
    if (!reserva) {
      throw new NotFoundException(
        `La reserva con id: ${idReserva} no fue encontrada`,
      );
    }
    return this.reservas.filter((reserva: Reserva) => reserva.id !== idReserva);
  }
}
