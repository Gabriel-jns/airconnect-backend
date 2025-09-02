import { Module } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { VuelosModule } from 'src/vuelos/vuelos.module';

import { PasajerosModule } from 'src/pasajeros/pasajeros.module';

@Module({
  controllers: [ReservasController],
  providers: [ReservasService],
  imports: [VuelosModule, PasajerosModule],
})
export class ReservasModule {}
