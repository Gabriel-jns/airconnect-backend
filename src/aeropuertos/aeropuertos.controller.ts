import {
  Controller,
  Get,
  Post,
  Body,
  //Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { AeropuertosService } from './aeropuertos.service';
import { CreateAeropuertoDto } from './dto/create-aeropuerto.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
//import { UpdateAeropuertoDto } from './dto/update-aeropuerto.dto';

@Controller('aeropuertos')
export class AeropuertosController {
  constructor(private readonly aeropuertosService: AeropuertosService) {}

  @ApiOperation({ summary: 'Registrar un aeropuerto' })
  @ApiResponse({ status: 201, description: 'Arepuerto creado exitosamente' })
  @ApiResponse({ status: 400, description: 'El arepuerto ya fue registrado' })
  @Post()
  create(@Body() createAeropuertoDto: CreateAeropuertoDto) {
    return this.aeropuertosService.create(createAeropuertoDto);
  }

  @ApiOperation({ summary: 'Obtener todos los arepuertos' })
  @ApiResponse({
    status: 200,
    description: 'Datos de todos los aeropuertos registrados',
  })
  @Get()
  findAll() {
    return this.aeropuertosService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un arepuerto por su id' })
  @ApiResponse({ status: 200, description: 'Datos del aeropuerto' })
  @ApiResponse({ status: 404, description: 'Aeropuerto no registrado' })
  @Get(':idAeropuerto')
  findOne(@Param('idAeropuerto') idAeropuerto: string) {
    return this.aeropuertosService.findOne(Number(idAeropuerto));
  }

  //@Patch(':id')
  //update(
  //  @Param('id') id: string,
  //  @Body() updateAeropuertoDto: UpdateAeropuertoDto,
  //) {
  //  return this.aeropuertosService.update(+id, updateAeropuertoDto);
  //}

  //@Delete(':id')
  //remove(@Param('id') id: string) {
  //  return this.aeropuertosService.remove(+id);
  //}
}
