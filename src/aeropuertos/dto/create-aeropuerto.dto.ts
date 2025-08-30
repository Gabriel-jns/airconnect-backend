import { ApiProperty } from '@nestjs/swagger';

export class CreateAeropuertoDto {
  @ApiProperty({ default: 'Aeropuerto' })
  nombre: string;
  @ApiProperty({ default: 'LZT' })
  codigo: string; // codigo IATA de tres lestras
  @ApiProperty({ default: 'Santiago' })
  ciudad: string;
}
