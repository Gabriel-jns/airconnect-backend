import { Module } from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';
import { PasajerosController } from './pasajeros.controller';

@Module({
  controllers: [PasajerosController],
  providers: [PasajerosService],
  exports: [PasajerosService],
})
export class PasajerosModule {}
