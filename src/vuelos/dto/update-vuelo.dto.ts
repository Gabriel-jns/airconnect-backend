import { ApiProperty } from '@nestjs/swagger';

export class UpdateVueloDto {
  @ApiProperty({ default: 'En vuelo' })
  estado: string;
}
