import { ApiProperty } from '@nestjs/swagger';
import { Pasajero } from 'src/entities/pasajero.entity';

export class CreateReservaDto {
  @ApiProperty({ default: 'XYZ123' })
  codigoReserva: string;

  fechaReserva: Date;
  @ApiProperty({ default: 'Confirmada' })
  estado: string;
  @ApiProperty({
    default: new Pasajero(1, 'pasajero1', 'apellido1', 'ejemplo1@email.com'),
  })
  pasajero: Pasajero;

  @ApiProperty({ default: 1, description: 'identificador unico del vuelo' })
  vueloId: number;
}
