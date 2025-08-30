import { ApiProperty } from '@nestjs/swagger';

export class CreatePasajeroDto {
  @ApiProperty({ default: 'pasajero2' })
  nombre: string;
  @ApiProperty({ default: 'apellido2' })
  apellido: string;
  @ApiProperty({ default: 'ejemplo2@mail.com' })
  email: string;
}
