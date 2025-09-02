import { ApiProperty } from '@nestjs/swagger';

export class UpdateReservaDto {
  @ApiProperty({ default: 'Cancelada' })
  estado: string;
}
