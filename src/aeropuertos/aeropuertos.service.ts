import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAeropuertoDto } from './dto/create-aeropuerto.dto';
//import { UpdateAeropuertoDto } from './dto/update-aeropuerto.dto';
import { Aeropuerto } from 'src/entities/arepuerto.entity';

@Injectable()
export class AeropuertosService {
  aeropuertos: Aeropuerto[] = [
    new Aeropuerto(1, 'Aeropuerto1', 'ABC', 'Ciudad1'),
    new Aeropuerto(2, 'Aeropuerto2', 'DEF', 'Ciudad2'),
  ];

  create(createAeropuertoDto: CreateAeropuertoDto): Aeropuerto {
    const aeropuerto = this.aeropuertos.find(
      (aeropuerto: Aeropuerto) =>
        aeropuerto.nombre === createAeropuertoDto.nombre,
    );
    if (aeropuerto) {
      throw new BadRequestException(
        `El aeropuerto con nombre: ${createAeropuertoDto.nombre} ya existe`,
      );
    }
    const nuevoAeropuerto = new Aeropuerto(
      this.aeropuertos.length + 1,
      createAeropuertoDto.nombre,
      createAeropuertoDto.codigo,
      createAeropuertoDto.ciudad,
    );
    this.aeropuertos.push(nuevoAeropuerto);
    return nuevoAeropuerto;
  }

  findAll(): Aeropuerto[] {
    return this.aeropuertos;
  }

  findOne(idAeropuerto: number): Aeropuerto {
    const aeropuerto = this.aeropuertos.find(
      (aeropuerto: Aeropuerto) => aeropuerto.id === idAeropuerto,
    );
    if (!aeropuerto) {
      throw new NotFoundException(
        `El aeropuerto con id: ${idAeropuerto} no fue encontrado`,
      );
    }
    return aeropuerto;
  }

  //update(id: number, updateAeropuertoDto: UpdateAeropuertoDto) {
  //  return `This action updates a #${id} aeropuerto`;
  //}

  //remove(id: number) {
  //  return `This action removes a #${id} aeropuerto`;
  //}
}
