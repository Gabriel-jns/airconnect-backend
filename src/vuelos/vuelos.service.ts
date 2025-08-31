import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';
import { Vuelo } from 'src/entities/vuelo.entity';
import { AeropuertosService } from 'src/aeropuertos/aeropuertos.service';

@Injectable()
export class VuelosService {
  vuelos: Vuelo[];

  constructor(private readonly aeropuertosService: AeropuertosService) {
    this.vuelos = [
      new Vuelo(
        1,
        'PZ403',
        new Date(),
        12,
        this.aeropuertosService.aeropuertos[0],
        this.aeropuertosService.aeropuertos[1],
        'programado',
      ),
    ];
  }

  create(createVueloDto: CreateVueloDto): Vuelo {
    const vuelo = this.vuelos.find(
      (vuelo: Vuelo) => vuelo.numeroVuelo === createVueloDto.numeroVuelo,
    );
    if (vuelo) {
      throw new BadRequestException(
        `El vuelo con numero: ${createVueloDto.numeroVuelo} ya fue registrado`,
      );
    }
    const aeropuertoOrigen = this.aeropuertosService.findOne(
      createVueloDto.origen.id,
    );
    if (!aeropuertoOrigen) {
      throw new NotFoundException(
        `El aeropuerto de origen con id: ${createVueloDto.origen.id} no fue encontrado`,
      );
    }
    const aeropuertoDestino = this.aeropuertosService.findOne(
      createVueloDto.destino.id,
    );
    if (!aeropuertoDestino) {
      throw new NotFoundException(
        `El aeropuerto de destino con id: ${createVueloDto.destino.id} no fue encontrado`,
      );
    }
    const nuevoVuelo = new Vuelo(
      this.vuelos.length + 1,
      createVueloDto.numeroVuelo,
      new Date(),
      createVueloDto.duracionEstimada,
      createVueloDto.origen,
      createVueloDto.destino,
      createVueloDto.estado,
    );
    this.vuelos.push(nuevoVuelo);
    return nuevoVuelo;
  }

  findAll(codigoOrigen?: string, estado?: string): Vuelo[] {
    if (codigoOrigen) {
      return this.vuelos.filter(
        (vuelo: Vuelo) => vuelo.origen.codigo === codigoOrigen,
      );
    }
    if (estado) {
      return this.vuelos.filter((vuelo: Vuelo) => vuelo.estado === estado);
    }

    return this.vuelos;
  }

  findOne(idVuelo: number) {
    const vuelo = this.vuelos.find((vuelo: Vuelo) => vuelo.id === idVuelo);
    if (!vuelo) {
      throw new NotFoundException(
        `El vuelo con id:${idVuelo} no fue encontrado`,
      );
    }
    return vuelo;
  }

  update(idVuelo: number, updateVueloDto: UpdateVueloDto) {
    const vuelo = this.findOne(idVuelo);
    if (!vuelo) {
      throw new NotFoundException(`Vuelo con id: ${idVuelo} no encontrado`);
    }
    vuelo.estado = updateVueloDto.estado;
    return vuelo;
  }

  //remove(id: number) {
  //  return `This action removes a #${id} vuelo`;
  //}
}
