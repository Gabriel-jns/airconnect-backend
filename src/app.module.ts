import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AeropuertosModule } from './aeropuertos/aeropuertos.module';
import { PasajerosModule } from './pasajeros/pasajeros.module';

@Module({
  imports: [AeropuertosModule, PasajerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
