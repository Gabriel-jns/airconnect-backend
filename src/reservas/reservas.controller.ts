import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @ApiOperation({ summary: 'Registrar una reserva' })
  @ApiResponse({
    status: 201,
    description: 'La reserva fue  registrada  exitosamente',
  })
  @ApiResponse({ status: 404, description: 'El vuelo no fue encontrado' })
  @ApiResponse({ status: 404, description: 'El pasajero no fue encontrado' })
  @ApiResponse({ status: 400, description: 'La reserva ya fue registrada' })
  @Post()
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservasService.create(createReservaDto);
  }

  @ApiOperation({
    summary:
      'Muestra todas las reservas,además filtra las reservas de acuerdo a un pasajero',
  })
  @ApiResponse({
    status: 200,
    description:
      'Datos de todas las reservas  registradas y de todas las reservas asociadas a un pasajero',
  })
  @ApiQuery({ name: 'pasajeroId', required: false })
  @Get()
  findAll(@Query('pasajeroId') pasajeroId: string) {
    return this.reservasService.findAll(Number(pasajeroId));
  }

  @ApiOperation({ summary: 'Muestra una reserva según su id' })
  @ApiResponse({ status: 200, description: 'Datos de la reserva' })
  @ApiResponse({ status: 404, description: 'La reserva no fue encontrada' })
  @Get(':idReserva')
  findOne(@Param('idReserva') idReserva: string) {
    return this.reservasService.findOne(Number(idReserva));
  }

  @ApiOperation({ summary: 'Modifica una reserva según su id' })
  @ApiResponse({ status: 200, description: 'La reserva fue modificada' })
  @ApiResponse({ status: 404, description: 'La reserva no fue encontrada' })
  @Patch(':idReserva')
  update(
    @Param('idReserva') idReserva: string,
    @Body() updateReservaDto: UpdateReservaDto,
  ) {
    return this.reservasService.update(Number(idReserva), updateReservaDto);
  }

  @ApiOperation({ summary: 'Eliminar un reserva' })
  @ApiResponse({
    status: 200,
    description: 'La reserva fue eliminada exitosamente',
  })
  @ApiResponse({ status: 404, description: 'La reserva no fue encontrada' })
  @Delete(':idReserva')
  remove(@Param('idReserva') idReserva: string) {
    return this.reservasService.remove(Number(idReserva));
  }
}
