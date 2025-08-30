import {
  Controller,
  Get,
  Post,
  Body,
  //Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
//import { UpdatePasajeroDto } from './dto/update-pasajero.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('pasajeros')
export class PasajerosController {
  constructor(private readonly pasajerosService: PasajerosService) {}

  @ApiOperation({ summary: 'Registrar un nuevo pasajero' })
  @ApiResponse({ status: 201, description: 'Pasajero registrado exitosamente' })
  @ApiResponse({ status: 400, description: 'El pasajero ya fue registrado' })
  @Post()
  create(@Body() createPasajeroDto: CreatePasajeroDto) {
    return this.pasajerosService.create(createPasajeroDto);
  }

  @ApiOperation({ summary: 'Obtener a todos los pasajeros' })
  @ApiResponse({
    status: 200,
    description: 'Datos de todos los pasajeros registrados',
  })
  @Get()
  findAll() {
    return this.pasajerosService.findAll();
  }
  @ApiOperation({ summary: 'Obtener un pasajero por su id' })
  @ApiResponse({ status: 200, description: 'Datos del pasajero' })
  @ApiResponse({ status: 404, description: 'Pasajero no encontrado' })
  @Get(':idPasajero')
  findOne(@Param('idPasajero') idPasajero: string) {
    return this.pasajerosService.findOne(Number(idPasajero));
  }

  //@Patch(':id')
  //update(
  //  @Param('id') id: string,
  //  @Body() updatePasajeroDto: UpdatePasajeroDto,
  //) {
  //  return this.pasajerosService.update(+id, updatePasajeroDto);
  //}

  @ApiOperation({ summary: 'Eliminar un pasajero según su id' })
  @ApiResponse({ status: 200, description: 'Pasajero eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Pasajero no encontrado' })
  @Delete(':idPasajero')
  remove(@Param('idPasajero') idPasajero: string) {
    return this.pasajerosService.remove(Number(idPasajero));
  }
}
