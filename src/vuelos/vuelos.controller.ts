import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  //Delete,
  Query,
} from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('vuelos')
export class VuelosController {
  constructor(private readonly vuelosService: VuelosService) {}

  @ApiOperation({ summary: 'Registrar un vuelo' })
  @ApiResponse({ status: 201, description: 'Vuelo registrado exitosamente' })
  @ApiResponse({ status: 400, description: 'El vuelo ya fue registrado' })
  @ApiResponse({
    status: 404,
    description: 'Aeropuerto de origen no encontrado',
  })
  @ApiResponse({
    status: 404,
    description: 'Aeropuerto de destino no encontrado',
  })
  @Post()
  create(@Body() createVueloDto: CreateVueloDto) {
    return this.vuelosService.create(createVueloDto);
  }

  @ApiOperation({
    summary:
      'Muestra todos los vuelos, además filtra por codigo de origen y estado del vuelo',
  })
  @ApiResponse({
    status: 200,
    description:
      'Datos de todos los vuelos registrados, ya sea por su codigo de origen o estado',
  })
  @ApiQuery({ name: 'codigoOrigen', required: false })
  @ApiQuery({ name: 'estado', required: false })
  @Get()
  findAll(
    @Query('codigoOrigen') codigoOrigen: string,
    @Query('estado') estado: string,
  ) {
    return this.vuelosService.findAll(codigoOrigen, estado);
  }

  @ApiOperation({ summary: 'Muestra un vuelo según su id' })
  @ApiResponse({ status: 200, description: 'Datos del vuelo' })
  @ApiResponse({ status: 404, description: 'Vuelo no encontrado' })
  @Get(':idVuelo')
  findOne(@Param('idVuelo') idVuelo: string) {
    return this.vuelosService.findOne(Number(idVuelo));
  }

  @ApiOperation({ summary: 'Modifica el estado de un vuelo' })
  @ApiResponse({
    status: 200,
    description: 'El estado del vuelo fue modificado exitosamente',
  })
  @ApiResponse({ status: 404, description: 'El vuelo no fue encontrado' })
  @Patch(':idVuelo')
  update(
    @Param('idVuelo') idVuelo: string,
    @Body() updateVueloDto: UpdateVueloDto,
  ) {
    return this.vuelosService.update(Number(idVuelo), updateVueloDto);
  }

  //@Delete(':id')
  //remove(@Param('id') id: string) {
  //  return this.vuelosService.remove(+id);
  //}
}
