import { ApiProperty } from '@nestjs/swagger';
import { Aeropuerto } from 'src/entities/arepuerto.entity';

export class CreateVueloDto {
  @ApiProperty({ default: 'LA401', description: 'Numero unico del vuelo' })
  numeroVuelo: string;
  @ApiProperty({ default: 10 })
  duracionEstimada: number;
  @ApiProperty({
    default: 'SCL',
    description: 'codigo IATA del aeropuerto de origen',
  })
  codigoOrigen: string; // codigo de aeropuerto

  @ApiProperty({
    default: 'RFT',
    description: 'codigo IATA del aeropuerto de destino',
  })
  codigoDestino: string; // codigo de aeropuerto
  @ApiProperty({
    default: new Aeropuerto(0, 'Aeropuerto ejemplo', 'PBA', 'Ciudad ejemplo'),
    description: 'aeropuerto de origen',
  })
  origen: Aeropuerto;
  @ApiProperty({
    default: new Aeropuerto(0, 'Aeropuerto ejemplo', 'PBA', 'Ciudad ejemplo'),
    description: 'aeropuerto de destino',
  })
  destino: Aeropuerto;
  @ApiProperty({ default: 'Programado', description: 'estado del vuelo' })
  estado: string;
}
