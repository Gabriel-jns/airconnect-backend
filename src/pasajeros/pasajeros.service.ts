import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
//import { UpdatePasajeroDto } from './dto/update-pasajero.dto';
import { Pasajero } from 'src/entities/pasajero.entity';

@Injectable()
export class PasajerosService {
  pasajeros: Pasajero[] = [
    new Pasajero(1, 'pasajero1', 'apellido1', 'ejemplo1@email.com'),
  ];

  create(createPasajeroDto: CreatePasajeroDto): Pasajero {
    const pasajero = this.pasajeros.find(
      (pasajero: Pasajero) => pasajero.email === createPasajeroDto.email,
    );
    if (pasajero) {
      throw new BadRequestException(
        `Ya existe un pasajero con el email ${createPasajeroDto.email}`,
      );
    }
    const nuevoPasajero = new Pasajero(
      this.pasajeros.length + 1,
      createPasajeroDto.nombre,
      createPasajeroDto.apellido,
      createPasajeroDto.email,
    );
    this.pasajeros.push(nuevoPasajero);
    return nuevoPasajero;
  }

  findAll(): Pasajero[] {
    return this.pasajeros;
  }

  findOne(idPasajero: number): Pasajero {
    const pasajero = this.pasajeros.find(
      (pasajero: Pasajero) => pasajero.id === idPasajero,
    );
    if (!pasajero) {
      throw new NotFoundException(
        `Pasajero con id: ${idPasajero} no encontrado`,
      );
    }
    return pasajero;
  }

  //update(id: number, updatePasajeroDto: UpdatePasajeroDto) {
  //  return `This action updates a #${id} pasajero`;
  //}

  remove(idPasajero: number): Pasajero[] {
    const pasajero = this.findOne(idPasajero);
    if (!pasajero) {
      throw new NotFoundException(
        `El pasajero con id: ${idPasajero} no fue encontrado`,
      );
    }
    return this.pasajeros.filter(
      (pasajero: Pasajero) => pasajero.id !== idPasajero,
    );
  }
}
