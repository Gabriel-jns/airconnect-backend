import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AeropuertosModule } from './aeropuertos/aeropuertos.module';
import { PasajerosModule } from './pasajeros/pasajeros.module';
import { VuelosModule } from './vuelos/vuelos.module';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [AeropuertosModule, PasajerosModule, VuelosModule, ReservasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
